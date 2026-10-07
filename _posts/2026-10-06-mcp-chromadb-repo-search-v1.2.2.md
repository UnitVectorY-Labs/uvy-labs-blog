---
layout: post
title: "mcp-chromadb-repo-search v1.2.2 Released"
date: 2026-10-06 17:26:48 -0500
tags: ["mcp-chromadb-repo-search", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On October 6, 2026, UnitVectorY-Labs published v1.2.2 of mcp-chromadb-repo-search. This is a maintenance release focused on stability and security hardening with no user-visible feature additions or breaking changes. The server continues to provide read-only semantic search over GitHub repository content indexed in ChromaDB via stdio and Streamable HTTP, with the same configuration and MCP tool surface as before.

## What's new

v1.2.2 updates the underlying Model Context Protocol Go SDK from 1.7.0 to 1.8.0. The SDK release adds hardening against resource exhaustion, bounded JSON decoding with nesting depth limits, size caps for SSE events and stdio frames, and improvements to session teardown and protocol version control. No new protocol revision is introduced, and the supported MCP protocol versions remain unchanged.

CI and repository hygiene were also improved. The release adds an official Go vulnerability scan workflow using govulncheck with SARIF output, updates CodeQL action and analysis versions, and bumps supporting actions such as `astral-sh/setup-uv` and `github/codeql-action/upload-sarif`. These changes are CI-only and do not affect runtime behavior.

No source code in the server, CLI flags, environment variables, YAML configuration, or the `search` tool response structure was modified.

## Why it matters

For users, v1.2.2 delivers increased robustness under load and better protection against malformed inputs, thanks to the SDK hardening. The improvements are transparent: existing deployments continue to work without configuration changes, and the upgrade is drop-in.

The additional CI scanning strengthens the project's security posture without impacting the user experience, and the dependency updates keep the toolchain current.

## Upgrade

Upgrade is straightforward. Pre-built binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, and windows-386/windows-amd64 are available in the release assets with checksums. You can also install via:

```
go install github.com/UnitVectorY-Labs/mcp-chromadb-repo-search@latest
```

Existing environment variables for Chroma URL, collection name, embedding API URL and model remain unchanged. No migration steps are required and no breaking changes are introduced.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/mcp-chromadb-repo-search, release v1.2.2 published 2026-10-06, article generated 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
