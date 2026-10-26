# Banning an Account (LV0)
Code: HP-SOP-012 · Version 2.0 · Effective 2026-10-26 · Owner: Administration · Used by: Administration (LV6) and the owner

A ban (**LV0**) removes a person from Hound Protocol: no sign-in, no contracts, no Discord, and no access to any project's sessions. It is the last step after the [Accountability Policy](HP-POL-009-accountability.md) and [Community Moderation](HP-POL-005-community-moderation.md), or the first step for serious harm (harassment, threats, piracy, cheating in other people's games, attacks on a project).

## The rules
- **GitHub is the root identity.** Anything above LV1 (reading the public site) needs a GitHub sign-in. The GitHub **account number** is what we ban: it survives renames.
- **Other accounts are linked.** A project that uses another account for its sessions (a game store account, for example) links it to the person's GitHub account. Its own documents say how.
- **One ban covers every linked account.** Banning a GitHub account bans the Discord and any linked project accounts, and the other way round.
- **We do not ban IP addresses or fingerprint devices.** A VPN gets around them in seconds, and they are personal data we do not keep.
- **Who bans:** Administration (LV6) and the owner. The owner cannot be banned.
- **Appeals are always open,** through [HP-SOP-011](HP-SOP-011-infractions-and-appeals.md). A lifted ban is removed everywhere in the same order.

## Before you ban
1. Write down what happened, with links, in the private admin repository (`bans/` folder): date, who decided, reason, and every linked account (GitHub number, Discord user ID, project accounts).
2. Find the GitHub account number: `https://api.github.com/users/<name>` → `id`.
3. If the account is younger than 30 days and tied to an earlier ban, note the link: it is the same person.

## Ban, in this order
1. **Sign-in relay:** add the number to the relay's secret list of banned GitHub IDs (comma separated) and deploy. From then on that account is refused at sign-in and sees *Access revoked · LV0*.
2. **GitHub:** Hound-Protocol → Settings → **Moderation → Blocked users** → block the account. Remove it from every team.
3. **Discord:** ban the linked Discord user ID (Server Settings → Bans, or right-click → Ban), with the reason.
4. **Staff card:** if the person holds a Hound ID, revoke it: `records.py staff-revoke --id HND-NNNN --reason "Banned (HP-SOP-012)"`.
5. **Guest passes:** if the person holds one, revoke it on your Profile (owner only).
6. **Project accounts:** add any linked project account to that project's own ban list, as its documents describe.

## New accounts
- GitHub and Discord accounts younger than **30 days** get no role above LV2 without a check by Administration.
- If a new account is clearly the banned person, ban it the same way and link it in the record.

## Lifting a ban
Reverse the steps above in the same order, record the decision and the reason in the admin repository, and tell the person.
