---
layout: post
title: "authzjwtbearerinjector v0.2.2 Released"
date: 2025-01-19 15:34:49 -0500
tags: ["authzjwtbearerinjector", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introduction

We're pleased to announce the release of **authzjwtbearerinjector v0.2.2**, published on January 19, 2025. This maintenance release focuses on dependency updates and CI/CD improvements, ensuring your deployment stays up-to-date with the latest security patches and build infrastructure enhancements.

## What's New

### Dependency Updates

This release includes important dependency upgrades that keep your installation secure and stable:

- **Go**: Upgraded from 1.23.4 to 1.23.5
- **gRPC**: Updated from 1.69.2 to 1.69.4
- **Envoy Control Plane**: Updated from 1.32.2 to 1.32.3

These patch updates include upstream bug fixes and security patches from the gRPC and Envoy projects, providing continued reliability for your authentication infrastructure.

### CI/CD Enhancements

A new comprehensive build workflow has been added to improve code quality assurance:

- Automated builds on pushes to main and pull requests
- Test execution with race detection
- Codecov integration for test coverage reporting

## Why It Matters

While v0.2.2 doesn't introduce new features, maintenance releases like this are essential for keeping your infrastructure secure and reliable. By staying current with dependency updates, you benefit from:

- **Security**: Upstream security patches from gRPC and Envoy control plane
- **Stability**: Bug fixes from upstream projects
- **Confidence**: Improved CI/CD pipeline ensures code quality going forward

## Upgrade Instructions

Upgrading to v0.2.2 is straightforward:

1. Pull the updated Docker image:
   ```
   docker pull ghcr.io/unitvectory-labs/authzjwtbearerinjector:v0.2.2
   ```

2. No configuration changes are required—your existing setup remains fully compatible.

3. Restart your service with the new image when convenient.

This is a safe, drop-in upgrade with no breaking changes or API modifications.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For more information, see the [repository](https://github.com/UnitVectorY-Labs/authzjwtbearerinjector) and [v0.2.2 release](https://github.com/UnitVectorY-Labs/authzjwtbearerinjector/releases/tag/v0.2.2). Generated on January 19, 2025 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
