---
layout: post
title: "Polishing the Explorer: gcpmetadataexplorer v0.2.2 is Here"
date: 2025-05-07 09:00:00 -0500
tags: ["gcpmetadataexplorer", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On May 7, 2025, we released v0.2.2 of gcpmetadataexplorer. This maintenance update focuses on refining the foundations of the tool, ensuring stability through runtime updates, and polishing the user experience through documentation improvements.

## What's new

- **Updated Go Runtime**: We've bumped the Go version to 1.24.3, ensuring the application benefits from the latest performance and security patches of the language.
- **Documentation and Code Polish**: We've tidied up our README and internal codebase, fixing typos and correcting terminology to make the project more accessible and professional.
- **Infrastructure Enhancements**: Behind the scenes, we've updated our CI/CD pipelines and Docker workflows to be more efficient and cleaner.

## Why it matters

While this release doesn't introduce flashy new features, it's all about reliability and quality. By keeping our dependencies current and our documentation clear, we ensure that developers can spend less time wondering about typos and more time exploring their GCP metadata environments.

## Getting started

Upgrading is simple. Just pull the latest Docker image from the GitHub Container Registry:

`ghcr.io/unitvectory-labs/gcpmetadataexplorer`

***

This post was AI-generated.
Model: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL
Repository: UnitVectorY-Labs/gcpmetadataexplorer
Release: v0.2.2
Date of generation: 2026-04-11
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)