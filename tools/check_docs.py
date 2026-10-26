#!/usr/bin/env python3
"""Check the organization Documentation (ADR 0021).
- Every document in docs/index.json and docs/handbook.json exists, and its metadata line matches the list.
- Every relative link in a document resolves to a file.
- No organization document names a single project's game, platform or tools.
  The allowed places are listed in ALLOW (a pointer page may name a project; this check file may name the words).
Usage: python3 tools/check_docs.py"""
import json, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
BAD = re.compile(r"MGSV|Metal Gear|Konami|Phantom Pain|Fox Engine|Mother Base|Infinite Heaven|IHHook|FoxBrowser|Proton|Bazzite|Steamworks|FOB|joint-operations-web|Joint-Operations|Joint Operations", re.I)
# files that may name a project, with the reason
ALLOW = {
    "docs/projects.md": "pointer page",
    "docs/decisions/0021-organization-and-project-documents.md": "explains the split",
    "docs/handbook/HP-GDE-021-project-documentation.md": "says where tools live today",
    "docs/brand.md": "says where the mark was drawn",
}
errs = []
idx = json.loads((ROOT / "docs/index.json").read_text(encoding="utf-8"))
hb = json.loads((ROOT / "docs/handbook.json").read_text(encoding="utf-8"))
docs = idx["docs"] + hb["docs"]
ids = [d["id"] for d in docs]
for i in set(ids):
    if ids.count(i) > 1: errs.append(f"duplicate id {i}")
paths = {d["path"] for d in docs}
for f in (ROOT / "docs").rglob("*.md"):
    rel = f.relative_to(ROOT).as_posix()
    if rel not in paths: errs.append(f"{rel} is not listed in index.json or handbook.json")
meta = re.compile(r"^Code: (HP-\w+-\d+) · Version ([\d.]+) · Effective ([\d-]+) · Owner: ([^·]+?) · (?:Applies to|Used by|For): ")
for d in docs:
    f = ROOT / d["path"]
    if not f.exists(): errs.append(f"missing file {d['path']}"); continue
    text = f.read_text(encoding="utf-8")
    if d["path"] not in ALLOW:
        for n, line in enumerate(text.split("\n"), 1):
            m = BAD.search(line)
            if m: errs.append(f"{d['path']}:{n} names a single project ({m.group(0)})")
    for _, href in re.findall(r"\[([^\]]*)\]\(([^)\s]+)\)", text):
        if re.match(r"^[a-z]+:", href, re.I) or href.startswith("#"): continue
        target = (f.parent / href.split("#")[0]).resolve()
        if not target.exists(): errs.append(f"{d['path']}: broken link {href}")
    if "code" in d:  # handbook: metadata line must match the list
        m = meta.match(text.split("\n")[1])
        if not m: errs.append(f"{d['path']}: metadata line missing or malformed"); continue
        code, ver, eff, owner = m.groups()
        if (code, ver, eff, owner.strip()) != (d["code"], d["version"], d["effective"], d["owner"]):
            errs.append(f"{d['path']}: metadata line differs from handbook.json")
if errs:
    print("\n".join(errs)); sys.exit(1)
print(f"ok: {len(docs)} documents, links resolve, no single-project terms outside {len(ALLOW)} allowed pages")
