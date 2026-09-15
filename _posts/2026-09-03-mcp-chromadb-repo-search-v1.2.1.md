---
layout: post
title: "mcp-chromadb-repo-search v1.2.1"
date: 2026-09-03 09:52:41 +0000
tags: ["mcp-chromadb-repo-search", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

mcp-chromadb-repo-search v1.2.1 was released on September 3, 2026. This is a maintenance update focused on toolchain and CI hygiene with no changes to the MCP server API, configuration, or runtime behavior.

The release updates the build environment to Go 1.27.1 and refreshes several GitHub Actions used in CI, including CodeQL and setup-uv. The CI indexing workflow also moves to chromadb-repo-indexer v1.2.0 for test data generation. No application code under cmd/ or internal/ was modified, so existing deployments continue to work unchanged.

## What's new

- Build and release artifacts are now built with Go 1.27.1, with go.mod updated to go 1.27.0.
- GitHub Actions in CI are refreshed for security and maintenance: astral-sh/setup-uv 9.0.0 → 10.0.1, github/codeql-action/upload-sarif 4.37.6 → 4.37.9, and CodeQL init/analyze actions 4.37.6 → 4.37.9.
- The CI indexing workflow now references chromadb-repo-indexer v1.2.0. This change affects CI test data generation only and does not alter the search server runtime.
- No new features, bug fixes, or configuration changes are included. The server remains read-only and supports local stdio and remote Streamable HTTP transports with the same environment variables and behavior as v1.2.0.

## Why it matters

Keeping the build toolchain current reduces risk and aligns with upstream support windows. The dependency bumps in CI improve security scanning and reproducibility without impacting users. Because there are no functional changes, upgrading is safe and optional. Users who want binaries built against the latest Go toolchain or who prefer the most recent CI baseline can move to v1.2.1 with confidence.

## Upgrade and installation

v1.2.1 is a drop-in replacement for v1.2.0. No configuration migrations are required and all existing environment variables continue to apply, including CHROMA_REPO_SEARCH_SERVER_URL, CHROMA_REPO_SEARCH_COLLECTION_NAME, CHROMA_REPO_SEARCH_EMBEDDING_API_URL, CHROMA_REPO_SEARCH_EMBEDDING_MODEL, and optional reranking settings.

Prebuilt binaries are available for darwin-amd64/arm64, linux-386/amd64/arm64, and windows-386/amd64 with corresponding checksums. See the release page for the latest assets and installation instructions.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/mcp-chromadb-repo-search, release v1.2.1, date of generation 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).