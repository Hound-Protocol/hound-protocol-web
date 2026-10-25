# Hound Protocol

The website of Hound Protocol, a community-focused organization that builds ambitious projects: Lug Nuts, an offroad trucking game and our first major project, and two multiplayer mods, [Joint Operations](https://hound-protocol.github.io/Joint-Operations/) and Lost Planet 2 Multiplayer (planned).

Live at https://hound-protocol.github.io/hound-protocol-web/

## Editing
- Edit `index.template.html`, `assets/css/hp.css` and `assets/js/hp.js`.
- The logo is inlined from the Joint Operations repository so both sites use the same mark. After changing the template or the logo, run:
```
python3 build.py ../Joint-Operations
```
- Preview: `python3 -m http.server 8000`, then open http://localhost:8000.
- Project data (version, roadmap progress, open positions) is read live from the Joint Operations site.

## License
Site code GPL-3.0-only, text CC BY-SA 4.0. The Hound Protocol name and logo are reserved. Fonts: SIL Open Font License (`assets/fonts`).


