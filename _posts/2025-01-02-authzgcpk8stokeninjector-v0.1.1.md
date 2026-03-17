---
layout: post
title: "AuthZ GCP K8s Token Injector v0.1.1 Released"
date: 2025-01-02 22:58:00 -0500
tags: [authzgcpk8stokeninjector, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introduction

On January 2, 2025, we released version 0.1.1 of AuthZ GCP K8s Token Injector—a security-focused maintenance update that strengthens the build pipeline and ensures all dependencies remain current.

This release maintains the core functionality you rely on while introducing important security improvements to our CI/CD workflows and updating critical dependencies including gRPC to version 1.69.2.

## What's New

### Security Enhancements

This release prioritizes supply chain security with several workflow improvements:

- **Credential Hardening:** All GitHub Actions workflows now include `persist-credentials: false`, following industry best practices to reduce credential exposure risks in build artifacts
- **Automated Security Auditing:** A new zizmor workflow continuously scans our GitHub Actions for security vulnerabilities, running on every push, pull request, and scheduled weekly scans
- **Artifact Attestation Update:** Upgraded from v1 to v2 for improved provenance tracking and supply chain security

### Dependency Updates

We've kept dependencies current with several important updates:

- **Go 1.23.4:** Updated from 1.23, including bug fixes and improvements
- **gRPC 1.69.2:** Upgraded from 1.68.0 through multiple intermediate versions, bringing performance improvements and bug fixes
- **Protocol Buffers v1.35.2:** Major version bump with new features
- Various indirect dependencies updated for security and stability

### Documentation Improvements

- Added a release badge to the README, making it easier for users to quickly identify the latest version

## Why It Matters

This update demonstrates our commitment to security without disrupting your deployments. The changes in v0.1.1 are entirely backend-focused—no application code, configuration, or API changes were made. You can upgrade with confidence knowing that:

- Your existing environment variables and configurations remain valid
- The gRPC endpoint continues listening on port 50051 by default
- Token caching behavior is unchanged
- No redeployment procedures beyond updating the container image are required

For teams running this in production, this release ensures you benefit from the latest security patches in gRPC and other dependencies while benefiting from a more secure build pipeline.

## Upgrade Instructions

Upgrading to v0.1.1 is straightforward. Pull the latest Docker image:

```
ghcr.io/unitvectory-labs/authzgcpk8stokeninjector:v0.1.1
```

No configuration changes are needed. Simply update your container image tag and redeploy.

---

*This post was AI-generated using unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M on January 2, 2025. Source repository: [UnitVectorY-Labs/authzgcpk8stokeninjector](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector). Release: [v0.1.1](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector/releases/tag/v0.1.1). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
