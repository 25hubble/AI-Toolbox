#!/usr/bin/env bash
# backfill_en.sh — 기존 엔트리들의 한국어 본문을 영어(en)로 번역해 붙인다.
set -uo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$HERE/.." && pwd)"; cd "$ROOT"
export PATH="/opt/homebrew/bin:$HOME/.local/bin:$PATH"
mkdir -p pipeline/work/en

# 1) en 이 아직 없는 엔트리들을 KO 필드만 뽑아 개별 파일로 덤프
node -e "
global.window={};require('./data.js');
const fs=require('fs');
for(const e of window.DASHBOARD_DATA.entries){
  if(e.en) continue;
  const ko={title:e.title,subtitle:e.subtitle,moduleTag:e.moduleTag,takeaway:e.takeaway,
            box1:e.box1,box2:e.box2,box3:e.box3};
  fs.writeFileSync('pipeline/work/en/'+e.id+'.ko.json', JSON.stringify(ko,null,2));
  console.log('덤프:',e.id);
}
"
# 2) 각 KO 덤프를 영어로 번역 (en 결과가 이미 있으면 스킵)
for KO in pipeline/work/en/*.ko.json; do
  [ -e "$KO" ] || continue
  ID=$(basename "$KO" .ko.json)
  OUT="pipeline/work/en/$ID.json"
  [ -s "$OUT" ] && { echo "이미 있음: $ID"; continue; }
  echo "번역 중: $ID"
  PROMPT="다음은 한국어로 작성된 대시보드 분석 엔트리다. 이를 자연스럽고 전문적인 실무 영어로 번역하라.
오직 유효한 JSON 객체 1개만 출력한다(코드펜스/설명 금지). 키: title, subtitle, moduleTag, takeaway,
box1{title,html}, box2{title,html}, box3{title,html}. html 필드 안의 모든 HTML 태그와 표/리스트 구조는 그대로 유지하고 텍스트만 영어로. 기술용어/제품명은 영문 그대로.

$(cat "$KO")"
  claude -p "$PROMPT" < /dev/null > "pipeline/work/en/$ID.raw.txt" 2>>pipeline/logs/backfill_en.log
  python3 "$HERE/extract_json_generic.py" "pipeline/work/en/$ID.raw.txt" > "$OUT" 2>>pipeline/logs/backfill_en.log \
    && echo "  → en 저장: $ID" || echo "  → 실패: $ID"
done

# 3) data.js 재직렬화 (en 부착 + 카테고리/메타 en)
node "$HERE/reserialize_data.js"
