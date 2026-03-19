---
layout: post
title: "IAP Headers v0.3.0 Released"
date: 2024-12-14 00:00:00 -0500
tags: [iapheaders, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introduction

On December 14, 2024, we're pleased to announce the release of IAP Headers v0.3.0. This maintenance release focuses on strengthening the application's security foundation through dependency updates and CI/CD infrastructure improvements. While it doesn't introduce new features, it represents an important step in maintaining a secure and reliable tool for developers working with Google Cloud Platform's Identity-Aware Proxy.

## What's New

### Dependency Updates

v0.3.0 includes several important dependency upgrades that improve the application's security posture:

- **JWT Library Update**: The `lestrrat-go/jwx/v2` library has been updated from version 2.1.2 to 2.1.3, bringing bug fixes and stability improvements for JWT handling
- **Cryptography Libraries**: `golang.org/x/crypto` has been updated to 0.31.0, incorporating the latest security patches and improvements to SSH public key caching and X.509 certificate handling

### Supply Chain Security Enhancements

This release introduces significant improvements to the build pipeline's security:

- **Provenance Attestation Upgrade**: The GitHub Actions attest-build-provenance action has been upgraded from v1 to v2, enabling multi-subject attestation support for enhanced build provenance tracking
- **Workflow Hardening**: All CI/CD workflows now include `persist-credentials: false`, a security best practice that prevents credential leakage in CI environments
- **Security Scanning**: A new Zizmor workflow has been added to continuously audit GitHub Actions workflows for security vulnerabilities

### Under the Hood

- Go version pinned to 1.23.4 for consistent builds
- Workflow files renamed for better clarity and organization
- No functional changes to the application itself

## Why It Matters

This release is all about trust and reliability. For teams using IAP Headers in production environments, v0.3.0 delivers:

**Zero-Risk Upgrade**: There are no breaking changes, deprecated features, or API modifications. Your existing configuration and deployment setup will continue to work without any modifications.

**Enhanced Security Confidence**: The supply chain security improvements mean you can have greater confidence in the integrity of the builds you're deploying. The upgraded provenance attestation provides stronger guarantees about how your container images were built.

**Maintained Stability**: By keeping dependencies current, we ensure the application continues to benefit from upstream security patches and performance improvements without introducing disruptive changes.

For developers using IAP Headers as a testing and debugging tool for GCP's Identity-Aware Proxy, this release means you can upgrade with confidence knowing that your workflow won't be interrupted and your security posture is improved.

## Upgrade Instructions

Upgrading to v0.3.0 is straightforward:

```bash
# Pull the latest Docker image
docker pull ghcr.io/unitvectory-labs/iapheaders:v0.3.0

# Run with default settings
docker run -p 8080:8080 ghcr.io/unitvectory-labs/iapheaders:v0.3.0
```

No configuration changes are required. The environment variables `HIDE_SIGNATURE` and `PORT` continue to work exactly as before.

The Docker image is available on GitHub Container Registry (GHCR). For the latest deployment options and configuration details, visit the [repository](https://github.com/UnitVectorY-Labs/iapheaders).

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was generated based on the official v0.3.0 release from the [UnitVectorY-Labs/iapheaders](https://github.com/UnitVectorY-Labs/iapheaders/releases/tag/v0.3.0) repository, released on December 14, 2024. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
