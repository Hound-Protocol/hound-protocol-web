# Contract Lifecycle
Code: HP-SOP-001 · Version 2.0 · Effective 2026-10-26 · Owner: Development · Used by: Development, Quality, contractors

## Purpose
How a piece of work goes from an idea to a signed contributor record. It applies to every project that takes contracts.

## Stages
| # | Stage | Who | Done when |
|---|---|---|---|
| 1 | **Draft** | Development | The project's contract list has an entry with goal, deliverable, acceptance criteria and difficulty |
| 2 | **Publish** | Development | Issue created with labels `contract`, an area label, `difficulty:easy|medium|hard`, and `core` where it applies ([HP-SOP-010](HP-SOP-010-publishing-contracts.md)) |
| 3 | **Claim** | Contractor | **Claim** on the contract board (signed in with GitHub), or comment `/claim`. The claims workflow assigns them at once. Several people can claim one contract (up to 10) |
| 4 | **Deliver** | Contractor | Pull request with `Closes #<issue>`, template filled in |
| 5 | **Review** | Quality | Every acceptance criterion checked, CI green ([HP-SOP-002](HP-SOP-002-pull-request-review.md)) |
| 6 | **Merge** | Quality | Pull request merged, issue closes |
| 7 | **Record** | Administration | Signed record issued ([HP-SOP-004](HP-SOP-004-records-and-ranks.md)) |

## Writing a good contract
- One clear outcome. If it has two, split it.
- Acceptance criteria a stranger can check without asking you.
- Difficulty by the skill it needs: Easy (clear steps, small scope), Medium (some research or a test setup), Hard (unknown ground, deep skills). Mark **Core** for anything on the project's critical path.
- List dependencies, and links to research and decisions.

## Claiming
- `/claim` joins a contract, `/unclaim` leaves it. Several people can work on one contract together. Agree who does what on the issue.
- One open contract per person, two from grade B upward ([departments](../departments.md)). Difficulty never limits who can take a contract.
- If there is no progress update for 14 days, a maintainer asks. After 7 more days without an answer, the contract is unassigned.

## Handoff when leaving
Post on the issue:
```
Handoff: what is done / what is not / where the work is (branch link) / anything surprising
```
Then a maintainer unassigns the contract. Partial work can still be credited when someone finishes it, by agreement.

## Changing a contract
Changes to acceptance criteria after a claim need the contractor's agreement, recorded on the issue.
