---
layout: post
title: "ghorgsync v0.6.1: Capped Default Workers for Predictable Parallel Sync"
date: 2026-09-17 23:53:25 +0000
tags: ["ghorgsync", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

ghorgsync v0.6.1 was released on 2026-09-17. This is a focused patch release that makes parallel repository processing safer and more predictable on high-core machines by capping the default worker count at 32.

ghorgsync synchronizes a local directory with repositories in a GitHub organization or user account, cloning missing repos, fetching existing ones, and auditing state without destructive operations. The default concurrency, which previously scaled as four times the number of logical CPUs with no upper bound, is now clamped to 32 when no explicit setting is provided.

## What's new

The default number of parallel workers is now `min(4 * runtime.NumCPU(), 32)`. Explicit control via the `--workers` flag or the `GHORGSYNC_WORKERS` environment variable is unchanged and remains uncapped.

Documentation and CLI help were updated to reflect the new default. The change ships in v0.6.1 with pre-built binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64, along with checksums.

## Why it matters

On machines with many logical CPUs, the previous unbounded default could spawn an excessive number of concurrent git operations. That increases local resource pressure and raises the risk of hitting GitHub API rate limits. Capping the implicit default at 32 keeps sync operations fast while providing a sensible upper bound for most environments.

Machines with eight or fewer logical CPUs are unaffected; their default remains four times CPU count. Users who already set `--workers` or `GHORGSYNC_WORKERS` will see no behavioral change.

## Upgrading

Upgrade with the usual path:

```bash
go install github.com/UnitVectorY-Labs/ghorgsync@latest
```

Or download the v0.6.1 assets from the release page. No configuration migration is required. The change applies only to the implicit default; existing explicit worker settings continue to work as before.

*This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. It references repository UnitVectorY-Labs/ghorgsync, release v0.6.1, and was generated on 2026-09-18. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
