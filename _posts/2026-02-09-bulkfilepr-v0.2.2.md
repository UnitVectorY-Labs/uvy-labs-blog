---
layout: post
title: "bulkfilepr v0.2.2 Released: Improved Version Reporting"
date: 2026-02-09 02:18:16 -0500
tags: [bulkfilepr, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Quick Improvement to Version Tracking

**Released:** February 9, 2026

bulkfilepr v0.2.2 is now available as a targeted improvement focused on build quality and accurate version reporting. While this release doesn't introduce new features, it ensures that users installing bulkfilepr through `go install` will see the correct version number when checking their installation.

This maintenance release reflects the project's ongoing commitment to reliability and attention to detail in the developer experience.

## What's New

### Accurate Version Detection

The primary improvement in v0.2.2 is enhanced version reporting. When you run `bulkfilepr --version`, you'll now see the correct version number even when installing via:

```bash
go install github.com/UnitVectorY-Labs/bulkfilepr@v0.2.2
```

Previously, installations without explicit build-time version flags might have displayed "dev" instead of the actual release version. This fix leverages Go's build info to automatically detect and report the correct version.

## Why It Matters

While this may seem like a small change, accurate version reporting is crucial for:

- **Support and troubleshooting**: Knowing exactly which version you're running helps when seeking assistance
- **CI/CD pipelines**: Automated systems can correctly identify and log the tool version being used
- **Development workflows**: Developers building from source get proper version tracking without manual intervention

This release demonstrates the project's focus on polish and reliability—even in areas that might seem minor, getting them right matters for a professional developer experience.

## Upgrade and Installation

### Is Upgrade Required?

**No.** This is a backward-compatible maintenance release with no breaking changes. Existing v0.2.1 users can continue using their current installation without interruption.

Upgrade if you:
- Rely on accurate version strings in your workflows or logs
- Install bulkfilepr via `go install` and want proper version tracking
- Are setting up CI/CD pipelines that depend on version detection

### Installation Methods

**Install the latest version:**

```bash
go install github.com/UnitVectorY-Labs/bulkfilepr@latest
```

**Install v0.2.2 specifically:**

```bash
go install github.com/UnitVectorY-Labs/bulkfilepr@v0.2.2
```

**Download pre-built binaries:**

Pre-compiled binaries for macOS (Intel and Apple Silicon), Linux (x86_64, i386, arm64), and Windows (x86_64, i386) are available on the [GitHub releases page](https://github.com/UnitVectorY-Labs/bulkfilepr/releases/tag/v0.2.2), each with MD5 and SHA256 checksums for verification.

---

### About bulkfilepr

bulkfilepr is a Go command-line tool that automates batch-updating standardized files (GitHub workflows, CODEOWNERS, templates, Dockerfiles) across multiple local GitHub repositories and creates pull requests automatically. It's designed for teams managing many repositories who need to apply consistent changes efficiently.

Learn more at the [documentation site](https://bulkfilepr.unitvectorylabs.com/) or explore the [source code on GitHub](https://github.com/UnitVectorY-Labs/bulkfilepr).

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 17, 2026. For details about this post's generation, see the [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller) repository.*

</content>
<parameter=filePath>
/out/article.md