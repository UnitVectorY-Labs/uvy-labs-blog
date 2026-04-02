---
layout: post
title: "ghprmerge v0.2.0: A Visual Transformation"
date: 2026-03-17 09:00:00 -0500
tags: ["ghprmerge", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the release of ghprmerge v0.2.0, launched on February 28, 2026. This update brings a completely redesigned terminal experience that makes managing pull requests across your organization faster to scan and easier to understand at a glance.

## What's New

v0.2.0 focuses entirely on improving how you interact with ghprmerge in the terminal. The core functionality remains unchanged — you still scan for matching PRs, rebase when needed, and merge with safety checks intact. But now the output looks and feels like a modern CLI tool.

### Colored Output and Unicode Symbols

Actions are now color-coded for instant recognition: green for merged PRs, yellow for rebased ones, and red for failures. Text-based indicators have been replaced with clean Unicode symbols (✓, ↻, ✗, ⊘) that make the output scannable even when reviewing long lists of repositories.

### Progress Visualization

A live progress bar appears during repository scans, showing you exactly how far along the tool is. When execution completes, a condensed summary line displays the key statistics: total repos scanned, PRs found, and a breakdown of merged, rebased, and skipped actions.

### New Control Flags

Two new flags give you more control over output behavior:

- `--verbose` streams results from every repository during scanning, including those without matching PRs
- `--no-color` disables colored output for CI environments or when piping to files

**Note:** The `--quiet` flag from v0.1.1 has been replaced with `--verbose`. The default behavior is now the quiet mode — you only see repositories with matching PRs unless you explicitly request verbose output.

## Why It Matters

This release represents a shift in focus from building features to refining the user experience. After establishing core functionality in earlier versions, ghprmerge v0.2.0 addresses a practical need: when you're managing dozens or hundreds of Dependabot PRs across repositories, every second counts.

The new output design reduces cognitive load. You can quickly identify which repositories had issues (red failures), see successful merges at a glance (green checkmarks), and get the big picture from a single summary line without scanning through pages of text.

For teams running ghprmerge in CI/CD pipelines or scripting workflows, the `--no-color` flag ensures compatibility with environments that don't handle ANSI escape codes well. Meanwhile, the default quiet behavior keeps output clean by showing only what matters — repositories with actual PR activity.

## Getting Started

Upgrading from v0.1.x is straightforward. Download the appropriate binary for your platform from the [v0.2.0 release page](https://github.com/UnitVectorY-Labs/ghprmerge/releases/tag/v0.2.0), or build from source using Go.

**Important:** If you were using `--quiet` in your scripts, replace it with just removing any verbosity flag (quiet is now the default) or switch to `--verbose` if you need full repository visibility.

Basic usage remains the same:
```bash
# Dry run - see what would happen
ghprmerge --org myorg --source-branch dependabot/

# Actually merge the PRs
ghprmerge --org myorg --source-branch dependabot/ --merge
```

All safety features remain intact. ghprmerge still defaults to analysis-only mode and requires explicit action flags for any mutations. The tool never operates on local repositories — it uses the GitHub API directly, eliminating risks from local state issues.

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was produced based on analysis of the ghprmerge v0.2.0 release (February 28, 2026) from [UnitVectorY-Labs/ghprmerge](https://github.com/UnitVectorY-Labs/ghprmerge/releases/tag/v0.2.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
