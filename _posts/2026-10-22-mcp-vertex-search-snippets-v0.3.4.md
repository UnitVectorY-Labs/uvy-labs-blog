---
layout: post
title: "mcp-vertex-search-snippets v0.3.4 — Security Rebuild"
date: 2026-10-22 00:48:19 +0000
tags: ["mcp-vertex-search-snippets", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-10-22, mcp-vertex-search-snippets v0.3.4 was released. This is a security-focused maintenance release for the lightweight Go MCP server that exposes Google Vertex AI Search / Discovery Engine as an MCP search tool. There are no functional code changes or configuration updates; the release provides rebuilt binaries with an updated Go toolchain to address a certificate authority trust issue.

## What's new

v0.3.4 delivers pre-compiled binaries rebuilt with Go 1.27.3 to distrust the compromised eMudhra intermediate CAs referenced in GO-2026-6809 / CVE-2026-111943. The server behavior, configuration via vertex.yaml, and the exposed search tool remain identical to v0.3.3.

The release also includes CI and dependency hygiene updates in the range v0.3.3…v0.3.4:
- Govulncheck SARIF upload failures fixed by deduplicating SARIF stacks
- Workflow dependency bumps for actions/upload-artifact, astral-sh/setup-uv, and CodeQL actions
- Go version updates in GitHub Actions workflows to 1.27.2

No application source code was modified; the changes are limited to workflows and release artifacts.

## Why it matters

Rebuilding with Go 1.27.3 ensures the distributed binaries inherit the toolchain's distrust of the compromised eMudhra CAs, reducing supply-chain risk for users running the MCP server in production or development environments. Because there are no functional changes, existing deployments continue to work without migration, while users who care about toolchain security can upgrade with confidence.

The CI improvements also improve reliability of vulnerability scanning and release automation, which supports the project's ongoing maintenance quality without affecting runtime behavior.

## Upgrade

Upgrading is straightforward and requires no configuration changes:

- Download the appropriate pre-compiled asset for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, or windows-386/windows-amd64 from the GitHub release, or
- Install via `go install github.com/UnitVectorY-Labs/mcp-vertex-search-snippets@v0.3.4`

Configuration remains via vertex.yaml with project_id, location, and app_id, and the server continues to run in stdio mode by default with optional HTTP mode via `--http <port>`. No migration steps are needed from v0.3.3.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/mcp-vertex-search-snippets v0.3.4, released 2026-10-22, article generated 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
