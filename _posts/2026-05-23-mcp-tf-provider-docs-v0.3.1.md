---
layout: post
title: "Enhancing Observability: mcp-tf-provider-docs v0.3.1"
date: 2026-05-23 09:00:00 -0500
tags: ["mcp-tf-provider-docs", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on May 23, 2026, version v0.3.1 of `mcp-tf-provider-docs` is a targeted maintenance release. While it keeps the core functionality intact, it strengthens the underlying infrastructure and adds a helpful tool for environment verification.

## What's new

The headline addition in this release is the introduction of the `--version` command-line flag. Users can now quickly verify their installation by running the tool with this flag, which returns the version number along with the Go runtime and system architecture. This addition simplifies debugging and ensures that users are running the expected build on their target platform.

## Why it matters

Beyond the new flag, v0.3.1 brings critical updates to the project's toolchain. By upgrading to Go v1.26.3 and updating the `mcp-go` library to version 0.54.0, we ensure that the MCP server remains performant, secure, and fully compatible with the evolving Model Context Protocol. These updates provide a more stable foundation for AI agents to access Terraform and Tofu provider documentation, reducing the friction between provider updates and agent capabilities.

## Upgrade Instructions

Upgrading to v0.3.1 is straightforward. You can download the latest binary from our GitHub Releases page or update via Go:

```bash
go install github.com/UnitVectorY-Labs/mcp-tf-provider-docs@latest
```

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Reference: [UnitVectorY-Labs/mcp-tf-provider-docs](https://github.com/UnitVectorY-Labs/mcp-tf-provider-docs), release [v0.3.1](https://github.com/UnitVectorY-Labs/mcp-tf-provider-docs/releases/tag/v0.3.1), generated on May 24, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
