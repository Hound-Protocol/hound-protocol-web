# 0015: AI agents are tools, and every use is credited
Status: Accepted · Date: 2026-10-22 · Rewritten for the whole organization 2026-10-26 · Deciders: project lead · Amends: [ADR 0013](0013-chain-of-command.md)

## Context
An AI agent was once listed as a technical lead. An agent cannot hold accounts, accountability or authority. The project lead wants every piece of work to show who did it and with what.

## Decision
1. **An AI agent is a contractor's tool.** It is listed in the Contractor Department as an agent used by a named person. It holds no seat, no keycard above LV3 and no authority over anyone ([HP-POL-007](../handbook/HP-POL-007-chain-of-command.md)).
2. **The technical lead is a person.**
3. **Work done with an agent is credited to the person, with the agent named as their tool.** Example: "Forge77, with Claude". The person is responsible for the work.
4. **Detection is automatic.** Agents mark commits with trailers such as `Co-Authored-By: Claude <noreply@anthropic.com>`. Tools read them: merged pull requests get an `agent: <name>` label and a credit comment, and signed contributor records list the agent.
5. Contributors also name the agent in the pull request template. Leaving trailers out on purpose breaches the [AI Use Policy](../handbook/HP-POL-002-ai-use-policy.md).

## Consequences
- Grades and records count for the person, not the agent. Agents are never graded.
- Research notes are signed "Name, with Agent".
