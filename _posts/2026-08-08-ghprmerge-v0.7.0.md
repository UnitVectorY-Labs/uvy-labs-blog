---
layout: post
title: \"Bulk-Close PRs Across Your Organization with ghprmerge v0.7.0\"
date: 2026-08-08 09:00:00 -0500
tags: ["ghprmerge", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on August 8, 2026, ghprmerge v0.7.0 brings a powerful new capability to organization-wide pull request management. This release focuses on giving users more control over their PR queues by introducing a way to clean up matching pull requests at scale.

## What's new

The headline feature of v0.7.0 is the introduction of the `close` subcommand. While ghprmerge has always been excellent for merging matching PRs, users often find themselves with a large number of automated PRs that are no longer needed or are fundamentally incorrect across multiple repositories.

The `close` command allows you to identify and close pull requests across your entire organization based on a source branch pattern. 

Key capabilities include:
- **Pattern-Based Closing**: Target all PRs originating from a specific branch pattern (e.g., `dependabot/`) across all repositories in your organization.
- **Source Branch Cleanup**: Use the `--delete-source-branch` flag to automatically remove the source branch from the head repository after the PR is closed, leaving your repositories clean.
- **Safety First**: The `--confirm` flag provides a two-phase workflow, allowing you to scan and review the list of PRs targeted for closure before committing to the action.

## Why it matters

For teams managing dozens or hundreds of repositories, the sheer volume of automated dependency updates can become overwhelming. When a specific version of a dependency is found to be buggy or a specific update path is abandoned, closing those PRs one by one is a tedious and error-prone process.

By adding the ability to bulk-close PRs, ghprmerge transforms a manual chore into a single command. Whether you are clearing out stale branches or reacting to a security advisory that renders certain PRs obsolete, v0.7.0 ensures your organization's PR backlog remains manageable and relevant.

## Getting started with v0.7.0

Upgrading to v0.7.0 is straightforward. You can download the latest binary for your platform from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/ghprmerge/releases/tag/v0.7.0). 

Since the `close` command is a purely additive feature, there are no breaking changes to existing workflows. You can immediately start using the new subcommand to tidy up your organization's repositories.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It was generated on 2026-08-09 based on the v0.7.0 release of the [UnitVectorY-Labs/ghprmerge](https://github.com/UnitVectorY-Labs/ghprmerge) repository. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
