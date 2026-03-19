---
layout: post
title: "isplaintextfile v0.1.0: Infrastructure Modernization Release"
date: 2026-02-28 00:00:00 -0500
tags: [isplaintextfile, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

We're pleased to announce the release of **isplaintextfile v0.1.0**, available now on GitHub. Released on February 28, 2026, this update focuses on modernizing the project's build infrastructure while maintaining full compatibility with existing code.

## What's New

While this release doesn't introduce new API features, it brings important infrastructure improvements:

- **Go 1.26.0 Support:** The project now builds against Go 1.26.0, ensuring access to the latest language features and security patches
- **GitHub Actions Modernization:** All CI/CD workflows have been upgraded to use current action versions with improved security through commit pinning:
  - `actions/checkout` → v6
  - `actions/cache` → v5
  - `github/codeql-action` → v4
  - `actions/setup-go` → v6.3.0
- **Improved Supply Chain Security:** Key actions are now pinned to specific commit hashes, reducing reliance on mutable tags

## Why It Matters

For library users, this release means **zero disruption**. All existing code using isplaintextfile continues to work without modification. The API remains unchanged, and there are no breaking changes from previous versions (v0.0.1 through v0.0.4).

This infrastructure modernization ensures that:
- Automated testing and security scanning run on up-to-date, secure tooling
- The project maintains alignment with current Go ecosystem best practices
- Users benefit from improved CI reliability without any code changes on their end

The core functionality of isplaintextfile remains exactly as you know it: a lightweight, zero-dependency Go library that determines whether files contain plaintext by analyzing their content. The five API functions (`Bytes`, `File`, `FilePreview`, `Reader`, and `ReaderPreview`) work identically to previous releases.

## Getting Started

**Installation:**
```bash
go get github.com/UnitVectorY-Labs/isplaintextfile@v0.1.0
```

**Upgrade from Previous Versions:**
No code changes required. Simply update your dependency:
```bash
go get github.com/UnitVectorY-Labs/isplaintextfile@v0.1.0
```

The library requires Go 1.26.0 or later when building from source, but this does not affect users consuming the compiled module.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For more information, see the [isplaintextfile repository](https://github.com/UnitVectorY-Labs/isplaintextfile) and [v0.1.0 release](https://github.com/UnitVectorY-Labs/isplaintextfile/releases/tag/v0.1.0). Generated on March 19, 2026 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
