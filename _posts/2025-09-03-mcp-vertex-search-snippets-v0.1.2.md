---
layout: post
title: "Fix for US-based Vertex AI Search Endpoints"
date: 2025-09-03 09:00:00 -0500
tags: ["mcp-vertex-search-snippets", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on September 3, 2025, v0.1.2 is a targeted maintenance update for the mcp-vertex-search-snippets server. This release focuses on improving the reliability of connections for users operating within the US region.

## What's new

The primary update in this version is a critical fix for how API endpoint URLs are constructed when the server is configured for the `us` location. 

## Why it matters

Previously, users with their location set to `us` in their configuration encountered connection errors because the server was incorrectly generating the API domain (resulting in `usus-discoveryengine.googleapis.com` instead of the correct endpoint). This bug prevented the MCP server from successfully communicating with Vertex AI Search for a subset of users.

With this fix, connectivity is restored, ensuring that search snippets and extractive segments are retrieved reliably and without interruption for all US-based deployments.

## Upgrade and Installation

To benefit from this fix, we recommend upgrading to v0.1.2 immediately. You can do this by:

1. Downloading the latest pre-compiled binary for your platform from the [GitHub Releases](https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets/releases/tag/v0.1.2) page.
2. Or, installing directly via Go:
   ```bash
   go install github.com/UnitVectorY-Labs/mcp-vertex-search-snippets@latest
   ```

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It is based on the release v0.1.2 of the [mcp-vertex-search-snippets](https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets) repository, generated on April 13, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
