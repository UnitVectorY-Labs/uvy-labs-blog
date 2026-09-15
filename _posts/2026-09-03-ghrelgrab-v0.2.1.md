---
layout: post
title: "ghrelgrab v0.2.1 Released"
date: 2026-09-03 09:52:12 +0000
tags: ["ghrelgrab", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

ghrelgrab v0.2.1 was released on 2026-09-03. This is a maintenance and toolchain update that keeps the project secure and current without changing how the CLI works for users.

The release rebuilds all platform binaries with Go 1.27.1 and updates CI workflows, dependency pins, and repository housekeeping. There are no new flags, no behavior changes, and no breaking changes compared to v0.2.0.

## What's new

v0.2.1 focuses on build and pipeline hygiene. The Go toolchain used to compile the release binaries moves from Go 1.26 to Go 1.27.1, and the Dockerfile base image is updated to match. The README removes the retired Go Report Card badge.

The release also adds and updates CI checks for security and reliability, including a Semgrep GitHub Action, ChromaDB repository indexer, CodeQL dependency bumps, and workflow fixes such as persist-credentials handling. These changes affect the build process only; the application code in main.go is unchanged from v0.2.0.

Pre-built assets are available for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64, each with md5 and sha256 checksums.

## Why it matters

For users, this release is a safe drop-in upgrade. Existing scripts and flags continue to work identically, with no migration required. Building with Go 1.27.1 provides a current toolchain baseline and keeps the project aligned with upstream support.

The CI updates improve the security and maintainability of the project without impacting the CLI experience. The badge removal is cosmetic and clarifies the project's current status in the README.

## Upgrade

If you use ghrelgrab as a CLI or in Docker builds, you can upgrade to v0.2.1 directly from the release page at https://github.com/UnitVectorY-Labs/ghrelgrab/releases/tag/v0.2.1. No configuration changes are needed. Download the binary for your platform and replace the existing one, or update your Docker image reference.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/ghrelgrab, release v0.2.1, article generated on 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
