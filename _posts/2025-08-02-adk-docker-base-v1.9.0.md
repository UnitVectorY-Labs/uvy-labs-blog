---
layout: post
title: "adk-docker-base v1.9.0: Staying in Sync with Google ADK"
date: 2025-08-02 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on August 2, 2025, adk-docker-base v1.9.0 is a maintenance update focused on keeping our development environment current. This release ensures that developers building AI agents have immediate access to the latest capabilities of the Google Agent Development Kit (ADK).

## What's new

This release synchronizes the base image with the latest version of the core framework:

- **google-adk Update**: The pre-installed `google-adk` library has been updated from version 1.8.0 to 1.9.0.

## Why it matters

The `adk-docker-base` image serves as the bedrock for AI agent development, providing a consistent Python 3.12 environment with all necessary dependencies pre-configured. By tracking the `google-adk` version directly, we remove the friction of manual dependency management. Users can now leverage the latest features and stability improvements provided by the Google ADK team simply by updating their base image.

## Get started

To upgrade your project to v1.9.0, simply update the `FROM` instruction in your `Dockerfile`:

```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v1.9.0
```

We recommend reviewing the `google-adk` v1.9.0 release notes to familiarize yourself with any new library-level changes.

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It refers to the v1.9.0 release of UnitVectorY-Labs/adk-docker-base, generated on 2026-04-09 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*