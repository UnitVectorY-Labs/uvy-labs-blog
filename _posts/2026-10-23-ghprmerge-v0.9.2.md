---
layout: post
title: "ghprmerge v0.9.2 Released"
date: 2026-10-23 01:33:57 -0500
tags: ["unitvectory-labs-ghprmerge", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

ghprmerge v0.9.2 was released on 2026-10-23. This release is a focused bug-fix update for the CLI that automatically evaluates and merges GitHub pull requests across an organization.

The change corrects how ghprmerge interprets GitHub check runs. Previously, only check runs with a `success` conclusion were treated as passing, which caused PRs with intentionally skipped or neutral checks to be reported as failing. v0.9.2 aligns readiness evaluation with GitHub's semantics so those PRs can be correctly assessed and merged.

## What's new

- Check-run evaluation now accepts `success`, `skipped`, and `neutral` conclusions as passing for completed check runs, matching GitHub's own definition of a passing result.
- Regression tests were added to verify the new classification for mixed passing conclusions and to ensure failures, cancellations, and pending checks are still handled correctly.
- Documentation was updated across the README and docs to clarify that completed `success`, `skipped`, and `neutral` checks count as passing, while legacy commit statuses still require `success`.

No new user-facing features were introduced and there are no breaking changes.

## Why it matters

Teams using ghprmerge to automate merges of dependency updates and other automated PRs often have workflows where certain checks are intentionally skipped on pull requests — for example, a full OSV dependency scan that runs only on main. Under the previous logic, those intentionally skipped jobs made the PR appear blocked with `checks failing`, even though GitHub itself considers the PR ready.

With v0.9.2, readiness reporting is accurate. PRs with completed skipped or neutral checks will no longer be falsely blocked, reducing manual triage and keeping automated merge pipelines reliable. The fix also prevents confusion when reviewing the `report` output and ensures merge decisions reflect GitHub's actual state.

Upgrade is straightforward. Release artifacts are available for darwin-amd64/arm64, linux-386/amd64/arm64, and windows-386/amd64 as `.tar.gz`/`.zip` packages with checksums. Replace the existing binary or download the new asset from the release page. No configuration changes are required.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/ghprmerge release v0.9.2, published 2026-10-23. Article generated 2026-10-24. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
