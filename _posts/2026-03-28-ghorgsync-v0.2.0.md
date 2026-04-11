---
layout: post
title: "ghorgsync v0.2.0: Introducing Status Mode for Safe Repository Audits"
date: 2026-03-28 09:00:00 -0500
tags: ["ghorgsync", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on March 28, 2026, ghorgsync v0.2.0 introduces a powerful new way to manage your local organization mirror: Status Mode. This update transforms ghorgsync from a synchronization tool into a read-only auditor, giving you complete visibility into your local environment without the risk of modifying your code.

## What's new

The headline feature of this release is the introduction of the `--status` flag. When enabled, ghorgsync shifts into a specialized reporting mode that scans your local directory for repositories belonging to your target GitHub organization and identifies those that require attention.

Instead of automatically pulling updates or cloning missing projects, Status Mode specifically looks for:
- **Dirty Repositories**: Any repository with staged or unstaged changes.
- **Branch Drift**: Repositories that are currently checked out on a branch other than the default.

To make these findings actionable, ghorgsync now integrates colorized `git status --short` output directly into the report, allowing you to see exactly what has changed across dozens of repositories at a glance.

## Why it matters

For developers managing a large number of organization repositories, the "sync-and-pray" approach can be stressful. Status Mode provides three key advantages:

1. **Absolute Safety**: Because it performs no modifying git operations—no `fetch`, `checkout`, or `pull`—you can run it at any time without worrying about altering your local state.
2. **Instant Visibility**: By surfacing the short-form git status with native color coding, you no longer have to manually `cd` into every directory to find where you left off.
3. **Operational Efficiency**: Status Mode skips network-heavy operations. You get a comprehensive audit of your local disk state instantly, without waiting for GitHub API calls or remote fetches.

## Getting started

Upgrading to v0.2.0 is simple. You can update your installation using the standard Go command:

```bash
go install github.com/UnitVectorY-Labs/ghorgsync@latest
```

Once updated, you can run a safe audit of your organization mirror with:
```bash
ghorgsync --org <your-org> --status
```

---

*This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`. It was created based on the [UnitVectorY-Labs/ghorgsync](https://github.com/UnitVectorY-Labs/ghorgsync) repository, release [v0.2.0](https://github.com/UnitVectorY-Labs/ghorgsync/releases/tag/v0.2.0), on April 11, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*