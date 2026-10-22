---
layout: post
title: "mcp-chromadb-repo-search v1.2.3 — Security Rebuild for Trusted Binaries"
date: 2026-10-22 09:00:00 -0500
tags: ["mcp-chromadb-repo-search", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On October 22, 2026, mcp-chromadb-repo-search v1.2.3 was released. This is a security-focused rebuild with no functional changes to the server itself. The binaries for this release were rebuilt using Go 1.27.3 to distrust the compromised eMudhra intermediate certificate authorities referenced as GO-2026-6809 / CVE-2026-111943. For users, this means you can continue using the same MCP server for semantic repository search with the same configuration and behavior, now from a toolchain that reflects current security guidance.

## What's new

v1.2.3 does not add features or change runtime behavior. The release delivers the same read-only MCP server that turns natural-language questions into embeddings, queries repository chunks indexed in ChromaDB, and returns concise Markdown excerpts with file, line, and commit-aware attribution.

The meaningful update is in the build. The release artifacts for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64 were rebuilt with Go 1.27.3 to address the compromised CA issue. Checksums are provided for verification.

Behind the scenes, the source tag points to CI-only improvements in v1.2.2..v1.2.3: a govulncheck SARIF deduplication fix to avoid upload failures, and dependency bumps for actions/upload-artifact, astral-sh/setup-uv, and CodeQL actions. These changes do not affect the server's API, configuration, or user experience.

## Why it matters

Supply-chain trust is part of operational reliability. Rebuilding with Go 1.27.3 ensures the distributed binaries are produced with a toolchain that explicitly distrusts the compromised eMudhra CAs. There are no code changes to review, no configuration migrations, and no behavioral differences — just a safer provenance for the binaries you run.

If you are running v1.2.2 or earlier, upgrading to v1.2.3 is recommended to ensure your deployment uses the rebuilt artifacts. If you build from source, updating to Go 1.27.3 for your own builds aligns with the same guidance.

## Upgrade and installation

Upgrading is drop-in. Replace your existing binary with the v1.2.3 artifact for your platform from the GitHub release page. Environment variables, MCP client configuration, and ChromaDB index setup remain unchanged. No migration steps are required.

Download the release at https://github.com/UnitVectorY-Labs/mcp-chromadb-repo-search/releases/tag/v1.2.3 and verify checksums before use.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/mcp-chromadb-repo-search, release v1.2.3, date of generation 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
