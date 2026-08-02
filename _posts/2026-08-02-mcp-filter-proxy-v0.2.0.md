---
layout: post
title: "mcp-filter-proxy v0.2.0: Stability and Alignment with the Official MCP SDK"
date: 2026-08-02 09:00:00 -0500
tags: ["mcp-filter-proxy", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on August 2, 2026, `mcp-filter-proxy` v0.2.0 brings a major internal upgrade that significantly boosts the stability and reliability of the proxy. This release focuses on aligning the project with the official Model Context Protocol (MCP) standard, ensuring a more robust experience for users managing remote MCP servers.

## What's new

- **Official SDK Migration**: We've migrated from the community-maintained `mcp-go` to the official `modelcontextprotocol/go-sdk`. This ensures full compatibility with the latest MCP specifications.
- **Improved Stability**: Notification handlers for tools and resources now run asynchronously. This means the proxy won't block your main event loop when refreshing tool lists from remote servers.
- **Standardized Error Handling**: We've updated how tool errors are reported. Instead of protocol-level errors, the proxy now returns standard `CallToolResult` errors, making it easier for LLM clients to handle tool failures gracefully.
- **Enhanced Validation**: New JSON schema checks ensure that remote tools are properly formatted before they are proxied, preventing unexpected crashes.

## Why it matters

For users, this means a more reliable bridge between their LLMs and remote tools. By moving to the official SDK, `mcp-filter-proxy` is now better positioned for future updates to the MCP protocol. The performance improvements in event handling and the standardization of error reporting result in a smoother, more predictable interaction for the end-user.

## Upgrade and Installation

Upgrading to v0.2.0 is seamless. There are no breaking changes to CLI flags or configuration. Simply download the latest binaries for your platform from the [GitHub releases page](https://github.com/UnitVectorY-Labs/mcp-filter-proxy/releases/tag/v0.2.0) and replace your existing executable.

---

*This post was AI-generated using the `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL` model.
Repository: [UnitVectorY-Labs/mcp-filter-proxy](https://github.com/UnitVectorY-Labs/mcp-filter-proxy)
Release: [v0.2.0](https://github.com/UnitVectorY-Labs/mcp-filter-proxy/releases/tag/v0.2.0)
Date of generation: August 2, 2026
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
