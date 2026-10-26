# Bug Triage
Code: HP-SOP-005 · Version 2.0 · Effective 2026-10-26 · Owner: Quality · Used by: Quality Department

## Intake
Bugs come from GitHub issues (bug report template) and the bug-reports channels on Discord. Quality moves Discord reports to GitHub within 2 days, with a link back.

## Triage steps
1. **Check it is ours.** Not a bug in someone else's product, not another mod or add-on, not a pirated copy.
2. **Reproduce** on the platforms the project supports. Record the product version, platform and version, and any other software installed.
3. **Severity** S1 to S4 ([HP-POL-006](HP-POL-006-quality-policy.md)).
4. **Label:** `bug`, an area label, severity, and `needs-info` if the reporter must answer.
5. **Route** to the area owner. S1 goes to the technical lead and project lead at once.

## Response times
| Severity | First response | Target |
|---|---|---|
| S1 | Same day | Fix or pull the release |
| S2 | 2 days | Next release |
| S3 | 7 days | Planned |
| S4 | When possible | Batched |

## Closing
Closed as fixed (with the pull request), duplicate (link), can't reproduce (after 14 days of `needs-info`), or not ours (with a pointer).
