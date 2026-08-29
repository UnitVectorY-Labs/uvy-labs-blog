---
layout: post
title: "ghrepocfg v0.1.0 launches declarative GitHub repository configuration"
date: 2026-08-26 11:01:22 +0000
tags: ["ghrepocfg", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On August 26, 2026, UnitVectorY-Labs released v0.1.0 of ghrepocfg, the first public version of a standalone Go CLI for declaratively managing GitHub repository settings from a single YAML file. This launch introduces export, plan and apply workflows that let teams capture repository configuration, preview drift, and synchronize settings with confidence.

ghrepocfg is built for GitHub.com repositories and focuses on practical day-to-day controls: repository settings, security controls, GitHub Actions policy, direct collaborators, team access, and repository rulesets. The design emphasizes safety by construction with strict validation, idempotent apply, and no changes to visibility or archive state.

## What's new

v0.1.0 ships the initial usable product with the core command set users need to start.

Export and apply are now available. `ghrepocfg export` reads supported repository state and writes a `.ghrepocfg.yaml` configuration. `ghrepocfg apply` validates the YAML, builds a complete plan, shows the changes, and applies only what differs. Both commands support `--dry-run` for preview, `--json` for structured output, and `-y/--yes` to skip confirmation. `ghrepocfg version` reports the build.

Configuration lives in `.ghrepocfg.yaml` at the repository root. The model uses clear management semantics: present fields are managed, omitted fields are left untouched, and present collections are authoritative including empty collections. Top-level sections cover repository, security, actions, collaborators, teams, and rulesets, with validation that rejects unknown keys before any API calls.

Safety and usability are first-class. Mutations wait until complete state is read and planned, apply is idempotent, and terminal output uses semantic colors with full respect for NO_COLOR and non-interactive terminals. Environment variables `GHREPOCFG_REPO`, `GHREPOCFG_CONFIG`, `GH_TOKEN`, and `GITHUB_TOKEN` make repository and authentication resolution predictable.

The release includes comprehensive documentation for getting started quickly: installation, usage, examples, configuration reference, supported GitHub features, how it works, and troubleshooting. Pre-built binaries with checksums are provided for macOS, Linux, and Windows, and installation is also available via `go install github.com/UnitVectorY-Labs/ghrepocfg@latest` or building from source.

## Why it matters

Managing repository settings through the UI does not scale and is hard to audit. ghrepocfg brings the same declarative, reviewable workflow teams expect from infrastructure tools to GitHub configuration. Export creates a baseline you can review in pull requests, plan shows exact drift before change, and apply ensures the repository converges to the desired state without surprises.

By keeping configuration literal and validated, teams reduce accidental changes and gain an auditable record of who changed what and when. The tool’s safety guarantees — no changes to visibility or archive, unknown keys fail fast, and complete state planning before mutation — make it suitable for shared repositories and automation pipelines.

## Get started

This is the first release, so there is no upgrade path. Install from GitHub Releases or with Go:

```
go install github.com/UnitVectorY-Labs/ghrepocfg@latest
```

or download a pre-built binary from https://github.com/UnitVectorY-Labs/ghrepocfg/releases. Authenticate with GitHub CLI, `GH_TOKEN`, or `GITHUB_TOKEN`, then start with:

```
ghrepocfg export --repo OWNER/REPO
ghrepocfg apply --dry-run --config .ghrepocfg.yaml
```

Review the generated file, commit it, and use apply in CI to keep repositories aligned with policy.

---

Transparency note: this post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. It references UnitVectorY-Labs/ghrepocfg release v0.1.0 published 2026-08-26 and was generated on 2026-08-29. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
