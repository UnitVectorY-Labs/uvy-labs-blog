---
layout: post
title: "ghorgsync v0.2.0 - Introducing Read-Only Status Mode"
date: 2026-03-28 13:43:00 -0500
tags: [ghorgsync, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

# ghorgsync v0.2.0 - Introducing Read-Only Status Mode

Released on March 28, 2026, ghorgsync v0.2.0 brings a powerful new inspection capability to teams managing multiple repositories across GitHub organizations. This update introduces the `--status` flag, enabling users to audit their local repository state without making any modifications.

## What's New

### Status Mode (`--status` flag)

The headline feature in v0.2.0 is **Status Mode**, a read-only inspection mode that quickly identifies repositories needing attention. Simply run:

```bash
ghorgsync --status
```

This command surveys all synchronized repositories and reports:

- **Dirty working trees**: Repositories with uncommitted changes (staged or unstaged)
- **Branch drift**: Repositories not on their default branch

Status mode produces clean, focused output showing only the repositories that need your attention:

```
$ ghorgsync --status
  repo  web-frontend  [dirty] on feature-branch (default: main)
        M src/index.ts
       ?? new-file.txt
  repo  docs-site  [branch-drift] on feature-docs (default: main)

Summary:
  total: 10 | dirty: 1 | branch-drift: 1
```

Key characteristics of Status Mode:

- **Read-only**: Performs no modifying git operations—no fetch, no checkout, no pull
- **Non-destructive**: Missing repositories are not cloned; safe to run anytime
- **Colorized output**: Leverages git's native status coloring for familiar visual distinction
- **Focused summaries**: Clean repos on their default branch produce no output

### Practical Use Cases

Status Mode is ideal for:

- **Pre-commit audits**: Quickly survey which repositories need attention before making changes
- **CI/CD integration**: Read-only status checks in automated pipelines
- **Team oversight**: Scan your organization's repository state without affecting working directories

## Why It Matters

Managing dozens or hundreds of repositories across a GitHub organization presents a unique challenge: how do you know which repos need attention without manually checking each one?

Before v0.2.0, users could sync their repositories with `ghorgsync` (which fetches and pulls updates) or clone missing ones with `--clone`. But there was no quick way to inspect the state of existing repositories without triggering git operations that might modify your working tree.

Status Mode fills this gap. It respects ghorgsync's core principle of non-destructiveness while giving you visibility into:

1. **Uncommitted changes**: Spot dirty working trees before pushing or sharing code
2. **Branch drift awareness**: Identify repositories that have drifted from their default branch
3. **At-a-glance summaries**: Know exactly how many repos need attention with a single command

The mutually exclusive design of `--clone` and `--status` flags ensures you're always clear about which mode you're running—no surprises.

## Installation & Upgrade

Upgrading to v0.2.0 is straightforward and fully backward compatible:

```bash
# Upgrade using Go
go install github.com/UnitVectorY-Labs/ghorgsync@latest

# Or download the latest binary from GitHub Releases
```

All existing workflows continue to work exactly as before:
- Default sync mode: `ghorgsync`
- Clone-only mode: `ghorgsync --clone`
- All existing flags: `--verbose`, `--no-color`, `--help`, `--version`

### Getting Started with Status Mode

```bash
# Quick status check across all synced repositories
ghorgsync --status

# Combine with verbose output for detailed information
ghorgsync --status --verbose
```

For complete documentation, see the [Usage Guide](https://github.com/UnitVectorY-Labs/ghorgsync/blob/v0.2.0/docs/USAGE.md) and [Examples](https://github.com/UnitVectorY-Labs/ghorgsync/blob/v0.2.0/docs/EXAMPLES.md).

---

### Transparency Note

This release announcement was AI-generated using the `unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M` model. The post was generated on March 30, 2026, based on information from the [ghorgsync v0.2.0 release](https://github.com/UnitVectorY-Labs/ghorgsync/releases/tag/v0.2.0).

**Author:** [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
