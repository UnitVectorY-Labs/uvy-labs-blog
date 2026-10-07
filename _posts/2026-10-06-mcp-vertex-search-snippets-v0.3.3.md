---
layout: post
title: "mcp-vertex-search-snippets v0.3.3"
date: 2026-10-06 17:05:42 -0500
tags: ["mcp-vertex-search-snippets", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On October 6, 2026, mcp-vertex-search-snippets v0.3.3 was published. This is a maintenance release focused on keeping dependencies current and strengthening the build pipeline. There are no new MCP tools, configuration options, or changes to the `search` tool behavior, so the upgrade is transparent for users.

## What's new

v0.3.3 contains no application code changes. The runtime behavior of the server is identical to v0.3.2. The release updates transitive Go dependencies, including the Model Context Protocol Go SDK, OAuth2, and system libraries, and refreshes GitHub Actions to current versions.

The build pipeline gains official Go vulnerability scanning via govulncheck with SARIF results uploaded to GitHub code scanning. Dependabot grouping and workflow housekeeping were also applied to keep CI maintenance sustainable.

## Why it matters

The update carries the same user experience with a stronger supply-chain posture. The SDK bump includes upstream hardening against resource exhaustion and session edge cases, which contributes to stability when the server runs under sustained load. Vulnerability scanning in CI adds an additional check that dependencies remain free of known issues before releases are cut.

Because no schema, flags, or tool surface changed, existing `vertex.yaml` configurations and deployments continue to work without modification. There are no breaking changes and no migration steps.

## Upgrade

Upgrading is a drop-in replacement. Download the pre-compiled binary for your platform from the v0.3.3 release assets, or install from source with:

```
go install github.com/UnitVectorY-Labs/mcp-vertex-search-snippets@latest
```

Configuration remains the same: `vertex.yaml`, `--vertexConfig`, `VERTEX_CONFIG`, `--vertexDebug`, and `--http` operate as before.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/mcp-vertex-search-snippets v0.3.3 released 2026-10-06, article generated 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
