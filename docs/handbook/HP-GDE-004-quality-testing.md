# Quality Guide: Testing and Bug Reports
Code: HP-GDE-004 · Version 2.0 · Effective 2026-10-26 · Owner: Quality · For: Quality Department and testers

## Your job
Make sure what we ship works on real machines. Every test result you write down saves someone hours.

## Test setup
Each project lists its test setup in its own documents. Whatever it is, record:
| Item | Record |
|---|---|
| Product | Version and build, with a checksum where there is one |
| Platform | Operating system and version, and any compatibility layer with its version |
| Hardware | CPU, GPU, driver, RAM |
| Other software | Names and versions (ideally none for clean tests) |

Keep the setup the same between tests. If something changes, note it.

## Kinds of tests
- **Smoke test:** it starts and the main screen appears. Every build.
- **Checklist test:** the release checklist, step by step, on every supported platform.
- **Session test:** two or more people, joins and leaves, 30 minutes of use, note problems.
- **Soak test:** a long run (2 hours or more) to find slow leaks and drift.
- **Bad network:** the same with limited bandwidth, delay and packet loss.
- **Benchmark:** frame rate or response time with and without the change.

## Writing a bug report
```
Title: <what breaks>, short
Severity: S1–S4 (see HP-POL-006)
Build: product version / platform / platform version
Steps:
1.
2.
Expected:
Actual:
Logs: attach the product's log (never protected files)
Video or screenshot: if it helps
```
One bug per report. Search first for duplicates.

## Reviewing a contract
Check every acceptance criterion yourself, not from the description. Tick each on the issue. If one fails, comment with what you saw and request changes ([HP-SOP-002](HP-SOP-002-pull-request-review.md)).

## Signing off a release
Follow [HP-SOP-003](HP-SOP-003-release.md) and the gates in [HP-POL-006](HP-POL-006-quality-policy.md). Write the release's quality report: tests run, platforms, open bugs, what was not tested.
