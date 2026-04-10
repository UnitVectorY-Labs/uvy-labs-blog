---
layout: post
title: "authzjwtbearerinjector v0.2.2: Maintenance and Stability Update"
date: 2025-01-19 09:00:00 -0500
tags: ["authzjwtbearerinjector", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on January 19, 2025, authzjwtbearerinjector v0.2.2 is a maintenance update focused on improving the stability and security of the service through toolchain and dependency updates. This release ensures the project remains current with the latest Go ecosystem standards.

## What's new

This version focuses on the underlying foundation of the service:
- **Go Runtime Upgrade**: Updated to Go 1.23.5 for the latest performance and security improvements.
- **Core Dependency Updates**: Updated `google.golang.org/grpc` and `github.com/envoyproxy/go-control-plane/envoy` to their latest patched versions.
- **Build Process Enhancements**: Integrated a standardized Go build workflow to ensure consistent release artifacts.

## Why it matters

While this release does not introduce new features, keeping the runtime and core communication libraries up to date is critical for production environments. These updates reduce potential security vulnerabilities and ensure the service continues to operate reliably as a sidecar to the Envoy Proxy.

## Upgrade and Installation

This release is fully backward compatible with v0.2.1 and requires no configuration changes. To upgrade, simply pull the latest Docker image from the GitHub Container Registry:

`ghcr.io/unitvectory-labs/authzjwtbearerinjector:v0.2.2`

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It was generated on 2026-04-10 based on the [authzjwtbearerinjector](https://github.com/UnitVectorY-Labs/authzjwtbearerinjector) repository and the [v0.2.2 release](https://github.com/UnitVectorY-Labs/authzjwtbearerinjector/releases/tag/v0.2.2). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*