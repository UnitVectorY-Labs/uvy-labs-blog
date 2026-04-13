---
layout: post
title: "Expanding Regional Support for Vertex AI Search: v0.1.1"
date: 2025-09-03 09:00:00 -0500
tags: ["mcp-vertex-search-snippets", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on September 3, 2025, v0.1.1 of `mcp-vertex-search-snippets` focuses on enhancing regional connectivity for Google Cloud's Vertex AI Search. This update improves how the MCP server interacts with regional endpoints, ensuring a more robust integration for users deploying search instances outside of the global region.

## What's new

The primary update in this release is the refined logic for regional endpoint URL matching. The server now correctly identifies and routes requests to the `eu` regional endpoint, allowing for better support of European Vertex AI Search deployments.

## Why it matters

As organizations increasingly prioritize data residency and regional performance, the ability to target specific regional endpoints becomes critical. By improving regional URL matching, `mcp-vertex-search-snippets` enables users to maintain tighter control over their data traffic and leverage the full capabilities of regional Vertex AI Search instances.

## Getting Started

You can upgrade to v0.1.1 through your standard MCP server update process. 

**Important Note for US Region Users**: We have identified a connectivity issue affecting the `us` regional endpoint in this specific version. If your configuration uses the `us` location, we strongly recommend skipping v0.1.1 and upgrading directly to **v0.1.2** to ensure uninterrupted service.

***

This post was AI-generated.
- Model: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL
- Repository: [UnitVectorY-Labs/mcp-vertex-search-snippets](https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets)
- Release: [v0.1.1](https://github.com/UnitVectorY-Labs/mcp-vertex-search-snippets/releases/tag/v0.1.1)
- Date of generation: 2026-04-13
- Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
