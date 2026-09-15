---
layout: post
title: "ghprmerge v0.7.1 Released"
date: 2026-09-03 09:52:10 +0000
tags: ["ghprmerge", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

ghprmerge v0.7.1 was released on September 3, 2026. This maintenance release improves visibility when using author filtering and keeps the toolchain current, with no breaking changes for existing workflows.

The project is a command-line tool for automatically evaluating, merging, and optionally rebasing GitHub pull requests that share a source branch across an organization. It is commonly used to process automated dependency updates such as Dependabot without manual clicking through each repository.

## What's new

The primary user-facing improvement is clearer reporting when the `--author` filter is used. The console header now includes the author value, so runs are self-documenting at a glance. Previously the header showed mode and branch; now it appends Author when set, for example:

Mode: merge mode │ Branch: dependabot/ │ Author: dependabot[bot]

JSON output is also updated. Run metadata now includes an `author` field when filtering by author, making programmatic reporting more complete.

Documentation was refreshed to reflect the updated project description and usage examples. The Go toolchain was updated to 1.27.x and CI dependencies were bumped for security and maintenance. Pre-built binaries for darwin, linux, and windows are available in the release assets.

## Why it matters

Author filtering is a common way to scope ghprmerge to specific bots or contributors. Making the filter visible in the header and JSON output reduces confusion during audits and shared runs. Operators can now confirm at a glance which author scope was applied, and downstream tools consuming JSON reports can record that context without extra logging.

The toolchain updates ensure builds and CI remain on supported versions without changing user behavior.

## Upgrade and installation

There are no breaking changes. Upgrade by downloading the latest binaries from the GitHub release page for your platform, or install from source with:

go install github.com/UnitVectorY-Labs/ghprmerge@latest

Existing configurations and flags continue to work as before. After upgrading, author-filtered runs will display the author in the header and JSON metadata.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. It references repository UnitVectorY-Labs/ghprmerge, release v0.7.1, and was generated on 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
