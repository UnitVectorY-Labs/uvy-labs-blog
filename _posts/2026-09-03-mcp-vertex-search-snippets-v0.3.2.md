---
layout: post
title: "mcp-vertex-search-snippets v0.3.2 Released"
date: 2026-09-03 09:52:49 -0000
tags: ["mcp-vertex-search-snippets", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

mcp-vertex-search-snippets v0.3.2 is now available as of 2026-09-03. This is a maintenance update focused on keeping the project healthy behind the scenes. For users, the server continues to work exactly as before, with the same configuration and behavior when connecting MCP clients to Vertex AI Search for configurable snippets and extractive segments.

## What's new

Version 0.3.2 contains no user-facing feature changes. The release updates build tooling and CI workflows, including the Go toolchain and related GitHub Actions used for testing and quality checks. The MCP tool `search`, the `vertex.yaml` configuration format, and the command-line interface remain unchanged.

## Why it matters

Even when there are no visible changes, keeping dependencies current reduces risk over time. This release moves the project to a newer Go toolchain and refreshes CI actions, which helps maintain reliable builds and security scanning going forward without affecting how you run or configure the server.

## Upgrade and installation

v0.3.2 is a drop-in replacement for v0.3.1. No configuration changes are required and no migration steps are needed. If you run from a release binary, replace it with the new asset for your platform. If you build from source, note that `go.mod` now targets Go 1.27.0 and CI builds use Go 1.27.1.

You can find the release assets and notes at https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets/releases/tag/v0.3.2.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/mcp-vertex-search-snippets, release v0.3.2, date of generation 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
