---
layout: post
title: "adk-docker-base v1.3.0: Staying Current with Google ADK"
date: 2025-06-25 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On June 25, 2025, we released v1.3.0 of `adk-docker-base`. This update ensures that developers building AI agents have the most up-to-date foundation by bringing the pre-installed Google Agent Development Kit (ADK) up to version 1.3.0.

## What's new

The core of this release is a targeted update to the environment's dependencies. Specifically, the `google-adk` library has been bumped from v1.2.1 to v1.3.0.

## Why it matters

For those using `adk-docker-base` as their starting point, this means immediate access to the latest improvements, bug fixes, and features introduced in the Google ADK v1.3.0 release. By maintaining a tight alignment between our base image and the underlying toolkit, we reduce the friction of environment setup and ensure a consistent development experience.

## Upgrade Instructions

To start using the latest version, simply update the `FROM` line in your Dockerfile:

```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v1.3.0
```

If you rely on the `:latest` tag, a simple `docker pull` (or `podman pull`) will get you up to speed.

***

This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL.
Repository: UnitVectorY-Labs/adk-docker-base
Release: v1.3.0
Date of generation: 2026-04-09
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)