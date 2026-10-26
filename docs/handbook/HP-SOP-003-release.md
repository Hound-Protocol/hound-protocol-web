# Release Procedure and Versioning
Code: HP-SOP-003 · Version 2.0 · Effective 2026-10-26 · Owner: Quality · Used by: release signers, technical leads

## Version numbers
Every project keeps its own version line, and the number always says which one it means. A project that ships more than one product (for example a game and its website) keeps one line per product and tags them differently.

| Stage | Versions | Tag | Meaning |
|---|---|---|---|
| Foundation | 0.0.x | `v0.0.x` | Before the first playable build |
| First playable | 0.1 | `v0.1.0` | A small playable build |
| Development builds | 0.x | `v0.x.y` | Playable builds, pre-release |
| Stable | 1.0 | `v1.0.0` | First stable release |

- **Major** changes how the product works for everyone, **minor** adds features, **patch** fixes.
- Each project writes its own changelog. Its documents say which tag prefix belongs to which product.

## Work goes on the board first
All work goes on the project's board, whoever does it: contractors, staff, the owner, or anyone working with an AI agent. Every card shows who is working on it and, once done, who finished it with any agent named. After a project opens contracts, contracts are GitHub issues and `/claim` does the same.

## Steps
1. **Prepare.** Add a new changelog section: version, name, date, highlights. The release check fails if the version changes without its section.
2. **Bump and roadmap.** Set the version where the project keeps it, and update the roadmap: tick finished items, add new ones.
3. **Check off the work.** Mark every finished item done on the board.
4. **Pull request.** Everything for the release goes in one pull request, titled with the version and a name.
5. **Quality gate.** All checks green. For builds players install: the gates in [HP-POL-006](HP-POL-006-quality-policy.md) section 3.
6. **Merge.** Websites deploy automatically.
7. **Tag and publish (automatic).** The release workflow sees the new version on `main`, creates the tag on the merge commit and publishes a GitHub release with the changelog section as notes. If it fails, run it again from the Actions tab.
8. **Announce.** Short post in #announcements with the release link. For news beyond the changelog (a decision, a milestone, a change in how we work), add an entry to the project's dev log.

## Builds players install
- Built by CI only, never on a personal machine.
- Attach the files and a `SHA256SUMS` file to the release.
- Two release signers approve: one from Quality, one from Administration.
- The download page lists only releases from the first playable build onward.

## Fixing a bad release
Never delete a published release. Publish a fixed version (patch number +1), mark the bad one in its notes, and post in #announcements.
