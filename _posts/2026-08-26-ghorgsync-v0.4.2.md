---
layout: post
title: "ghorgsync v0.4.2"
date: 2026-08-26 22:08:48 +0000
tags: ["ghorgsync", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

ghorgsync v0.4.2 was released on 2026-08-26. This release improves reliability for organizations that create repositories with an initial commit, such as a README-only start. The update fixes a false-positive empty-repository detection that previously caused newly initialized repos to be silently skipped during clone and sync operations.

## What's new

Empty repository detection now uses a two-step verification. Repositories with a non-zero size are processed as before. For repositories reporting size zero, ghorgsync now verifies emptiness by checking the commits endpoint. A definitive 409 response from GitHub marks the repository as truly empty and it is skipped; any other response leaves the repository in the sync set.

The change also updates usage documentation to explain the detection behavior and the minimal additional API cost involved. No new CLI flags or configuration options are introduced.

## Why it matters

The GitHub API reports repository size in kilobytes and truncates small values. Repositories created with a small initial commit, for example a README, often report size 0 and were incorrectly classified as empty in v0.4.1. Those repos were omitted from clone and sync runs, leading to missing local copies and confusing summary counts.

With v0.4.2, repos with an initial commit are correctly included, while genuinely empty repositories remain skipped and counted in the summary. The verification is conservative: transient API errors do not suppress cloning, ensuring safety for large organization syncs.

## Upgrade

Upgrading is straightforward and backward compatible. There are no breaking changes to configuration, flags, or output format. Install or upgrade to v0.4.2 to benefit from the corrected detection.

If you manage many repositories, especially those initialized with templates or README commits, this release removes the need to manually re-add skipped repos after a sync.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/ghorgsync v0.4.2 released 2026-08-26. Generated 2026-08-26. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
