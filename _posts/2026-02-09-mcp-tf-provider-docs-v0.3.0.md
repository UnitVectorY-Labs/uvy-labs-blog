---
layout: post
title: "mcp-tf-provider-docs v0.3.0 Released"
date: 2026-02-09 03:06:25 -0500
tags: ["mcp-tf-provider-docs", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the release of **mcp-tf-provider-docs v0.3.0**, published on February 9, 2026. This release continues our commitment to keeping the project up-to-date with the latest dependencies and ensuring a smooth, reliable experience for users integrating Terraform provider documentation into their AI-powered development workflows.

## What's New

Version 0.3.0 brings a series of important updates that keep mcp-tf-provider-docs running smoothly:

### Updated Dependencies
This release includes several updates to the core `mcp-go` library (now at version 0.43.2), ensuring compatibility with the latest Model Context Protocol features and improvements.

### Build System Improvements
The project has been updated to use Go 1.25.7, along with upgraded GitHub Actions for checkout, caching, and UV setup. These updates improve build reliability and performance.

### Bug Fix
A fix has been included that ensures the build version is properly set from build info when not explicitly defined, improving version tracking and diagnostics.

## Why It Matters

Keeping dependencies current is essential for any project that relies on external libraries and tools. By updating to the latest versions of `mcp-go`, GitHub Actions, and Go itself, v0.3.0 ensures:

- **Better compatibility** with the evolving MCP ecosystem
- **Improved security** through updated dependencies
- **Enhanced build reliability** with modern tooling
- **Smoother deployment** across all supported platforms

For teams using mcp-tf-provider-docs to power Terraform code generation in their AI-assisted workflows, these updates mean a more stable and reliable foundation for your development infrastructure.

## Getting Started

### Installation

Download the pre-compiled binary for your platform from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/mcp-tf-provider-docs/releases/tag/v0.3.0). Binaries are available for:

- macOS (Intel and Apple Silicon)
- Linux (x86_64, ARM64, and 32-bit)
- Windows (x86_64 and 32-bit)

All releases include checksum files for verification.

### Install from Source

If you prefer to build from source, ensure you have Go 1.25.7 or later installed:

```bash
go install github.com/UnitVectorY-Labs/mcp-tf-provider-docs@v0.3.0
```

### Configuration

The server requires a configuration file specifying the location of your Terraform provider documentation. See the [README](https://github.com/UnitVectorY-Labs/mcp-tf-provider-docs) for detailed configuration options.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Release v0.3.0 was published on February 9, 2026. [Learn more about this project](https://github.com/UnitVectorY-Labs/mcp-tf-provider-docs) or check out the [full release notes](https://github.com/UnitVectorY-Labs/mcp-tf-provider-docs/releases/tag/v0.3.0). Article by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
