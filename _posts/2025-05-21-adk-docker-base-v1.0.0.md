---
layout: post
title: "adk-docker-base v1.0.0: Now Aligned with Google ADK 1.0.0"
date: 2025-05-21 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on May 21, 2025, adk-docker-base v1.0.0 is a major update that brings the base image into alignment with the stable 1.0.0 release of the Google Agent Development Kit (ADK). This release ensures that developers have the most up-to-date and stable foundation for building their AI agents.

## What's new

The primary update in this release is the upgrade of the pre-installed `google-adk` package from version 0.5.0 to 1.0.0. By updating the base image, your development environment now includes all the stability improvements and new features introduced in the ADK 1.0.0 milestone.

## Why it matters

For developers building AI agents, environment consistency and stability are critical. By providing a Docker base image that tracks the stable releases of the Google ADK, adk-docker-base removes the friction of manual installation and version management. Using v1.0.0 means you can start building immediately with the latest stable tools, reducing the risk of encountering bugs from earlier beta versions.

## Getting started with v1.0.0

To upgrade your project to the latest version, simply update the `FROM` instruction in your `Dockerfile`:

```dockerfile
FROM ghcr.io/unitvectory-labs/adk-docker-base:v1.0.0
```

Because this update involves a major version bump of the underlying `google-adk` library, we recommend reviewing the official `google-adk` v1.0.0 release notes to ensure your agent implementation remains compatible with any breaking changes.

---
*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It was generated on April 9, 2026, based on the [adk-docker-base](https://github.com/UnitVectorY-Labs/adk-docker-base) repository and the [v1.0.0](https://github.com/UnitVectorY-Labs/adk-docker-base/releases/tag/v1.0.0) release. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*