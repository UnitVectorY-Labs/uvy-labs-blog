---
layout: post
title: LockboxKMS v0.3.4 Released
date: 2025-11-22 09:00:00 -0500
tags: ["lockboxkms", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## A Steady Step Forward in Maintenance

LockboxKMS v0.3.4 was released on November 22, 2025, continuing our commitment to keeping the platform secure and up-to-date. This release focuses on essential dependency updates and build infrastructure improvements, ensuring you have access to the latest security patches while maintaining full backward compatibility with previous versions.

## What's New

While v0.3.4 doesn't introduce new features or functionality, it delivers important behind-the-scenes improvements that keep your deployment running smoothly and securely:

**Updated Components:**
- **Go Runtime**: Upgraded from 1.25.2 to 1.25.4 for improved performance and security
- **Google Cloud KMS Library**: Updated to v1.23.2, incorporating the latest patches from Google's KMS client library
- **Google API Library**: Bumped from v0.252.0 to v0.256.0 across four incremental updates
- **Build Tools**: GitHub Actions updated to their latest versions, including actions/checkout v6

These updates maintain the reliable encryption interface you depend on while ensuring your infrastructure stays current with industry security standards.

## Why It Matters

This release demonstrates our ongoing commitment to active project maintenance and security. By regularly updating dependencies, we ensure:

- **Security**: Access to the latest security patches from Google Cloud libraries
- **Stability**: Tested, stable versions of all core components
- **Simplicity**: A seamless upgrade path with no configuration changes required

The consistent release cadence means you can trust that LockboxKMS remains actively maintained and supported. Each maintenance release reinforces the platform's reliability for your encryption needs.

## Upgrade Instructions

Upgrading to v0.3.4 is straightforward:

1. **Pull the new Docker image:**
   ```bash
   docker pull ghcr.io/unitvectory-labs/lockboxkms:v0.3.4
   ```

2. **Deploy with your existing configuration** - no changes to environment variables or KMS key rings are required

Your existing setup continues to work exactly as before. All configuration options, including `GCP_PROJECT`, `KMS_LOCATION`, `KMS_KEY_RING`, and `PORT`, remain unchanged.

## Stay Connected

LockboxKMS provides a simple web interface for encrypting text data using Google Cloud KMS. For more information about deployment, configuration, and usage, visit the [repository](https://github.com/UnitVectorY-Labs/lockboxkms).

As always, we welcome your feedback and contributions. Thank you for using LockboxKMS.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was generated on behalf of the UnitVectorY-Labs/lockboxkms release v0.3.4 (published November 22, 2025) by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
