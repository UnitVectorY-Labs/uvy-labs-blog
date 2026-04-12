---
layout: post
title: "hellorest v1.1.1: Enhanced Stability and Modernized Runtime"
date: 2025-02-15 09:00:00 -0500
tags: ["hellorest", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on February 15, 2025, hellorest v1.1.1 is a maintenance update focused on strengthening the underlying infrastructure of our minimal REST API. While the API's behavior remains predictably simple, this release ensures that the service is more stable, portable, and up-to-date.

## What's new

This release brings key improvements to the build and runtime environment:

- **Go 1.24.0 Upgrade**: We have modernized the codebase by upgrading to the latest Go 1.24.0 runtime, ensuring the project benefits from the most recent performance and security improvements.
- **Static Binary Linking**: By enabling `CGO_ENABLED=0` during the Docker build process, we now produce a fully statically linked binary. This removes external C library dependencies, making the container more lightweight and robust.

## Why it matters

For users who rely on hellorest to validate their networking and deployment pipelines, these changes provide peace of mind. Static linking is particularly critical when using minimal runtime images like `distroless`, as it eliminates "missing library" errors and ensures the container starts reliably across different environments. By keeping the runtime current, we ensure that hellorest remains a dependable tool for infrastructure testing.

## Getting started

Upgrading to v1.1.1 is seamless. Simply pull the latest Docker image:

```bash
docker pull ghcr.io/unitvectory-labs/hellorest:v1.1.1
```

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Based on the [UnitVectorY-Labs/hellorest](https://github.com/UnitVectorY-Labs/hellorest) repository and [release v1.1.1](https://github.com/UnitVectorY-Labs/hellorest/releases/tag/v1.1.1) generated on April 12, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*