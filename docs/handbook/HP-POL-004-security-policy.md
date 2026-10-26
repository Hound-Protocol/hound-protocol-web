# Security Policy for Team Members
Code: HP-POL-004 · Version 2.0 · Effective 2026-10-26 · Owner: Administration · Applies to: department members, seat holders and anyone with access

To report a vulnerability as an outsider, use the security contact in the affected project's repository (the *Security* tab on GitHub, "Report a vulnerability").

## 1. Accounts and identity
- **Two-factor authentication** on GitHub and Discord is required for every department member and seat holder. The GitHub organization enforces it: members without 2FA are removed automatically.
- **Passkeys or a hardware security key** are required for keycard LV6 and LV7, and strongly recommended for LV4 and LV5. An authenticator app is the minimum. Text-message codes are not allowed.
- **Hound ID:** every staff member gets a signed staff card with a permanent ID (`HND-NNNN`), tied to their numeric GitHub account ID, which never changes. Anyone can check it on the Verify page. Nobody from Hound Protocol will ever ask for a password or a code.
- **Signed commits** for LV4 and up: sign with an SSH or GPG key so GitHub marks commits Verified. Setup: [HP-GDE-010](HP-GDE-010-account-security.md).
- Use a password manager. Never reuse the organization's passwords elsewhere.
- Shared credentials live only in the password manager, never in chat, issues or documents.

## 2. Secrets
- **Never** paste a token, key or password into chat, an issue, a pull request, a commit or an AI tool. This includes "temporary" ones.
- Bot tokens are created for one job, used from an environment variable, and reset right after.
- The records signing key stays on the signer's own machine.
- GitHub secret scanning and push protection stay on.
- The sign-in app's client secret lives only in the relay's encrypted settings, never in a repository, chat or file. Rotate it every six months and at once if it may have leaked.

## 3. Access
- Least access: people get the rights their department needs, nothing more. GitHub team membership also decides who can read the restricted document repositories. Nothing secret is ever kept in public documents.
- Access is granted and removed the same day ([HP-SOP-007](HP-SOP-007-onboarding-offboarding.md)).
- Administrator rights on Discord are used for setup only, then removed.

## 4. Code and releases
- All changes go through pull requests on a protected main branch, with required checks.
- Releases are built by CI only, never on a personal machine, and published with checksums.
- Dependabot keeps dependencies up to date. Security updates are merged first.

## 5. Backups
Repositories are backed up every week to the owner's computer and an encrypted cloud folder ([HP-SOP-009](HP-SOP-009-backup-and-restore.md)). 2FA recovery codes and the records signing key are kept offline on an encrypted USB stick.

## 6. If something leaks
Follow [HP-SOP-006](HP-SOP-006-security-incident.md) at once: revoke first, then clean up, then report.
