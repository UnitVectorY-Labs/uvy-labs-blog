---
layout: post
title: "mcp-graphql-forge v0.9.0: Configurable Output Formats for Smarter AI Workflows"
date: 2025-12-17 09:00:00 -0500
tags: ["mcp-graphql-forge", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the release of mcp-graphql-forge v0.9.0, bringing a highly requested feature that significantly improves token efficiency when working with AI agents and GraphQL APIs.

Released on December 17, 2025, this version introduces configurable output format support, giving you full control over how GraphQL responses are formatted before they reach your LLM. Whether you're looking to reduce token costs, optimize for specific data patterns, or maintain backward compatibility, v0.9.0 has you covered.

## What's New

### Configurable Output Formats

The headline feature in v0.9.0 is the new `output` configuration option, which lets you choose from three distinct output formats when defining your GraphQL tools:

**raw (default)** – Returns responses exactly as received from the GraphQL server with no modification. This maintains full backward compatibility with existing configurations—if you don't specify an output format, nothing changes.

**json** – Delivers minimized JSON output with all unnecessary whitespace removed. Perfect for reducing payload size while maintaining standard JSON compatibility. The system automatically falls back to raw mode if it encounters invalid JSON.

**toon** – The star of the show. TOON (Token-Oriented Object Notation) transforms structured data into a compact, tabular format specifically designed for LLM consumption. For uniform data like lists of users, repositories, or issues, TOON can reduce token usage by 30-60% compared to standard JSON.

Here's how simple it is to use:

```yaml
name: "getUser"
description: "Fetch user information"
query: |
  query ($login: String!) {
    user(login: $login) {
      id
      name
      url
      location
    }
  }
inputs:
  - name: "login"
    type: "string"
    required: true
output: "toon"  # Choose: raw, json, or toon
```

### Real-World Impact

Consider a query returning user data. In standard JSON format, that might look like:

```json
{
  "data": {
    "user": {
      "id": "U_123",
      "name": "Alice Smith",
      "url": "https://github.com/alice",
      "location": "San Francisco, CA"
    }
  }
}
```

With TOON format, the same data becomes:

```
data{user{id,name,url,location}}:
  U_123,Alice Smith,https://github.com/alice,San Francisco, CA
```

That dramatic compression adds up quickly when you're making hundreds of queries across large datasets.

## Why It Matters

This release represents a strategic focus on efficiency without sacrificing flexibility. Here's why that matters:

**Cost Reduction**: Token usage directly translates to API costs. For teams running production workloads with frequent GraphQL queries, the TOON format can deliver substantial savings over time.

**Better LLM Performance**: LLMs process token counts, and fewer tokens often mean faster responses and lower latency. TOON's tabular structure is also easier for models to parse and reason about when dealing with structured data.

**No Breaking Changes**: We know that changing output formats can be risky. That's why v0.9.0 defaults to `raw` mode when no format is specified, ensuring your existing tool configurations continue working without any modifications.

**Future-Proof Design**: The modular output processing system makes it easy to add new formats in future releases as the ecosystem evolves.

### A New Contributor Welcome

We're also thrilled to welcome @Copilot, who made their first contribution to the project by implementing this feature. Open source thrives on contributions like these.

## Getting Started

### Installing v0.9.0

Pre-compiled binaries are available for macOS, Linux, and Windows from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/mcp-graphql-forge/releases/tag/v0.9.0).

Or install directly with Go:

```bash
go install github.com/UnitVectorY-Labs/mcp-graphql-forge@v0.9.0
```

### Upgrade Notes for Existing Users

If you're upgrading from v0.8.x, no action is required. Your existing tool configurations will work exactly as before. To take advantage of the new output formats:

1. Update your tool YAML files to include the `output` field
2. Start with `toon` for tabular data (lists, collections)
3. Use `json` when you need compact but standard JSON
4. Stick with `raw` for maximum compatibility or debugging

The new `github.com/toon-format/toon-go` dependency is pulled in automatically via Go modules when building from source.

## What's Next

This release lays the groundwork for even more efficiency-focused features. As we gather feedback on output format usage patterns, we'll continue optimizing the MCP server experience for AI-driven workflows.

Ready to give it a try? Grab v0.9.0 from the [releases page](https://github.com/UnitVectorY-Labs/mcp-graphql-forge/releases/tag/v0.9.0) and start experimenting with TOON format today.

---

*Transparency Note: This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on December 17, 2025, based on release information from the [mcp-graphql-forge repository](https://github.com/UnitVectorY-Labs/mcp-graphql-forge). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
