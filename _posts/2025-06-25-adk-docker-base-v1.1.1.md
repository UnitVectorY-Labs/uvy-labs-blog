---
layout: post
title: "Updating adk-docker-base to v1.1.1"
date: 2025-06-25 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On June 25, 2025, we released v1.1.1 of `adk-docker-base`. This maintenance update ensures that developers building AI agents have the latest stable version of the Google Agent Development Kit (ADK) pre-installed in their environment.

## What's new

This release focuses on dependency alignment, updating the pre-installed `google-adk` library from version 1.1.0 to 1.1.1.

## Why it matters

Keeping the base image in sync with the latest ADK releases ensures that users have access to the most recent improvements, bug fixes, and stability updates provided by the Google ADK, without having to manually manage the library update in their own custom Docker layers.

## Upgrade instructions

To upgrade to the latest version, simply update the `FROM` instruction in your `Dockerfile` to use the new tag:

```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v1.1.1
```

***

This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`.
Reference: [UnitVectorY-Labs/adk-docker-base](https://github.com/UnitVectorY-Labs/adk-docker-base), release [v1.1.1](https://github.com/UnitVectorY-Labs/adk-docker-base/releases/tag/v1.1.1), generated on 2026-04-09.
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)