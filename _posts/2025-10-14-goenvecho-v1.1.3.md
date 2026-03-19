---
layout: post
title: "goenvecho v1.1.3 Released: Infrastructure Modernization and Go Runtime Updates"
date: 2025-10-14 09:00:00 -0500
tags: [goenvecho, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introduction

On October 14, 2025, we released **goenvecho v1.1.3**, a maintenance-focused update that brings the project's infrastructure and build tooling up to date with the latest Go runtime (1.25.2) and GitHub Actions ecosystem. This release represents our commitment to maintaining modern, secure, and reliable tooling behind this simple debugging utility.

For those unfamiliar with goenvecho, it's a lightweight HTTP service that responds to GET requests with a JSON payload containing all environment variables in the container's runtime—perfect for inspecting environment configurations in containerized development environments.

## What's New

### Go Runtime Modernization
The headline improvement in v1.1.3 is the upgrade to **Go 1.25.2**. This release marks the culmination of a systematic modernization journey that brought the project through incremental updates from Go 1.24.3, ensuring compatibility and access to the latest language improvements and security patches.

### GitHub Actions Updates
We've updated all major CI/CD workflow actions to their latest versions:
- **actions/checkout**: v4 → v5
- **actions/setup-go**: v5 → v6  
- **github/codeql-action**: v3 → v4
- **actions/attest-build-provenance**: v2 → v3
- **astral-sh/setup-uv**: v6 → v7

These updates ensure our build pipeline leverages the latest features, security improvements, and performance optimizations from the GitHub Actions ecosystem.

### Documentation Enhancement
A **Go Report Card badge** now appears in the README, giving users an instant view of the project's code quality metrics at a glance.

## Why It Matters

While v1.1.3 doesn't introduce new application features, it reinforces the foundation that makes goenvecho reliable:

- **Security**: Updated CodeQL and build provenance actions strengthen our supply chain security
- **Performance**: Benefits from Go runtime improvements accumulated across versions
- **Reliability**: Modern CI/CD tooling reduces the risk of build failures and compatibility issues  
- **Transparency**: The Go Report Card badge provides visibility into code quality

For users, this upgrade is completely transparent. The Docker container interface remains unchanged—same endpoints, same configuration options (`PORT` and `PRETTY_PRINT`), same JSON response format. You're simply running a more modern, secure version of the same reliable tool you know.

## Upgrade Instructions

Upgrading to v1.1.3 is straightforward. Simply pull the latest Docker image:

```bash
docker pull ghcr.io/unitvectory-labs/goenvecho:v1.1.3
```

Then run your container as usual:

```bash
docker run -p 8080:8080 ghcr.io/unitvectory-labs/goenvecho:v1.1.3
```

No configuration changes are required, and all existing deployments will continue to work without modification.

---

**About This Post**: This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 19, 2026. For more details about this release, visit [the GitHub release](https://github.com/UnitVectorY-Labs/goenvecho/releases/tag/v1.1.3). Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
