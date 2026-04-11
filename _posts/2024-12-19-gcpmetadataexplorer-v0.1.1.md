---
layout: post
title: "gcpmetadataexplorer v0.1.1: Improving UI Guidance for Token Access"
date: 2024-12-19 09:00:00 -0500
tags: ["gcpmetadataexplorer", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On December 19, 2024, we released v0.1.1 of gcpmetadataexplorer. This minor maintenance update focuses on improving the clarity of our user interface, specifically regarding how users can enable sensitive token access features.

## What's new

The primary change in this release is a correction to the instructional text found on the "Access Token" and "Identity Token" disabled pages. Previously, the guidance provided to users who encountered these disabled screens was inaccurate. The UI now correctly instructs users to set the `ALLOW_TOKENS` environment variable to `true` if they wish to enable the retrieval of these tokens.

## Why it matters

In a tool designed to explore the GCP metadata server, security is paramount. By default, token access is disabled to prevent accidental exposure of sensitive credentials. When a user intentionally decides to enable these capabilities, having clear and accurate documentation within the interface is critical. This update ensures that there is no confusion about the correct configuration required to unlock these advanced features.

## Upgrade and Installation

Upgrading to v0.1.1 is straightforward. Since gcpmetadataexplorer is distributed via Docker, you can simply pull the latest image:

```bash
docker pull ghcr.io/unitvectory-labs/gcpmetadataexplorer:v0.1.1
```

As this is a minor UI correction, there are no breaking changes or configuration updates required.

***

**Transparency Note:** This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`. 
- Repository: [UnitVectorY-Labs/gcpmetadataexplorer](https://github.com/UnitVectorY-Labs/gcpmetadataexplorer)
- Release: [v0.1.1](https://github.com/UnitVectorY-Labs/gcpmetadataexplorer/releases/tag/v0.1.1)
- Generated on: 2026-04-11
- Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)