---
layout: post
title: "jsonschemaprofiles v0.1.3 Released"
date: 2026-10-06 22:23:09 +0000
tags: ["jsonschemaprofiles", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

jsonschemaprofiles v0.1.3 was released on 2026-10-06. This is a maintenance and hardening release for the Go library and CLI that validates JSON Schema documents against provider-specific structured-output profiles. There are no changes to profiles, APIs, CLI commands, or validation behavior in this release; the update focuses on keeping dependencies current and improving repository security scanning.

**What's new**

v0.1.3 builds on v0.1.2 with repository maintenance and CI improvements:

- Dependency freshness across the build and test workflows, including updates to `github/codeql-action/upload-sarif`, `astral-sh/setup-uv`, `golang.org/x/text`, and CodeQL group components.
- CodeQL version bump to 4.38.0 and related action updates for code scanning.
- Repository desired-state application via gitrepoforge to keep managed files aligned.
- Addition of official Go team `govulncheck` SARIF scanning with results uploaded to GitHub code scanning and retained as artifacts. The workflow runs on pull requests, pushes to main, and on a weekly schedule.
- Pre-built binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64 with accompanying checksums, released alongside the library.

No new profiles are added in this version. The existing profiles remain `OPENAI_202602`, `GEMINI_202602`, `GEMINI_202503`, and `MINIMAL_202602`.

**Why it matters**

jsonschemaprofiles helps teams ensure schemas are compatible with structured-output constraints from providers like OpenAI and Gemini before deployment. By keeping the repository's dependencies up to date and adding systematic vulnerability scanning, v0.1.3 reinforces supply-chain hygiene and continuous security visibility without changing the user-facing surface. Users can upgrade with confidence knowing the library and CLI remain binary compatible.

**Upgrade and installation**

Upgrade is straightforward and requires no migration steps:

- Go users: `go install github.com/UnitVectorY-Labs/jsonschemaprofiles/cmd/jsonschemaprofiles@latest` or `go get github.com/UnitVectorY-Labs/jsonschemaprofiles`.
- Binary users: download the v0.1.3 assets for your platform from the GitHub release page.

No breaking changes are reported, and the CLI and library surface is unchanged from v0.1.2.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/jsonschemaprofiles, release v0.1.3, date of generation 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
