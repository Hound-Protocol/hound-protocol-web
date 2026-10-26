# 0016: Accountability: infractions for contributors and role holders
Status: Accepted · Date: 2026-10-22 · Rewritten for the whole organization 2026-10-26 · Deciders: project lead

## Context
Contributors can merge broken work without checking it, and role holders can skip their duties. The lead wants a clear consequence for carelessness that applies at every level, while keeping the work free of time pressure.

## Decision
1. Two tracks: **contributor** (quality of delivered work) and **duty** (how role holders carry out their role).
2. Infractions are for carelessness: skipped or bypassed checks, false test claims, repeated mistakes after a note, duty breaches. **Never** for speed, inactivity, abandoned contracts or honest bugs that passed the checks.
3. Ladder: note (not counted), then infractions 1 and 2, and at **3 active infractions a suspension** with an invitation to appeal. Contributors cannot claim or merge; role holders step down from the role.
4. **No time limits:** infractions clear through five clean deliveries or duties, not by waiting. Appeals have no deadline.
5. Issued only along the chain of command ([ADR 0013](0013-chain-of-command.md)). Quality reports but does not issue. The owner cannot be suspended; duty concerns about the owner are recorded and answered in public.
6. The record changes only through pull requests, so its history is public.
7. Enforcement: a required contributor-standing check on pull requests, refused claims for suspended contributors, and automatic broken-main incidents (not infractions by themselves).

Rules: [HP-POL-009](../handbook/HP-POL-009-accountability.md). Procedure: [HP-SOP-011](../handbook/HP-SOP-011-infractions-and-appeals.md).

## Consequences
- Branch protection on `main` requires the checks; admins should not bypass them.
- The pull request template asks contributors to confirm they ran the checks.
- Infractions are factual and about work. The project lead may later decide to keep names private and publish only a summary.
