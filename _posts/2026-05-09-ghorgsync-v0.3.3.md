---
layout: post
title: "ghorgsync v0.3.3: Deep Dive into Your Syncs with Verbose Diagnostics"
date: 2026-05-09 09:00:00 -0500
tags: ["ghorgsync", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on May 9, 2026, ghorgsync v0.3.3 brings a significant boost to observability. This update is all about transparency, giving users the tools they need to peer under the hood of their synchronization process and troubleshoot issues with precision.

## What's new

The headline feature of this release is the introduction of a multi-level `--verbose` flag. Whether you are a casual user encountering an unexpected error or a power user optimizing your workflow, these new diagnostic modes provide the clarity you need.

**Basic Verbose Mode (`--verbose`)**
By adding a single `--verbose` flag to your command, you can now see:
- **GitHub API Interactions**: Every request method, URL, and response status is logged, allowing you to track how the tool communicates with GitHub.
- **Git Command Execution**: The specific local git commands being run, along with their exit codes, are displayed in a structured format.
- **Processing Insights**: High-level summaries, such as the number of repositories included or excluded from the sync, are now visible.

**Trace-Level Mode (`--verbose --verbose`)**
For those who need absolute certainty, adding the flag twice unlocks trace-level diagnostics. This mode extends basic verbosity by including:
- **Raw Output**: The complete stdout and stderr from every single git invocation.
- **Full API Responses**: The entire response bodies from GitHub API calls.

To ensure your security remains intact, ghorgsync automatically redacts sensitive authentication tokens and authorization values from all diagnostic logs, so you can debug with confidence.

## Why it matters

For many, ghorgsync works silently in the background, but when a synchronization fails due to a "dirty" repository or a network glitch, knowing *why* is critical. 

Previously, users had to rely on high-level error messages. With the new diagnostic modes, the guesswork is gone. You can now pinpoint exactly which API call failed or which specific git command encountered an error. This reduces the time spent troubleshooting and makes it significantly easier to provide detailed reports when seeking help.

## Get started with v0.3.3

Upgrading to the latest version is simple. Run the following command to install v0.3.3:

```bash
go install github.com/UnitVectorY-Labs/ghorgsync@latest
```

The new verbose flags are entirely optional and do not change the default quiet behavior of the tool, ensuring your existing scripts and workflows remain undisturbed.

***

*This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`. It was generated on 2026-05-14 based on the [UnitVectorY-Labs/ghorgsync](https://github.com/UnitVectorY-Labs/ghorgsync) repository and the [v0.3.3](https://github.com/UnitVectorY-Labs/ghorgsync/releases/tag/v0.3.3) release. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
