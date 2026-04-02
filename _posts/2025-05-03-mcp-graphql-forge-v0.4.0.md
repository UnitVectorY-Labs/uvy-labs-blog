---
layout: post
title: "mcp-graphql-forge v0.4.0: Introducing SSE Mode for HTTP-Based MCP Operations"
date: 2025-05-03 21:49:52 -0500
tags: ["mcp-graphql-forge", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introducing v0.4.0

On May 3, 2025, we released mcp-graphql-forge v0.4.0, a significant update that expands how you can deploy and connect to your GraphQL-based MCP servers. This release introduces HTTP/SSE (Server-Sent Events) mode as a new operational option, giving users greater flexibility in how they integrate mcp-graphql-forge into their AI agent workflows.

For teams who prefer network-based communication over stdio connections, or who need to deploy the server in environments where HTTP endpoints are required, v0.4.0 delivers exactly what you've been asking for—all while maintaining full backward compatibility with existing setups.

## What's New

### SSE Mode: HTTP-Based MCP Server Operation

The headline feature of v0.4.0 is native support for Server-Sent Events (SSE) mode. Previously, mcp-graphql-forge operated exclusively via stdio, requiring direct process-based connections. Now, you can run the server as an HTTP service.

To start the server in SSE mode:

```bash
mcp-graphql-forge --sse localhost:8080
```

When launched this way, the server exposes two endpoints:
- `/mcp/sse` - The SSE endpoint where clients establish connections
- `/mcp/message` - The message endpoint for client communication

The server will confirm startup with clear output showing your active endpoints, making it easy to verify your configuration is working.

This capability opens up new deployment scenarios:
- Run the server as a background service or container
- Connect from remote MCP clients over your network
- Integrate with infrastructure that expects HTTP-based tool services
- Scale horizontally with load balancers and reverse proxies

### Enhanced Debugging with Detailed Logging

When you set `FORGE_DEBUG=true`, v0.4.0 provides substantially more visibility into what's happening under the hood. The enhanced logging now includes:

- Full HTTP request dumps with headers and body content
- Pretty-printed JSON responses for easier reading
- Status code display for every GraphQL request
- Authentication token logging (when using `token_command`)

These improvements make troubleshooting GraphQL integration issues significantly faster, especially when diagnosing authentication problems or unexpected API responses.

### Under-the-Hood Updates

The SSE functionality required updating the core MCP library (`mcp-go`) from version 0.23.0 to 0.25.0. This dependency bump brings all the improvements and bug fixes from those intermediate releases, though users continuing with stdio mode will experience these as transparent enhancements.

## Why It Matters

SSE mode represents a shift in how mcp-graphql-forge fits into your infrastructure. stdio-based operation works great for local development and simple setups, but production environments often require HTTP services that can:

- Survive process restarts without losing connection state
- Be monitored with standard HTTP health check tools
- Scale across multiple instances behind a load balancer
- Integrate with service meshes and Kubernetes deployments
- Connect from clients running on different machines or containers

With v0.4.0, mcp-graphql-forge now supports both paradigms. You can start with stdio during development and seamlessly switch to SSE when you're ready for production—no configuration changes required.

The enhanced debugging also matters for teams working with complex GraphQL schemas or dealing with authentication challenges. Having detailed request/response visibility without needing to add external logging infrastructure accelerates development and reduces time-to-resolution for integration issues.

## Getting Started

### Installation

Download the pre-built binary for your platform from the [v0.4.0 release page](https://github.com/UnitVectorY-Labs/mcp-graphql-forge/releases/tag/v0.4.0):

| Platform | Architecture | Asset |
|----------|-------------|-------|
| macOS | amd64 | `mcp-graphql-forge-v0.4.0-darwin-amd64.tar.gz` |
| macOS | arm64 | `mcp-graphql-forge-v0.4.0-darwin-arm64.tar.gz` |
| Linux | amd64 | `mcp-graphql-forge-v0.4.0-linux-amd64.tar.gz` |
| Linux | arm64 | `mcp-graphql-forge-v0.4.0-linux-arm64.tar.gz` |
| Windows | amd64 | `mcp-graphql-forge-v0.4.0-windows-amd64.zip` |

Each release includes checksums (MD5 and SHA256) for verification.

### Quick Start: SSE Mode

```bash
# 1. Extract the downloaded archive
tar -xzf mcp-graphql-forge-v0.4.0-linux-amd64.tar.gz

# 2. Move the binary to your PATH
sudo mv mcp-graphql-forge /usr/local/bin/

# 3. Set up your configuration (if not already done)
export FORGE_CONFIG=./config

# 4. Start in SSE mode
mcp-graphql-forge --sse localhost:8080
```

### Quick Start: stdio Mode (Unchanged)

If you're upgrading from a previous version and want to keep using stdio mode:

```bash
# No changes needed—just run as before
mcp-graphql-forge
```

All existing `forge.yaml` configurations and tool definitions continue to work without modification.

### Enable Enhanced Debugging

```bash
export FORGE_DEBUG=true
mcp-graphql-forge --sse localhost:8080
```

You'll now see detailed request/response logs for every GraphQL call the server makes.

---

**Transparency Note:** This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Generated on reference to https://github.com/UnitVectorY-Labs/mcp-graphql-forge/releases/tag/v0.4.0 (May 3, 2025). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
