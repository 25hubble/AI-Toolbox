#!/usr/bin/env bash
# =============================================================================
#  daily_run.sh — 하루 1회 실행되는 자동 파이프라인.
#    탐지(discover) → 전사(fetch_transcript) → 분석(claude) → 삽입(add_entry)
#    → 상태갱신 → git commit & push
#  로그: pipeline/logs/<날짜>.log
# =============================================================================
set -uo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$HERE/.." && pwd)"
cd "$ROOT"
export PATH="/opt/homebrew/bin:/Users/e80-0162/.local/bin:$PATH"

DAY="$(date +%Y-%m-%d)"
LOG="$ROOT/pipeline/logs/$DAY.log"
mkdir -p "$ROOT/pipeline/logs" "$ROOT/pipeline/work"
exec > >(tee -a "$LOG") 2>&1
echo "===================== $(date '+%F %T') daily_run 시작 ====================="

# 1) 탐지
PICKED="$ROOT/pipeline/work/picked.json"
python3 "$HERE/discover.py" > "$PICKED" || { echo "discover 실패"; exit 1; }
N=$(python3 -c "import json;print(len(json.load(open('$PICKED'))))")
echo ">> 새 영상 $N 건 발견"
[ "$N" -eq 0 ] && { echo "처리할 새 영상 없음. 종료."; exit 0; }

ADDED=0
# 2~4) 각 영상 처리
for i in $(seq 0 $((N-1))); do
  VID=$(python3 -c "import json;print(json.load(open('$PICKED'))[$i]['id'])")
  META=$(python3 -c "import json;print(json.dumps(json.load(open('$PICKED'))[$i],ensure_ascii=False))")
  echo "----- [$((i+1))/$N] $VID -----"

  # 2) 전사
  TXT=$("$HERE/fetch_transcript.sh" "$VID" 2>>"$LOG") || { echo "전사 실패, 건너뜀"; continue; }
  echo "전사본: $TXT ($(wc -c < "$TXT")자)"

  # 3) 프롬프트 렌더 → claude 분석 → JSON 추출
  PROMPT="$ROOT/pipeline/work/$VID.prompt.txt"
  ENTRY="$ROOT/pipeline/work/$VID.entry.json"
  python3 "$HERE/render_prompt.py" "$META" "$TXT" > "$PROMPT" || { echo "프롬프트 렌더 실패"; continue; }

  echo "Claude 분석 중…"
  claude -p "$(cat "$PROMPT")" < /dev/null > "$ROOT/pipeline/work/$VID.raw.txt" 2>>"$LOG" || { echo "claude 실패"; continue; }
  # 코드펜스/잡텍스트 제거 후 첫 { … 마지막 } 만 추출
  python3 "$HERE/extract_json.py" "$ROOT/pipeline/work/$VID.raw.txt" > "$ENTRY" || { echo "JSON 추출 실패"; continue; }

  # 4) 삽입
  if python3 "$HERE/add_entry.py" "$ENTRY"; then
    ADDED=$((ADDED+1))
    echo "✅ 추가됨: $VID"
  fi
  # 처리 성공 여부와 무관하게 처리목록에 기록 → 다음날 무한재시도 방지
  #  (재시도 원하면 processed.json 에서 해당 id 를 지우면 됨)
  python3 - "$VID" <<'PY'
import json,sys
p='pipeline/state/processed.json'
s=json.load(open(p))
if sys.argv[1] not in s['ids']: s['ids'].append(sys.argv[1])
json.dump(s,open(p,'w'),ensure_ascii=False,indent=2)
PY
done

echo ">> 이번 실행 추가: $ADDED 건"
if [ -n "${NO_PUSH:-}" ]; then
  echo "NO_PUSH 설정됨 → git 커밋/푸시 생략 (작업트리 변경만 남김)"
  echo "===================== $(date '+%F %T') daily_run 종료(dry) ====================="
  exit 0
fi
# 5) 변경 있으면 커밋 & 푸시
if [ "$ADDED" -gt 0 ]; then
  git add data.js pipeline/state/processed.json
  git commit -m "auto: ${DAY} 신규 영상 ${ADDED}건 분석 추가" -m "Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
  git push origin main && echo "✅ push 완료 — GitHub Pages 반영됨"
fi
echo "===================== $(date '+%F %T') daily_run 종료 ====================="
