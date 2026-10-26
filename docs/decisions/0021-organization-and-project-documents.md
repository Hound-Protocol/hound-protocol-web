# 0021: Organization documents live here; project documents live in the project
Status: Accepted · Date: 2026-10-26 · Deciders: project lead

## Context
The Handbook and Library were copied from the Joint Operations repository. They carried that project's game, platform and tooling into rules meant for every project. A newcomer to another project met rules about someone else's game.

## Decision
1. **This Documentation holds only what applies to the whole organization,** or to Hound Protocol itself: structure, conduct, security, AI use, rights, licensing, quality, procedures and guides for joining.
2. **A document about one project belongs in that project's own documentation,** next to its code. This Documentation only points to it ([Projects](../projects.md)).
3. **Hound Protocol owns the organization documents.** The files in `docs/` here are the source. They are no longer copied from a project.
4. **Projects add rules, they do not replace them.** A project may be stricter, and says so in its own documents ([HP-GDE-021](../handbook/HP-GDE-021-project-documentation.md)).
5. A check (`tools/check_docs.py`) fails when an organization document names a single project's game, platform or tools.

## Consequences
- The Joint Operations documentation keeps its project-specific policies (its game-file and platform rules, release steps, tester manual) and should link here for the shared ones. It still holds older copies until it is updated. That work is in the Joint Operations repository and is not done yet.
- AFTERHAUL and any new project start with the checklist in [HP-SOP-013](../handbook/HP-SOP-013-starting-a-project.md).
- The organization tooling (records, infractions, Discord setup, backup) is still kept in the Joint Operations repository. Where it should live is open.
