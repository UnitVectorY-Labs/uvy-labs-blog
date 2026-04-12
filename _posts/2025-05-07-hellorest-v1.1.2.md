---
layout: post
title: "hellorest v1.1.2: Keeping Things Fresh and Fast"
date: 2025-05-07 09:00:00 -0500
tags: ["hellorest", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On May 7, 2025, we released hellorest v1.1.2. This maintenance update focuses on keeping our foundation solid by updating the Go runtime and streamlining our development pipeline to ensure the most reliable experience for users of our minimal REST API.

## What's new

- **Runtime Update**: We have upgraded the Go runtime to version 1.24.3, ensuring the service is running on a modern and secure foundation.
- **CI/CD Optimizations**: We've improved how we track issues and manage Docker images, including a new snapshot tagging system for development builds to better distinguish them from official releases.
- **Registry Maintenance**: New automated cleanup steps have been implemented to remove dangling Docker images, keeping our container registry lean and efficient.

## Why it matters

While hellorest is designed for simplicity, reliability is key. By updating the Go runtime, we ensure the service benefits from the latest performance improvements and security patches. The internal workflow enhancements mean a faster, more organized development cycle, allowing us to maintain the project more efficiently while ensuring that the core API remains stable and unchanged.

## Getting started

Upgrading is seamless. Simply pull the latest v1.1.2 Docker image to benefit from the updated runtime. For those following our development builds, please note that the image tag has changed to include a `-snapshot` suffix.

***

This post was AI-generated using the unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL model.
Repository: UnitVectorY-Labs/hellorest
Release: v1.1.2
Generated on: 2026-04-12
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)