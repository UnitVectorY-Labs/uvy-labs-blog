---
layout: post
title: "adk-docker-base v1.2.1: Keeping Your Base Image Current"
date: 2025-06-25 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on June 25, 2025, adk-docker-base v1.2.1 is a focused maintenance update. This release ensures that the foundation of your Docker environments remains stable and up-to-date by integrating the latest improvements from the core ADK library.

## What's new

The primary update in v1.2.1 is the alignment of the base image dependencies with the latest stable release of the Google ADK. Specifically, the `google-adk` package has been updated to version 1.2.1.

## Why it matters

While this is a small version bump, staying current with the underlying `google-adk` library is critical for stability and security. By pinning to v1.2.1, users extending this base image automatically inherit the bug fixes and performance enhancements provided by the library authors, reducing the need for manual dependency management in your own Dockerfiles.

## Getting started

To upgrade to the latest version, simply pull the updated image:

```bash
docker pull unitvectory-labs/adk-docker-base:v1.2.1
```

Then, rebuild any images that use `adk-docker-base` as their base to incorporate the new dependency version.

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Reference: [UnitVectorY-Labs/adk-docker-base](https://github.com/UnitVectorY-Labs/adk-docker-base) release v1.2.1 on 2025-06-25. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*