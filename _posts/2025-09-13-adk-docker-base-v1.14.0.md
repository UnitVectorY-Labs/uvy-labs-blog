---
layout: post
title: "Updating the Foundation: adk-docker-base v1.14.0"
date: 2025-09-13 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On September 13, 2025, we released v1.14.0 of `adk-docker-base`. This maintenance update ensures that developers building AI agents have the latest capabilities of the Google Agent Development Kit (ADK) right out of the box.

## What's new

The primary update in this release is the synchronization of our base image with the latest version of the Google Agent Development Kit. We have upgraded the `google-adk` dependency from version 1.13.0 to 1.14.0.

## Why it matters

For developers using `adk-docker-base` as the foundation for their agent projects, this update simplifies the development lifecycle. By bundling the latest ADK version directly into the image, we reduce the need for manual dependency management and ensure that your environment is consistent, up-to-date, and ready for the latest AI agent features.

## Getting Started

To start using this release, simply update the `FROM` instruction in your Dockerfile to point to the new version:

```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v1.14.0
```

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It is based on the release v1.14.0 of the [UnitVectorY-Labs/adk-docker-base](https://github.com/UnitVectorY-Labs/adk-docker-base) repository, generated on 2026-04-09. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*