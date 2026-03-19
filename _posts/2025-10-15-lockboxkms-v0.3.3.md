---
layout: post
title: "LockboxKMS v0.3.3 Released: Maintenance Update with Security Enhancements"
date: 2025-10-15 09:00:00 -0500
tags: [lockboxkms, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

LockboxKMS v0.3.3 was released on October 15, 2025, bringing important security updates and dependency maintenance to this simple web interface for encrypting data with Google Cloud KMS.

## What's New

This release focuses on keeping your LockboxKMS deployment secure and up-to-date:

- **Runtime Update:** Upgraded from Go 1.24.3 to Go 1.25.2, incorporating the latest performance improvements and security patches
- **Google Cloud Libraries:** Updated key dependencies including `google.golang.org/api` (v0.231.0 → v0.252.0) and `cloud.google.com/go/kms` (v1.21.2 → v1.23.1)
- **CI/CD Modernization:** GitHub Actions workflows upgraded to latest versions for improved build security

## Why It Matters

While v0.3.3 doesn't introduce new features, it delivers important value:

**Security First:** This maintenance release incorporates security patches and updates from Google's Cloud libraries, ensuring your encryption operations benefit from the latest protections.

**Zero-Downtime Upgrade:** There are no breaking changes, deprecations, or configuration requirements. You can upgrade immediately without modifying environment variables or deployment settings.

**Proven Stability:** With over five months of continuous dependency maintenance between v0.3.2 and v0.3.3, LockboxKMS demonstrates a commitment to staying current with upstream dependencies while maintaining rock-solid stability for production deployments.

## Upgrade Instructions

LockboxKMS is distributed as a Docker container image. To upgrade to v0.3.3:

```bash
docker pull ghcr.io/unitvectory-labs/lockboxkms:v0.3.3
```

No configuration changes are required. Your existing environment variables and KMS permissions continue to work exactly as before.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Source: [UnitVectorY-Labs/lockboxkms](https://github.com/UnitVectorY-Labs/lockboxkms), Release v0.3.3 (October 15, 2025). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
