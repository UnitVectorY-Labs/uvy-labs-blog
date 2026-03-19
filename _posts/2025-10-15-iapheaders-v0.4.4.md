---
layout: post
title: "iapheaders v0.4.4: Infrastructure Updates and Continued Maintenance"
date: 2025-10-15 00:11:57 -0500
tags: [iapheaders, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Maintaining a Strong Foundation

Released on October 15, 2025, iapheaders v0.4.4 is a maintenance release that keeps the project's infrastructure fresh and secure. While this update doesn't introduce new features, it demonstrates our commitment to maintaining a reliable, up-to-date tool for developers working with Google Cloud's Identity-Aware Proxy.

## What's New

v0.4.4 focuses on three key areas:

**Go Runtime Upgrades**
The release upgrades the Go toolchain from 1.24.3 to 1.25.2, ensuring compatibility with the latest language features and performance improvements. This sequential update across six pull requests keeps the build environment current without disrupting existing functionality.

**Updated GitHub Actions**
All CI/CD workflow actions have been bumped to their latest major versions:
- `actions/checkout` v5
- `actions/setup-go` v6  
- `actions/attest-build-provenance` v3
- `github/codeql-action` v4
- `astral-sh/setup-uv` v7

These updates bring security patches and improved runner compatibility to our build pipeline.

**Enhanced Documentation**
A Go Report Card badge has been added to the README, giving users quick visibility into code quality metrics.

## Why It Matters

Maintenance releases like v0.4.4 might not grab headlines, but they're essential for the health of any open-source project. By staying current with build tooling and runtime dependencies, we ensure that:

- **Security stays sharp**: Updated actions include upstream security fixes
- **Builds stay reliable**: Compatibility with GitHub's evolving infrastructure prevents pipeline breakages
- **Users get consistency**: The same trusted behavior you expect from iapheaders continues uninterrupted

The application itself works exactly as before—no configuration changes, no breaking updates, just solid infrastructure under the hood.

## Upgrade and Installation

Upgrading to v0.4.4 requires no action on your part beyond pulling the updated image:

**Using Docker (Recommended)**
```bash
docker pull ghcr.io/unitvectory-labs/iapheaders:v0.4.4
docker run -p 8080:8080 ghcr.io/unitvectory-labs/iapheaders:v0.4.4
```

**Building from Source**
If you build from source, you'll need Go 1.25.x installed. The pre-built Docker images are self-contained and don't require Go on your host system.

All environment variables remain unchanged:
- `PORT` (default: 8080)
- `HIDE_SIGNATURE` (default: false)

## Keep Testing Your IAP Headers

iapheaders continues to be your go-to tool for inspecting GCP IAP headers, decoding JWT tokens, and validating signatures. This maintenance release ensures the project stays healthy while you focus on what matters—building secure applications with Identity-Aware Proxy.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For more details, see the [v0.4.4 release](https://github.com/UnitVectorY-Labs/iapheaders/releases/tag/v0.4.4) on GitHub (released October 15, 2025). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
