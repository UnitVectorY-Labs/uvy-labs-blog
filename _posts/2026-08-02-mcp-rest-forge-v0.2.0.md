---
layout: post
title: "mcp-rest-forge v0.2.0: Aligning with the Official MCP Standard"
date: 2026-08-02 09:00:00 -0500
tags: ["mcp-rest-forge", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On August 2, 2026, we released mcp-rest-forge v0.2.0. This update is primarily focused on alignment and maintenance, ensuring that our lightweight, configuration-driven MCP server remains compliant with the evolving standards of the Model Context Protocol.

### What's new

The headline of this release is a significant internal migration. mcp-rest-forge has transitioned from a community-led library to the official MCP Go SDK (`github.com/modelcontextprotocol/go-sdk`). While much of this work happens under the hood, it provides a more robust foundation for all our users.

Additionally, this version brings:
- **Go Toolchain Update**: We've upgraded to Go v1.26.5, leveraging the latest performance and language improvements.
- **Authentication Fix**: We resolved a regression in HTTP transport mode where the `Authorization` header was not being correctly passed through to backend APIs when a `token_command` was not configured.

### Why it matters

For most users, the experience of defining tools via YAML remains unchanged, but the reliability of the system is enhanced. By migrating to the official SDK, we ensure that mcp-rest-forge is fully compliant with the MCP specification, meaning better interoperability with a wider range of AI agents and clients.

The fix for HTTP Authorization is particularly critical for those using streamable HTTP transport, ensuring that secure API calls continue to work seamlessly without interruption.

### Getting started with v0.2.0

Upgrading to v0.2.0 is straightforward, as there are no breaking changes to the YAML configuration schema or the command-line interface. Your existing `forge.yaml` and tool definitions will work exactly as before.

- **Binary Users**: Download the latest pre-compiled executable for your platform from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/mcp-rest-forge/releases/tag/v0.2.0).
- **Go Users**: You can update your installation by running:
  `go install github.com/UnitVectorY-Labs/mcp-rest-forge@latest`

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It is based on the [mcp-rest-forge](https://github.com/UnitVectorY-Labs/mcp-rest-forge) repository and the [v0.2.0 release](https://github.com/UnitVectorY-Labs/mcp-rest-forge/releases/tag/v0.2.0) on August 2, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
