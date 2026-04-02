---
layout: post
title: "ghorgsync v0.1.1: Faster Cloning with Clone-Only Mode"
date: 2026-02-25 09:00:00 -0500
tags: ["ghorgsync", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the release of **ghorgsync v0.1.1**, dropping just two days after our initial launch. This quick update introduces a new clone-only mode designed for developers who need to grab newly added organization repositories without waiting through a full synchronization cycle.

## What's New

### Clone-Only Mode (`--clone` Flag)

The headline feature in v0.1.1 is the new `--clone` flag. When you run `ghorgsync --clone`, the tool focuses exclusively on cloning repositories that are missing locally, skipping all per-repository processing on repos that already exist on your machine.

**What gets skipped:**
- Fetch operations on existing repositories
- Dirty state checks and branch drift corrections
- Directory auditing output (unknown folders, collisions, etc.)
- Progress bar updates for repos not being cloned

**Example usage:**

```bash
$ ghorgsync --clone
  repo  new-service  [cloned]
  repo  new-library  [cloned]

Summary:
  total: 10 | cloned: 2 | updated: 0 | dirty: 0 | branch-drift: 0 | unknown: 0 | excluded-but-present: 0 | errors: 0
```

### Expanded Documentation

We've also added two comprehensive documentation pages:

- **docs/USAGE.md** - Complete reference for configuration options, command-line flags, and runtime behavior
- **docs/EXAMPLES.md** - Practical examples with real output scenarios and troubleshooting guidance

## Why It Matters

If you manage local copies of many repositories across a GitHub organization, you know the frustration of waiting for a full sync when you only need to grab a couple of newly added repos. The dominant cost in synchronization is the per-repository processing—fetching, checking dirty state, detecting branch drift—not the actual clone operation.

The `--clone` flag eliminates this overhead for users who just need to populate their workspace with missing repositories quickly. It's particularly valuable when:
- A new repository has been added to your organization that you need immediately
- You're setting up a fresh workspace and want to minimize wait time
- You're scripting repetitive clone operations where full sync behavior isn't needed

This release also reinforces ghorgsync's commitment to non-destructive operations. Even with `--clone`, the tool never deletes directories, never discards local changes, and never runs destructive git commands.

## Getting Started

### New Users

1. Download the appropriate binary for your platform from the [v0.1.1 release page](https://github.com/UnitVectorY-Labs/ghorgsync/releases/tag/v0.1.1):
   - Linux: `ghorgsync-v0.1.1-linux-amd64.tar.gz` or `ghorgsync-v0.1.1-linux-arm64.tar.gz`
   - macOS: `ghorgsync-v0.1.1-darwin-amd64.tar.gz` (Intel) or `ghorgsync-v0.1.1-darwin-arm64.tar.gz` (Apple Silicon)
   - Windows: `ghorgsync-v0.1.1-windows-amd64.zip`

2. Extract and add to your PATH

3. Create a `.ghorgsync` configuration file in your repositories directory:
   ```yaml
   organization: my-org
   ```

4. Authenticate using `GITHUB_TOKEN` or `gh auth login`

### Upgrading from v0.1.0

If you're already using ghorgsync v0.1.0, upgrading is straightforward:
- Download the binary for your platform and replace the existing one
- No configuration changes needed—all v0.1.0 workflows remain fully compatible
- Start using `--clone` right away for faster cloning when needed

ghorgsync remains in active development, and we're already planning additional features based on user feedback. Check out the full documentation at [github.com/UnitVectorY-Labs/ghorgsync](https://github.com/UnitVectorY-Labs/ghorgsync).

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on February 25, 2026. For details about this release, see the [UnitVectorY-Labs/ghorgsync repository](https://github.com/UnitVectorY-Labs/ghorgsync) and [v0.1.1 release notes](https://github.com/UnitVectorY-Labs/ghorgsync/releases/tag/v0.1.1). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
