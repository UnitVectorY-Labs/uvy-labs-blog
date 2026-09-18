---
layout: post
title: "ghrepocfg v0.3.0: Strict Mode and Graceful Permission Handling"
date: 2026-09-17 22:22:42 +0000
tags: ["ghrepocfg", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-09-17, UnitVectorY-Labs released ghrepocfg v0.3.0. This release improves reliability when working with repositories where the authentication token has partial access. Export and apply now degrade gracefully on permission denials instead of failing, and users can opt into strict compliance checks with a new `--strict` flag. The update also adds clearer permission diagnostics and documentation.

## What's new

v0.3.0 adds an optional `--strict` flag for `export` and `apply`, off by default. Strict export requires complete requested state before writing YAML or replacing a file. Strict apply requires complete reads before confirmation, stops on the first denied or failed mutation, and verifies applied values against the live repository after changes.

In default mode, ghrepocfg now continues independent work when the GitHub API denies access to specific attributes. Unreadable state is tracked as unavailable and is never treated as empty, false, or disabled. Permission warnings are emitted to stderr with a yellow bold `warning:` prefix, identifying the attribute and reason.

Export behavior changes to omit unreadable attributes from new full exports while retaining existing values on scoped refreshes with warnings. Apply skips unreadable attributes and permission-denied writes, continuing independent mutations and skipping dependent ones when prerequisites fail. The apply summary now uses green bold text and reports applied and skipped counts.

Exit code semantics are updated. Exit 0 indicates completed, which in default mode may include permission skips. Exit 1 covers configuration, authentication, API, cancellation, mutation failures, or strict incompleteness. Exit 2 signals repository drift from `apply --dry-run` or file changes from `export --dry-run`.

Documentation is updated across README, USAGE, CONFIGURATION, EXAMPLES, GITHUB_FEATURES, HOW_IT_WORKS, INSTALL, and TROUBLESHOOTING. A new `docs/PERMISSIONS.md` details per-attribute access expectations, fine-grained PAT and GitHub App permissions, and troubleshooting steps.

## Why it matters

Teams often run ghrepocfg with tokens that lack full repository admin scope. Previously, a single denied attribute could interrupt a run. With graceful degradation, common workflows complete with explicit warnings, making it safer to use the tool in CI and for partial audits. The strict mode gives operators a clear choice for compliance pipelines that must guarantee complete coverage, while everyday use remains tolerant.

Clearer warnings and verification improve confidence. Users see exactly which attributes were skipped and why, rather than encountering silent data loss or hard failures. The new permissions guide reduces setup friction by mapping required scopes to features.

## Upgrade and installation

No configuration schema changes are required. Existing configs continue to work. Prebuilt binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, and windows-386/windows-amd64 are available from the release page with checksums.

To upgrade, download the latest binary from https://github.com/UnitVectorY-Labs/ghrepocfg/releases/tag/v0.3.0 or use your package manager. For pipelines that require full compliance, add `--strict` to export and apply commands. See `docs/PERMISSIONS.md` for required token scopes and troubleshooting.

Transparency note: this post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository UnitVectorY-Labs/ghrepocfg, release v0.3.0, date of generation 2026-09-18. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
