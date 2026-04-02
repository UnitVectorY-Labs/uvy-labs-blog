---
layout: post
title: "authzgcpk8stokeninjector v0.2.4 Released"
date: 2025-10-21 09:00:00 -0500
tags: ["authzgcpk8stokeninjector", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're pleased to announce the release of authzgcpk8stokeninjector v0.2.4, published on October 21, 2025. This maintenance release focuses on keeping your authorization service secure and up-to-date with the latest dependencies.

## What's New

Version 0.2.4 is a focused maintenance update that strengthens the foundation of your ExtAuthz service without changing how it works. Key updates include:

- **Go runtime upgrade**: Updated from Go 1.24.3 to Go 1.25.3, bringing performance improvements and the latest language features
- **gRPC library updates**: Upgraded from version 1.72.0 to 1.76.0 for enhanced stability and security
- **Envoy control plane update**: Bumped from 1.32.4 to 1.35.0, keeping your integration with Envoy Proxy current
- **CI/CD infrastructure upgrades**: All GitHub Actions workflows updated to their latest major versions for improved build reliability

## Why It Matters

This release prioritizes security and stability for existing deployments. By keeping core dependencies current, you benefit from upstream security patches and performance improvements without any disruption to your service.

The updates to GitHub Actions—including code scanning (CodeQL v4), artifact attestation (v3), and dependency management—ensure that the build process itself remains secure and trustworthy.

## Upgrade Instructions

Upgrading to v0.2.4 is straightforward with no migration required:

```bash
docker pull ghcr.io/unitvectory-labs/authzgcpk8stokeninjector:v0.2.4
```

Simply update your deployment manifests to reference the new version tag and restart the service. Your existing environment variable configuration remains fully compatible, and no changes to your Envoy ExtAuthz filter configuration are needed.

## Get Started

The container image is available at `ghcr.io/unitvectory-labs/authzgcpk8stokeninjector:v0.2.4`. For detailed configuration instructions, visit the [repository](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector).

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Source: [authzgcpk8stokeninjector](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector) v0.2.4, released October 21, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
