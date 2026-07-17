#!/usr/bin/env python3
# extract_json.py <raw_text_file>
#   Claude 응답에서 유효한 JSON 객체 1개를 뽑아 stdout 으로. 실패 시 exit 1.
import json, sys, re

raw = open(sys.argv[1], encoding="utf-8").read().strip()

# ```json ... ``` 코드펜스 제거
raw = re.sub(r"^```(?:json)?\s*", "", raw)
raw = re.sub(r"\s*```$", "", raw)

# 첫 '{' 부터 마지막 '}' 까지 시도
start, end = raw.find("{"), raw.rfind("}")
if start == -1 or end == -1 or end < start:
    print("no JSON object found", file=sys.stderr); sys.exit(1)
candidate = raw[start:end+1]

try:
    obj = json.loads(candidate)
except json.JSONDecodeError as e:
    print(f"JSON parse error: {e}", file=sys.stderr); sys.exit(1)

# 필수 키 검증
for k in ("id", "categoryId", "title", "box1", "box2", "box3"):
    if k not in obj:
        print(f"필수 키 누락: {k}", file=sys.stderr); sys.exit(1)

json.dump(obj, sys.stdout, ensure_ascii=False, indent=2)
