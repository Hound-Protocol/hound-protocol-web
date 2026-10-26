#!/usr/bin/env python3
"""Smoke test for the Documentation page. Opens the zone picker, both zones and every document in Chromium
(desktop and phone), and fails on any script error, empty page, or horizontal scroll.
Usage: python3 tests/docs_smoke.py        (serves this repository itself)"""
import functools, http.server, json, pathlib, sys, threading
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
srv = http.server.ThreadingHTTPServer(("127.0.0.1", 0), functools.partial(Quiet, directory=str(ROOT)))
threading.Thread(target=srv.serve_forever, daemon=True).start()
base = f"http://127.0.0.1:{srv.server_port}/docs.html"
ids = [d["id"] for d in json.loads((ROOT / "docs/index.json").read_text())["docs"]]
hb = ROOT / "docs/handbook.json"
if hb.exists(): ids += [d["id"] for d in json.loads(hb.read_text())["docs"]]
errors = []
with sync_playwright() as p:
    b = p.chromium.launch()
    for name, vp in (("desktop", {"width": 1400, "height": 900}), ("phone", {"width": 390, "height": 844})):
        pg = b.new_page(viewport=vp)
        pg.on("pageerror", lambda e, n=name: errors.append(f"{n}: script error {e}"))
        pg.goto(base); pg.wait_for_selector(".door")
        for z in ("library", "handbook"):
            pg.goto(f"{base}#{z}"); pg.wait_for_selector(".sheet .doc h1")
        for i in ids:
            pg.goto(f"{base}#{i}"); pg.wait_for_selector(".sheet .doc h1", timeout=5000)
            if not pg.inner_text(".sheet .doc").strip(): errors.append(f"{name}: {i} is empty")
            if pg.eval_on_selector("html", "e => e.scrollWidth - innerWidth") > 1: errors.append(f"{name}: {i} scrolls sideways")
        bad = pg.eval_on_selector_all(".doc a[href^='#']", "a => a.filter(x => !document.getElementById(decodeURIComponent(x.getAttribute('href').slice(1))) && !x.getAttribute('href').match(/^#[\\w-]+$/)).length")
        pg.close()
    b.close()
if errors: print("\n".join(errors)); sys.exit(1)
print(f"ok: picker, 2 zones and {len(ids)} documents on desktop and phone")
