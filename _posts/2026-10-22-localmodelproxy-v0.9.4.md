---
layout: post
title: "localmodelproxy v0.9.4 Released: Security-Focused Rebuild"
date: 2026-10-22 00:31:43 +0000
tags: ["localmodelproxy", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On October 22, 2026, UnitVectorY-Labs released localmodelproxy v0.9.4. This is a security-focused rebuild of the previous release with no functional changes to the proxy itself. The binaries are rebuilt with a Go toolchain that distrusts compromised eMudhra intermediate CAs referenced as GO-2026-6809 / CVE-2026-111943. For users, this means the same API, configuration, and behavior as v0.9.3, but with binaries produced from a hardened toolchain.

## What's new

v0.9.4 does not introduce new features or change the user-facing API. The proxy continues to expose a single OpenAI-compatible local endpoint at `http://127.0.0.1:8080/v1` with support for `GET /healthz`, `GET /v1/models`, and `POST /v1/chat/completions`, configured via YAML backends.

The release notes emphasize a security rebuild with Go 1.27.3 to distrust the compromised eMudhra intermediate CAs. No application source files were modified between v0.9.3 and v0.9.4. The changes in the release range are limited to CI and dependency maintenance:

- CI workflow updates and dependency bumps, including golang.org/x/term 0.46.0 → 0.47.0
- Fix for govulncheck SARIF upload failures by deduplicating stacks
- Workflow dependency updates for actions/upload-artifact, astral-sh/setup-uv, and CodeQL

These are build infrastructure improvements and do not affect runtime behavior.

## Why it matters

The primary reason to upgrade is security posture. Binaries built with a Go toolchain that still trusts the compromised eMudhra intermediate CAs could be vulnerable to TLS trust issues in environments where the proxy establishes outbound connections to model backends. Rebuilding with a Go version that distrusts those CAs ensures the proxy's TLS verification aligns with current security guidance.

Because there are no functional changes, upgrading is a drop-in replacement. Existing configurations remain valid and no migration steps are required. Users who prioritize supply-chain and toolchain security should update to the new artifacts to benefit from the hardened build.

## Upgrade and installation

v0.9.4 is compatible with v0.9.3 configurations. Download the latest release asset for your platform from the GitHub releases page, make it executable, and replace your current binary, or install via `go install github.com/UnitVectorY-Labs/localmodelproxy@latest`.

Binaries are provided for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64 with corresponding checksums. No configuration changes are needed.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/localmodelproxy, release v0.9.4, date of generation 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
