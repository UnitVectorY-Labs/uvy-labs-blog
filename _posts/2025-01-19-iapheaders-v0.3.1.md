---
layout: post
title: "iapheaders v0.3.1: Strengthening the Foundation"
date: 2025-01-19 09:00:00 -0500
tags: ["iapheaders", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on January 19, 2025, iapheaders v0.3.1 is a maintenance update dedicated to enhancing the project's stability and security. While this release doesn't introduce new user-facing features, it focuses on the critical "under-the-hood" improvements that ensure the tool remains reliable and secure for developers inspecting GCP Identity-Aware Proxy headers.

## What's new

This release primarily upgrades the project's build and security infrastructure:

- **Modernized Toolchain:** The application has been updated to use Go 1.23.5, ensuring compatibility with the latest language improvements and security patches.
- **Enhanced Security Scanning:** We've integrated `zizmor`, a specialized security linter for Go, into our CI/CD pipeline to proactively detect and prevent potential vulnerabilities.
- **Hardened CI/CD Pipelines:** Our GitHub Action workflows have been refactored for better clarity and hardened by disabling credential persistence, reducing the attack surface of our build process.
- **Improved Build Provenance:** Updated build provenance attestations to version 2, providing better transparency and verification for the artifacts we produce.

## Why it matters

For most users, these changes are invisible, but they are vital for the long-term health of the project. By keeping the Go toolchain current and introducing rigorous security linting, we reduce the risk of regressions and vulnerabilities. The hardening of our CI/CD pipelines ensures that the images you pull from our registry are built using industry-best security practices.

## Getting Started

Updating to v0.3.1 is seamless. Since iapheaders is distributed as a Docker image, you can simply pull the latest version from GitHub Packages:

```bash
docker pull ghcr.io/unitvectory-labs/iapheaders:latest
```

This release is fully backward compatible, so your existing configurations and environment variables will continue to work without any modifications.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It is based on the release v0.3.1 of the [iapheaders](https://github.com/UnitVectorY-Labs/iapheaders) repository, generated on April 12, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*