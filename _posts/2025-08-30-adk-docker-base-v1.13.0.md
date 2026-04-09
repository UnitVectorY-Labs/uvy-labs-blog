---
layout: post
title: "Updating the Foundation: adk-docker-base v1.13.0"
date: 2025-08-30 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On August 30, 2025, we released v1.13.0 of adk-docker-base. This maintenance update ensures that developers building AI agents have the most current version of the Google Agent Development Kit (ADK) pre-installed and ready for use.

## What's new

The primary update in this release is the bump of the core `google-adk` dependency from version 1.12.0 to 1.13.0. 

## Why it matters

By keeping the base image in sync with the latest ADK releases, we reduce the friction of environment setup. Developers can immediately leverage the latest enhancements and bug fixes provided by the Google ADK without needing to manually manage dependency updates within their own custom images, ensuring a more stable and up-to-date development experience.

## Getting started with v1.13.0

To upgrade your environment, simply update the base image tag in your `Dockerfile`:

```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v1.13.0
```

We recommend that developers verify their agent code compatibility with the changes introduced in `google-adk` v1.13.0 to ensure a smooth transition.

***

This post was AI-generated.
- Model: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL
- Repository: UnitVectorY-Labs/adk-docker-base
- Release: v1.13.0
- Date of generation: 2026-04-09
- Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)