---
layout: post
title: "Optimizing Your Agent Foundations: adk-docker-base v1.11.0"
date: 2025-08-17 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On August 17, 2025, we released v1.11.0 of `adk-docker-base`. This update focuses on leaner images and updated core dependencies, ensuring that your AI agents have a fast, efficient, and up-to-date foundation.

## What's new

*   **Core ADK Update**: The base image now includes `google-adk` v1.11.0.
*   **Slimmer Base Image**: We've transitioned from the full Python 3.12 image to `python:3.12-slim`, significantly reducing the overall image size.
*   **Build Optimizations**: New build-time enhancements, including pip cache mounts and binary preferences, make image creation faster and more reliable.
*   **Updated Recommendations**: Our documentation now suggests using `gemini-2.5-flash` as the recommended model for agent development.

## Why it matters

*   **Faster Deployments**: The switch to a slim image reduces the footprint of your containers, leading to faster pull times and reduced storage costs across your environments.
*   **Improved Stability**: Updates to the ADK and refined pip configurations ensure a more robust and reliable environment for your AI agents.
*   **Efficient CI/CD**: The build optimizations reduce the time spent waiting for images to be built in your continuous integration pipelines.

## Getting started with v1.11.0

Upgrading is simple. Just update the `FROM` instruction in your project's `Dockerfile`:

```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v1.11.0
```

**Note for developers**: Because we have transitioned to a slim Python image, certain system-level build tools (such as `gcc` or `make`) are no longer included by default. If your project's additional dependencies require these tools for installation, please add them explicitly to your own `Dockerfile` using `apt-get`.

***

This post was AI-generated.
Model: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL
Repository: UnitVectorY-Labs/adk-docker-base
Release: v1.11.0
Date: 2026-04-09
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)