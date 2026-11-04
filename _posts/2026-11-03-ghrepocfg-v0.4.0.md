---
layout: post
title: "ghrepocfg v0.4.0 Adds First-Class Encrypted Secrets Management"
date: 2026-11-03 00:17:01 +0000
tags: ["unitvectory-labs-ghrepocfg", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

ghrepocfg v0.4.0 was released on 2026-11-03. This release adds first-class support for deploying locally encrypted repository secrets for GitHub Actions, Agents, Codespaces, and Dependabot, while keeping existing repository settings management fully compatible. It's a practical step toward fully declarative GitHub repository configuration without storing plaintext secrets.

## What's new

v0.4.0 introduces `ghrepocfg secrets apply`, a new subcommand dedicated to uploading encrypted secrets. The configuration schema now includes `actions.secrets`, `agents.secrets`, `codespaces.secrets`, and `dependabot.secrets` sections. Each entry requires `repository`, `key_id`, and `encrypted_value`, the Base64 sealed box produced by GitHub's public key.

Secrets are upload-only. `ghrepocfg apply` now skips nonempty secret maps with a warning and continues with other settings; using `--strict` rejects configured secret values before any mutation because values cannot be verified. Dry-run for secrets exits with code 2 when uploads are planned, and JSON output reports `value_comparison: unavailable`.

Documentation for the new workflow is added in `docs/SECRETS.md` with updates to README, USAGE, and CONFIGURATION. Export retains existing ciphertext but does not refresh it, and strict export fails when secret entries are present.

The release also includes routine maintenance: the Go toolchain is bumped to v1.27.3, weekly OSV-Scanner scans are added, the superseded `govulncheck-go` workflow is removed, and dependencies for setup-uv, CodeQL, and chromadb-repo-indexer are updated.

## Why it matters

Managing repository settings declaratively is only complete when secrets can be treated as configuration. With v0.4.0, teams can commit encrypted secret definitions alongside other repository settings, review them in pull requests, and apply them reproducibly. Because ciphertext is generated locally with `gh secret set --app <application> --no-store`, plaintext never enters the repository.

The separation of secrets apply from ordinary apply preserves safety. Settings continue to be previewed and verified, while secrets are uploaded explicitly with clear preflight reporting. Permission handling is per-application, so a denial for one secret type does not block independent uploads.

## Upgrade and installation

Existing users can upgrade without configuration changes. Binaries for darwin, linux, and windows are available on the GitHub release page with checksums, and installation is also available via `go install github.com/UnitVectorY-Labs/ghrepocfg@latest`.

To adopt encrypted secrets:
1. Generate ciphertext with `gh secret set <NAME> --repo OWNER/REPO --app <actions|agents|codespaces|dependabot> --no-store` and capture `key_id` and the encrypted value.
2. Add the entry under the appropriate secrets section in your `.ghrepocfg.yaml`.
3. Preview with `ghrepocfg secrets apply --dry-run` and apply when ready.

Ordinary `ghrepocfg apply` remains the workflow for repository settings, labels, rulesets, environments, and other managed resources.

---

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository UnitVectorY-Labs/ghrepocfg, release v0.4.0, date of generation 2026-11-04. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
