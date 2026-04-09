---
layout: post
title: "adk-docker-base v0.3.0: Staying Current with the Google ADK"
date: 2025-04-26 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On April 26, 2025, we released v0.3.0 of `adk-docker-base`. This maintenance update ensures that your AI agent development environment is powered by the latest core tools.

### What's new
This release focuses on updating the underlying framework. We have bumped the `google-adk` dependency from version 0.2.0 to 0.3.0.

### Why it matters
`adk-docker-base` is designed to eliminate the boilerplate of setting up a Python 3.12 environment for AI agent development. By upgrading the Google Agent Development Kit to v0.3.0, we provide a foundation that includes the latest improvements, stability fixes, and capabilities of the ADK, allowing you to focus on building your agents rather than managing dependencies.

### Getting Started
To start using the latest version, update the base image reference in your `Dockerfile`:

```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v0.3.0
```

***

This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL.
Repository: UnitVectorY-Labs/adk-docker-base
Release: v0.3.0
Date of generation: 2026-04-09
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)