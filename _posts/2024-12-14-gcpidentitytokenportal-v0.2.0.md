---
layout: post
title: "GCP Identity Token Portal v0.2.0 Released"
date: 2024-12-14 19:46:49 -0500
tags: ["gcpidentitytokenportal", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Welcome to v0.2.0

On December 14, 2024, we released version 0.2.0 of GCP Identity Token Portal. This release focuses on maintaining a healthy, secure codebase by updating dependencies and incorporating the latest security patches from our core libraries.

This maintenance release keeps your deployment current with the latest Google Cloud API libraries and cryptographic packages, ensuring you have access to the most up-to-date security improvements while maintaining full compatibility with your existing setup.

## What's New

While v0.2.0 doesn't introduce new features, it delivers important behind-the-scenes improvements:

- **Security Updates**: The `golang.org/x/crypto` library has been upgraded from v0.28.0 to v0.31.0, incorporating the latest security patches for cryptographic operations
- **API Library Updates**: `google.golang.org/api` has been updated through four incremental bumps (v0.205.0 → v0.211.0), keeping you aligned with the latest Google Cloud API client improvements
- **Compute Metadata Client**: The `cloud.google.com/go/compute/metadata` library was upgraded from v0.5.2 to v0.6.0 for improved metadata service interactions
- **Build Provenance**: Updated GitHub Actions workflows to use actions/attest-build-provenance v2 for enhanced supply chain security

## Why It Matters

Staying current with dependencies is critical for maintaining a secure and reliable application. This release demonstrates our commitment to:

- **Security First**: Regular updates to cryptographic libraries help protect against newly discovered vulnerabilities
- **API Compatibility**: Updated Google Cloud API clients ensure compatibility with the latest GCP services and features
- **Supply Chain Integrity**: Enhanced build provenance attestation strengthens trust in our releases

The upgrade is fully backward compatible with v0.1.0. No configuration changes, environment variable updates, or deployment modifications are required.

## Upgrading to v0.2.0

Upgrading is straightforward—simply pull the new Docker image:

```bash
docker pull ghcr.io/unitvectory-labs/gcpidentitytokenportal:v0.2.0
```

Or update your deployment configuration with the new tag. Your existing configuration, environment variables, and authentication methods continue to work exactly as before.

## Installation

If you're not yet using GCP Identity Token Portal, you can get started by pulling the latest image:

```bash
docker pull ghcr.io/unitvectory-labs/gcpidentitytokenportal:v0.2.0
```

Visit our [repository](https://github.com/UnitVectorY-Labs/gcpidentitytokenportal) for complete documentation on configuration options, authentication methods, and use cases.

---

**Transparency Note**: This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For details about this release, see the [GitHub release](https://github.com/UnitVectorY-Labs/gcpidentitytokenportal/releases/tag/v0.2.0) published on December 14, 2024. Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
