---
layout: post
title: "mcp-vertex-search-snippets v0.1.2 Released: Critical Bug Fix for US Location Users"
date: 2025-09-03 22:18:21 -0500
tags: ["mcp-vertex-search-snippets", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introduction

On September 3, 2025, we released version **v0.1.2** of mcp-vertex-search-snippets, a targeted bug fix release that resolves a critical connection issue affecting users with US-based Vertex AI Search configurations.

This release addresses an API endpoint URL construction problem that prevented users from successfully connecting to the Vertex AI Search service when configured with `location: "us"`. If you upgraded to v0.1.1 and experienced unexpected connection failures, this release restores full functionality.

## What's New

### Critical Bug Fix: US Location URL Construction

The headline fix in v0.1.2 corrects how the application constructs the Google Cloud Discovery Engine API endpoint for US location users. 

**The Problem:** In v0.1.1, the code inadvertently created a malformed domain URL (`usus-discoveryengine.googleapis.com`) that caused connection failures for anyone using `location: "us"` in their configuration.

**The Solution:** v0.1.2 now correctly generates the proper domain endpoint (`us-discoveryengine.googleapis.com`), restoring full connectivity for US-based deployments.

### What This Means For You

- **US Location Users:** If you have `location: "us"` in your `vertex.yaml` configuration and experienced connection failures after upgrading to v0.1.1, this fix resolves the issue immediately.
- **EU and Global Users:** No impact – configurations using `location: "eu"` or `location: "global"` were unaffected.

## Why It Matters

This release ensures that mcp-vertex-search-snippets works reliably across all supported Google Cloud regions. The Model Context Protocol server is designed to integrate seamlessly with Vertex AI Search for document discovery and extractive snippet retrieval. Connection failures due to URL construction errors would have completely blocked this functionality for affected users.

The fix maintains full backward compatibility – no changes to your configuration files or setup are required. Simply upgrade to v0.1.2, and the correct endpoint will be used automatically.

## Upgrade Information

### Installing v0.1.2

**From Source:**
```bash
go install github.com/UnitVectorY-Labs/mcp-vertex-search-snippets@v0.1.2
```

**Pre-compiled Binaries:**

Download the appropriate binary for your platform from the [v0.1.2 release page](https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets/releases/tag/v0.1.2):

- **macOS (Intel):** `mcp-vertex-search-snippets-v0.1.2-darwin-amd64.tar.gz`
- **macOS (Apple Silicon):** `mcp-vertex-search-snippets-v0.1.2-darwin-arm64.tar.gz`
- **Linux:** Available for AMD64, 386, and ARM64 architectures
- **Windows:** Available for AMD64 and 386

All release assets include checksums (MD5 and SHA256) for verification.

### Configuration

No configuration changes are needed. Your existing `vertex.yaml` file works as-is:

```yaml
project_id: "your-project-id"
location: "us"  # Now working correctly
app_id: "your-engine-id"
```

## Looking Ahead

While v0.1.2 resolves the US location domain issue, users may want to consider upgrading to **v0.1.3** (released October 8, 2025), which includes additional improvements to the API path version (`/v1alpha/` → `/v1/`) for enhanced compatibility with Google Cloud's stable API endpoints.

---

**Transparency Note:** This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 17, 2026. Source material: [UnitVectorY-Labs/mcp-vertex-search-snippets](https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets), Release v0.1.2 (September 3, 2025). Authored by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
