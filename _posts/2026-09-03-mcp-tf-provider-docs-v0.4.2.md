---
layout: post
title: "mcp-tf-provider-docs v0.4.2 Released"
date: 2026-09-03 09:52:48 -0000
tags: ["mcp-tf-provider-docs", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

mcp-tf-provider-docs v0.4.2 was released on September 3, 2026. This is a maintenance update for the configurable Model Context Protocol server that indexes and serves Terraform/Tofu provider documentation from a local Git repository. The release keeps the build toolchain and CI pipeline current while preserving the existing functionality users rely on for accurate, context-aware AI assistance with Terraform.

## What's new

v0.4.2 contains no application source changes. The MCP server behavior, configuration schema, and tool interface are unchanged from v0.4.1.

The update focuses on the build and delivery pipeline:
- Pre-compiled binaries are rebuilt with Go 1.27.1, with go.mod updated to Go 1.27.0, replacing the previous Go 1.26.5 build.
- CI dependencies are refreshed for security and maintenance, including ChromaDB repo indexer v1.2.0, astral-sh/setup-uv v10.0.1, and GitHub CodeQL/upload-sarif v4.37.9.
- Workflow metadata is updated via GitRepoForge desired state to keep repository automation consistent.

Artifacts remain available for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64 with checksums.

## Why it matters

mcp-tf-provider-docs provides AI agents with up-to-date Terraform provider documentation that is often missing from model training data. Keeping the build environment current ensures continued compatibility with Go toolchain improvements and reduces risk from outdated CI actions. Because there are no functional changes, existing deployments and configurations continue to work without modification, making this a safe drop-in refresh.

## Upgrade and installation

v0.4.2 is fully compatible with v0.4.1 configurations and MCP clients. No breaking changes or configuration updates are required.

You can download the pre-compiled release assets from the GitHub Releases page for v0.4.2, or install from source with:

```bash
go install github.com/UnitVectorY-Labs/mcp-tf-provider-docs@latest
```

Note that building from source now requires Go 1.27+. Configuration is unchanged: set the `TF_CONFIG` environment variable to a YAML file specifying `docs_path`, `match_pattern`, optional `tool_name`, and `tool_description`. The server defaults to STDIO mode and supports `--http=<addr>` for SSE/HTTP.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/mcp-tf-provider-docs, release v0.4.2, date of generation 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
