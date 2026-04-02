---
layout: post
title: "yamlequal v0.0.3 Released: Infrastructure Updates"
date: 2025-10-09 09:00:00 -0500
tags: ["yamlequal", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're pleased to announce the release of **yamlequal v0.0.3**, published on October 9, 2025. This maintenance release focuses on keeping the project's infrastructure modern and up-to-date while maintaining full backward compatibility with previous versions.

## What's New

Version 0.0.3 is a maintenance-focused update that brings important underlying improvements without changing how users interact with the library:

- **Updated to Go 1.25.1** - The project now builds with the latest Go toolchain
- **GitHub Actions modernized** - CI/CD workflows updated to use `actions/checkout@v5` and `actions/setup-go@v6`
- **Go Report Card badge** - A new badge added to the README provides at-a-glance visibility into code quality metrics

## Why It Matters

While this release doesn't introduce new features, it represents a commitment to maintaining code health and staying current with the Go ecosystem. By keeping dependencies and build tools up-to-date, the project ensures:

- Better security posture through updated tooling
- Compatibility with the latest Go language features and optimizations
- Improved CI/CD performance with modern GitHub Actions versions

For library users, this means you can upgrade to v0.0.3 with complete confidence. The public API remains unchanged, all existing functionality is preserved, and no modifications to your code are required.

## Upgrade Instructions

Upgrading to yamlequal v0.0.3 is straightforward:

```bash
go get github.com/UnitVectorY-Labs/yamlequal@v0.0.3
```

If you're building the library from source, ensure you have Go 1.25.1 installed. The runtime behavior of the library is unchanged, and existing code using yamlequal will continue to work without modification.

---

**About this post**: This release announcement was AI-generated using the model `unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M`. The article was generated based on the official v0.0.3 release from the [UnitVectorY-Labs/yamlequal](https://github.com/UnitVectorY-Labs/yamlequal) repository published on October 9, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
