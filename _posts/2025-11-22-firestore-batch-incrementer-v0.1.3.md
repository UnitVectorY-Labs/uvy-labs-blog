---
layout: post
title: "Firestore Batch Incrementer v0.1.3 Released"
date: 2025-11-22 16:11:27 -0500
tags: [firestore-batch-incrementer, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introduction

On November 22, 2025, we released v0.1.3 of firestore-batch-incrementer—a maintenance update that keeps your batch processing tool running smoothly with the latest security patches and dependency updates. This release focuses on stability and compatibility, ensuring your Firestore bulk-update operations continue uninterrupted.

## What's New

Version 0.1.3 doesn't introduce new features, but it delivers important under-the-hood improvements:

**Updated Dependencies**
- Cloud Firestore SDK updated to v1.20.0 for improved reliability
- Google APIs libraries refreshed across the board (v0.252.0 → v0.256.0)
- gRPC library upgraded to v1.77.0
- Security updates applied through golang.org/x/crypto (v0.43.0 → v0.45.0)

**Infrastructure Enhancements**
- Build system updated to GitHub Actions checkout v6 for faster, more secure CI/CD pipelines
- Go toolchain synchronized to version 1.25.4 across all build environments

All existing functionality remains intact. Your batch processing workflows, rate limiting configurations, and atomic update modes continue to work exactly as before.

## Why It Matters

This maintenance release reflects our commitment to keeping firestore-batch-incrementer secure and compatible with the evolving Google Cloud platform. Regular dependency updates ensure:

- **Security:** Latest patches applied to all libraries
- **Compatibility:** Continued support for current Google Cloud APIs
- **Reliability:** Bug fixes from upstream dependencies flow through to your deployments

The updated CI/CD infrastructure means faster builds and more reliable container images for your Cloud Run Job deployments.

## Getting Started

Upgrading is straightforward. If you're using Docker:

```bash
docker pull ghcr.io/unitvectory-labs/firestore-batch-incrementer:v0.1.3
```

For source builds:

```bash
git clone https://github.com/UnitVectorY-Labs/firestore-batch-incrementer.git
cd firestore-batch-incrementer
git checkout v0.1.3
go build -o firestore-batch-incrementer .
```

No configuration changes or migration steps are required. Simply pull the new version and deploy—it's fully backward compatible with v0.1.2.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The original release information can be found at [github.com/UnitVectorY-Labs/firestore-batch-incrementer/releases/tag/v0.1.3](https://github.com/UnitVectorY-Labs/firestore-batch-incrementer/releases/tag/v0.1.3). Article generated on March 18, 2026 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
