---
layout: post
title: "hellorest v1.1.1 Released: Improved Portability and Go 1.24 Updates"
date: 2025-02-15 16:24:09 -0500
tags: [hellorest, unsloth-Qwen3.5-122B-A10B-GGUF-Q4_K_M]
---

We're pleased to announce the availability of hellorest v1.1.1, released on February 15, 2025. This maintenance release delivers important infrastructure improvements that enhance portability and keep the project current with the latest Go version.

## What's New

### Statically Linked Binaries

The most significant change in v1.1.1 is the addition of static binary linking through `CGO_ENABLED=0`. This ensures that hellorest produces self-contained executables that can run on any compatible system without requiring additional shared libraries.

For users deploying hellorest in containerized environments, this means:
- More reliable deployments across different platforms
- Simplified container images with fewer runtime dependencies
- Potential reductions in container size and improved startup performance

### Go 1.24.0 Integration

This release upgrades the project to Go 1.24.0 across all build configurations—from CI workflows to the Dockerfile and local development setup. Users benefit from:
- Performance improvements and bug fixes from the Go 1.24 series
- Latest security updates
- Full compatibility with the Go 1.24 ecosystem

### Development Experience

A comprehensive `.gitignore` file was added to streamline the development workflow, automatically filtering out IDE files, system artifacts, and build outputs across macOS, Windows, Linux, and popular development environments like VSCode, IntelliJ, and Eclipse.

## Why It Matters

While v1.1.1 doesn't introduce new API features, these infrastructure improvements make hellorest more robust and portable for its core use case: testing deployments, validating networking configurations, and serving as a predictable HTTP endpoint in microservice environments.

The statically linked binary approach aligns with modern container best practices, ensuring that hellorest containers are more self-contained and reliable across diverse deployment scenarios. Developers can deploy with confidence knowing the binary has no external library dependencies.

## Getting Started

If you're already using hellorest, no action is required—the API behavior remains unchanged with `{"hello": "world"}` responses on GET `/` requests. Simply pull the latest container image to benefit from the improved build configuration:

```bash
docker pull unitvectorylabs/hellorest:latest
```

For developers building from source, ensure you have Go 1.24.0 or later installed. The project continues to be available under the MIT License at [UnitVectorY-Labs/hellorest](https://github.com/UnitVectorY-Labs/hellorest).

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 18, 2026. Source repository: [UnitVectorY-Labs/hellorest](https://github.com/UnitVectorY-Labs/hellorest), Release: v1.1.1. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
