# Governance
Status: Accepted · Date: 2026-10-22 · Updated: 2026-10-26 (organization-wide wording)

Hound Protocol works as a contract network. Contributors come and go, and a project must not depend on any one person. It runs on **a solid hierarchy, open communication and transparency**.

## Chain of command
Authority comes in three kinds. It only flows down the keycard levels, within its kind ([HP-POL-007](handbook/HP-POL-007-chain-of-command.md), [ADR 0013](decisions/0013-chain-of-command.md)).

| Role | Social | Technical | Organizational |
|---|---|---|---|
| Owner (LV7) | Final say | Final say | Final say |
| Administration (LV6) | Yes | Yes | Yes, up to LV5 |
| Moderator (LV6) | Yes | No | No |
| Development (LV5) | No | Yes | No |
| Quality (LV4), Contractor (LV3), Member (LV2) | No | No | No |

Anyone can talk to anyone, in public by default. Decisions are written down with who made them and why.

## Decision making
- Day-to-day decisions are made in pull requests and issues, by whoever holds that kind of authority.
- Disagreements and appeals go one level up within the same kind of authority. The owner has the final say.
- Decisions with lasting effect are recorded as ADRs. Organization decisions are in the [Library](decisions/0021-organization-and-project-documents.md). Project decisions are in the project.

## Seats
Some duties cannot be fluid. They are held as **seats**: a role with a written checklist, a term and at least two holders.

| Seat | Duties | Holders needed |
|---|---|---|
| Project lead | Final decisions, legal stance, funding | 1, with a named deputy |
| GitHub organization owner | Account control, repository settings | 2 |
| Discord admin | Server control, moderation escalation | 2 |
| Release signer | Approves and publishes releases | 2 |
| Technical lead | Technical direction, architecture and merge approval (Development) | 1 or more |
| Moderator | Community safety | 2 or more |

- **When:** seats other than the project lead are filled once there is a playable prototype. Until then the project lead holds them.
- Terms run 3 to 6 months, then renew or rotate.
- Handoffs happen the same day: access is removed and granted together.
- Shared credentials live in a password manager, never in chat.

## AI agents
AI agents such as Claude work as **tools of the person using them**. Work is credited to that person, with the agent named ("TrueMan, with Claude"), and is detected from commit trailers ([ADR 0015](decisions/0015-ai-agents-and-attribution.md)). Agents hold no seats, accounts or authority. The technical lead is a person.

## Departments and grades
Four departments: Administration, Development, Quality and Contractor ([departments.md](departments.md), [ADR 0009](decisions/0009-departments-and-ranks.md)). Contractors are graded E to S++ in each field. Grades unlock review rights and invitations, never authority over people. Seat holders and department members come from experienced contractors (S+ and up) or are appointed by the project lead.

## Money
Each project decides when it opens donations, and says so in its documents. Rules for all projects: funds go through a fiscal host, every expense is published, and money never buys influence over decisions.
