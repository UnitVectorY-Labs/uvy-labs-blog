---
layout: post
title: "ghorgsync v0.4.4 Released"
date: 2026-09-03 09:52:09 +0000
tags: ["ghorgsync", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

ghorgsync v0.4.4 was released on September 3, 2026. This is a maintenance update that keeps the project’s build environment current without changing CLI behavior. There are no new features or functional changes for users in this release; the update is focused on toolchain and CI security maintenance.

## What's new

v0.4.4 contains no user-facing feature additions or bug fixes. The changes in this release are limited to build and CI infrastructure:

- The build toolchain is updated to Go 1.27. The CI workflow now uses actions/setup-go 1.27.1 and go.mod specifies Go 1.27.0 as the minimum version.
- GitHub CodeQL action versions are bumped to 4.37.9 across the security scanning workflows. This updates the default CodeQL bundle used for CI checks.

No source code in internal/ or main.go was changed between v0.4.3 and v0.4.4, so the CLI behaves identically to the previous release.

## Why it matters

Keeping the build environment up to date ensures the project remains compatible with supported Go releases and benefits from the latest security scanning definitions. For users, this means a stable, transparent upgrade path with no workflow changes required. The release also signals ongoing maintenance of the CI pipeline that supports ghorgsync’s non-destructive sync, parallel processing, and audit capabilities.

## Upgrade

Upgrading from v0.4.3 to v0.4.4 is transparent. There are no breaking changes and no new flags or configuration. Users can install or update ghorgsync via the usual distribution channels. If you build from source, Go 1.27+ is now required.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/ghorgsync, release v0.4.4, date of generation 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
