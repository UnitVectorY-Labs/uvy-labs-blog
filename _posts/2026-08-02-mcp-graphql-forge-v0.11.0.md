---
layout: post
title: "mcp-graphql-forge v0.11.0: Moving to the Official MCP SDK"
date: 2026-08-02 09:00:00 -0500
tags: ["mcp-graphql-forge", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on August 2, 2026, mcp-graphql-forge v0.11.0 is a modernization release focused on stability and standardization. The primary highlight of this version is the migration to the official Model Context Protocol (MCP) Go SDK, ensuring that the server remains aligned with the evolving MCP specification and provides a more robust foundation for AI agent interactions.

## What's new

The core of this release is a significant internal transition. We have replaced the community-maintained `mark3labs/mcp-go` implementation with the official `modelcontextprotocol/go-sdk`. 

Key updates include:
- **Official SDK Integration**: The server now leverages the official MCP Go SDK for all core operations.
- **Standardized Tool Schemas**: Tool input definitions have been migrated to use formal JSON Schemas. This improves how MCP clients, such as Claude Desktop, discover and validate tool arguments, leading to more reliable agent behavior.
- **Refreshed Transports**: Both the standard I/O (Stdio) and HTTP transport layers have been updated to use official SDK implementations, improving communication reliability.
- **Language Update**: The project has been updated to Go v1.26.5 to take advantage of the latest language improvements.

## Why it matters

While much of the work in v0.11.0 happened under the hood, the impact on the user experience is meaningful. By moving to the official SDK, mcp-graphql-forge gains better long-term stability and guaranteed compatibility with the MCP specification.

For users, this means that the curated GraphQL tools you define in your configuration files will be more consistently recognized and utilized by AI agents. The move to standardized JSON Schemas reduces the friction between the server and the client, making the "forge" of tools more precise and predictable.

## Getting started with v0.11.0

Upgrading to v0.11.0 is seamless. This release is a drop-in replacement, meaning there are no changes required to your `forge.yaml` or tool configuration files.

To upgrade, you can run:
```bash
go install github.com/UnitVectorY-Labs/mcp-graphql-forge@latest
```
Alternatively, you can download the pre-compiled binaries directly from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/mcp-graphql-forge/releases/tag/v0.11.0).

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Generated on August 2, 2026, based on the v0.11.0 release of the [UnitVectorY-Labs/mcp-graphql-forge](https://github.com/UnitVectorY-Labs/mcp-graphql-forge) repository. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
