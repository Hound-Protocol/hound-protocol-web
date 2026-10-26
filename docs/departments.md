# Departments and contractor grades
Status: Accepted ([ADR 0009](decisions/0009-departments-and-ranks.md)) · Date: 2026-10-22 · Updated: 2026-10-26

Hound Protocol is organized in four departments. Each has a clear job. The same structure is used on GitHub, on Discord and on the website, for every project.

## The four departments
| Department | Job | Units | Who |
|---|---|---|---|
| **Administration** | Direction, decisions, legal stance, funding, accounts, community and moderation, recruiting | Command · Community · Legal and Funding | Project lead, seat holders, moderators |
| **Development** | Technical direction and the core of each project: architecture, systems, tools, websites | Set by each project | Technical lead, core developers |
| **Quality** | Making sure what ships works: testing, reviews against acceptance criteria, bug triage, release sign-off | Testing · Review · Release QA | Testers, reviewers |
| **Contractor** | Outside contributors who take contracts, deliver and leave whenever they like | Open to any skill | Anyone who has completed a contract |

Units under Development and Quality are set by each project, because each project needs different skills and test setups.

### How they work together
1. **Administration** decides what gets built and in what order, and keeps the organization running.
2. **Development** turns that into work: builds the core, and writes contracts with acceptance criteria for the rest.
3. **Contractors** take contracts from the board and deliver them as pull requests.
4. **Quality** checks every delivery against its acceptance criteria and tests it. Nothing is released without Quality's sign-off. This is a check on the work, not authority over people.

Department members are standing staff. Contractors come and go. Experienced contractors (grade S+ and up in a field) can be invited into a department.

Who may decide what over whom is set by the chain of command ([HP-POL-007](handbook/HP-POL-007-chain-of-command.md)).

## Contractor grades
Grades run from **E** to **S++** ([ADR 0009](decisions/0009-departments-and-ranks.md)).

Every completed contract (delivered, reviewed by Quality and merged) earns **points in its field**: Easy 2, Medium 5, Hard 10. The fields are the board's columns: Code, Architecture research, Testing, Design and web, Docs and legal.

- You hold a **grade in each field**. Your **overall grade** is your best one, and that is the role you get on Discord.
- Each grade needs more points than the last, so the S grades take sustained, serious work.
- **Commendations** work like medals: Administration can award one for exceptional work. It adds 5 points to every field and is listed publicly with the reason.
- A contract shared by several people gives full points to each of them. Hand-written and AI-assisted work count the same.
- Grades never go down. Leaving and coming back is normal.
- **Grades give no authority over other people** ([HP-POL-007](handbook/HP-POL-007-chain-of-command.md)). Reviews by graded contractors are advice: Quality checks and Development decides.

| Grade | Points in the field | Unlocks |
|---|---|---|
| **E** | 1 | Contractor role on Discord, listed on the contributor wall |
| **D** | 4 | Experience in the field |
| **C** | 8 | Experience in the field |
| **B** | 14 | Hold two contracts at once |
| **A** | 22 | Review Easy contracts in this field, as advice to Quality |
| **A+** | 32 | Review Medium contracts in this field |
| **A++** | 50 | Mentor new contractors in this field |
| **S** | 80 | Review Hard contracts in this field |
| **S+** | 125 | Can be invited into a department |
| **S++** | 200 | Candidate for a lead position |

Every completed contract also earns a signed contributor record. Grades are counted from those records, so anyone can check them ([HP-GDE-009](handbook/HP-GDE-009-grades-records-hound-ids.md)).

## Contract difficulty
Every contract has a difficulty. It is information, not a gate: anyone can take any contract.

| Difficulty | What makes it this hard |
|---|---|
| **Easy** | Clear steps and a small scope. No special knowledge needed: docs, test runs, small tools. |
| **Medium** | Some research or design. Touches a few files or systems, or needs a test setup. |
| **Hard** | Unknown ground: deep technical work on core systems. Needs deep skills and careful testing. |

**Core** marks contracts on a project's critical path, at any difficulty. They stay with the Development Department.

## Where it shows
| Place | What |
|---|---|
| Websites | Departments, the chain of command, contractor grades per field, the contributor wall, keycards |
| Discord | Keycard roles LV2 to LV7, a role per grade (Rank E to S++), unit roles, and channels per department |
| GitHub | Department owners in CODEOWNERS as departments fill; contract labels by project area |

## First builds
A project's first version is built by the project lead, with AI agents as tools ([ADR 0015](decisions/0015-ai-agents-and-attribution.md)). Staff seats are filled once there is a playable prototype. Contracts open to contractors when the project says so ([HP-SOP-010](handbook/HP-SOP-010-publishing-contracts.md)).
