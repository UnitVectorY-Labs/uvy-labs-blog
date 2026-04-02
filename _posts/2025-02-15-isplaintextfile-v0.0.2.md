---
layout: post
title: "isplaintextfile v0.0.2 Released"
date: 2025-02-15 09:00:00 -0500
tags: ["isplaintextfile", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introduction

We're pleased to announce the release of **isplaintextfile v0.0.2**, published on February 15, 2025. This update keeps our lightweight Go plaintext detection library current with the latest Go toolchain while demonstrating our commitment to active project maintenance just days after our initial launch.

## What's New

This is a maintenance release focused on infrastructure updates:

- **Go 1.24.0 Support:** The project now targets Go 1.24.0, upgrading from Go 1.23.6. This ensures compatibility with the latest Go compiler optimizations and language improvements.
- **Enhanced Documentation:** A GitHub release badge has been added to the README, making it easier for users to see the current version at a glance.

**Important:** This release maintains full backward compatibility. All five public API functions (`Bytes`, `File`, `FilePreview`, `Reader`, and `ReaderPreview`) work exactly as before with no code changes required.

## Why It Matters

While this update doesn't introduce new features, it reflects our dedication to keeping the project healthy and up-to-date:

- **Active Development:** Releasing v0.0.2 just three days after v0.0.1 shows we're actively maintaining and improving the library.
- **New Contributor Welcome:** This release includes the first contribution from @JaredHatfield, who updated the Go version across the project—part of our growing community.
- **Zero Dependencies Maintained:** The library continues to rely solely on Go's standard library, keeping your projects lightweight and free from external dependency headaches.

For users, upgrading means you can leverage Go 1.24.0's improvements while your existing code continues to work without modification.

## Getting Started

### Installation

If you're starting fresh:

```bash
go get github.com/UnitVectorY-Labs/isplaintextfile@v0.0.2
```

### Upgrading from v0.0.1

No action is required—your existing code will work seamlessly. Simply update your dependency to pull in the new version:

```bash
go get -u github.com/UnitVectorY-Labs/isplaintextfile@v0.0.2
```

### System Requirements

- Go 1.24.0 or later recommended for building from source
- Binary compatibility maintained for projects built with Go 1.23.6

---

**Transparency Note:** This post was AI-generated using the model unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M. Release: v0.0.2, published February 15, 2025. Repository: https://github.com/UnitVectorY-Labs/isplaintextfile. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
