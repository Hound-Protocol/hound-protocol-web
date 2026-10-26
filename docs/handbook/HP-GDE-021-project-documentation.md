# Project Documentation Standard
Code: HP-GDE-021 · Version 1.0 · Effective 2026-10-26 · Owner: Administration · For: project leads and anyone writing a project's documents

This Documentation holds what applies to the whole organization ([ADR 0021](../decisions/0021-organization-and-project-documents.md)). Every project keeps the rest in its own documentation. This guide says what a project keeps, and how it links to this one.

## 1. What goes where
| In the project's documentation | In this Documentation |
|---|---|
| Design, plans, specifications, research | Organization structure, conduct, security |
| Rules that exist because of the project's situation (a platform's terms, a game's rights, a store's rules) | Rules for every project |
| Build, test and release steps for that project | The release gates every project must meet |
| Player or user guides | Contributor guides for joining |
| The project's brand | Hound Protocol's brand |
| The project's decisions (ADRs) | Organization decisions |

If a contributor to another project would never need the document, it belongs to the project.

## 2. What every project keeps
- **README:** what it is, its state, how to contribute, where its documents are.
- **Status file:** where the project stands, what is next, what it waits on. Update it in every commit that changes status.
- **Decisions:** decision records, numbered, never deleted.
- **Rights file:** the project's license, its third-party rules ([HP-POL-003](HP-POL-003-third-party-rights.md)) and `THIRD_PARTY_NOTICES.md`.
- **Glossary** for its own terms.
- **Test and release notes** that apply [HP-POL-006](HP-POL-006-quality-policy.md) and [HP-SOP-003](HP-SOP-003-release.md) to its platforms.
- **Contributing file** with the setup commands and required checks.

## 3. Rules that add to the organization's
A project may be stricter than the organization, never looser. Examples: "the owner supplies every sound"; "contributors need their own legal copy of the game"; "the repository is private". It states these in its own documents and links back here for the shared rules.

## 4. Linking
- Link to organization documents by their code: "HP-POL-002 AI Use Policy".
- List the project on [Projects](../projects.md) with its state and, if it is public, the link to its documentation.
- A project that is private says so there and gives no link.

## 5. Where the organization tools live
The records, infractions, Discord setup and backup tools are not documented project by project. They serve the whole organization. Today they are kept in the Joint Operations repository, which is a historical accident. Moving them to a repository of their own is open.

## 6. Checks
A project runs its own link and format checks. This Documentation runs `tools/check_docs.py`, which fails when an organization document names a single project's game, platform or tools.
