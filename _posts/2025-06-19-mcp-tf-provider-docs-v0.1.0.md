---
layout: post
title: "Announcing mcp-tf-provider-docs v0.1.0: Terraform Documentation for AI Agents"
date: 2025-06-19 01:35:04 -0500
tags: ["mcp-tf-provider-docs", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introducing mcp-tf-provider-docs

We're excited to announce the initial release of **mcp-tf-provider-docs**, a configurable Model Context Protocol (MCP) server that brings up-to-date Terraform and OpenTofu provider documentation directly to AI agents. Released on June 19, 2025, this tool solves a critical problem in AI-assisted infrastructure code: keeping pace with rapidly evolving cloud provider APIs.

When Terraform providers add new resources or update existing ones, that information often doesn't exist in AI model training data. mcp-tf-provider-docs bridges this gap by indexing local documentation from Terraform provider repositories and making it accessible through the MCP protocol, enabling AI agents to generate accurate, current infrastructure code.

## What's New

As the inaugural release, v0.1.0 introduces the complete foundational toolkit for Terraform documentation lookup:

### Core Capabilities

- **Configurable Documentation Indexing**: The server walks through Terraform provider documentation directories, building an in-memory index that maps resource and data source names to their documentation files
- **MCP Lookup Tool**: Provides programmatic access to documentation via the Model Context Protocol with a customizable tool name (defaults to `lookup_provider_docs`)
- **Flexible Configuration**: YAML-based configuration lets you adapt the server to any Terraform or OpenTofu provider by specifying the documentation path and resource name patterns
- **Multi-Platform Support**: Ready-to-run pre-compiled binaries are available for Linux, macOS, and Windows across both x86 and ARM architectures

### Enterprise-Grade Build System

From day one, this release ships with production-ready infrastructure:

- Automated CI/CD pipelines for building, testing, and releasing
- Security scanning via CodeQL and Zizmor
- Automated dependency updates through Dependabot
- GitHub artifact attestation for build provenance verification
- MIT License for broad personal and commercial use

## Why It Matters

AI-assisted infrastructure development hits a wall when cloud providers introduce new APIs faster than AI models can be retrained. This is especially problematic for popular providers like Google Cloud Platform, AWS, and Azure, where documentation evolves constantly.

mcp-tf-provider-docs changes the game by letting you connect your AI agent directly to the source of truth: the actual provider documentation in its Git repository. Whether you're working with `terraform-provider-google`, `terraform-provider-aws`, or any OpenTofu provider, a simple configuration file adapts the server to your needs.

The practical impact? Your AI assistant can now look up the exact syntax for a newly released resource, access current argument descriptions, and generate code that actually works with the latest provider versions—no more guessing or outdated examples.

## Getting Started

Getting mcp-tf-provider-docs running is straightforward:

1. **Download** the pre-compiled binary for your platform from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/mcp-tf-provider-docs/releases/tag/v0.1.0)

2. **Verify** the download using the provided MD5 or SHA256 checksum files

3. **Clone** the Terraform provider repository you want to index (for example, `hashicorp/terraform-provider-google`)

4. **Create** a YAML configuration file:
   ```yaml
   docs_path: "/path/to/terraform-provider-google/website/docs"
   match_pattern: "\\bgoogle_[a-z0-9_]+\\b"
   tool_description: "Lookup Terraform GCP provider documentation"
   ```

5. **Run** by setting the `TF_CONFIG` environment variable to point to your config file and executing the binary

No Go installation required—just download, configure, and run.

## Looking Ahead

This initial release establishes the core functionality while being transparent about its approach: it performs regex-based matching on documentation files and returns complete file contents. The project acknowledges that Terraform provider documentation lacks a consistent structure across providers, which limits how sophisticated the indexing can be today. However, this foundation provides immediate value for teams looking to enhance their AI-assisted Terraform workflows.

We invite you to try mcp-tf-provider-docs with your favorite Terraform or OpenTofu provider. Visit the [repository](https://github.com/UnitVectorY-Labs/mcp-tf-provider-docs) to learn more, report issues, or contribute improvements.

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 17, 2026. Learn more about this project at [UnitVectorY-Labs/mcp-tf-provider-docs](https://github.com/UnitVectorY-Labs/mcp-tf-provider-docs) or read the [v0.1.0 release notes](https://github.com/UnitVectorY-Labs/mcp-tf-provider-docs/releases/tag/v0.1.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
