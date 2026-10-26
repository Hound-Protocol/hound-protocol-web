# Hound Protocol

The website of Hound Protocol, a community-focused organization that builds ambitious projects: AFTERHAUL, an offroad trucking game for up to 8 players and our first major project, and two multiplayer mods, [Joint Operations](https://hound-protocol.github.io/joint-operations-web/) and Lost Planet 2 Multiplayer (planned).

It also holds the **organization-wide documentation** (`docs/`), shown on the Documentation page (`docs.html`) in two zones, laid out like the Joint Operations Documentation:
- **Library**: start here, projects, glossary, team, governance, departments, code of conduct, brand and the decisions that apply to every project.
- **Handbook**: the policies (HP-POL), procedures (HP-SOP) and guides (HP-GDE) that apply to every project, printable on A4.

Each project keeps its own documentation; Joint Operations' is in [Joint-Operations](https://github.com/Hound-Protocol/Joint-Operations).

Live at https://hound-protocol.github.io/hound-protocol-web/

## Editing
- Edit `index.template.html`, `docs.template.html`, `assets/css/hp.css`, `assets/js/hp.js` and `assets/js/docs.js`.
- Library documents: edit the Markdown in `docs/`, and list new ones in `docs/index.json` (zone, drawer, file order). A drawer's number prefix (ORG, ADR, ORI) comes from `groups`.
- Handbook documents are **copies**. The source is `docs/guides/` in the Joint-Operations repository. Change them there, then run `python3 tools/sync_handbook.py ../Joint-Operations`, which rewrites `docs/handbook/` and `docs/handbook.json`. Guides about the mod itself stay with the mod.
- Test the Documentation page: `python3 tests/docs_smoke.py` (Chromium; opens every document on desktop and phone).
- Look: `assets/css/docs.css`. It reuses the site's colours and fonts, with cut corners, mono labels and a red scan line when a sheet prints in. Motion is off for people who ask for reduced motion.
- The logo is inlined from the Joint Operations website repository so both sites use the same mark. After changing a template or the logo, run:
```
python3 build.py ../joint-operations-web
```
- Preview: `python3 -m http.server 8000`, then open http://localhost:8000.
- Project data (version, roadmap progress, open positions) is read live from the Joint Operations site (https://hound-protocol.github.io/joint-operations-web/).

## License
Site code GPL-3.0-only, text CC BY-SA 4.0. The Hound Protocol name and logo are reserved. Fonts: SIL Open Font License (`assets/fonts`).


