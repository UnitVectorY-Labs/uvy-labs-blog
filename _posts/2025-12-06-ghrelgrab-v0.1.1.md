---
layout: post
title: "ghrelgrab v0.1.1 Released"
date: 2025-12-06 19:53:32 -0500
tags: [ghrelgrab, unsloth_Qwen3.5-122B-A10B-GGUF-Q4_K_M]
---

## What's New

We're pleased to announce the release of **ghrelgrab v0.1.1**, published on December 6, 2025. This maintenance release focuses on infrastructure updates and dependency management to ensure continued reliability and security for all users.

This version spans approximately 3.5 months of active maintenance since v0.1.0 (August 15, 2025), delivering critical updates to our CI/CD pipeline while maintaining full backward compatibility with your existing workflows.

## Why It Matters

### Security and Reliability Updates

All GitHub Actions in our build pipeline have been upgraded to their latest major versions, ensuring you benefit from the most secure and performant infrastructure when downloading release assets:

- **actions/checkout** v5 → v6
- **actions/setup-go** v5 → v6  
- **actions/attest-build-provenance** v2 → v3
- **github/codeql-action** v3 → v4
- **astral-sh/setup-uv** v6 → v7

These updates maintain the integrity of our binary distribution process, ensuring the artifacts you download remain trustworthy and verifiable.

### Runtime Compatibility

The project has been updated to use the latest Go runtime (1.25.5), keeping ghrelgrab compatible with modern development environments and ensuring optimal performance across all supported platforms.

### Documentation Enhancements

We've improved the project's visibility with updated README badges showing release status, license information, and code quality metrics at a glance.

## Upgrade Instructions

This release requires **no action** from existing users if you're already on v0.1.0—the CLI interface remains unchanged and fully compatible.

### For New Users

Download the appropriate binary for your platform from our [GitHub Releases page](https://github.com/UnitVectorY-Labs/ghrelgrab/releases/tag/v0.1.1):

- **Windows**: `.zip` packages (amd64 or 386)
- **Linux**: `.tar.gz` packages (amd64, arm64, or 386)
- **macOS**: `.tar.gz` packages (amd64 or arm64)

All binaries include checksum files (`.md5` and `.sha256`) for verification.

### For Docker Users

```bash
docker pull ghcr.io/unitvectory-labs/ghrelgrab:latest
```

The Docker image is updated with the latest runtime and provides the same convenient multi-stage build integration for your containerized CI/CD pipelines.

---

**About this post**: This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on December 6, 2025. The source repository is [UnitVectorY-Labs/ghrelgrab](https://github.com/UnitVectorY-Labs/ghrelgrab), and this article corresponds to release v0.1.1. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
