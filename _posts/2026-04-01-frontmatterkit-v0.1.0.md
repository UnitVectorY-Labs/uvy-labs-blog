---
layout: post
title: "Introducing Frontmatterkit v0.1.0: A Unix-Style CLI for YAML Front Matter Management"
date: 2026-04-01 23:39:37 -0500
tags: ["frontmatterkit", "unsloth-qwen3-5-122b-a10b-gguf-q4-k-m"]
---

We're excited to announce the first stable release of **frontmatterkit** (v0.1.0), a powerful Unix-style command-line interface for managing YAML front matter in Markdown files. Released on April 1, 2026, this initial version brings a complete toolkit for validating, querying, updating, and asserting conditions on front matter blocks - perfect for static site workflows, documentation pipelines, and content automation.

## What's New

Frontmatterkit v0.1.0 introduces five core commands that follow Unix philosophy, reading from files or stdin and writing to files or stdout:

### Validate
Check whether a Markdown file's YAML front matter is well-formed. Files without front matter are considered valid, and malformed YAML produces helpful error messages with appropriate exit codes.

```bash
frontmatterkit validate --in post.md
cat post.md | frontmatterkit validate
```

### Get
Extract front matter values using jq-like path syntax. Supports both YAML and JSON output formats, making it easy to integrate with any downstream tooling.

```bash
frontmatterkit get --path .title --in post.md
frontmatterkit get --format json --path .tags --in post.md
```

### Set
Create or update front matter fields with proper YAML type handling. Values are parsed as YAML (not raw strings), so booleans, numbers, and arrays maintain their correct types. The tool supports both overwrite and patch modes for flexible updates.

```bash
frontmatterkit set --set '.title=New Title' --in post.md --in-place
frontmatterkit set --from values.yaml --mode patch --in post.md --out updated.md
```

### Unset
Cleanly remove front matter fields while preserving the rest of your document. If a path doesn't exist, the command gracefully outputs the file unchanged.

```bash
frontmatterkit unset --path .draft --in post.md --in-place
```

### Assert
Test front matter against declarative conditions - ideal for CI/CD workflows. Multiple assertions combine with logical AND, supporting operators like `exists`, `contains`, comparison operators, and more.

```bash
frontmatterkit assert --assert '.title exists' --assert '.draft == false' --in post.md
frontmatterkit assert --assert '.tags contains "go"' --in post.md
```

## Why It Matters

Frontmatterkit solves a common pain point for developers working with Markdown-based workflows. Whether you're using Jekyll, Hugo, or any static site generator, managing YAML front matter often involves writing custom scripts or risking fragile text parsing. Frontmatterkit provides:

- **Reliability**: Proper YAML parsing ensures your metadata is handled correctly
- **Composability**: Unix-style stdin/stdout design integrates seamlessly into shell pipelines
- **Automation Ready**: Predictable exit codes (0 for success, 1 for validation failures, 2 for usage errors, 3 for I/O errors) make it ideal for CI/CD scripts
- **Type Safety**: YAML values maintain their types - `true` stays a boolean, `[a, b]` stays an array, not stringified text
- **Cross-Platform**: Pre-built binaries available for Linux (amd64, arm64, 386), Windows (amd64, 386), and macOS (amd64, arm64)

This makes frontmatterkit perfect for:
- Validating content before deployment
- Automated checks ensuring required fields exist
- Extracting metadata for processing pipelines
- Safely updating front matter without manual editing

## Getting Started

### Install from Binaries

Download pre-built binaries from the [v0.1.0 release page](https://github.com/UnitVectorY-Labs/frontmatterkit/releases/tag/v0.1.0). Each archive includes MD5 and SHA256 checksums for verification.

### Install Using Go

```bash
go install github.com/UnitVectorY-Labs/frontmatterkit@latest
```

### Build from Source

```bash
git clone https://github.com/UnitVectorY-Labs/frontmatterkit.git
cd frontmatterkit
go build -o frontmatterkit
```

## Resources

- [README](https://github.com/UnitVectorY-Labs/frontmatterkit) - Quick start guide and installation instructions
- [Usage Documentation](https://github.com/UnitVectorY-Labs/frontmatterkit/tree/main/docs/USAGE.md) - Comprehensive command reference
- [Examples](https://github.com/UnitVectorY-Labs/frontmatterkit/tree/main/docs/EXAMPLES.md) - Practical usage examples
- [GitHub Release](https://github.com/UnitVectorY-Labs/frontmatterkit/releases/tag/v0.1.0) - Download binaries and checksums

## A Note on AI-Assisted Development

This release announcement was written with the assistance of AI, specifically using the **unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M** model. The article was generated on April 2, 2026, by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller), an automated tool for creating release announcements. While AI helped craft this narrative, the frontmatterkit tool itself represents genuine engineering work - primarily implemented with assistance from GitHub Copilot - that solves real problems for developers working with Markdown content workflows.
