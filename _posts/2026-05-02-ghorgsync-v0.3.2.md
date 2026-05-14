---
layout: post
title: "Refining the Sync: ghorgsync v0.3.2"
date: 2026-05-02 09:00:00 -0500
tags: ["ghorgsync", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

`ghorgsync` helps developers effortlessly keep their local environment in sync with their GitHub organizations. On May 2, 2026, we released version v0.3.2. This maintenance update focuses on streamlining configuration by returning to a more centralized approach for specifying GitHub organizations.

## What's new

In version v0.3.2, we have removed the `--org` command-line flag and the `GITHUB_ORG` environment variable. These features, introduced in the previous version, allowed for quick overrides of the organization name. By reverting these changes, we are refocusing the tool's configuration on the `.ghorgsync` file.

## Why it matters

Centralizing configuration in the `.ghorgsync` file ensures that your synchronization settings are versionable, reproducible, and consistent across different environments. This reduces the risk of accidental syncs to the wrong organization and keeps the command-line interface clean and focused.

## Upgrade and Installation

To upgrade to v0.3.2, simply update your installation using your preferred method. If you were using the `--org` flag or the `GITHUB_ORG` environment variable, please ensure your `.ghorgsync` configuration file is correctly set up:

```yaml
organization: your-organization-name
```

We appreciate your continued use of `ghorgsync` to keep your local repositories organized and up to date.

***

This post was AI-generated.
Model: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL
Repository: UnitVectorY-Labs/ghorgsync
Release: v0.3.2
Date of generation: May 14, 2026
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
