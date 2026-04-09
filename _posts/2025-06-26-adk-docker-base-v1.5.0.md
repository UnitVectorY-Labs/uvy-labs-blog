---
layout: post
title: "adk-docker-base v1.5.0: Keeping Your Agent Environment Up to Date"
date: 2025-06-26 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On June 26, 2025, we released v1.5.0 of `adk-docker-base`. This update ensures that your development environment stays in sync with the latest advancements in the Google Agent Development Kit (ADK), providing a stable and up-to-date foundation for your AI agent projects.

## What's new

The primary focus of this release is a critical dependency alignment. We have updated the pre-installed version of the **Google Agent Development Kit (`google-adk`)** from `1.4.2` to `1.5.0`. 

By pinning the ADK to version 1.5.0, this base image guarantees that every developer starting their project with this image has immediate access to the latest features and stability improvements provided by the ADK team.

## Why it matters

Consistency is key when developing complex AI agents. By providing a versioned Docker base image, `adk-docker-base` removes the "it works on my machine" friction. Updating the base image to v1.5.0 allows you to leverage the most recent capabilities of the Google ADK without having to manually manage Python dependencies or environment configurations in your own Dockerfiles.

## Getting Started

Upgrading to the latest version is simple. Update the base image tag in your `Dockerfile` to point to the new release:

```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v1.5.0
```

Once updated, rebuild your image to incorporate the latest ADK version.

***

*This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`. Reference: [UnitVectorY-Labs/adk-docker-base](https://github.com/UnitVectorY-Labs/adk-docker-base), release [v1.5.0](https://github.com/UnitVectorY-Labs/adk-docker-base/releases/tag/v1.5.0) generated on April 9, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*