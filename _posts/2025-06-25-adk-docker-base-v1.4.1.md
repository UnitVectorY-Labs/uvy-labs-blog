---
layout: post
title: "adk-docker-base v1.4.1: Synchronizing with Google ADK v1.4.1"
date: 2025-06-25 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on June 25, 2025, adk-docker-base v1.4.1 is a focused maintenance update designed to keep your AI agent development environment in sync with the latest tools. This release ensures that the base image remains a reliable and up-to-date foundation for building sophisticated agents.

## What's new

The core of this release is a synchronization update. We have updated the pre-installed `google-adk` library from version 1.3.0 to 1.4.1. By pinning the image version to the version of the Google Agent Development Kit it contains, we provide a predictable environment that eliminates "it works on my machine" issues during the development lifecycle.

## Why it matters

For developers building AI agents, environment stability is critical. By updating to v1.4.1, you gain immediate access to the latest features, performance improvements, and bug fixes introduced in the Google ADK v1.4.1 release. Using a pinned base image means you can iterate on your agent's logic with confidence, knowing that the underlying framework is consistent across your entire team and deployment pipeline.

## Getting started

To upgrade your project to the latest version, simply update the `FROM` instruction in your `Dockerfile`:

```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v1.4.1
```

If you are using the `:latest` tag, a simple `docker pull` will bring you up to date. We recommend reviewing the official `google-adk` v1.4.1 release notes to take full advantage of the new capabilities available in this version.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It was generated on April 9, 2026, based on the release v1.4.1 of the [UnitVectorY-Labs/adk-docker-base](https://github.com/UnitVectorY-Labs/adk-docker-base) repository. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*