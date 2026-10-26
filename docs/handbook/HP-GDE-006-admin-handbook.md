# Administration Handbook
Code: HP-GDE-006 · Version 2.0 · Effective 2026-10-26 · Owner: Administration · For: Administration Department and seat holders

## What Administration owns
Direction and decisions, seats and access, legal stance and funding, the community and moderation, and recruiting. See [Governance](../governance.md) and [Departments](../departments.md).

## Accounts and settings
| Where | Must be on |
|---|---|
| GitHub organization | **Require two-factor authentication** for all members; two owners; teams `owners`, `administration`, `development`, `quality`, `contractors` matching the keycards |
| Repositories | Ruleset on `main` (no deletion, no force push, pull requests, required checks); squash merge; auto-merge; delete branches after merge; secret scanning and push protection; Dependabot alerts and security updates; private vulnerability reporting; CodeQL |
| GitHub Pages | Source: GitHub Actions, or the `main` branch for simple static sites |
| Discord | See [HP-SOP-008](HP-SOP-008-discord-administration.md); server widget on; release webhook stored as the `DISCORD_RELEASE_WEBHOOK` repository secret |
| Backups | Weekly on the owner's computer plus encrypted cloud copy ([HP-SOP-009](HP-SOP-009-backup-and-restore.md)) |
| Sign-in | GitHub App **Hound ID Sign-in** (Contents: read-only, installed only on the restricted document repositories); relay with the client secret as an encrypted variable |
| Restricted documents | Private repositories for staff (LV3 and up), leads (LV5 and up) and admin (LV6 and up). Team membership is what opens them |

## Regular duties
| When | Task |
|---|---|
| Each merged contract | Issue the signed record and grade role ([HP-SOP-004](HP-SOP-004-records-and-ranks.md)) |
| Each new staff member | Issue their Hound ID and keycard role, and add them to the GitHub team for their level ([HP-SOP-007](HP-SOP-007-onboarding-offboarding.md)) |
| Weekly | Read #admin-board and #mod-log. Seats stay with the project lead until there is a playable prototype |
| Each release | Second signer; announcement ([HP-SOP-003](HP-SOP-003-release.md)) |
| Monthly | Review access: who has what (GitHub teams, restricted repositories, Discord roles), remove what is unused. Check the backup log and cloud copy |
| Every 6 months | Rotate the sign-in app's client secret |
| New project | Run the checklist in [HP-SOP-013](HP-SOP-013-starting-a-project.md) |

## Decisions
- Day-to-day: lazy consensus in pull requests (72 hours).
- Lasting decisions: a decision record (ADR), **Proposed** until the project lead accepts it. Organization decisions live in the [Library](../decisions/0021-organization-and-project-documents.md); project decisions in the project.

## Funding
Each project decides when it opens donations. Funds go through a fiscal host, every expense is published, and money never buys influence.

## Incidents
Leaked secret or security problem: [HP-SOP-006](HP-SOP-006-security-incident.md). Community problem: [HP-POL-005](HP-POL-005-community-moderation.md).
