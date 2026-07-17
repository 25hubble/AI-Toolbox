#!/usr/bin/env python3
# =============================================================================
#  add_entry.py — Claude 가 만든 엔트리 JSON 을 data.js 의 entries 배열 맨 앞에 삽입.
#  - JSON 객체는 그대로 유효한 JS 객체 리터럴이므로 안전하게 주입 가능.
#  - 중복(id) 이면 삽입하지 않음.
#  usage:  add_entry.py <entry.json>
# =============================================================================
import json, sys, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(os.path.dirname(HERE), "data.js")

def main():
    entry_path = sys.argv[1]
    with open(entry_path, encoding="utf-8") as f:
        entry = json.load(f)
    vid = entry.get("id")
    if not vid:
        print("ERR: entry 에 id 없음", file=sys.stderr); sys.exit(1)

    src = open(DATA, encoding="utf-8").read()
    if f'"{vid}"' in src or f"id: \"{vid}\"" in src or f'id: "{vid}"' in src:
        print(f"SKIP: 이미 존재하는 id ({vid})"); return

    m = re.search(r"entries:\s*\[", src)
    if not m:
        print("ERR: data.js 에서 entries 배열을 못 찾음", file=sys.stderr); sys.exit(1)

    block = json.dumps(entry, ensure_ascii=False, indent=6)
    # 2칸 들여쓰기 맞춰 배열 첫 요소로 삽입
    insert = "\n    " + block + ",\n"
    pos = m.end()
    out = src[:pos] + insert + src[pos:]
    with open(DATA, "w", encoding="utf-8") as f:
        f.write(out)
    print(f"OK: {vid} 삽입 완료")

if __name__ == "__main__":
    main()
