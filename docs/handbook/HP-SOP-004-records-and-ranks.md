# Contributor Records and Grade Updates
Code: HP-SOP-004 · Version 2.0 · Effective 2026-10-26 · Owner: Administration · Used by: the records signer (project lead)

Records are signed statements that a person completed a contract. They work across all projects. The records tool and its signing key are described below; where the tool lives is listed in [HP-GDE-021](HP-GDE-021-project-documentation.md).

## One-time setup
1. Install the records tool's requirement (`pip install --user cryptography`).
2. Create the signing key (`records.py keygen --key-id hp-2026`). Commit the public key file in a pull request.
3. Back up the private key (`~/.config/hound-protocol/`) offline, for example on an encrypted USB drive. Never upload it anywhere.

## After each merged contract
1. Find the merged pull request number and its merge commit.
2. Run the tool: `records.py add --login <github-user> --contract <id> --pr <number> --commit <sha>`.
3. Open a pull request with the updated records file. CI verifies the signature.
4. When it merges, the contributor appears on the Verify page with their grades.

## Grade roles on Discord
1. Check the contractor's overall grade (their best grade in any field) on the Verify page.
2. Give them **LV3 · Contractor** and the grade role for it (**Rank E** to **Rank S++**). Remove the old grade role.
3. Post a short note in #contract-board for promotions to S and above.

## Mistakes
Records are never deleted. Issue a correct record and explain in the pull request. If the key is lost or leaked, follow [HP-SOP-006](HP-SOP-006-security-incident.md), create a new key with a new ID and re-sign.

## Certificates of service
A certificate is a signed summary of everything a person has done: records, grades per field, clearance and AI tools credited.
1. Make sure all of the person's completed contracts have signed records.
2. On the owner's computer: `records.py certify --login <github-name> [--name "Display name"] [--statement "One line of thanks or context"]`.
3. Commit the certificates file in a pull request; CI checks the signature.
4. Send the person their certificate link. They can print it or save it as PDF.
5. Issue a new certificate when their work grows. To withdraw one: `records.py certificate-revoke --id HPC-NNNN --reason "..."`.
