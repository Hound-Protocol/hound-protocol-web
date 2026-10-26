# GitHub Basics
Code: HP-GDE-014 · Version 2.0 · Effective 2026-10-26 · Owner: Development · For: everyone new to GitHub

GitHub is where Hound Protocol's code, documents, contract boards and releases live. You need a free account to report problems, take contracts or sign in to our websites. This guide takes you from no account to your first pull request. No programming is needed for most of it.

## 1. Words you will see
| Word | What it means here |
|---|---|
| **Repository (repo)** | A project folder with its full history. Each project has its own |
| **Issue** | A numbered discussion: a bug report, a question, or a **contract** (an issue with the `contract` label) |
| **Fork** | Your own copy of the repository, where you can change anything |
| **Branch** | A line of work inside a repository, so changes stay separate until they are ready |
| **Commit** | One saved set of changes, with a message saying what changed |
| **Pull request (PR)** | A request to bring the changes from your fork or branch into ours. It is where review happens |
| **Review** | Someone checks your pull request and either approves it or asks for changes |
| **Merge** | The pull request is accepted and its changes become part of the project |
| **Checks** | Automatic tests that run on every pull request. A red cross means something needs fixing |
| **Release** | A published version with notes |

## 2. Create your account (5 minutes)
1. Go to **github.com** and choose **Sign up**. Use an email address you will keep.
2. Pick a user name. It is public and it is how we credit you, on the contributor wall and in your records.
3. Turn on **two-factor authentication**: your picture (top right) → **Settings** → **Password and authentication** → **Enable two-factor authentication**. Use an authenticator app or a passkey, and save the recovery codes somewhere safe and offline. Two-factor is required to work with us ([HP-POL-004](HP-POL-004-security-policy.md), step by step in [HP-GDE-010](HP-GDE-010-account-security.md)).
4. Optional: add a picture and a display name in **Settings → Public profile**. Your picture appears on your keycard when you sign in to our website.

## 3. Find your way around a repository
Open the project's repository from [Projects](../projects.md).
- **Code** tab: the files. Documentation is usually in `docs/`.
- **Issues** tab: bug reports, questions and contracts. Filter with **Labels → contract** to see the contract board.
- **Pull requests** tab: work being reviewed.
- **Actions** tab: the automatic checks, and the jobs that publish websites and releases.
- **Releases** (right side of the Code tab): every version with its notes.
- **Watch** (top right) → **Custom** → tick **Releases** if you want an email when a new version is out.

## 4. Report a problem or ask a question
1. **Issues** → **New issue** → pick the template that fits. Questions are best asked on Discord.
2. Fill in every field the template asks for.
3. Search the existing issues first: someone may have reported it already. Add a 👍 reaction instead of a "me too" comment.
4. Never attach protected files, and never paste passwords, tokens or keys ([HP-POL-004](HP-POL-004-security-policy.md)).

## 5. Take a contract
Contracts open to contractors when the project says so ([HP-SOP-010](HP-SOP-010-publishing-contracts.md)); the board may show the plan before then.
1. On the project's contribute page, pick a contract whose dependencies are done, and open it on GitHub.
2. Press **Claim** on the card (signed in), or comment exactly `/claim` on the issue. **Unclaim** (or `/unclaim`) leaves it.
3. Read the goal, the deliverable and the acceptance criteria. Ask questions on the issue, so everyone can see the answer.

## 6. Change a document in the browser (no tools needed)
Good for fixing a typo or improving a guide.
1. Open the file on GitHub (or use **Suggest an edit** in the Documentation).
2. Click the **pencil** (Edit this file). GitHub offers to **fork** the repository: accept.
3. Make your change. Check it with the **Preview** tab.
4. **Commit changes** → write a short message, for example `Fix a broken link in HP-GDE-014`. Choose **Create a new branch** and **Propose changes**.
5. On the next page, **Create pull request**. Explain what you changed and why.
6. Watch the **checks**. If one fails, open **Details** to see why, fix it with the pencil again, and the pull request updates itself.
7. A reviewer approves and merges it, or asks for changes. That is normal; reply on the pull request.

## 7. Work on your own computer (for code and bigger changes)
1. Install **git**. Add whatever the project's documents ask for.
2. Fork the repository (**Fork** button), then clone your fork:
   ```
   git clone https://github.com/<your-name>/<repository>.git
   cd <repository>
   ```
3. Make a branch for your work: `git switch -c docs/short-topic`.
4. Change files, then save the change with a sign-off (it certifies the work is yours, [HP-POL-001](HP-POL-001-contributor-policy.md)):
   ```
   git add .
   git commit -s -m "Short, clear message"
   git push -u origin docs/short-topic
   ```
5. GitHub shows a **Compare & pull request** button on your fork. Open the pull request against the project's `main`.
6. Run the project's checks before you push ([Contributor Quick Start](HP-GDE-003-contributor-quick-start.md)).
7. To bring your fork up to date later: on your fork's page, **Sync fork** → **Update branch**, then `git pull` on your computer.

Prefer buttons to commands? **GitHub Desktop** does the same on Windows and macOS. Most editors (for example VS Code) have git built in.

## 8. Good habits
- One pull request per topic. Small pull requests are reviewed faster.
- Say in the pull request if you used AI tools; they are welcome and credited ([HP-POL-002](HP-POL-002-ai-use-policy.md)).
- Be kind in reviews and comments. Disagree with the work, never with the person ([Code of Conduct](../code-of-conduct.md)).
- Stuck? Ask in the issue or on the [Discord](HP-GDE-008-discord-members.md). Nobody is penalized for being slow or asking questions ([HP-POL-009](HP-POL-009-accountability.md)).
