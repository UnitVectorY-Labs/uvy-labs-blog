---
layout: post
title: "authzgcpk8stokeninjector v0.1.1: Maintenance and Stability Update"
date: 2025-01-02 09:00:00 -0500
tags: ["authzgcpk8stokeninjector", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on January 2, 2025, version v0.1.1 of `authzgcpk8stokeninjector` is a maintenance release dedicated to enhancing the stability and security of our External Authorization service. This update ensures the project remains aligned with the latest upstream dependencies and language standards.

## What's new

This release focuses on under-the-hood improvements to keep the service robust:

- **Dependency Updates**: We have updated key libraries, including `google.golang.org/grpc` (to v1.69.2) and `github.com/envoyproxy/go-control-plane` (to v0.13.2), ensuring the service benefits from the latest bug fixes and performance improvements.
- **Go Toolchain Upgrade**: The project has been updated to Go 1.23.4, bringing in the latest language optimizations and security patches.
- **CI/CD Enhancements**: We've refined our automation workflows and updated our build provenance tooling to improve the reliability of our release process.

## Why it matters

While this release doesn't introduce new features, these updates are critical for production environments. By keeping gRPC and Envoy control plane dependencies current, we reduce the risk of security vulnerabilities and improve the overall reliability of token injection in Kubernetes. The move to Go 1.23.4 ensures the service is running on a modern, supported runtime.

## Getting Started

Users can upgrade to v0.1.1 by pulling the latest Docker image from the GitHub Container Registry:

`ghcr.io/unitvectory-labs/authzgcpk8stokeninjector:v0.1.1`

As there are no breaking changes, this is a drop-in replacement for previous versions.

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It was generated on April 9, 2026, based on the [authzgcpk8stokeninjector](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector) repository and the [v0.1.1 release](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector/releases/tag/v0.1.1). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*