# AI Use Policy
Code: HP-POL-002 · Version 2.0 · Effective 2026-10-26 · Owner: Administration · Applies to: all contributions to every project

## 1. Position
Hound Protocol welcomes AI-assisted work. An AI agent works as a tool of the person who uses it. Hand-written and AI-assisted contributions are reviewed the same way and earn the same records and grades. The one hard limit is art: **generative AI images, artwork, music, sound and voices are not accepted** (section 5). **What counts is that the work is correct, original, licensed and checked.**

Practical advice, from prompts to checking and submitting: [HP-GDE-018 Working with AI Assistants](HP-GDE-018-working-with-ai-assistants.md).

## 2. You are responsible
- You are the author of what you submit, whatever tools you used. You must understand it well enough to explain and fix it.
- Run it, test it, and check it against the contract's acceptance criteria before you open a pull request.
- "The AI wrote it" is never an answer in review.

## 3. Disclosure
- Tick **AI-assisted** in the pull request template when AI tools wrote or substantially changed code, text or content.
- Name the tool in one line (for example "Claude, for the parser and tests"). You do not need to share prompts.
- Disclosure never lowers your credit. It helps reviewers know where to look.

## 4. Code
| Allowed | Not allowed |
|---|---|
| Generating, refactoring and explaining code | Asking an AI to reproduce code from another project, a leaked source or a decompiled binary |
| Writing tests, tools and documentation | Submitting code you have not run |
| Translating our own notes into code | Code that breaks a platform's or company's terms of service |
| Summarizing public documentation in your own words | Pasting protected files, extracted scripts or secrets into an AI tool |

- AI output must pass the same checks as any code: CI, review by Quality, and tests where the contract asks for them.
- Do not include large generated files (lockfiles aside) without a reason in the pull request.

## 5. Graphics, art, sound and voices
**The line:** AI may operate tools. AI may not generate art.

| Allowed | Not allowed |
|---|---|
| AI working **through tools and connectors**: laying out a design, drawing vector graphics in code, editing, resizing, cropping, arranging layouts, exporting files | **Generative AI images and artwork** of any kind: pictures, illustrations, textures, concept art, icons or logos made by an image model |
| AI helping with text, code, diagrams, charts and data visualizations | **Generative AI music, sound effects or voices**, including voice clones of real people |
| Fonts, photos and assets made by people, with a license that allows it | Upscaling or "restyling" someone else's art with AI |

- Art comes from people. We respect the artists whose work these models are built on.
- Everything visual and audible must be original or properly licensed. It must never imitate someone else's assets, logos or characters.
- When AI operated a tool (for example "Claude drew this SVG"), say so in the pull request, as with code.
- A project may be stricter, for example "the owner supplies every sound".
- The project lead may refuse any content that would harm a project's standing, even if it breaks no rule.

## 6. Data and privacy
- Never paste into an AI tool: tokens, keys, passwords, private messages, players' personal data, or unreleased security reports.
- Files you may not share stay on your machine. Describe them in your own words.

## 7. Documentation and research
- Research notes cite real sources. Check every claim an AI gives you against the source, and mark confidence (confirmed, likely, unknown).
- AI summaries of other projects must not copy their text or code.

## 8. Breaches
Unreviewed or copied AI output is treated like any other copied or broken work under [HP-POL-001](HP-POL-001-contributor-policy.md) and [HP-POL-003](HP-POL-003-third-party-rights.md).

## Attribution: who did it, and with what
- Work done with an AI agent is **credited to you, with the agent named**: for example "Forge77, with Claude". You are responsible for it, as with any tool.
- Keep the agent's commit trailers (for example `Co-Authored-By: Claude <noreply@anthropic.com>`) and name the agent in the pull request template. Removing trailers on purpose breaks this policy.
- Tools detect agents from those trailers. Merged pull requests get an `agent: <name>` label and a credit comment, and signed contributor records list the agent ([ADR 0015](../decisions/0015-ai-agents-and-attribution.md)).
- Agents are never graded and hold no authority. Your grade counts your work, whatever tools you used.
