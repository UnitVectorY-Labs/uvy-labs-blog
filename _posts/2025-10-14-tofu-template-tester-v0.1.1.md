---
layout: post
title: "Introducing tofu-template-tester v0.1.1"
date: 2025-10-14 09:00:00 -0500
tags: ["tofu-template-tester", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

# What's New in v0.1.1

The tofu-template-tester team is excited to announce the release of version 0.1.1, available now on GitHub. Published on October 14, 2025, this update brings a highly requested feature that enhances user experience and improves tool discoverability.

## What's New

### Version Flag Added

The standout addition in v0.1.1 is the new `--version` flag. Users can now run:

```bash
tofu-template-tester --version
```

This command displays the current version of the tool, making it easier than ever to verify your installation, troubleshoot issues, and confirm upgrades in CI/CD pipelines. The version string is embedded at build time, ensuring accuracy across all distributed binaries.

## Why It Matters

Version tracking is fundamental to modern CLI tooling. Being able to quickly check which version you're running streamlines support workflows, simplifies debugging, and helps teams maintain consistency across their infrastructure as code environments.

This release also includes behind-the-scenes improvements:
- Updated Go runtime through version 1.25.2
- Latest GitHub Actions dependencies for improved CI/CD security and performance
- Enhanced build provenance attestations

## Installation and Upgrade

### Upgrading

If you're already using tofu-template-tester, upgrading to v0.1.1 is straightforward:

1. Download the pre-compiled binary for your platform from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/tofu-template-tester/releases/tag/v0.1.1)
2. Extract the archive (`.tar.gz` for Unix-like systems, `.zip` for Windows)
3. Replace your existing binary

### Fresh Installation

**Supported Platforms:**
- macOS (Intel and Apple Silicon)
- Linux (x86_64, ARM64, 32-bit)
- Windows (x86_64, 32-bit)

Each release includes MD5 and SHA256 checksums for verification.

**Install via Go:**

```bash
go install github.com/UnitVectorY-Labs/tofu-template-tester@v0.1.1
```

**Verify Your Installation:**

```bash
tofu-template-tester --version
# Output: Version: v0.1.1
```

### About tofu-template-tester

tofu-template-tester is a lightweight Go CLI tool that renders Terraform-compatible templates by replacing `${NAME}`-style placeholders with user-supplied values. Perfect for generating configuration files, infrastructure templates, and other variable-driven outputs.

**Key Features:**
- List all template variables with `-list-params`
- Read templates from files or STDIN
- Load variable assignments from properties files
- Interactive prompts for missing variables
- Output to files or STDOUT

## Get Involved

Head over to the [GitHub repository](https://github.com/UnitVectorY-Labs/tofu-template-tester) to explore the code, report issues, or contribute to future development. This release represents ~28 commits since v0.1.0, with special thanks to new contributor @JaredHatfield for implementing the version flag.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Release information sourced from [UnitVectorY-Labs/tofu-template-tester v0.1.1](https://github.com/UnitVectorY-Labs/tofu-template-tester/releases/tag/v0.1.1), published October 14, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
