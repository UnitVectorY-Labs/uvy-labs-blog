---
layout: post
title: "mcp-filter-proxy v0.2.3 Released"
date: 2026-10-06 22:29:17 +0000
tags: ["mcp-filter-proxy", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-10-06, UnitVectorY-Labs published v0.2.3 of mcp-filter-proxy. This is a maintenance release that keeps the proxy aligned with its upstream dependencies and strengthens the project's security and CI practices. There are no changes to the proxy's application code or user-facing behavior compared to v0.2.2, so upgrades are drop-in with no configuration changes required.

## What's new

v0.2.3 contains no new features or bug fixes in the proxy itself. The release updates build dependencies and CI workflows:

- The project builds against `github.com/modelcontextprotocol/go-sdk` v1.8.0, up from v1.7.0, and `golang.org/x/sys` v0.44.0, up from v0.41.0.
- CI and security workflows were refreshed, including updated CodeQL action versions and setup-uv versions.
- An official govulncheck SARIF scanning workflow was added to run vulnerability scanning on pull requests and main pushes and upload results to GitHub code scanning.
- Repository metadata management was applied via gitrepoforge.

Binaries are published for darwin, linux, and windows across the supported architectures.

## Why it matters

mcp-filter-proxy lets MCP clients that launch servers over stdio connect to remote, streamable-HTTP MCP servers with a policy layer for headers, OAuth 2.0 client-credentials token handling, and tool allow/deny filtering. Keeping the underlying go-sdk current ensures compatibility with upstream protocol changes and improvements without requiring users to modify their setups.

The added vulnerability scanning and updated CodeQL pipelines improve the project's security posture and supply-chain hygiene. Because the release touches only dependencies and CI, existing deployments continue to work unchanged while benefiting from a more current dependency baseline.

## Upgrading

Upgrading is straightforward and non-breaking:

- Download the pre-built binaries for your platform from the GitHub releases page for v0.2.3.
- Or install via `go install github.com/UnitVectorY-Labs/mcp-filter-proxy@latest`.
- Build from source with `go build -o mcp-filter-proxy .`.

Verify the installation with `mcp-filter-proxy --help`. No migration steps or configuration adjustments are needed.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/mcp-filter-proxy v0.2.3 released 2026-10-06. Generated 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
