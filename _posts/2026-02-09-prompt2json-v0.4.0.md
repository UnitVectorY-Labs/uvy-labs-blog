---
layout: post
title: "Release v0.4.0: Improving Version Transparency"
date: 2026-02-09 09:00:00 -0500
tags: ["prompt2json", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on February 9, 2026, prompt2json v0.4.0 is a maintenance update focused on reliability and transparency. While this release doesn't introduce new functional features, it ensures the tool behaves more predictably for users across different installation methods.

## What's new

The primary highlight of this release is a fix to the build version reporting. Previously, users might have seen their version reported as "dev" or found it empty. Now, prompt2json intelligently reads build metadata from the Go build info. This ensures that the version reported by the tool accurately reflects the installed release, which is especially helpful for those who install the tool via `go install`.

Additionally, the tool has been updated to use Go 1.25.7 and the latest `oauth2` libraries to keep the environment secure and performant.

## Why it matters

For a CLI tool designed for automation and shell pipelines, knowing exactly which version is running is critical for debugging and maintaining consistent workflows. By fixing version reporting, we're providing better transparency and making it easier for users to verify their installations and troubleshoot issues.

## Getting started with v0.4.0

Upgrading to the latest version is simple. You can update your installation using the following command:

```bash
go install github.com/UnitVectorY-Labs/prompt2json@latest
```

There are no breaking changes in this release, so you can upgrade with confidence.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It was generated on April 13, 2026, based on the v0.4.0 release of the [prompt2json](https://github.com/UnitVectorY-Labs/prompt2json) repository.*
*Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
