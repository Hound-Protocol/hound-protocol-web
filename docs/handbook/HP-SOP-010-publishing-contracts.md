# Publishing Contracts as GitHub Issues
Code: HP-SOP-010 · Version 2.0 · Effective 2026-10-26 · Owner: Development · Used by: Development and Administration

Until a project opens to contractors, its contracts are a plan on the project's board, read from a data file. When the project opens, they become GitHub issues that people can claim. The board switches to the live issues by itself.

## When
Only on the project lead's go-ahead, normally together with the project's first playable build.

## Steps
1. Check the planned contracts are current: goals, acceptance criteria, difficulty, and `core` for critical-path work ([HP-SOP-001](HP-SOP-001-contract-lifecycle.md)).
2. Preview what will be created. Nothing is posted in this mode: `python3 publish_contracts.py`
3. Publish: `python3 publish_contracts.py --apply`. Each contract becomes an issue labeled `contract`, an area label, `difficulty:<level>` and, where set, `core`. Contracts that already have an issue are skipped.
4. Open the project's contribute page. The board now says "Live from GitHub" and refreshes every 2 minutes.
5. Post in **#contract-board** on Discord that contracts are open.

## After publishing
- Contractors claim with `/claim` on an issue and leave with `/unclaim`. The claims workflow assigns them and the board shows their tokens.
- A contract is done when its pull request (with `Closes #N`) is merged. A records signer then issues the record ([HP-SOP-004](HP-SOP-004-records-and-ranks.md)).
- New contracts are written straight as issues with the same labels, using the contract issue template.

## Undo
If something was published by mistake, close the issues with a comment and the label `wontfix`. Do not delete them: the history stays visible ([HP-POL-007](HP-POL-007-chain-of-command.md), transparency).
