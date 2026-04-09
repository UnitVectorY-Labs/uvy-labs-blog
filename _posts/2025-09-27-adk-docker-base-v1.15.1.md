---
layout: post
title: "adk-docker-base v1.15.1: Keeping Your AI Agent Environment Up to Date"
date: 2025-09-27 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on September 27, 2025, adk-docker-base v1.15.1 is a maintenance update designed to keep your AI agent development environment current. This release focuses on ensuring that the core tools you rely on are running the latest stable versions.

## What's new

The primary update in this release is a bump of the pre-installed Google Agent Development Kit (ADK) library from version 1.15.0 to 1.15.1.

## Why it matters

For developers building AI agents, stability and reliability are paramount. By updating to the latest patch of the Google ADK, this release brings in the latest bug fixes and improvements. Because these updates are delivered via the base image, you can integrate the latest stability patches into your project without having to manually manage dependency versions or troubleshoot installation issues in your environment.

## Getting started

Upgrading to v1.15.1 is seamless. Simply update the `FROM` instruction in your `Dockerfile` to point to the new version:

```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v1.15.1
```

Once you rebuild your image, your environment will be fully up to date and ready for development.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It is based on the [UnitVectorY-Labs/adk-docker-base](https://github.com/UnitVectorY-Labs/adk-docker-base) repository and the [v1.15.1 release](https://github.com/UnitVectorY-Labs/adk-docker-base/releases/tag/v1.15.1) generated on April 9, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*