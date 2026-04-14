---
layout: post
title: "Tofu Template Tester v0.1.1: Better Visibility and Stability"
date: 2025-10-14 09:00:00 -0500
tags: ["tofu-template-tester", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On October 14, 2025, we released tofu-template-tester v0.1.1. This update focuses on enhancing the user experience with better visibility into the tool's version and strengthening the project's foundation for future growth.

## What's new

The most notable addition in this release is the introduction of the `-version` flag. Users can now easily verify which version of the tofu-template-tester they are running directly from the command line, simplifying troubleshooting and ensuring consistency across different environments.

## Why it matters

While a version flag may seem like a small addition, it is a fundamental piece of a professional CLI tool. It provides immediate clarity for users and developers alike. 

Beyond the visible changes, v0.1.1 brings significant under-the-hood improvements. We have updated the project to Go 1.25.2 and implemented a comprehensive suite of unit tests. These changes ensure that the core logic—from property loading to template rendering—is stable, reliable, and performing at its best.

## Getting started

You can upgrade to the latest version by running:

```bash
go install github.com/UnitVectorY-Labs/tofu-template-tester@latest
```

Alternatively, pre-compiled binaries for macOS, Linux, and Windows are available on our [GitHub Releases](https://github.com/UnitVectorY-Labs/tofu-template-tester/releases) page.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It was generated on 2026-04-14 based on the v0.1.1 release of the [UnitVectorY-Labs/tofu-template-tester](https://github.com/UnitVectorY-Labs/tofu-template-tester) repository. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
