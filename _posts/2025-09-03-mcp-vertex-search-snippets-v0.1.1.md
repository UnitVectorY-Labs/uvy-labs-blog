---
layout: post
title: "mcp-vertex-search-snippets v0.1.1 Released"
date: 2025-09-03 09:37:15 -0500
tags: [mcp-vertex-search-snippets, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introduction

We're pleased to announce the release of **mcp-vertex-search-snippets v0.1.1**, published on September 3, 2025. This update addresses a critical configuration bug that affected users relying on US and global location settings in their Vertex AI Search integration.

For those new to the project, mcp-vertex-search-snippets is a lightweight MCP (Model Context Protocol) server that integrates with Google Cloud's Vertex AI Search, enabling you to query indexed documents and retrieve high-quality search snippets directly through your MCP client.

## What's New

While v0.1.1 is primarily a maintenance release, it includes an important fix:

### Fixed API Endpoint Configuration
- Corrected the API URL construction logic for US and global location configurations
- Users with `location: us` or `location: global` in their vertex.yaml configuration will now connect properly to Vertex AI Search APIs

This bug in v0.1.0 could have caused connection failures for users in these regions without a clear indication of the root cause.

## Why It Matters

The corrected URL logic ensures that your MCP server can properly communicate with Google Cloud's Discovery Engine API based on your configured location:

- **global**: Uses the standard `discoveryengine.googleapis.com` endpoint
- **us**: Properly routes to the US regional endpoint
- **eu**: Correctly uses `eu-discoveryengine.googleapis.com`

If you're running v0.1.0 with US or global location settings, upgrading to v0.1.1 is strongly recommended to ensure reliable connectivity.

## Getting Started

### Upgrade from v0.1.0

Upgrading is straightforward - no configuration changes are needed:

**From GitHub Releases:**
1. Download the appropriate binary for your platform from the [v0.1.1 release page](https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets/releases/tag/v0.1.1)
2. Replace your existing binary
3. Restart your MCP client

**From Source:**
```bash
go install github.com/UnitVectorY-Labs/mcp-vertex-search-snippets@v0.1.1
```

### First Time Installation

If you're new to mcp-vertex-search-snippets:

1. Download the pre-compiled binary for your platform (macOS, Linux, or Windows)
2. Configure your `vertex.yaml` file with your GCP project details:
   ```yaml
   project_id: "your-gcp-project-id"
   location: "us"  # or "eu" or "global"
   app_id: "your-discovery-engine-app-id"
   ```
3. Set up authentication using Google Cloud Application Default Credentials
4. Configure your MCP client to use the binary

No breaking changes in this release means existing configurations continue to work seamlessly.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Release data sourced from the [mcp-vertex-search-snippets repository](https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets), release v0.1.1, published September 3, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
