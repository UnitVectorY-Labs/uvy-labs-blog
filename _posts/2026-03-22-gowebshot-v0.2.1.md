---
layout: post
title: "gowebshot v0.2.1 Adds Version Flag for Easier Verification"
date: 2026-03-22 12:21:10 -0500
tags: [gowebshot, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

We're pleased to announce the release of gowebshot v0.2.1, published on March 22, 2026. This small but practical update introduces a commonly-requested feature that improves the day-to-day usability of the tool.

## What's New

The headline feature in v0.2.1 is the addition of a `--version` flag. Users can now easily check which version of gowebshot they have installed:

```bash
gowebshot --version
```

This standard CLI convention makes it simple to verify your installation without running any capture operations. The version information is intelligently resolved—when available, it uses the build-time version tag, with a graceful fallback to Go's embedded build information for locally compiled binaries.

Behind the scenes, this release also includes routine CI/CD infrastructure updates that keep our build pipeline current and secure.

## Why It Matters

While this may seem like a minor addition, the `--version` flag addresses a fundamental usability need. Whether you're troubleshooting an issue, confirming an update succeeded, or checking compatibility with documentation, knowing your exact version is essential. This change brings gowebshot in line with standard CLI expectations and streamlines the user experience.

The release maintains full backward compatibility with v0.2.0, so upgrading is straightforward with no breaking changes or configuration adjustments required.

## Getting Started

To upgrade to v0.2.1, download the pre-built binaries for your platform from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/gowebshot/releases/tag/v0.2.1). Archives are available for:

- Linux (amd64, 386, arm64)
- macOS (amd64, arm64)
- Windows (amd64, 386)

All releases include checksum files (MD5 and SHA256) for verification.

If you're building from source, simply pull the latest code and rebuild—the version flag will be available automatically.

As always, we welcome feedback and contributions from the community. Check out the full release notes on [GitHub](https://github.com/UnitVectorY-Labs/gowebshot/releases/tag/v0.2.1) for complete details.

---

**Transparency Note:** This post was AI-generated using the model `unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M`. It references the gowebshot repository (UnitVectorY-Labs/gowebshot), release v0.2.1, published on March 22, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
