#!/usr/bin/env python3
# =============================================================================
#  discover.py — 워치리스트에서 "새 영상"을 찾아 처리 대상 목록(JSON)을 만든다.
#  2단계 설계(속도 최적화):
#    ① flat-playlist 로 각 소스의 최신 영상 목록을 초고속 수집 (id·제목·길이)
#    ② 이미 처리했거나 너무 짧은 건 제외 → 남은 "후보"에만 날짜 메타데이터 조회
#       (probe 호출 수를 max_probe 로 제한해 실행시간 상한)
#  출력: stdout 에 JSON 배열 [{id,title,url,channel,duration,date}, ...]
# =============================================================================
import json, subprocess, sys, os, datetime as dt

HERE = os.path.dirname(os.path.abspath(__file__))
WATCH = os.environ.get("WATCHLIST") or os.path.join(HERE, "watchlist.json")
STATE = os.path.join(HERE, "state", "processed.json")

def load_json(path, default):
    try:
        with open(path) as f: return json.load(f)
    except FileNotFoundError:
        return default

def yt(args, timeout=60):
    try:
        out = subprocess.run(["yt-dlp", "--no-warnings", *args],
                             capture_output=True, text=True, timeout=timeout)
        return [l for l in out.stdout.splitlines() if l.strip()]
    except Exception as e:
        print(f"[discover] yt-dlp 오류({args[:2]}): {e}", file=sys.stderr)
        return []

def flat_list(source, limit):
    """①단계: flat-playlist 로 id·title·duration 초고속 수집 (newest-first)."""
    fmt = "%(id)s\t%(title)s\t%(duration)s"
    lines = yt(["--flat-playlist", "--playlist-end", str(limit), "--print", fmt, source])
    rows = []
    for ln in lines:
        p = ln.split("\t")
        if len(p) < 3 or not p[0]: continue
        rows.append({"id": p[0], "title": p[1], "duration": p[2]})
    return rows

def probe_date(vid):
    """②단계: 해당 영상의 업로드일(YYYYMMDD)과 채널명을 조회."""
    lines = yt(["--print", "%(upload_date)s\t%(channel)s\t%(duration)s",
                f"https://www.youtube.com/watch?v={vid}"], timeout=40)
    if not lines: return None
    p = lines[0].split("\t")
    return {"date": p[0] if p[0] != "NA" else "",
            "channel": p[1] if len(p) > 1 else "",
            "duration": p[2] if len(p) > 2 else ""}

def main():
    wl = load_json(WATCH, {})
    processed = set(load_json(STATE, {}).get("ids", []))
    since_h  = wl.get("since_hours", 30)
    min_dur  = wl.get("min_duration_sec", 300)
    max_day  = wl.get("max_per_day", 3)
    depth    = wl.get("scan_depth", 6)
    max_probe = wl.get("max_probe", max_day * 5)   # 날짜조회 호출 상한

    cutoff = (dt.datetime.now() - dt.timedelta(hours=since_h)).strftime("%Y%m%d")

    # ① flat 수집 (채널 먼저, 그다음 검색)
    candidates = []   # newest-first 순서 보존
    seen = set()
    sources = [(c if c.startswith("http") else f"https://www.youtube.com/{c}/videos")
               for c in wl.get("channels", [])]
    sources += [f"ytsearch{depth}:{q}" for q in wl.get("queries", [])]
    for src in sources:
        for r in flat_list(src, depth):
            if r["id"] in seen or r["id"] in processed: continue
            # 길이 필터 (flat 이 duration 을 줄 때만)
            try:
                if r["duration"] and r["duration"] != "NA" and int(float(r["duration"])) < min_dur:
                    continue
            except ValueError:
                pass
            seen.add(r["id"]); candidates.append(r)

    # ② 후보에만 날짜 조회 (상한까지), since_h 통과분만 채택
    picked, probes = [], 0
    for r in candidates:
        if len(picked) >= max_day or probes >= max_probe: break
        probes += 1
        meta = probe_date(r["id"])
        if not meta: continue
        if meta["date"] and meta["date"] < cutoff: continue
        try:
            if meta["duration"] and int(float(meta["duration"])) < min_dur: continue
        except ValueError:
            pass
        picked.append({
            "id": r["id"], "title": r["title"],
            "url": f"https://www.youtube.com/watch?v={r['id']}",
            "channel": meta["channel"] or "", "duration": meta["duration"] or r["duration"],
            "date": meta["date"],
        })

    print(json.dumps(picked, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
