---
layout: post
title: "mcp-vertex-search-snippets v0.2.0: Stable API Integration and Version Reporting Improvements"
date: 2026-02-09 03:05:26 -0500
tags: ["mcp-vertex-search-snippets", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introduction

Today we're pleased to announce the release of **mcp-vertex-search-snippets v0.2.0**, published on February 9, 2026. This release brings important improvements to the project's stability and reliability, including a transition to the stable Vertex AI Search API and enhanced version reporting for users who install from source.

As a lightweight MCP (Model Context Protocol) server integrating with Google Cloud's Vertex AI Search, mcp-vertex-search-snippets enables document discovery through high-quality search snippets and extractive segments. Version 0.2.0 represents the project's commitment to production-readiness and ongoing maintenance.

## What's New

### Stable Vertex AI Search API

The most significant technical improvement in v0.2.0 is the transition from the `/v1alpha/` API endpoints to the stable `/v1/` API. This change moves your Vertex AI Search integration from an alpha (pre-release) API to a production-grade endpoint, providing:

- **Long-term stability**: Stable APIs are backed by Google's production commitments and are not subject to the deprecation timelines that affect alpha endpoints
- **Better reliability**: Production APIs undergo more rigorous testing and monitoring
- **Future-proofing**: Your integration is now aligned with Google's long-term API roadmap

This upgrade happens automatically when you update to v0.2.0—no configuration changes required on your part.

### Improved Version Reporting

For users who install mcp-vertex-search-snippets from source using `go install`, version reporting has been significantly improved. Previously, installations built outside of formal release contexts would report "dev" as their version. Now:

- The application correctly reads its version from Go's build information
- Installing via `go install github.com/UnitVectorY-Labs/mcp-vertex-search-snippets@v0.2.0` will show the proper version number
- This makes debugging and troubleshooting easier when working with different installations

### Dependency Updates

The release includes important updates to core dependencies:

- **mcp-go (v0.38.0 → v0.43.2)**: Five minor version updates bring stability improvements and bug fixes to the underlying MCP protocol implementation
- **OAuth2 (v0.30.0 → v0.35.0)**: Security and compatibility updates for Google Cloud authentication

## Why It Matters

This release may not introduce flashy new features, but it focuses on what matters most for production deployments: **reliability and maintainability**.

By migrating to the stable Vertex AI Search API, the project ensures that your document discovery workflows remain stable over time without unexpected breaking changes from upstream API deprecations. This is especially important for teams relying on mcp-vertex-search-snippets as part of their infrastructure.

The improved version reporting benefits developers and DevOps engineers who deploy from source or need to verify installed versions across multiple environments. Being able to accurately identify which version you're running is fundamental to effective operations.

The steady pace of dependency updates demonstrates active maintenance and attention to security—a reassuring signal for anyone considering this tool for their stack.

## Upgrade Instructions

Upgrading to v0.2.0 is straightforward with no breaking changes from v0.1.0:

### Pre-compiled Binaries (Recommended)

Download the appropriate binary for your platform from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets/releases/tag/v0.2.0):

- **macOS**: `mcp-vertex-search-snippets-v0.2.0-darwin-amd64.tar.gz` or `darwin-arm64.tar.gz`
- **Linux**: `mcp-vertex-search-snippets-v0.2.0-linux-amd64.tar.gz`, `linux-arm64.tar.gz`, or `linux-386.tar.gz`
- **Windows**: `mcp-vertex-search-snippets-v0.2.0-windows-amd64.zip` or `windows-386.zip`

Each archive includes checksums (MD5 and SHA256) for verification.

### From Source

```bash
go install github.com/UnitVectorY-Labs/mcp-vertex-search-snippets@v0.2.0
```

No configuration file changes are needed—your existing `vertex.yaml` setup continues to work as before. All command-line flags, including the `--http` flag for streamable HTTP mode, remain unchanged.

## Continue Exploring

You can explore the full changelog, download binaries, and review the project documentation on the [GitHub repository](https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets). As the project continues to mature, we look forward to bringing more features while maintaining the stability and simplicity that make mcp-vertex-search-snippets useful for document discovery workflows.

---

*Transparency note: This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was authored by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller) on March 17, 2026, based on the v0.2.0 release published February 9, 2026 from the UnitVectorY-Labs/mcp-vertex-search-snippets repository.*
