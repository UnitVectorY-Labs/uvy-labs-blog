---
layout: post
title: "adk-docker-base v1.15.0: Keeping Your AI Agents Up to Date"
date: 2025-09-27 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on September 27, 2025, adk-docker-base v1.15.0 is a maintenance update focused on ensuring your development environment is equipped with the latest tools. By updating the underlying Google Agent Development Kit (ADK), this release keeps your agent builds current and stable.

## What's new

The primary update in v1.15.0 is the bump of the pre-installed `google-adk` library from version 1.14.1 to 1.15.0. 

## Why it matters

For developers using `adk-docker-base` as the foundation for their AI agents, staying current with the ADK is crucial. This update ensures you have immediate access to the latest features, bug fixes, and performance improvements delivered by the Google ADK team without having to manually manage the dependency installation in your own Dockerfiles. It simplifies your workflow, allowing you to focus on agent logic rather than environment configuration.

## Getting started

To upgrade to the latest version, simply update the base image tag in your `Dockerfile`:

```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v1.15.0
```

Once updated, rebuild your image to incorporate the new ADK version.

---

*This post was AI-generated. The model used was unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Reference: [UnitVectorY-Labs/adk-docker-base](https://github.com/UnitVectorY-Labs/adk-docker-base) release [v1.15.0](https://github.com/UnitVectorY-Labs/adk-docker-base/releases/tag/v1.15.0) generated on 2026-04-09. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*