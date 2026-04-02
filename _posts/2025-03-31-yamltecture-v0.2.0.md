---
layout: post
title: "YAMLtecture v0.2.0: Smarter Validation, Subgraph Labels, and Consistent Output"
date: 2025-03-31 01:12:00 -0000
tags: ["yamltecture", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introducing YAMLtecture v0.2.0

Today, March 31, 2025, we're excited to announce the release of YAMLtecture v0.2.0. This release represents a significant step forward in quality and usability, focusing on the details that make daily use smoother: better error messages, consistent output, and powerful new visualization features.

YAMLtecture is a lightweight CLI tool for application architects who need a simple yet powerful way to define and visualize system architectures using YAML-defined configurations. Version 0.2.0 builds on the foundation of v0.1.0 with thoughtful enhancements that make the tool more reliable and easier to work with.

## What's New

### Subgraph Node Labels

One of the most requested features is now here: you can display custom labels on subgraphs in your Mermaid diagrams. By configuring the `nodeLabel` setting in your Mermaid configuration, you can reference an attribute (like "name") to use as node labels instead of raw IDs. This makes complex diagrams much more readable at a glance.

### Consistent, Reproducible Output

Generated Mermaid diagrams now have node styles and IDs sorted alphabetically. This small but important change ensures deterministic output across runs—perfect for version control workflows where you want clean, predictable diffs.

### Extended Query Capabilities

The `exists` operator now works with link queries, letting you check for the presence of specific attributes on links. Combined with enhanced documentation covering all query operators (`ancestorOf`, `descendantOf`, `childOf`, `parentOf`), you have more power and clarity when filtering your architecture definitions.

### Smarter Validation and Error Messages

We've significantly improved how YAMLtecture communicates problems:

- **Link query errors**: When attempting to use node-specific operators (like `ancestorOf`) on links, you now get a clear "operator is not allowed" message instead of confusing errors
- **Format validation**: Mermaid style validation has been fixed to provide accurate feedback when working with format attributes
- **Comprehensive coverage**: The release adds 97 new test cases covering 19+ invalid configuration scenarios, from duplicate node IDs to parent-child cycles

## Why It Matters

This release prioritizes quality over quantity. While there's no flashy new feature that completely changes how YAMLtecture works, the improvements here are what separate a tool you can trust from one you have to second-guess.

The expanded validation suite means you'll catch configuration errors earlier—often before you even run the tool. The consistent output ordering makes YAMLtecture suitable for automated documentation pipelines where reproducibility matters. And the clearer error messages reduce friction when something goes wrong, helping you fix issues faster.

For teams using YAMLtecture to maintain architecture documentation alongside their codebase, these refinements move the tool closer to production readiness.

## Getting Started with v0.2.0

### Installation

Download the appropriate release asset for your platform from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/YAMLtecture/releases/tag/v0.2.0):

- **macOS (Intel)**: `YAMLtecture-v0.2.0-darwin-amd64.tar.gz`
- **macOS (Apple Silicon)**: `YAMLtecture-v0.2.0-darwin-arm64.tar.gz`
- **Linux (x86_64)**: `YAMLtecture-v0.2.0-linux-amd64.tar.gz`
- **Linux (ARM64)**: `YAMLtecture-v0.2.0-linux-arm64.tar.gz`
- **Windows (x86_64)**: `YAMLtecture-v0.2.0-windows-amd64.zip`

Each asset includes MD5 and SHA256 checksum files for verification.

### Upgrading from v0.1.0

Good news: there are no breaking changes. Your existing YAML configuration files from v0.1.0 work unchanged with v0.2.0. The upgrade is straightforward—just download the new binary and replace your existing installation.

The only compatibility consideration is improved error handling: queries that would previously have produced confusing error messages now fail with clearer feedback. This shouldn't break valid configurations, but you may see more specific errors if you were relying on behaviors that weren't properly validated before.

### Verify Your Installation

After installation, verify the checksums to ensure download integrity:

```bash
sha256sum YAMLtecture-v0.2.0-linux-amd64.tar.gz
# Compare against YAMLtecture-v0.2.0-linux-amd64.tar.gz.sha256
```

---

## Transparency Note

This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 31, 2025. The content is based on research from the [UnitVectorY-Labs/YAMLtecture](https://github.com/UnitVectorY-Labs/YAMLtecture) repository and its v0.2.0 release. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
