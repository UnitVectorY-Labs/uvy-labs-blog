---
layout: post
title: "mcp-graphql-forge v0.11.4"
date: 2026-10-22 00:42:53 +0000
tags: ["mcp-graphql-forge", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-10-22, UnitVectorY-Labs published mcp-graphql-forge v0.11.4. This release is a security-focused rebuild with no functional changes to the server. The binaries are rebuilt with Go 1.27.3 to distrust the compromised eMudhra intermediate CAs referenced in GO-2026-6809 / CVE-2026-111943. For users, it is a drop-in replacement of v0.11.3 with no configuration changes required.

## What's new

v0.11.4 ships pre-built binaries for macOS amd64 and arm64, Linux 386, amd64, and arm64, and Windows 386 and amd64, each with md5 and sha256 checksums. The application behavior, configuration schema, CLI flags, and GraphQL tool definitions are identical to v0.11.3. No new features, breaking changes, or deprecations are introduced.

The release notes explicitly state no functional code changes. Under the hood the build toolchain and dependency manifests were updated for the security rebuild and CI reliability, but these updates do not alter runtime behavior for users.

## Why it matters

The rebuild addresses a supply-chain trust issue at the toolchain level by using a Go release that distrusts the compromised eMudhra CAs. Upgrading ensures your mcp-graphql-forge binaries are built from a trusted certificate store without changing how you operate the server.

Because there are no functional changes, you can upgrade with confidence: existing `forge.yaml` files and tool YAML definitions continue to work unchanged. The release is intended as a safe, recommended update for anyone running v0.11.3 or earlier.

## Upgrade and installation

Upgrade is a simple binary replacement. Download the appropriate asset from the v0.11.4 release page on GitHub and verify the checksum. Alternatively, install from source with `go install github.com/UnitVectorY-Labs/mcp-graphql-forge@latest`. No configuration migration is needed, and the server starts with the same flags and modes as before: stdio or streamable HTTP with raw, json, or TOON output.

If you rely on the TOON output format for LLM token efficiency, output parity is maintained in this security rebuild.

---

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/mcp-graphql-forge, release v0.11.4, published 2026-10-22. Date of generation: 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
