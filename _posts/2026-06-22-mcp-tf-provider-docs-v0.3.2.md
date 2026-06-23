---
layout: post
title: "mcp-tf-provider-docs v0.3.2: Maintenance and Dependency Updates"
date: 2026-06-22 09:00:00 -0500
tags: ["mcp-tf-provider-docs", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on June 22, 2026, v0.3.2 is a maintenance release for mcp-tf-provider-docs. This update focuses on strengthening the project's underlying infrastructure and ensuring compatibility with the latest development tools.

## What's new

This release primarily consists of dependency updates to keep the project secure and up-to-date:

- **Go Toolchain Update**: The project now utilizes Go v1.26.4, ensuring the latest performance improvements and compiler fixes.
- **SDK Update**: The core MCP Go SDK (`mcp-go`) has been bumped to v0.55.0.
- **CI/CD Enhancements**: Various GitHub Actions, including checkout and CodeQL, have been updated to their latest versions to improve build reliability and security scanning.

## Why it matters

While this release doesn't introduce new functional features, these maintenance updates are critical for the long-term health of the server. By updating the Go toolchain and the MCP SDK, we ensure that mcp-tf-provider-docs remains stable and performs optimally when serving Terraform and OpenTofu provider documentation to AI agents.

## Getting started with v0.3.2

Upgrading to v0.3.2 is straightforward as there are no breaking changes.

You can download the pre-compiled binaries for your operating system from the [GitHub Releases](https://github.com/UnitVectorY-Labs/mcp-tf-provider-docs/releases/tag/v0.3.2) page. Alternatively, if you prefer installing from source, you can use the following command:

```bash
go install github.com/UnitVectorY-Labs/mcp-tf-provider-docs@latest
```

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Reference: [UnitVectorY-Labs/mcp-tf-provider-docs](https://github.com/UnitVectorY-Labs/mcp-tf-provider-docs), release v0.3.2, generated on June 23, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
