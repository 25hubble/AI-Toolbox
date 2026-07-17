#!/usr/bin/env bash
# =============================================================================
#  fetch_transcript.sh  —  영상 ID/URL 하나를 받아 "전사본(plain text)"을 만든다.
#  전략:
#    1) 사람이 단 자막(수동) 있으면 그거 사용        (가장 정확)
#    2) 없으면 YouTube 자동 자막(ASR) 사용            (빠름·무료)
#    3) 그것도 없으면 → 오디오 다운로드 → whisper.cpp 로 STT   (← 자막 불필요)
#  결과: transcripts/<videoId>.txt  (표준출력으로도 파일 경로를 찍음)
# -----------------------------------------------------------------------------
#  usage:  ./fetch_transcript.sh <youtube_url_or_id>
# =============================================================================
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$HERE/.." && pwd)"
WORK="$ROOT/pipeline/work"           # 임시 오디오/자막 (git 무시)
OUT="$ROOT/pipeline/transcripts"     # 최종 전사본 (git 무시)
MODEL="/opt/homebrew/share/whisper-cpp/ggml-small.en.bin"
# 유튜브 오디오 스트림은 인증을 요구 → 로그인된 브라우저 쿠키 사용 (기본 chrome)
COOKIES_BROWSER="${YT_COOKIES_BROWSER:-chrome}"
mkdir -p "$WORK" "$OUT"

RAW="${1:?사용법: fetch_transcript.sh <youtube_url_or_id>}"
# URL이든 ID든 videoId 추출
VID="$(yt-dlp --no-warnings --print id "$RAW" 2>/dev/null | head -1)"
[ -z "$VID" ] && { echo "ERR: videoId 추출 실패: $RAW" >&2; exit 1; }
DEST="$OUT/$VID.txt"

if [ -s "$DEST" ]; then echo "$DEST"; exit 0; fi   # 이미 있으면 재사용

log(){ echo "[$VID] $*" >&2; }
STUB="$WORK/$VID"

# --- 1) & 2) 자막(수동→자동) 시도: vtt로 받아 텍스트만 뽑기 -------------------
log "자막 시도 (수동/자동)…"
yt-dlp --no-warnings --skip-download \
  --write-subs --write-auto-subs --sub-langs "en.*" --sub-format vtt \
  -o "$STUB.%(ext)s" "$RAW" >/dev/null 2>&1 || true

VTT="$(ls "$STUB"*.vtt 2>/dev/null | head -1 || true)"
if [ -n "${VTT:-}" ] && [ -s "$VTT" ]; then
  log "자막 발견 → 텍스트 변환"
  # vtt → 순수 텍스트: 타임스탬프/헤더/인라인 타이밍태그 제거 후 전역 중복제거
  #  (유튜브 자동자막은 롤링 창 때문에 같은 줄이 여러 번 반복됨 → !seen 으로 1회만)
  sed -E '/-->/d; /^WEBVTT/d; /^Kind:/d; /^Language:/d; /^[0-9]+$/d; s/<[^>]*>//g; s/&nbsp;/ /g' "$VTT" \
    | sed -E 's/^[[:space:]]+//; s/[[:space:]]+$//' \
    | awk 'NF && !seen[$0]++' > "$DEST"
  rm -f "$STUB"*.vtt
  echo "$DEST"; exit 0
fi

# --- 3) 자막 없음 → 오디오 다운로드 → whisper.cpp STT ------------------------
log "자막 없음 → 오디오 다운로드 후 Whisper STT"
[ -f "$MODEL" ] || { echo "ERR: whisper 모델 없음: $MODEL" >&2; exit 1; }

# whisper.cpp 는 16kHz mono wav 를 선호
yt-dlp --no-warnings --cookies-from-browser "$COOKIES_BROWSER" \
  -f "bestaudio/best" \
  -x --audio-format wav \
  --postprocessor-args "-ar 16000 -ac 1" \
  -o "$STUB.%(ext)s" "$RAW" >/dev/null 2>&1

WAV="$STUB.wav"
[ -s "$WAV" ] || { echo "ERR: 오디오 다운로드 실패" >&2; exit 1; }

log "STT 진행 중… (영상 길이에 비례)"
whisper-cli -m "$MODEL" -f "$WAV" -otxt -of "$STUB" -np -nt >/dev/null 2>&1

[ -s "$STUB.txt" ] || { echo "ERR: STT 결과 없음" >&2; exit 1; }
mv "$STUB.txt" "$DEST"
rm -f "$WAV"
echo "$DEST"
