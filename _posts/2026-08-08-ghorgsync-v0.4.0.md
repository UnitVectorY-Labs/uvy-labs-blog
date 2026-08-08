---
layout: post
title: "ghorgsync v0.4.0: Reclaim Your Disk Space with Git-Ignored Cleanup"
date: 2026-08-08 09:00:00 -0500
tags: ["ghorgsync", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on August 8, 2026, ghorgsync v0.4.0 introduces a highly anticipated feature designed to keep your local development environment lean. This release focuses on giving users more control over their disk usage without compromising the safety of their source code.

## What's new

The headline addition to v0.4.0 is the new `--clean` flag. This powerful tool allows you to automatically identify and remove files and directories that are ignored by Git across all your managed repositories.

To ensure this process remains safe and transparent, we've included several guardrails:
- **Interactive Confirmation**: By default, ghorgsync will ask for your permission before deleting ignored content from each repository.
- **Safe Previews**: Use the `--dry-run` flag to see exactly what would be removed and how much disk space you would reclaim before any changes are actually made.
- **Automation Friendly**: For those using ghorgsync in scripts or CI pipelines, the `--force` flag allows you to skip confirmation prompts for a completely non-interactive experience.

This cleanup happens as the final step of the synchronization process, ensuring your repositories are up-to-date and tidy in one go.

## Why it matters

When managing dozens or hundreds of repositories, build artifacts, dependency folders (like `node_modules`), and temporary caches can quickly consume gigabytes of storage. Manually cleaning these out is tedious and error-prone.

The `--clean` feature leverages Git's own ignore rules to safely purge this "noise" while guaranteeing that your actual source code and untracked working files remain untouched. It's an essential utility for developers who want a fresh build environment without the hassle of manual deletion.

## Getting Started

Upgrading to v0.4.0 is straightforward. You can install the latest version directly via Go:

```bash
go install github.com/UnitVectorY-Labs/ghorgsync@latest
```

Alternatively, you can download pre-compiled binaries for Windows, macOS, and Linux from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/ghorgsync/releases/tag/v0.4.0).

---

*This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`. It was generated on August 8, 2026, based on the [ghorgsync v0.4.0 release](https://github.com/UnitVectorY-Labs/ghorgsync/releases/tag/v0.4.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
