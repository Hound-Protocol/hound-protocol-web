# Hound Protocol

The website of Hound Protocol, a community-focused organization that builds ambitious projects: AFTERHAUL, an offroad trucking game for up to 8 players and our first major project, and two multiplayer mods, [Joint Operations](https://hound-protocol.github.io/joint-operations-web/) and Lost Planet 2 Multiplayer (planned).

It also holds the **organization-wide documentation** (`docs/`): the team, governance, departments and grades, the code of conduct, the brand, and the decisions that apply to every project. They are shown on the Documentation page (`docs.html`). Each project keeps its own documentation; Joint Operations' is in [Joint-Operations](https://github.com/Hound-Protocol/Joint-Operations).

Live at https://hound-protocol.github.io/hound-protocol-web/

## Editing
- Edit `index.template.html`, `docs.template.html`, `assets/css/hp.css`, `assets/js/hp.js` and `assets/js/docs.js`.
- Documents: edit the Markdown in `docs/`, and list new ones in `docs/index.json`.
- The logo is inlined from the Joint Operations website repository so both sites use the same mark. After changing a template or the logo, run:
```
python3 build.py ../joint-operations-web
```
- Preview: `python3 -m http.server 8000`, then open http://localhost:8000.
- Project data (version, roadmap progress, open positions) is read live from the Joint Operations site (https://hound-protocol.github.io/joint-operations-web/).

## License
Site code GPL-3.0-only, text CC BY-SA 4.0. The Hound Protocol name and logo are reserved. Fonts: SIL Open Font License (`assets/fonts`).


