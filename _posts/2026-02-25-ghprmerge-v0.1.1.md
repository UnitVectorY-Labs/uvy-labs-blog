---
layout: post
title: ghprmerge v0.1.1 Released - Smarter Repository Discovery
date: 2026-02-25 02:26:00 -0500
tags: ["ghprmerge", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the release of ghprmerge v0.1.1! This update brings improved efficiency and cleaner output when scanning your organization for pull requests ready to merge.

Released on February 25, 2026, v0.1.1 focuses on a key enhancement: automatic filtering of archived repositories during discovery. For organizations with many inactive or legacy projects, this means faster scans and more focused results—no more attempts to process read-only repositories that can't be modified.

## What's New

### Archived Repository Filtering

The headline feature in v0.1.1 is automatic handling of archived repositories. Previously, ghprmerge would discover archived repos during its scan, only to encounter errors when attempting actions on these read-only projects. Now, archived repositories are filtered out at the discovery stage:

- **Cleaner output** - Only actionable repositories appear in your results
- **Faster scans** - Fewer API calls and less processing time
- **Smarter workflow** - The tool focuses on repos that actually need attention

### Under-the-Hood Improvements

While the archived repository handling is the main user-facing change, this release includes other important updates:

- **Go 1.26.0 support** - Built with the latest Go version for improved performance and security
- **Enhanced supply chain security** - CI/CD workflows now pin GitHub Actions to specific commit hashes
- **Improved documentation** - Expanded guides covering archived repository handling and installation

## Why It Matters

ghprmerge was built to solve a real problem: when organizations have dozens or hundreds of repositories with automated pull requests (like Dependabot updates), manually reviewing and merging each one becomes impractical. This tool automates that workflow safely, evaluating PRs across your entire organization in one command.

Version 0.1.1 makes that workflow even better. Organizations with many archived or legacy projects no longer waste time on repos that can't be modified. The scan focuses where it matters—on active repositories with actionable pull requests.

This release maintains full backward compatibility. All existing flags, configurations, and workflows continue to work exactly as before. The archived repository filtering is an improvement that works silently in the background—you'll just notice cleaner, faster results.

## Getting Started

### Installation

Download the latest binary for your platform from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/ghprmerge/releases/tag/v0.1.1):

**Linux (amd64):**
```bash
curl -L https://github.com/UnitVectorY-Labs/ghprmerge/releases/latest/download/ghprmerge_linux_amd64 -o ghprmerge
chmod +x ghprmerge
sudo mv ghprmerge /usr/local/bin/
```

**macOS (amd64 or arm64):**
```bash
curl -L https://github.com/UnitVectorY-Labs/ghprmerge/releases/latest/download/ghprmerge_darwin_amd64 -o ghprmerge
chmod +x ghprmerge
sudo mv ghprmerge /usr/local/bin/
```

**Windows:** Download `ghprmerge_windows_amd64.exe` from the releases page and add to your PATH.

### Quick Start

Set your GitHub token and start scanning:

```bash
export GITHUB_TOKEN=ghp_xxxxxxxxxxxx

# See what would be merged (safe, read-only mode)
ghprmerge --org myorg --source-branch dependabot/

# Rebase outdated PRs
ghprmerge --org myorg --source-branch dependabot/ --rebase

# Merge ready PRs
ghprmerge --org myorg --source-branch dependabot/ --merge
```

For complete documentation, visit the [usage guide](https://github.com/UnitVectorY-Labs/ghprmerge/blob/main/docs/USAGE.md).

---

**Transparency Note:** This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For details about this release, visit the [ghprmerge v0.1.1 release page](https://github.com/UnitVectorY-Labs/ghprmerge/releases/tag/v0.1.1). Generated on February 25, 2026 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
