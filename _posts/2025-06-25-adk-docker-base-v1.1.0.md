---
layout: post
title: "Keeping AI Agents Current: adk-docker-base v1.1.0"
date: 2025-06-25 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On June 25, 2025, we released `adk-docker-base` v1.1.0. This update focuses on keeping your development environment aligned with the latest advancements in AI agent tooling by upgrading the core Google Agent Development Kit (ADK) dependency.

## What's new

The primary update in this release is the bump of the pre-installed **Google ADK from version 1.0.0 to 1.1.0**. 

## Why it matters

For developers using `adk-docker-base` as their foundation, this update removes the friction of manually updating core libraries. By simply updating your base image, you immediately gain access to the latest features, bug fixes, and performance improvements provided by the `google-adk` v1.1.0 release, ensuring your agents are built on the most stable and capable version of the toolkit.

## Upgrade Instructions

Upgrading to v1.1.0 is straightforward. Simply update the `FROM` instruction in your project's `Dockerfile`:

```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v1.1.0
```

Once you rebuild your image, you'll be ready to leverage the latest capabilities of the Google ADK.

---

*This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL` on April 9, 2026, based on the [UnitVectorY-Labs/adk-docker-base](https://github.com/UnitVectorY-Labs/adk-docker-base) repository and the [v1.1.0 release](https://github.com/UnitVectorY-Labs/adk-docker-base/releases/tag/v1.1.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*