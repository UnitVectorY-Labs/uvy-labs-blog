---
layout: post
title: "mcp-filter-proxy v0.2.2 — Project Moves to Active with Official Releases and Docs Domain"
date: 2026-09-03 09:52:42 -0000
tags: ["mcp-filter-proxy", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

mcp-filter-proxy v0.2.2 was released on 2026-09-03. This is an operational maturity release: the proxy itself has no functional code changes from v0.2.1, but the project is now officially Active, GitHub Releases are enabled with signed artifacts, and documentation is published under a custom domain. For users, it means a more stable, discoverable project with a straightforward drop-in upgrade and no configuration changes required.

## What's new

- Project status changed from Work In Progress to Active. The README badge now reflects Active status, signaling that mcp-filter-proxy is no longer experimental.
- GitHub Releases are now enabled. v0.2.2 publishes pre-built binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64, each with .md5 and .sha256 checksums.
- Documentation is now reachable at a custom domain, mcp-filter-proxy.unitvectorylabs.com, via a new CNAME and updated docs configuration.
- The Go toolchain requirement for source builds was updated to Go 1.27.1, with go.mod updated accordingly.
- CI and repository tooling received routine dependency updates, including CodeQL action and setup-uv bumps, and chromadb-repo-indexer updates. No application source files in cmd/, pkg/, or internal/ were changed.

## Why it matters

Moving to Active status communicates that the core proxy behavior is stable and suitable for production use. Enabling official releases makes it easier to find, verify, and install the proxy without building from source, while checksums provide confidence in artifact integrity. The custom documentation domain improves discoverability and gives users a persistent URL for setup and reference.

Because there are no functional changes, upgrading is safe and simple. Existing configurations for tool filtering, auth header injection, and OAuth client-credentials continue to work unchanged.

If you are already running v0.2.1, you can upgrade to v0.2.2 by downloading the appropriate binary from the GitHub release page for v0.2.2 at https://github.com/UnitVectorY-Labs/mcp-filter-proxy/releases/tag/v0.2.2 and replacing your current binary. No migration steps or configuration changes are needed. Source builders should use Go 1.27.1 or later.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/mcp-filter-proxy, release v0.2.2 published 2026-09-03. Date of generation: 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
