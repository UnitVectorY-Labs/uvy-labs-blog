---
layout: post
title: "prompt2json v0.4.0 — Improved Version Reporting and Reliability Updates"
date: 2026-02-09 03:04:32 -0500
tags: [prompt2json, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introduction

**prompt2json v0.4.0 was released on February 9, 2026**, marking the latest step in refining this powerful CLI tool that transforms natural language prompts into schema-validated JSON output. This maintenance release focuses on reliability improvements and better build stability, ensuring a smoother experience for users who depend on prompt2json in their automation workflows.

Building on the foundation laid by v0.3.0's introduction of OpenAI provider support, version 0.4.0 delivers important infrastructure updates that make the tool more robust in real-world usage scenarios.

## What's New

### Better Version Reporting

The most notable user-facing improvement in v0.4.0 is enhanced version reporting. When you run `prompt2json --version`, you'll now see the correct release version displayed in more build scenarios. Previously, some builds might have shown "dev" instead of the actual version number. This fix ensures consistent and accurate version identification across different build environments.

### Dependency and Infrastructure Updates

This release includes several important updates behind the scenes:

- **Go 1.25.7**: The project has been updated to use the latest Go compiler version for improved security and performance
- **OAuth2 Library**: Updated `golang.org/x/oauth2` from v0.34.0 to v0.35.0, incorporating the latest security patches and improvements
- **CI/CD Improvements**: Enhanced GitHub Actions workflows for more reliable builds across all supported platforms

## Why It Matters

While v0.4.0 doesn't introduce new features, maintenance releases like this are essential for keeping tools production-ready. The version reporting fix may seem small, but it has practical implications:

- **Debugging becomes easier** when support requests can accurately identify which version is in use
- **CI/CD pipelines** benefit from more reliable version detection in automated workflows
- **Security updates** in dependencies help protect against potential vulnerabilities

For teams integrating prompt2json into larger automation systems, these reliability improvements contribute to a more stable and predictable toolchain. The backward-compatible nature of this release means you can upgrade without any concerns about breaking existing scripts or workflows.

## Getting Started

### Upgrade with Go Install (Recommended)

```bash
go install github.com/UnitVectorY-Labs/prompt2json@v0.4.0
```

### Download Pre-built Binaries

Pre-built binaries are available for multiple platforms:

- macOS (Intel and Apple Silicon)
- Linux (386, amd64, arm64)
- Windows (386, amd64)

Visit the [v0.4.0 release page](https://github.com/UnitVectorY-Labs/prompt2json/releases/tag/v0.4.0) to download the binary for your platform. Each release includes checksums for verification.

### Build from Source

```bash
git clone https://github.com/UnitVectorY-Labs/prompt2json.git
cd prompt2json
git checkout v0.4.0
go build -o prompt2json
```

*Note: Building from source requires Go 1.25.7 or later.*

### Verify Your Installation

After upgrading, confirm you have the correct version:

```bash
prompt2json --version
```

## Looking Forward

This maintenance release keeps prompt2json's core promise intact: a reliable, Unix-style CLI tool for converting natural language prompts into schema-validated JSON using LLM APIs. With support for both Gemini and OpenAI providers, file attachments for multimodal inputs, and flexible output formatting, prompt2json continues to serve developers who need deterministic, machine-readable output from their AI interactions.

For users new to prompt2json or those who haven't tried v0.3.0 yet, the [previous release](https://github.com/UnitVectorY-Labs/prompt2json/releases/tag/v0.3.0) introduced OpenAI provider support alongside the existing Gemini integration—a powerful combination for teams working with multiple LLM providers.

---

**Transparency Note**: This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The article is based on the official v0.4.0 release from the [UnitVectorY-Labs/prompt2json](https://github.com/UnitVectorY-Labs/prompt2json) repository, published on February 9, 2026. Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
