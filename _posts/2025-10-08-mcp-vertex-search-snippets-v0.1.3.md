---
layout: post
title: "mcp-vertex-search-snippets v0.1.3 Released"
date: 2025-10-08 00:02:14 -0500
tags: ["mcp-vertex-search-snippets", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

Version 0.1.3 of mcp-vertex-search-snippets was released on October 8, 2025, bringing an important API stability fix and keeping dependencies up to date for all users.

This maintenance release focuses on ensuring your MCP server communicates with the production-grade Vertex AI Search API, while also delivering several dependency upgrades that improve reliability and security under the hood.

## What's New

### API Endpoint Correction

The most significant change in v0.1.3 is a fix to the Vertex AI Search API endpoint URL. The server now correctly uses the stable `/v1/` API path instead of the `/v1alpha/` path. This ensures you're always calling the production-ready API, providing better stability and long-term compatibility with Google Cloud's Vertex AI Search service.

### Dependency Updates

Several core dependencies have been upgraded to their latest versions:

- **mcp-go**: Upgraded from v0.38.0 to v0.41.1 (three incremental updates)
- **OAuth2 library**: Updated from v0.30.0 to v0.31.0
- **Go compiler**: Updated from 1.25.0 to 1.25.1

These updates keep your installation current with the latest security patches and improvements in the Go ecosystem.

## Why It Matters

The API endpoint correction is more than just a URL change—it's an assurance that you're building on a solid foundation. By targeting the stable v1 API instead of alpha versions, mcp-vertex-search-snippets ensures:

- **Production reliability**: The v1 API is fully supported and maintained by Google Cloud
- **Future compatibility**: Less risk of breaking changes as Vertex AI Search evolves
- **Consistent behavior**: Stable APIs provide predictable performance across different environments

For teams integrating Vertex AI Search into their AI workflows through MCP-compatible tools, this release removes any uncertainty about which API version is being used under the hood.

## Installation and Upgrade

Upgrading to v0.1.3 is straightforward with no configuration changes required. Choose your installation method:

### Pre-compiled Binaries (Recommended)

Download the binary for your platform from the [GitHub Release page](https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets/releases/tag/v0.1.3):

**macOS:**
```bash
# Intel Macs
wget https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets/releases/download/v0.1.3/mcp-vertex-search-snippets-v0.1.3-darwin-amd64.tar.gz

# Apple Silicon (M1/M2)
wget https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets/releases/download/v0.1.3/mcp-vertex-search-snippets-v0.1.3-darwin-arm64.tar.gz
```

**Linux:**
```bash
# AMD64
wget https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets/releases/download/v0.1.3/mcp-vertex-search-snippets-v0.1.3-linux-amd64.tar.gz

# ARM64
wget https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets/releases/download/v0.1.3/mcp-vertex-search-snippets-v0.1.3-linux-arm64.tar.gz
```

**Windows:**
```powershell
Invoke-WebRequest -Uri https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets/releases/download/v0.1.3/mcp-vertex-search-snippets-v0.1.3-windows-amd64.zip -OutFile mcp-vertex-search-snippets-v0.1.3-windows-amd64.zip
```

### From Source

If you prefer to build from source:

```bash
go install github.com/UnitVectorY-Labs/mcp-vertex-search-snippets@v0.1.3
```

Your existing `vertex.yaml` configuration file remains unchanged and compatible with this release.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For more details about this release, visit the [mcp-vertex-search-snippets repository](https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets) and check out [the v0.1.3 release](https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets/releases/tag/v0.1.3). Generated on March 17, 2026 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
