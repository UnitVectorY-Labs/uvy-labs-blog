---
layout: post
title: "Keeping Your AI Agents Current: adk-docker-base v1.12.0"
date: 2025-08-27 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on August 27, 2025, v1.12.0 of `adk-docker-base` is a maintenance update designed to keep your AI agent development environment aligned with the latest advancements in the Google Agent Development Kit (ADK).

## What's new

The primary update in this release is the bump of the pre-installed `google-adk` dependency from version 1.11.0 to 1.12.0.

## Why it matters

By integrating the latest version of the Google ADK directly into the base image, developers can immediately leverage new features and critical bug fixes without the need for manual installation or managing dependency conflicts. This streamlines the onboarding process for new projects and ensures that existing agent workflows remain stable and performant.

## Upgrade Instructions

To start using v1.12.0, update the `FROM` instruction in your `Dockerfile`:

**From:**
```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v1.11.0
```

**To:**
```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v1.12.0
```

---

*This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`. It is based on the [UnitVectorY-Labs/adk-docker-base](https://github.com/UnitVectorY-Labs/adk-docker-base) repository, release [v1.12.0](https://github.com/UnitVectorY-Labs/adk-docker-base/releases/tag/v1.12.0), generated on 2026-04-09. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*