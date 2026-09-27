---
layout: post
title: "ghprmerge v0.8.1 Released"
date: 2026-09-27 13:05:00 +0000
tags: ["ghprmerge", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

ghprmerge v0.8.1 was released on September 27, 2026. This patch continues the parallel-processing improvements started in v0.8.0 by making the worker count configurable through an environment variable, allowing teams to set a persistent default for all commands without repeating flags.

## What's new

The release adds support for the `GHPRMERGE_WORKERS` environment variable as a default for the `--workers` flag.

* Set `GHPRMERGE_WORKERS` to a positive integer to define the default number of concurrent repository workers for `merge`, `rebase`, `close`, `report`, and other commands.
* The `--workers` flag continues to work and explicitly overrides the environment variable when provided on the command line.
* Invalid values are rejected at parse time with a clear error message: the value must be a positive integer.
* Help output and environment variable documentation now list `GHPRMERGE_WORKERS` alongside the existing variables such as `GITHUB_TOKEN`, `GITHUB_ORG`, `GHPRMERGE_AUTHOR`, `GHPRMERGE_MIN_GROUP_SIZE`, and `GHPRMERGE_MIN_MERGE_DELAY`.
* Documentation across README and the docs site has been updated with examples showing `GHPRMERGE_WORKERS=4 ghprmerge report --org myorg` and clarifying precedence between env var and flag.
* Tests were added for environment variable parsing, including valid values, flag override, and rejection of zero, negative, non-numeric, and overflow inputs.

No breaking changes were introduced. The default remains 1 when neither the environment variable nor the flag is set.

## Why it matters

Parallel repository processing is essential when operating at organization scale, particularly for bulk handling of automated dependency update PRs. v0.8.0 introduced the `--workers` flag to control concurrency. v0.8.1 makes that setting ergonomic for repeated use.

By using `GHPRMERGE_WORKERS`, teams can define the desired concurrency once in a shell profile, CI environment, or wrapper script and have it apply consistently across all ghprmerge invocations. The explicit flag override preserves fine-grained control for ad-hoc runs. This aligns with the tool's existing environment variable patterns and reduces repetition without sacrificing safety.

## Upgrading

v0.8.1 is a non-breaking patch release on top of v0.8.0. Existing workflows using `--workers` are unaffected. Users who previously managed worker counts via wrapper scripts can replace them with `GHPRMERGE_WORKERS`.

Binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64 are available on the release page with md5 and sha256 checksums. Install or upgrade via the assets at https://github.com/UnitVectorY-Labs/ghprmerge/releases/tag/v0.8.1, or use your preferred package manager.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/ghprmerge v0.8.1 released 2026-09-27. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
