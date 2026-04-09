---
layout: post
title: "Updating the Foundation: adk-docker-base v0.5.0"
date: 2025-05-11 20:31:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On May 11, 2025, we released v0.5.0 of `adk-docker-base`. This update is focused on keeping our base environment synchronized with the latest capabilities of the Google Agent Development Kit (ADK), ensuring developers have a seamless start to their agent-building journey.

## What's new

This release brings a key dependency update and improves project transparency:

- **Google ADK Upgrade**: The pre-installed `google-adk` library has been bumped from version `0.4.0` to `0.5.0`.
- **Project Documentation**: We've added status and license badges to the `README.md` to provide immediate clarity on the project's current state and licensing.

## Why it matters

The `adk-docker-base` repository serves as the essential foundation for those utilizing the Google ADK. By automating the update of the core library within the Docker image, we eliminate the need for manual installation steps and reduce the risk of version mismatch. This means you can spend less time configuring your environment and more time developing sophisticated AI agents using the most up-to-date tools available.

## Getting Started

To upgrade to the latest version, simply pull the `v0.5.0` tag of the `adk-docker-base` image. Updating your base image ensures you have access to the latest fixes and features provided by the upstream Google ADK.

***

*This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`. It was generated on 2026-04-09 based on the [adk-docker-base](https://github.com/UnitVectorY-Labs/adk-docker-base) repository and the [v0.5.0 release](https://github.com/UnitVectorY-Labs/adk-docker-base/releases/tag/v0.5.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*