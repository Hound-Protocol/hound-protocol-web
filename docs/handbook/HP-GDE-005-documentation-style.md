# Documentation Style Guide
Code: HP-GDE-005 · Version 2.0 · Effective 2026-10-26 · Owner: Administration · For: everyone who writes documents

## Principles
1. **Write for a newcomer.** Assume they are smart, but new to the project.
2. **Plain English.** Short sentences, active voice, common words. Explain jargon once, or link the [glossary](../glossary.md).
3. **One topic per document.** Link rather than repeat.
4. **Facts with sources.** Research claims carry a source and a confidence: confirmed, likely or unknown.
5. **Honest status.** Say what is not done. "Planned for 0.1" beats silence. Code that has not been run on its target is unverified, and says so.

## Structure
- Start with a one-line purpose.
- Headings that say what the section is about.
- Tables for comparisons and lists of facts. Numbered lists for steps.
- Code blocks for commands, exactly as typed.
- End research notes with a **Sources** list.

## Where a document lives
A document that applies to every project goes in this Documentation. A document about one project goes in that project's documentation. The test: would a contributor to a different project need it? ([ADR 0021](../decisions/0021-organization-and-project-documents.md), [HP-GDE-021](HP-GDE-021-project-documentation.md))

## Handbook documents
| Type | Code | Use for |
|---|---|---|
| Policy | HP-POL-NNN | Rules everyone must follow |
| SOP | HP-SOP-NNN | Step-by-step procedures |
| Guide | HP-GDE-NNN | How-to help for an audience |

Each starts with a title, then one metadata line: `Code · Version · Effective date · Owner department · Audience`. Add the document to `docs/handbook.json` with its audience and a one-line summary, then run `python3 tools/check_docs.py`. Raise the version when the meaning changes (1.0 to 1.1 for small changes, 2.0 for rewrites).

**Join Discord button:** in a document about the Discord server, put the line `<!-- hp:join-discord -->` under the opening paragraph. The website shows a **Join Discord** button there; GitHub hides the line.

## Words we use
| Use | Not |
|---|---|
| contract, contractor | ticket, freelancer |
| department | team (for the four departments) |
| grade, overall grade | rank (except Discord role names) |
| Documentation, Library, Handbook | Docs page, Guides page |
| unofficial fan project | official, licensed (when it is not) |
| project | product line, title (for a Hound Protocol project) |

## Never
Paste protected text or files, copy other projects' documents, promise dates, or name and criticize other projects.
