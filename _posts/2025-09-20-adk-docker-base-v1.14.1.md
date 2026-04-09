---
layout: post
title: "Stabilizing Agent Logging: adk-docker-base v1.14.1"
date: 2025-09-20 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On September 20, 2025, we released v1.14.1 of the `adk-docker-base` image. This maintenance update ensures that developers building AI agents with the Google Agent Development Kit (ADK) have the most stable and up-to-date environment possible.

## What's new
The primary update in this release is the bump of the pre-installed `google-adk` library from version 1.14.0 to 1.14.1. This ensures that your base environment is aligned with the latest stability improvements from the Google ADK team.

## Why it matters
For developers employing the `RemoteA2aAgent`, this update provides a critical fix. It resolves logging issues that previously hindered the visibility of remote agent operations, ensuring that logs are now accurate and reliable. Clear logging is essential for debugging and monitoring the behavior of agents operating in remote architectures.

## Get started
Upgrading to v1.14.1 is seamless. Simply update the `FROM` instruction in your `Dockerfile` to reference the new version:

```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v1.14.1
```

***

*This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`. It was generated on 2026-04-09 based on the [adk-docker-base](https://github.com/UnitVectorY-Labs/adk-docker-base) [v1.14.1 release](https://github.com/UnitVectorY-Labs/adk-docker-base/releases/tag/v1.14.1). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*