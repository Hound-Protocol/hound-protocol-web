# 0009: Departments and contractor grades
Status: Accepted · Date: 2026-10-22 · Rewritten for the whole organization 2026-10-26 · Deciders: project lead

## Context
The organization needed a structure that newcomers understand at a glance and that works for every project.

## Decision
1. **Four departments:** Administration, Development, Quality and Contractor. Details are in [departments.md](../departments.md).
2. **Contractor grades E, D, C, B, A, A+, A++, S, S+, S++**, held per field, from contract points with steeply rising thresholds, plus commendations like medals. A contractor's overall grade is their best grade. Grades carry no authority ([ADR 0013](0013-chain-of-command.md)).
3. **Contract difficulty** Easy, Medium and Hard, as information only (anyone can take any contract), and a **Core** flag for critical-path work (Development only).
4. **A Quality Department** signs off every release and checks every contract against its acceptance criteria.
5. **A project's first version is built by the project lead.** Contracts open to outside contractors when the project says so. Staff seats are filled once there is a playable prototype; until then the project lead builds alone, with AI agents as tools ([ADR 0015](0015-ai-agents-and-attribution.md)).

*Terminology:* documents say **grade** ("overall grade" for the best one). "Rank" survives only in Discord role names.

## Consequences
- Websites, Discord and governance documents use these departments and grades.
- Recruiting before a project's first playable build focuses on Quality (testers).
