---
layout: post
title: "ghprmerge v0.6.0: Better Rate Control and Improved Dependabot Filtering"
date: 2026-08-03 09:00:00 -0500
tags: ["ghprmerge", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on August 3, 2026, ghprmerge v0.6.0 brings important operational improvements to help organizations manage their automated pull requests more reliably. This release focuses on giving users better control over merge pacing and correcting key configuration details for Dependabot automation.

## What's new

### Merge Rate-Limiting
To prevent triggering GitHub API rate limits or hitting platform constraints during large-scale operations, v0.6.0 introduces merge rate-limiting. Users can now specify a minimum delay between consecutive merge requests using the new `--min-merge-delay <secs>` flag with the `merge` command. For those who prefer environment-based configuration, the `GHPRMERGE_MIN_MERGE_DELAY` variable is also supported. This delay is applied specifically before a merge request is sent, ensuring that your repository scanning remains fast while your merges stay within safe limits.

### Improved Dependabot Filtering
We have corrected a discrepancy in our documentation and help text regarding author filtering. Previously, the documentation suggested using `app/dependabot` to target Dependabot pull requests. However, the GitHub API identifies these as `dependabot[bot]`. We have updated all help strings and documentation to reflect the correct login, ensuring that your author-based filters work as expected.

## Why it matters

For organizations managing dozens or hundreds of repositories, automation speed can sometimes be a double-edged sword. The addition of merge rate-limiting provides a critical safety valve, allowing administrators to tune the tool to the specific limits of their GitHub environment without sacrificing the efficiency of the scanning process.

Additionally, the correction to Dependabot author filtering removes a point of friction for users setting up automated dependency merge pipelines. By aligning our tool's guidance with the actual API responses, we ensure that Dependabot PRs are correctly identified and processed without manual trial-and-error.

## Getting Started with v0.6.0

You can upgrade to v0.6.0 by downloading the latest binaries from the [GitHub releases page](https://github.com/UnitVectorY-Labs/ghprmerge/releases/tag/v0.6.0). 

If you were previously using `app/dependabot` in your `--author` filters, please update your configurations or scripts to use `dependabot[bot]` to ensure your filters continue to function correctly.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Reference: [UnitVectorY-Labs/ghprmerge](https://github.com/UnitVectorY-Labs/ghprmerge), release [v0.6.0](https://github.com/UnitVectorY-Labs/ghprmerge/releases/tag/v0.6.0), generated on 2026-08-03. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
