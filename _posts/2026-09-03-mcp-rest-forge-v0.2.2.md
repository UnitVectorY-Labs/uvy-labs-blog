---
layout: post
title: "mcp-rest-forge v0.2.2 — Maintenance Release with Go 1.27 Toolchain Update"
date: 2026-09-03 09:52:46 +0000
tags: ["mcp-rest-forge", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

mcp-rest-forge v0.2.2 was released on September 3, 2026. This release is a focused maintenance update that keeps the project’s build toolchain and continuous integration pipeline current without changing server behavior. For users running the pre-compiled binaries, v0.2.2 is a drop-in replacement for v0.2.1 with no configuration changes, new features, or breaking changes.

The release updates the Go toolchain used to build the server from Go 1.26 to Go 1.27.1 and refreshes several CI dependencies, including CodeQL actions and setup tools. The application source, configuration schema, and CLI remain unchanged from v0.2.1.

## What's new

v0.2.2 contains no user-visible feature additions or bug fixes. The changes are confined to build and CI configuration:

- Go toolchain updated to 1.27.1 for builds, with `go.mod` minimum version raised to `go 1.27.0`.
- GitHub Actions dependencies refreshed: `astral-sh/setup-uv` updated to 10.0.1, CodeQL init/analyze/upload-sarif actions updated to 4.37.9, and the chromadb repo indexer action updated to 1.2.0.
- Workflow metadata aligned across `build-go.yml`, `codeql-go.yml`, `semgrep.yml`, `zizmor.yml`, and `chromadb-repo-indexer.yml`.

No changes were made to the MCP server logic, REST tool handling, configuration format, or output modes. Existing `forge.yaml` and per-tool YAML files continue to work without modification.

## Why it matters

Keeping the build toolchain up to date ensures that future releases can take advantage of Go 1.27 improvements and that the CI pipeline runs on supported, secure versions of analysis tools. The refreshed CodeQL and setup actions provide more current security scanning for the repository without affecting runtime behavior.

Because there are no functional changes, upgrading carries no migration risk. Users benefit from a more current build environment and continued maintenance while their workflows remain identical to v0.2.1.

## Upgrade and installation

v0.2.2 is available as pre-compiled binaries for macOS, Linux, and Windows from the GitHub Releases page. The assets include checksums for verification.

To upgrade:

- Download the appropriate archive for your OS and architecture from the v0.2.2 release, or
- Install from source with Go 1.27 or newer: `go install github.com/UnitVectorY-Labs/mcp-rest-forge@latest`

Configuration remains via `--forgeConfig` / `FORGE_CONFIG` and per-tool YAML files as documented. No changes to your existing configuration are required.

---

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/mcp-rest-forge, release v0.2.2, date of generation: 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).