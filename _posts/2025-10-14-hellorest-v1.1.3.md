---
layout: post
title: "hellorest v1.1.3: Maintenance and Toolchain Updates"
date: 2025-10-14 09:00:00 -0500
tags: ["hellorest", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on October 14, 2025, hellorest v1.1.3 is a maintenance update focused on strengthening the project's foundation. While the core functionality remains the same, this release ensures that our minimal REST API continues to run on the most modern and secure toolchains available.

## What's new

This release primarily focuses on internal infrastructure and build environment updates:

- **Go Toolchain Upgrade**: The project has been updated to Go 1.25.2, ensuring compatibility with the latest language features and performance improvements.
- **CI/CD Modernization**: We've updated our GitHub Actions workflows, including `actions/checkout`, `actions/setup-go`, and `github/codeql-action`, to their latest versions to improve build reliability and security scanning.

## Why it matters

For most users, hellorest is a "set it and forget it" tool used to validate network configurations and deployment pipelines. By keeping the underlying Go version and CI pipelines current, we ensure that the Docker images remain secure, the build process remains stable, and the project stays maintainable as the Go ecosystem evolves.

## Getting the latest version

You can upgrade to v1.1.3 by pulling the latest Docker image:

```bash
docker pull ghcr.io/unitvectory-labs/hellorest:v1.1.3
```

As this is a maintenance release, there are no breaking changes to the API behavior; your existing integrations will continue to work seamlessly.

***

*This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`. Generated on April 12, 2026, based on the [hellorest](https://github.com/UnitVectorY-Labs/hellorest) repository and the [v1.1.3 release](https://github.com/UnitVectorY-Labs/hellorest/releases/tag/v1.1.3). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*