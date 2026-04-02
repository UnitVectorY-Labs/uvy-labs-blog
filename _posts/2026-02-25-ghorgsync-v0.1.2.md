---
layout: post
title: "ghorgsync v0.1.2: Better Handling for Archived Repositories"
date: 2026-02-25 23:07:41 -0000
tags: ["ghorgsync", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## A Smarter Way to Sync Archived Repositories

On February 25, 2026, we released ghorgsync v0.1.2, adding intelligent support for GitHub's archived repositories. This update gives you full control over how read-only repositories are handled during your organization sync workflow—while maintaining the safe, non-destructive approach that makes ghorgsync reliable.

If you work with organizations that archive old projects, this release addresses a common pain point: knowing exactly what happens to those repositories when you sync, and giving you the flexibility to configure behavior that matches your workflow.

## What's New

### Archived Repository Handling

The headline feature in v0.1.2 is proper support for GitHub's archived (read-only) repositories. Here's what changed:

**Default Behavior:** By default, ghorgsync now skips archived repositories during sync operations. If you already have a local directory for an archived repo, it will be flagged as "excluded-but-present" in your summary report—giving you visibility into stale content that might need cleanup.

**Opt-In Support:** Prefer to keep archived repos in sync? Set `include_archived: true` in your `.ghorgsync` configuration file, and ghorgsync will treat them just like any other repository—cloning them if missing and syncing them if present.

### Configuration Example

```yaml
organization: your-org-name
include_archived: true
```

That's it. The option is fully backward compatible—existing configurations work without any changes.

## Why It Matters

Archived repositories are common in growing organizations. They represent completed projects, deprecated services, or reference material that shouldn't be modified but may still need to exist locally for historical context.

**Before v0.1.2:** Archived repos were treated like active ones, which could lead to confusion when sync operations behaved unexpectedly (since archived repos are read-only on GitHub).

**With v0.1.2:** You have clear, configurable behavior that matches your needs:
- **Skip by default:** Clean up noise from your sync workflow and focus on active development
- **Get visibility:** Know exactly which local directories correspond to archived repos so you can decide what to keep or remove
- **Opt in when needed:** Maintain local copies of archived projects if that's part of your workflow

### Backward Compatible Upgrade

This release introduces no breaking changes. If you're upgrading from v0.1.1 or v0.1.0:
- Your existing `.ghorgsync` configuration works exactly as before
- The new `include_archived` option defaults to `false`, matching the previous implicit behavior
- You can adopt the new feature at your own pace

## Installation and Upgrade

### Upgrading

If you installed via Go:
```bash
go install github.com/UnitVectorY-Labs/ghorgsync@v0.1.2
```

### Download Binaries

Pre-built binaries are available for all major platforms at the [v0.1.2 release page](https://github.com/UnitVectorY-Labs/ghorgsync/releases/tag/v0.1.2):

- Linux (amd64, arm64, 386)
- macOS (amd64, arm64)
- Windows (amd64, 386)

Each platform includes checksums for verification.

### Quick Start

If you're new to ghorgsync, create a `.ghorgsync` file in your working directory:

```yaml
organization: your-org-name
```

Then run `ghorgsync` to sync all repositories from your organization. The tool will:
1. Clone any missing repositories
2. Pull updates for existing ones
3. Report any issues (dirty repos, branch drift, stray content)

Learn more in the [full usage documentation](https://github.com/UnitVectorY-Labs/ghorgsync/blob/main/docs/USAGE.md).

---

## About This Release

This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was generated on behalf of [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller) based on information from the ghorgsync v0.1.2 release published on February 25, 2026.

For complete release notes and technical details, visit the [official release page](https://github.com/UnitVectorY-Labs/ghorgsync/releases/tag/v0.1.2).
