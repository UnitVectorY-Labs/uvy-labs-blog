---
layout: post
title: "mcp-graphql-forge v0.11.3 released"
date: 2026-10-06 22:31:09 +0000
tags: ["mcp-graphql-forge", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-10-06, mcp-graphql-forge v0.11.3 was released. This is a maintenance and security-focused update that keeps the project current without changing how users configure or run the server. There are no new features or breaking changes, and existing `forge.yaml` and tool YAMLs continue to work unchanged. The release is recommended for all users who want the latest dependency hardening and vulnerability remediation.

## What's new

v0.11.3 contains no application source changes. The update is focused on dependencies, security, and CI hygiene:

- The Model Context Protocol Go SDK is upgraded from 1.7.0 to 1.8.0. The upstream release adds hardening against resource exhaustion, bounded JSON and SSE decoding, stdio line length caps, and fixes for session leaks and deadlocks. Protocol support is unchanged.
- A security remediation in `golang.org/x/sys` from 0.41.0 to 0.44.0 addresses GO-2026-5024 / CVE-2026-39824, an integer overflow in `NewNTUnicodeString`.
- Official Go vulnerability scanning is now in place with a new govulncheck SARIF workflow that runs on push, pull request, and weekly schedule, uploading results to GitHub code scanning.
- Routine CI dependency updates for CodeQL, setup-uv, and codecov-action, along with repoforge managed file updates, keep the build and security pipelines current.
- Pre-built binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64 are provided with checksums.

## Why it matters

For users, v0.11.3 delivers security and stability improvements with zero operational friction. The SDK hardening reduces exposure to resource exhaustion and transport edge cases that can affect long-running MCP sessions, while the `golang.org/x/sys` bump closes a known vulnerability in the Go toolchain dependency chain. Because there are no configuration schema, CLI flag, or runtime behavior changes, upgrading is a drop-in replacement. The new vulnerability scanning workflow also signals ongoing investment in supply-chain security for the project.

## Upgrade

Upgrade is straightforward. Download the pre-built archive for your platform from the release page and replace the existing binary, or rebuild from source if you maintain a custom build. No migration steps are required and no configuration changes are needed. As always, verify checksums after download.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/mcp-graphql-forge release v0.11.3 published 2026-10-06. Generated 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
