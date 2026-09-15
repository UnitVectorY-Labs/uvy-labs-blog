---
layout: post
title: "mcp-graphql-forge v0.11.2 Released"
date: 2026-09-03 09:52:44 +0000
tags: ["mcp-graphql-forge", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

mcp-graphql-forge v0.11.2 was released on 2026-09-03. This is a maintenance update that refreshes the build toolchain and CI dependencies while keeping the server behavior identical to v0.11.1. Users can upgrade with no configuration changes and no migration steps.

## What's new

This release contains no user-facing feature changes, bug fixes, or schema updates. The server logic, `forge.yaml` configuration, tool YAML definitions, command-line flags, environment variables, and output formats remain unchanged from v0.11.1.

Under the hood the release updates the build environment:
- Go toolchain upgraded to 1.27.1 for builds and CI, with `go.mod` and the GitHub Actions build workflow updated accordingly.
- CI actions refreshed for security scanning and repository tooling: CodeQL action and upload-sarif to v4.37.9, `astral-sh/setup-uv` to v10.0.1, and `UnitVectorY-Labs/chromadb-repo-indexer` to v1.2.0.
- Pre-compiled binaries are rebuilt for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64, with accompanying checksum files.

The changes are confined to CI workflows and build metadata; no source files in `main.go` or `internal/` were modified.

## Why it matters

Keeping the build toolchain current reduces technical debt and ensures the project continues to build reliably on supported Go releases. Updated CodeQL and dependency actions improve the security posture of the CI pipeline without affecting runtime behavior. For users, this means drop-in binaries that are built with the latest supported toolchain, with full backward compatibility and no breaking changes.

Because the MCP server API and configuration are unchanged, existing setups continue to work as before. The release provides a clean upgrade path for users who want the latest build artifacts and CI improvements without revisiting configuration.

## Upgrade and installation

Upgrade from v0.11.1 is straightforward and requires no changes:
- Download the pre-compiled archive for your platform from the GitHub Release page: https://github.com/UnitVectorY-Labs/mcp-graphql-forge/releases/tag/v0.11.2
- Or install via Go: `go install github.com/UnitVectorY-Labs/mcp-graphql-forge@latest`

If you build from source, note that Go 1.27.1 is now required per `go.mod`. Released binaries are unaffected.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/mcp-graphql-forge, release v0.11.2, date of generation 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
