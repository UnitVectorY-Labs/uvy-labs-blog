---
layout: post
title: "ghprmerge v0.8.0: Parallel Repository Processing with --workers"
date: 2026-09-26 13:05:19 -0500
tags: ["ghprmerge", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On September 26, 2026, ghprmerge v0.8.0 was released. This update brings bounded parallel repository processing to all commands, letting teams run bulk pull request operations across many repositories faster without sacrificing safety or rate-limit compliance.

ghprmerge automates evaluation and merging of pull requests that share a source branch across an organization — a common workflow for Dependabot and other automated updates. v0.8.0 keeps the same simple interface while adding a new way to scale the work.

## What's new

The headline feature is the new `--workers` flag, available on `merge`, `rebase`, `close`, and `report`. By default the value is 1, preserving the previous sequential behavior. When you specify a higher value, repositories are processed by up to that many concurrent workers. Pull requests within a single repository remain sequential, and final output keeps discovery order.

Parallel execution is paired with improved rate-limit handling. A shared cooldown now respects GitHub primary and secondary rate limits across all workers, with bounded retries for transient errors. The `--min-merge-delay` option is enforced globally via a mutex, so merges are properly spaced even when workers run in parallel.

Documentation has been updated across README, USAGE, and EXAMPLES with practical guidance and examples, such as running reports with `ghprmerge report --org myorg --workers 4` or merging with `ghprmerge merge --org myorg --source-branch dependabot/ --workers 4 --min-merge-delay 2 --confirm`.

The release also includes routine dependency updates for Go modules, GitHub Actions, and CodeQL tooling, with no breaking changes.

## Why it matters

Bulk PR operations often touch dozens or hundreds of repositories. Previously that work ran one repository at a time, which could take a long time for large organizations. With `--workers`, wall-clock time drops while the tool continues to protect your GitHub API quota through shared rate-limit cooldowns and retries.

Because PRs inside a repository stay sequential and results remain ordered, teams get the speed benefit without changing how merges behave per repo. The default of 1 means existing workflows are unchanged; you opt in to parallelism only when you want it.

## Upgrading

v0.8.0 is available as prebuilt binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, and windows-386, windows-amd64, with checksums published on the release page. Installation follows the existing process documented in the repository.

Existing flags continue to work unchanged. If you try parallelism, start with a modest worker count such as 4 and increase gradually; workers share rate-limit cooldowns and higher concurrency will reach GitHub limits sooner.

This post was AI-generated. Model used: unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Repository: UnitVectorY-Labs/ghprmerge, Release v0.8.0, generated 2026-09-26. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).