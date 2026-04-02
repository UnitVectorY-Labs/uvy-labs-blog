---
layout: post
title: "yamlequal v0.0.2: Infrastructure and Documentation Improvements"
date: 2025-05-07 22:58:08 -0500
tags: ["yamlequal", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're pleased to announce the release of yamlequal v0.0.2, published on May 7, 2025. This release focuses on strengthening the project's infrastructure and improving documentation for a better developer experience.

## What's New

While v0.0.2 doesn't introduce new API features, it brings several important improvements:

**Updated Go Runtime Support**
The library now targets Go 1.24.3 (up from 1.24.0), ensuring users building from source benefit from the latest runtime improvements and patches.

**Enhanced Documentation**
The README has been upgraded with project status badges showing release version, license information, build status, and test coverage. Additionally, a typo in the code examples was corrected to ensure developers can follow along without confusion.

**Improved CI/CD Workflows**
GitHub Actions workflows have been updated to use the latest versions of build tools, keeping the continuous integration pipeline modern and efficient.

**Welcome New Contributors**
This release marks the first contributions from @JaredHatfield, who helped drive the Go version updates across the project. We're excited to welcome new voices to the community!

## Why It Matters

This maintenance release demonstrates yamlequal's commitment to staying current with Go ecosystem updates while maintaining full backward compatibility. Users can upgrade to v0.0.2 with confidence—no code changes are required, and all existing functionality remains intact.

The documentation improvements make it easier than ever for new users to get started with the library. The corrected examples and status badges provide immediate visibility into the project's health and stability.

## Upgrade Instructions

Upgrading to v0.0.2 is straightforward:

```bash
go get github.com/UnitVectorY-Labs/yamlequal@v0.0.2
go mod tidy
```

The library requires Go 1.24.3 or later when building from source. The public API remains unchanged, with `CompareFiles()` and `CompareYAML()` continuing to provide reliable semantic YAML comparison.

For more details, see the [full changelog](https://github.com/UnitVectorY-Labs/yamlequal/compare/v0.0.1...v0.0.2) or visit the [GitHub repository](https://github.com/UnitVectorY-Labs/yamlequal).

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It covers the yamlequal v0.0.2 release published on May 7, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
