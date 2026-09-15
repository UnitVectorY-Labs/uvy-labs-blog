---
layout: post
title: "tofu-template-tester v0.2.2 released"
date: 2026-09-03 09:52:55 -0500
tags: ["tofu-template-tester", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

tofu-template-tester v0.2.2 was published on 2026-09-03. This is a maintenance and toolchain release for the lightweight Go CLI that renders Terraform-compatible `${NAME}` templates. The release delivers refreshed, reproducible binaries with no functional changes to the CLI interface, making it a safe drop-in update for existing users.

## What's new

v0.2.2 contains no new features, CLI flags, or changes to template processing. The application source in main.go and main_test.go is identical to v0.2.1, and the user-visible behavior for `-list-params`, `-in`, `-properties`, `-interactive`, `-out`, and `--version` remains unchanged.

The release focuses on build pipeline hygiene:

* Binaries are rebuilt with Go 1.27.1, updating the toolchain used in go.mod and the GitHub Actions build workflow.
* CI security hardening via `persist-credentials: false` on checkout steps.
* Introduction of semgrep static analysis and a ChromaDB repository indexer workflow for ongoing quality and discoverability.
* Regular dependency and CodeQL action bumps to keep the build environment current.

## Why it matters

While end users will not see new commands or behavior, the updates improve supply-chain confidence. Rebuilding with a newer Go toolchain and tightening CI security practices reduces risk and ensures the distributed artifacts are reproducible with a supported compiler. The addition of semgrep and repository indexing supports ongoing maintenance without adding complexity for users.

Because there are no breaking changes, existing workflows that rely on tofu-template-tester continue to work as before.

## Upgrade and installation

Upgrade is drop-in. Download the pre-compiled binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64 from the GitHub release page for v0.2.2, or install via:

```
go install github.com/UnitVectorY-Labs/tofu-template-tester@latest
```

No configuration changes are required.

*This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/tofu-template-tester, release v0.2.2, date of generation 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
