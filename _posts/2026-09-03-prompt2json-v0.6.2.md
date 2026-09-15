---
layout: post
title: "prompt2json v0.6.2 — Maintenance and Toolchain Update"
date: 2026-09-03 09:52:51 -0500
tags: ["prompt2json", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On September 3, 2026, prompt2json v0.6.2 was released. This is a maintenance update focused on keeping the project’s build toolchain, dependencies, and continuous integration current. There are no changes to the CLI’s user-facing behavior, flags, or output format — the same system instruction, JSON Schema, and text/file inputs continue to produce schema-validated JSON via Vertex AI Gemini and OpenAI-compatible endpoints.

The release is significant for users who build from source or rely on long-term reproducibility. It aligns the module with Go 1.27 and updates internal dependencies, while strengthening the CI pipeline with additional security scanning and workflow maintenance.

## What's new

v0.6.2 contains no new CLI features and no bug fixes to the command-line tool itself. The changes are focused on project maintenance:

* Toolchain alignment: the module requirement is updated to Go 1.27. Building from source now requires Go 1.27 or newer.
* Dependency updates: internal Go modules `github.com/UnitVectorY-Labs/gcpvalidate` and `github.com/UnitVectorY-Labs/jsonschemaprofiles` were bumped to their latest patch releases, and indirect dependencies were refreshed.
* CI and security improvements: new workflows for repository indexing and Semgrep static analysis were added, and existing CodeQL, checkout, cache, and setup actions were updated to current versions. Credential handling in checkout steps was tightened.
* Documentation upkeep: Mermaid library version in docs configuration was updated, and the README badge set was cleaned up.

No command-line flags, providers, schema validation behavior, or output format were changed.

## Why it matters

For day-to-day users installing prebuilt binaries or using `go install github.com/UnitVectorY-Labs/prompt2json@latest`, v0.6.2 is a drop-in update with no migration required. The value is in stability and hygiene: a current Go toolchain requirement reduces friction when building or contributing, and refreshed dependencies keep the project compatible with its ecosystem.

The expanded CI security scanning does not change runtime behavior, but it improves confidence in release quality and helps catch issues earlier for the maintainers, which ultimately benefits users who depend on reliable schema-validated JSON output in their shell pipelines and automation.

## Upgrade and installation

There are no breaking changes. Upgrade with the standard method:

```bash
go install github.com/UnitVectorY-Labs/prompt2json@latest
```

Binary releases for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64 are available on the GitHub release page. If you build from source, ensure Go 1.27+ is installed.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository UnitVectorY-Labs/prompt2json, release v0.6.2 published 2026-09-03. Generated 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
