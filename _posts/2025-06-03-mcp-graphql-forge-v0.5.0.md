---
layout: post
title: "mcp-graphql-forge v0.5.0: Environment Variable Support for Token Commands"
date: 2025-06-03 02:07:38 -0500
tags: ["mcp-graphql-forge", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Announcing mcp-graphql-forge v0.5.0

We're excited to release **v0.5.0** of mcp-graphql-forge, a significant enhancement that brings greater flexibility to authentication workflows. Released on June 3, 2025, this version introduces environment variable support for token commands, enabling users to configure complex authentication scenarios with ease.

## What's New

### Environment Variable Support for Token Commands

The headline feature in v0.5.0 is comprehensive environment variable support for your `token_command`. This update addresses a common pain point: authentication scripts that require specific environment variables to function properly.

You can now configure token commands in two ways:

**Pass all current environment variables:**
```yaml
token_command: "gh auth token"
env_passthrough: true
```

**Or pass specific environment variables:**
```yaml
token_command: "./auth-script.sh"
env:
  AWS_PROFILE: "production"
  CUSTOM_CONFIG_PATH: "/etc/myapp/auth.conf"
```

Both options can be combined, with explicit `env` values taking precedence over passthrough variables. This flexibility supports a wide range of use cases, from containerized deployments requiring specific environment context to custom authentication scripts that depend on external configuration.

### Improved SSE Server Reliability

For users running mcp-graphql-forge in HTTP/SSE mode, we've upgraded the server configuration to use static base path handling. This change makes SSE connections more predictable and reliable when serving MCP clients over HTTP/SSE endpoints.

## Why It Matters

Authentication complexity has long been a friction point for developers integrating external tools with AI assistants. Token commands that work perfectly in interactive shells often fail when invoked from automated contexts due to missing environment variables.

With v0.5.0, your authentication scripts can rely on the same environment context they expect, whether you're:

- Running in containerized environments with specific requirements
- Using authentication tools like GitHub CLI (`gh auth token`) that depend on environment setup
- Debugging token generation with detailed logging and environment inspection
- Integrating with enterprise identity providers requiring custom configuration

The upgrade process is seamless. This release maintains **full backward compatibility** – existing configurations continue to work without modification. The new `env` and `env_passthrough` options are entirely optional, so you can adopt them incrementally as your needs evolve.

## Installation and Upgrade

### Binary Downloads

Pre-built binaries are available for download from the [GitHub release page](https://github.com/UnitVectorY-Labs/mcp-graphql-forge/releases/tag/v0.5.0) with checksums for verification:

- **Darwin (macOS):** `darwin-amd64.tar.gz`, `darwin-arm64.tar.gz`
- **Linux:** `linux-amd64.tar.gz`, `linux-arm64.tar.gz`, `linux-386.tar.gz`
- **Windows:** `windows-amd64.zip`, `windows-386.zip`

Each release includes SHA256 and MD5 checksum files for integrity verification.

### Upgrade Process

1. Download the appropriate binary for your platform
2. Verify the checksum matches the provided hash file
3. Extract and replace the existing binary
4. (Optional) Update your `forge.yaml` to use the new `env` or `env_passthrough` options

No configuration migration is required – all existing configurations remain valid.

### Building from Source

If you prefer to build from source, v0.5.0 requires Go 1.24.3 and includes the updated mcp-go library (v0.31.0).

---

## Transparency Note

This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 17, 2026. The announcement is based on the official v0.5.0 release of [mcp-graphql-forge](https://github.com/UnitVectorY-Labs/mcp-graphql-forge/releases/tag/v0.5.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
