---
layout: post
title: "gcpvalidate v0.1.3 Released"
date: 2026-09-03 09:52:06 +0000
tags: ["gcpvalidate", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On September 3, 2026, gcpvalidate v0.1.3 was published. This release is a maintenance update focused on keeping the project’s build and automation infrastructure current. The library’s public API and validator behavior are unchanged, so existing consumers can upgrade without code changes.

## What's new

v0.1.3 contains no new validator features or bug fixes in library code. The changes in this release are limited to repository maintenance:

- The Go toolchain requirement was updated to Go 1.27.0 in go.mod, with CI builds now using Go 1.27.1.
- CI workflows were hardened and refreshed, including security-focused updates to checkout steps and dependency actions, and additions of automated security scanning and repository indexing workflows.
- Documentation tooling was updated, with the Mermaid diagram version bumped in docs/_config.yml.

No Go source files under location, project, storage, vertexai, or internal were modified. The validation functions continue to perform client-side syntactic checks for Google Cloud resource identifiers without API calls.

## Why it matters

Keeping the build environment up to date reduces friction for contributors and ensures the library remains compatible with current Go releases. The updated toolchain requirement signals active maintenance of the project’s CI pipeline, even though the user-facing functionality stays the same. For users, this means a stable library with no breaking changes and a clear path to upgrade.

## Upgrade

Upgrade with your normal Go module workflow:

```
go get github.com/UnitVectorY-Labs/gcpvalidate@v0.1.3
```

If you build from source or run tests locally, ensure you are using Go 1.27 or newer. No migration steps or code changes are required; the public API surface is identical to v0.1.2.

Transparency note: This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository UnitVectorY-Labs/gcpvalidate, release v0.1.3, published 2026-09-03. Article generated 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
