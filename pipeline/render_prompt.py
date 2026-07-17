#!/usr/bin/env python3
# render_prompt.py <meta_json_string> <transcript_path>
#   analyze_prompt.txt 의 {{...}} 자리표시자를 실제 값으로 치환해 stdout 출력.
import json, sys, os

HERE = os.path.dirname(os.path.abspath(__file__))
TPL = os.path.join(HERE, "analyze_prompt.txt")

meta = json.loads(sys.argv[1])
transcript = open(sys.argv[2], encoding="utf-8").read().strip()

dt = meta.get("date") or ""
refdate = f"{dt[0:4]}-{dt[4:6]}-{dt[6:8]}" if len(dt) == 8 else ""
# duration 이 초단위 숫자면 mm:ss 로
dur = meta.get("duration") or ""
try:
    s = int(float(dur)); dur = f"{s//60}:{s%60:02d}"
except (ValueError, TypeError):
    pass

tpl = open(TPL, encoding="utf-8").read()
repl = {
    "{{VIDEO_ID}}": meta.get("id", ""),
    "{{TITLE}}":    meta.get("title", ""),
    "{{CHANNEL}}":  meta.get("channel", ""),
    "{{DURATION}}": dur,
    "{{REFDATE}}":  refdate,
    "{{TRANSCRIPT}}": transcript,
}
for k, v in repl.items():
    tpl = tpl.replace(k, str(v))
sys.stdout.write(tpl)
