---
layout: post
title: "yamlequal v0.0.2: Polishing the Foundation"
date: 2025-05-07 09:00:00 -0500
tags: ["yamlequal", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On May 7, 2025, we released yamlequal v0.0.2. This maintenance release focuses on stability, toolchain updates, and improving the developer experience through better documentation.

## What's new

This release is centered around maintenance and refinement:

- **Toolchain Updates:** We've bumped the required Go version to 1.24.3, ensuring the library leverages the latest performance and security improvements from the Go team.
- **Documentation Refinements:** The README has been updated with useful project badges and clarified usage examples. Specifically, we've corrected typos and improved the descriptions for `CompareFiles` and `CompareYAML` to make the library more intuitive for new users.
- **CI/CD Improvements:** Updates to our internal build pipelines and the introduction of automated version management tools ensure a more robust and reliable release process.

## Why it matters

While v0.0.2 doesn't introduce new functional features, these "under-the-hood" improvements are critical for the long-term health of the project. By staying current with the Go toolchain and clarifying our documentation, we reduce friction for developers integrating `yamlequal` into their workflows. These changes provide a more stable foundation for the semantic YAML comparison capabilities that users rely on.

## Getting Started

Upgrading to v0.0.2 is straightforward. Use the following command to update your dependency:

```bash
go get github.com/UnitVectorY-Labs/yamlequal@v0.0.2
```

***

This post was AI-generated.
Model: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL
Repository: UnitVectorY-Labs/yamlequal
Release: v0.0.2
Date: 2026-04-14
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
