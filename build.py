#!/usr/bin/env python3
"""Write index.html for the Hound Protocol site, with the logo inlined so it can animate.

The logo geometry comes from the Joint Operations repository (tools/brand/logos.py), so both
sites always use the same mark. Usage: python3 build.py [PATH_TO_JOINT_OPERATIONS_REPO]
"""
import pathlib, sys

HERE = pathlib.Path(__file__).resolve().parent
JO = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else HERE.parent / "Joint-Operations").resolve()
sys.path.insert(0, str(JO / "tools/brand"))
import logos  # noqa: E402

W, R, K = logos.WHITE, logos.RED, logos.INK
slash = logos._poly([(14, 176), (170, 16), (198, 16), (42, 176)], R)
face = logos.hound_face(W, R, K, s=0.9, tx=10, ty=8)
mark = f'<svg viewBox="0 0 200 200" aria-hidden="true">{slash}{face}</svg>'
boot_mark = f'<svg class="b-mark" viewBox="0 0 200 200" aria-hidden="true"><g class="b-slash">{slash}</g><g class="b-face">{face}</g></svg>'
hero_mark = f'<svg viewBox="0 0 200 200" role="img" aria-label="Hound Protocol"><g class="slash">{slash}</g>{face}</svg>'

page = (HERE / "index.template.html").read_text(encoding="utf-8")
page = page.replace("{{MARK}}", mark).replace("{{BOOT_MARK}}", boot_mark).replace("{{HERO_MARK}}", hero_mark)
(HERE / "index.html").write_text(page, encoding="utf-8")
(HERE / "assets/img/favicon.svg").write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect width="200" height="200" rx="30" fill="{K}"/>{slash}{face}</svg>\n', encoding="utf-8")
print("Wrote index.html and assets/img/favicon.svg")
