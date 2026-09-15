---
layout: post
title: "isplaintextfile v0.1.1 — Maintenance and Toolchain Update"
date: 2026-09-03 09:52:31 +0000
tags: ["isplaintextfile", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

isplaintextfile v0.1.1 was released on 2026-09-03. This is a maintenance release for the lightweight Go module that checks whether a file or data stream is plaintext. There are no changes to the plaintext detection logic or public API; the release focuses on toolchain updates and repository infrastructure improvements that support long-term stability and security.

## What's new

v0.1.1 contains no user-facing functional changes to the library. The source files `isplaintextfile.go` and `isplaintextfile_test.go` are identical to v0.1.0, so the API and behavior remain unchanged:

- `Bytes`, `File`, `FilePreview`, `Reader`, `ReaderPreview`

The primary user-relevant update is the Go module requirement. `go.mod` now requires Go 1.27.0, up from 1.26.0 in v0.1.0, and CI builds with Go 1.27.1. The module remains dependency-free and uses only the Go standard library.

Behind the scenes, the release includes repository automation and quality improvements:

- Go toolchain bump with updated CI action pins for checkout, setup-go, cache, and codecov
- Addition of a Semgrep SAST workflow for static analysis
- Updates to CodeQL workflow versions and permissions
- New ChromaDB repository indexer workflow and related automation
- Repository metadata refresh via gitrepoforge, including regenerated `.gitignore`, updated LICENSE year to 2026, and removal of the Go Report Card badge from the README

No new features, bug fixes, or breaking changes are introduced.

## Why it matters

While users will see identical plaintext detection results, v0.1.1 improves the project's maintenance posture. Bumping to Go 1.27 ensures the module builds on current toolchains and can take advantage of recent Go improvements. The added security scanning and workflow updates strengthen CI reliability without changing how the library is used.

For existing users, this release is a drop-in update. There is no migration work, no API changes, and no behavioral differences to account for.

## Upgrade and installation

Update the module with:

```bash
go get github.com/UnitVectorY-Labs/isplaintextfile@v0.1.1
```

Build requirements are now Go ≥ 1.27.0. If you are already on v0.1.0, the upgrade is optional unless you need the updated toolchain requirement or want to stay on the latest maintenance tag.

The repository and release are available at https://github.com/UnitVectorY-Labs/isplaintextfile/releases/tag/v0.1.1.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository UnitVectorY-Labs/isplaintextfile release v0.1.1 published 2026-09-03. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
