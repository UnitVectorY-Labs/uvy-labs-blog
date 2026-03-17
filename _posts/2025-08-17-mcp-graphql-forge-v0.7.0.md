---
layout: post
title: "mcp-graphql-forge v0.7.0: Modernizing Transport and Configuration"
date: 2025-08-17 19:23:32 -0500
tags: [mcp-graphql-forge, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introducing v0.7.0

On August 17, 2025, we released **mcp-graphql-forge v0.7.0**, a significant update that modernizes the project's transport layer and enhances configuration flexibility for developers building AI agent systems.

This release represents a strategic evolution of mcp-graphql-forge, aligning it with contemporary MCP protocol standards while making deployment in containerized and automated environments more straightforward than ever before.

## What's New

### Streamable HTTP Transport Mode

The headline feature in v0.7.0 is the introduction of **Streamable HTTP transport**, replacing the previous SSE (Server-Sent Events) mode. This change brings several benefits:

- **Single, Clean Endpoint**: Your MCP server is now available at a unified `http://localhost:<port>/mcp` endpoint instead of multiple SSE endpoints
- **Modern Standards**: Streamable HTTP is the current standard for MCP transport, ensuring better compatibility with evolving MCP clients
- **Simpler Configuration**: Switch to HTTP mode with the new `--http` flag:

```bash
./mcp-graphql-forge --http 8080
# Server available at: http://localhost:8080/mcp
```

### Enhanced Configuration Control

Version 0.7.0 introduces explicit command-line flags that provide greater control over server configuration, particularly valuable in container orchestration and CI/CD pipelines:

- **`--forgeConfig`**: Specify the path to your configuration folder containing `forge.yaml` and tool definitions
- **`--forgeDebug`**: Enable detailed debug logging to stderr

These CLI parameters take precedence over environment variables, giving you predictable behavior in complex deployment scenarios. If neither a flag nor environment variable is set, v0.7.0 now provides a clear error message rather than silently defaulting to the current directory.

### Authorization Header Passthrough

A new capability allows incoming Authorization headers to be forwarded directly to your backend GraphQL endpoint when no `token_command` is configured. This enables:

- Flexible authentication patterns where the MCP client manages tokens
- Reduced configuration complexity for deployments using external token management
- More transparent handling of bearer tokens in HTTP transport mode

### Security Improvements

Debug logging has been enhanced to hash token values using SHA256 instead of printing them in plain text, improving security when troubleshooting authentication issues.

## Why It Matters

**v0.7.0 positions mcp-graphql-forge for production readiness.** The shift to Streamable HTTP transport ensures compatibility with the broader MCP ecosystem as it evolves toward modern transport standards. This isn't just a technical upgrade—it's an investment in long-term maintainability and interoperability.

The enhanced configuration options address real-world deployment pain points. Whether you're running mcp-graphql-forge in Kubernetes, Docker Compose, or any containerized environment, the new CLI flags provide the explicit control that infrastructure-as-code workflows demand.

For teams managing authentication across multiple services, the authorization header passthrough feature eliminates a common source of configuration complexity. Instead of duplicating token management logic, you can leverage existing authentication flows.

## Getting Started

### Installing v0.7.0

Pre-compiled binaries are available for all major platforms from the [GitHub release page](https://github.com/UnitVectorY-Labs/mcp-graphql-forge/releases/tag/v0.7.0):

- macOS (AMD64 and ARM64)
- Linux (386, AMD64, and ARM64)
- Windows (386 and AMD64)

Each asset includes MD5 and SHA256 checksums for verification.

### Upgrading from v0.6.0

If you're currently using **stdio mode**, there are no breaking changes—you can upgrade seamlessly.

For **HTTP transport users** migrating from the previous SSE mode, update your configuration:

**Before (v0.6.0)**:
```bash
./mcp-graphql-forge --sse localhost:8080
# Endpoints: /mcp/sse and /mcp/message
```

**After (v0.7.0)**:
```bash
./mcp-graphql-forge --http 8080
# Endpoint: http://localhost:8080/mcp
```

Update any MCP client configurations to point to the new single endpoint path `/mcp`.

### Example Configuration

Here's a complete example using the new features:

```bash
./mcp-graphql-forge --http 8080 --forgeConfig /etc/mcp-graphql-forge --forgeDebug
```

This starts the server in HTTP mode on port 8080, loads configuration from `/etc/mcp-graphql-forge`, and enables debug logging.

## Looking Forward

v0.7.0 is an infrastructure-focused release that lays the groundwork for future enhancements. By modernizing the transport layer and improving configuration management, we've set a solid foundation for the features and integrations to come.

We encourage all users to upgrade and experience the improved deployment experience. As always, feedback and contributions are welcome on [GitHub](https://github.com/UnitVectorY-Labs/mcp-graphql-forge).

---

**Transparency Note**: This release announcement was AI-generated using the `unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M` model. It references the mcp-graphql-forge v0.7.0 release from the UnitVectorY-Labs/mcp-graphql-forge repository, released on August 17, 2025. Generated by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
