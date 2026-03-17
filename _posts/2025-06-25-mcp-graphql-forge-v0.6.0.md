---
layout: post
title: "mcp-graphql-forge v0.6.0: Introducing MCP Annotations Support"
date: 2025-06-25 02:28:56 -0500
tags: [mcp-graphql-forge, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introducing v0.6.0 with Enhanced Tool Annotations

We're excited to announce the release of **mcp-graphql-forge v0.6.0**, published on June 25, 2025. This release brings a significant enhancement to how your tools are presented in MCP clients through the addition of full annotations support, alongside important underlying improvements that keep your server running smoothly.

## What's New

### Annotations Support for Better Tool Presentation

The headline feature of v0.6.0 is comprehensive [MCP annotations](https://modelcontextprotocol.io/docs/concepts/tools#annotations) support for tool configurations. You can now add rich metadata to your tools that helps MCP clients understand and display them more effectively.

With annotations, you can specify:

- **`title`**: A human-readable title that appears in tool selectors and UI elements
- **`readOnlyHint`**: Indicates whether the tool only reads data without modifying anything
- **`destructiveHint`**: Warns users if a tool may perform destructive updates
- **`idempotentHint`**: Signals that repeating the same call has no additional effect
- **`openWorldHint`**: Indicates whether the tool interacts with external entities

Here's what a tool configuration looks like with annotations:

```yaml
tools:
  - name: getUser
    query: "query GetUser($id: ID!) { user(id: $id) { id name email } }"
    annotations:
      title: "Get User Information"
      readOnlyHint: true
      destructiveHint: false
      idempotentHint: true
      openWorldHint: false
```

These hints empower MCP clients to categorize tools appropriately, warn users before potentially destructive actions, and present a more intuitive interface for AI-assisted workflows.

### Dependency Updates

Under the hood, v0.6.0 includes important updates that improve stability and capabilities:

- **Upgraded to Go 1.24.4** – Brings performance improvements, security patches, and the latest language features
- **mcp-go library upgraded to 0.32.0** – This upstream update introduces OAuth support for SSE clients, fixes a memory leak in session tool management, improves SSE parsing, and adds better stateless mode handling

## Why It Matters

Annotations represent a step toward more intentional and safer AI-assisted workflows. By explicitly declaring tool characteristics like `readOnlyHint` or `destructiveHint`, you give MCP clients the information they need to surface important context to users before actions are taken.

This is particularly valuable when deploying mcp-graphql-forge in environments where multiple tools are available, and users need clear visual cues about which operations are safe exploratory queries versus those that might modify data or interact with external systems.

The dependency upgrades ensure you're running on the most stable and secure foundations possible, with upstream improvements that enhance everything from error handling to session management.

## Getting Started

### Installation

Download pre-compiled binaries for your platform from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/mcp-graphql-forge/releases/tag/v0.6.0), or install directly with Go:

```bash
go install github.com/UnitVectorY-Labs/mcp-graphql-forge@v0.6.0
```

### Upgrade Considerations

This release includes a minor breaking change: the `version` field has been removed from configuration files. Version handling is now done at build time through ldflags. If your existing `forge.yaml` contains a `version` field, simply remove it—the rest of your configuration remains fully compatible.

Annotations are entirely optional. Existing tool configurations without annotations will continue to work exactly as before, so you can adopt this feature at your own pace.

### Platform Support

Pre-built binaries are available for:
- **macOS**: `darwin-amd64`, `darwin-arm64`
- **Linux**: `linux-386`, `linux-amd64`, `linux-arm64`
- **Windows**: `windows-386`, `windows-amd64`

---

## Transparency Note

This release announcement was generated with AI assistance. The model used was [unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M](https://github.com/UnitVectorY-Labs/release-storyteller). This post was auto-generated on June 25, 2025 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller) based on the official v0.6.0 release from the [mcp-graphql-forge](https://github.com/UnitVectorY-Labs/mcp-graphql-forge/releases/tag/v0.6.0) repository.
