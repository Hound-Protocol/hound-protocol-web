# Writing Research Notes
Code: HP-GDE-013 · Version 2.0 · Effective 2026-10-26 · Owner: Development · For: contractors in Architecture Research and anyone writing research notes

Research notes record what we learn about a subject (a platform, a tool, a technique, a real-world process) in our own words. Projects are built on them, so they must be accurate, sourced and clean-room ([HP-POL-003](HP-POL-003-third-party-rights.md)).

## File and header
- One topic per file in the project's research folder, with a short lowercase name.
- Start with a title and one line of facts:
```
# Topic Name
Author: YourName, with Claude (AI agent) · Date: 2026-10-22 · Status: desk research · Version studied: 1.2
```
- Name any AI agent you used, the same way as in commits ([ADR 0015](../decisions/0015-ai-agents-and-attribution.md)).
- **Status** is one of: desk research (read, not tested), tested on a rig (with the setup and version), or verified (checked by a second person).

## What goes in
1. **Question:** what we want to know and why (link the contract or ADR).
2. **Findings:** short sections, facts first. Mark guesses as guesses.
3. **Evidence:** how you know: a test you ran, a document you read, a log you captured. Enough for someone else to repeat it.
4. **Open questions:** what is still unknown.
5. **Sources:** links to public pages, with what you took from each.

## Confidence
Mark every claim: **confirmed** (a source or a test you can point to), **likely** (reasonable, not checked) or **unknown** (nobody has checked). An AI-written claim with no source is unknown until someone checks it.

## Clean-room rules
- Write everything in **your own words**. Never paste code, decompiled output or long quotes from other projects or products.
- No protected files, extracted assets or other people's logos in a repository.
- Observing how something behaves, reading public documentation and reading other projects' public notes are fine. Copying their code is not.
- If you have worked on another project's code, say so in the pull request, and do not port it from memory.

## Quality bar
- Short sentences, simple words ([HP-GDE-005](HP-GDE-005-documentation-style.md)).
- Numbers with units and the version they were measured on.
- Tables for comparisons, numbered steps for procedures.
- Update the note when a later test changes the answer, and say what changed and when.
