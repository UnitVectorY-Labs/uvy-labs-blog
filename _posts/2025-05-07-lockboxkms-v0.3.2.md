---
layout: post
title: "LockboxKMS v0.3.2 Release"
date: 2025-05-07 22:59:00 -0500
tags: ["lockboxkms", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

LockboxKMS v0.3.2 is now available, released on May 7, 2025. This maintenance release focuses on keeping your encryption service secure and up-to-date with the latest Google Cloud KMS SDK and Go runtime improvements.

## What's New

While v0.3.2 doesn't introduce new features, it delivers important under-the-hood updates that keep LockboxKMS running smoothly:

- **Go 1.24.3**: Upgraded to the latest patch version of Go 1.24, bringing performance improvements and security fixes
- **Google Cloud KMS SDK v1.21.2**: Updated to the latest version for improved compatibility with Google Cloud services
- **Google API Libraries**: Bumped from v0.221.0 to v0.231.0 across the stack
- **Enhanced Automation**: New Go version management tooling ensures future updates happen faster and more reliably

For development deployments, the Docker image tag format has been updated to `ghcr.io/unitvectory-labs/lockboxkms-snapshot:dev` for better package version tracking.

## Why It Matters

Maintenance releases like v0.3.2 are essential for keeping your encryption infrastructure secure and reliable:

- **Security**: Dependency updates may include critical security patches in Google Cloud libraries
- **Stability**: Updated packages ensure continued compatibility with Google Cloud KMS services
- **Reliability**: The latest Go runtime provides performance improvements and bug fixes

This release maintains full backward compatibility—no configuration changes are required for existing deployments. Docker container users can continue using the stable image tags without any modifications.

## Getting Started

To deploy LockboxKMS v0.3.2, pull the latest container image:

```bash
docker pull ghcr.io/unitvectory-labs/lockboxkms:latest
```

For production deployments, no action is required if you're already on a recent version. The updated dependencies will be included automatically when you pull the latest image.

Visit the [GitHub repository](https://github.com/UnitVectorY-Labs/lockboxkms) for full documentation and configuration details.

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 18, 2026. Source repository: [UnitVectorY-Labs/lockboxkms](https://github.com/UnitVectorY-Labs/lockboxkms), Release v0.3.2 (May 7, 2025). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
