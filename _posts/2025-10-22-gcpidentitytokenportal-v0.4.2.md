---
layout: post
title: "gcpidentitytokenportal v0.4.2 Released"
date: 2025-10-22 09:00:00 -0500
tags: [gcpidentitytokenportal, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

We're pleased to announce the availability of gcpidentitytokenportal v0.4.2, released on October 22, 2025. This maintenance release focuses on keeping the application secure and up-to-date with the latest dependency versions.

## What's New

v0.4.2 is a maintenance release that updates core dependencies without introducing new features or breaking changes. The application continues to provide the same reliable web interface for vending GCP identity tokens with flexible audience configuration.

### Dependency Updates

The release includes important updates to key dependencies:

- **Go runtime**: Updated from 1.24.3 to 1.25.3
- **google.golang.org/api**: Updated from 0.231.0 to 0.252.0
- **golang.org/x/oauth2**: Updated from 0.29.0 to 0.32.0
- **cloud.google.com/go/compute/metadata**: Updated from 0.6.0 to 0.9.0

Additionally, GitHub Actions workflows have been modernized with updated action versions for checkout, setup-go, codeql, and other CI/CD components.

## Why It Matters

While v0.4.2 doesn't introduce new features, it represents an important commitment to security and maintenance best practices:

- **Security**: Updated Google Cloud libraries ensure you benefit from the latest security patches and improvements
- **Stability**: The Go runtime updates provide performance improvements and security enhancements built into newer versions
- **Reliability**: Modernized CI/CD pipelines help maintain consistent build quality going forward

If you're running v0.4.1 in production, this release is recommended for security maintenance purposes, though there are no urgent breaking changes that would require immediate action.

## Upgrade Instructions

Upgrading to v0.4.2 is straightforward:

```bash
docker pull ghcr.io/unitvectory-labs/gcpidentitytokenportal:v0.4.2
```

Your existing configuration files and environment variables remain fully compatible—no changes are required. The API endpoints (`/`, `/token`, `/service-account`) continue to work exactly as before.

If you build from source, note that the project now requires Go 1.25.3 instead of 1.24.3.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Source: [UnitVectorY-Labs/gcpidentitytokenportal](https://github.com/UnitVectorY-Labs/gcpidentitytokenportal), Release v0.4.2, published October 22, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
