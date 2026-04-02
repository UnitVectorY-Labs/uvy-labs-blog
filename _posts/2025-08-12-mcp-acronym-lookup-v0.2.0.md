---
layout: post
title: "mcp-acronym-lookup v0.2.0: Streamlined HTTP Transport and Enhanced Tool Annotations"
date: 2025-08-12 02:15:18 -0500
tags: ["mcp-acronym-lookup", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the release of mcp-acronym-lookup v0.2.0, published on August 12, 2025. This release represents a significant evolution in how your AI agents connect to the acronym lookup service, bringing improved protocol support and better integration with Model Context Protocol clients.

The primary focus of v0.2.0 is a major transport upgrade—migrating from SSE (Server-Sent Events) to Streamable HTTP transport. This change aligns the server with current MCP specification recommendations while maintaining the same core functionality you rely on: turning your CSV files of acronyms into powerful lookup tools for AI agents.

## What's New

### Streamable HTTP Transport

The headline change in v0.2.0 is the migration to Streamable HTTP transport. This modernizes the server's communication protocol and brings it in line with evolving MCP best practices. The new transport mode offers simplified endpoint management and improved compatibility with a broader range of MCP clients.

**Important:** If you're upgrading from v0.1.0, note that SSE support has been removed. Configuration changes are required—see the upgrade section below for details.

### Enhanced Tool Annotations

The `lookupAcronym` tool now includes metadata that makes it more discoverable and usable by AI agents:

- **Title annotation**: The tool is now labeled "Lookup Acronym" for clearer display in agent interfaces
- **Read-only hint**: Agents can now recognize that this tool performs lookups without modifying any state, enabling safer integration patterns

These annotations improve the user experience when integrating mcp-acronym-lookup into AI assistant workflows.

### Dynamic Version Reporting

Gone are the days of hardcoded version strings. v0.2.0 now reports the actual release version at runtime, so you can verify which version you're running and ensure compatibility with your MCP clients.

### Under-the-Hood Updates

This release includes updates to the underlying mcp-go library (from v0.26.0 to v0.37.0) and Go runtime upgrades through 1.24.6, bringing performance improvements and security patches from the broader ecosystem.

## Why It Matters

Transport protocol modernization is more than just keeping up with standards—it's about ensuring your AI infrastructure remains compatible with the tools and clients that are shaping the future of Model Context Protocol development. Streamable HTTP transport offers a more streamlined connection model, reducing complexity in deployment configurations while maintaining reliable communication between your acronym database and AI agents.

The enhanced tool annotations address a practical need: AI assistants work better when they understand not just what tools are available, but how those tools behave. By marking `lookupAcronym` as read-only, the server helps agents make informed decisions about when and how to use it.

For teams maintaining acronym databases across different domains—whether technical documentation, business terminology, or domain-specific jargon—this release ensures their lookup infrastructure stays current with MCP protocol evolution while continuing to deliver the same reliable translations their workflows depend on.

## Upgrade and Installation

### Breaking Change: Transport Protocol Migration

If you're upgrading from v0.1.0, there's one critical change to be aware of:

**Command-line flag update:**
```bash
# Old (v0.1.0)
--sse <addr>

# New (v0.2.0)
--http <addr>
```

**Endpoint URL changes:**
```
# Old endpoints (no longer available)
/mcp/sse
/mcp/message

# New endpoint
/mcp
```

Update your MCP client configurations and deployment scripts to use the new `--http` flag and `/mcp` endpoint.

### Installation Options

**Download pre-built binaries:**
Choose from archives for macOS (Intel and Apple Silicon), Linux (amd64, 386, ARM64), and Windows. All releases include checksums for verification.

**Install via Go:**
```bash
go install github.com/UnitVectorY-Labs/mcp-acronym-lookup@v0.2.0
```

### Configuration Unchanged

Your CSV configuration file format remains the same—three columns (acronym, full form, description) specified via the `ACRONYM_FILE` environment variable. If your setup worked with v0.1.0, it will work with v0.2.0 once you've updated the transport settings.

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For more information, see the [mcp-acronym-lookup v0.2.0 release](https://github.com/UnitVectorY-Labs/mcp-acronym-lookup/releases/tag/v0.2.0) published on August 12, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
