#!/usr/bin/env python3
# extract_json_generic.py <raw_text_file>
#   응답에서 유효한 JSON 객체 1개를 추출(필수키 검증 없음). 실패 시 exit 1.
import json, sys, re
raw = open(sys.argv[1], encoding="utf-8").read().strip()
raw = re.sub(r"^```(?:json)?\s*", "", raw)
raw = re.sub(r"\s*```$", "", raw)
s, e = raw.find("{"), raw.rfind("}")
if s == -1 or e == -1 or e < s:
    print("no JSON object", file=sys.stderr); sys.exit(1)
try:
    obj = json.loads(raw[s:e+1])
except json.JSONDecodeError as err:
    print(f"parse error: {err}", file=sys.stderr); sys.exit(1)
json.dump(obj, sys.stdout, ensure_ascii=False, indent=2)
