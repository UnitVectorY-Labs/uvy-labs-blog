---
layout: post
title: "adk-docker-base v1.8.0: Bringing the Latest Google ADK to Your AI Agents"
date: 2025-07-26 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on July 26, 2025, adk-docker-base v1.8.0 is a maintenance update designed to keep your AI agent development environment current. This release ensures that developers have the most recent tools at their fingertips by updating the core library that powers the image.

## What's new

The primary update in v1.8.0 is the bump of the pre-installed `google-adk` library from version 1.7.0 to 1.8.0.

## Why it matters

For developers building AI agents, the environment's stability and currency are paramount. By integrating the latest version of the Google Agent Development Kit directly into the base image, we remove the friction of manual dependency updates. You can now immediately leverage the latest features, performance improvements, and bug fixes provided by the Google ADK team, allowing you to focus on building your agent's logic rather than managing its environment.

## Getting started

Upgrading to the latest version is seamless. Simply update the base image reference in your `Dockerfile`:

```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v1.8.0
```

We recommend reviewing the official `google-adk` v1.8.0 release notes for detailed information on the new capabilities and any changes introduced in the kit itself.

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Reference: [UnitVectorY-Labs/adk-docker-base](https://github.com/UnitVectorY-Labs/adk-docker-base), release v1.8.0, generated on April 09, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*