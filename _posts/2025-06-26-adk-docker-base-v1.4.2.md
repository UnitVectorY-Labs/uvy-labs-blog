---
layout: post
title: "adk-docker-base v1.4.2: Staying Current with the Google ADK"
date: 2025-06-26 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On June 26, 2025, we released adk-docker-base v1.4.2. This maintenance update ensures that developers building AI agents have the most recent version of the Google Agent Development Kit (ADK) pre-installed in their environment, providing a stable and up-to-date foundation for agent development.

## What's new
This release focuses on a targeted dependency update, bumping the pre-installed `google-adk` library from version 1.4.1 to 1.4.2.

## Why it matters
By keeping the base image in sync with the core ADK, users can immediately leverage the latest bug fixes and enhancements provided by the Google ADK team. This removes the need for developers to manually manage library versions in their own Dockerfiles, reducing friction and ensuring consistency across development environments.

## Upgrade Instructions
To upgrade to the latest version, simply update the base image tag in your `Dockerfile` and rebuild your image:

```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v1.4.2
```

Updating your base image ensures that your agents are built on the most reliable and current version of the ADK tools.

***

This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`.
Repository: https://github.com/UnitVectorY-Labs/adk-docker-base
Release: v1.4.2
Date of generation: April 9, 2026
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)