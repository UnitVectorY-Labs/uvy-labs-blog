---
layout: post
title: GCP Identity Token Portal v0.3.1 Released
date: 2025-01-19 10:24:00 -0500
tags: [gcpidentitytokenportal, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## A Maintenance Update for Enhanced Reliability

On January 19, 2025, we released version 0.3.1 of the GCP Identity Token Portal—a routine maintenance update focused on keeping your deployment secure and up-to-date.

This patch release builds upon the significant Kubernetes support introduced in v0.3.0, delivering important dependency updates and documentation improvements to ensure a smooth experience for all users.

## What's New

Version 0.3.1 is a maintenance release that prioritizes reliability and security:

- **Updated Go Runtime**: Upgraded to Go 1.23.5, incorporating the latest bug fixes and security patches from the Go team
- **Enhanced Google API Dependencies**: Updated `google.golang.org/api` and related libraries to their latest versions, ensuring compatibility with the newest GCP features and security improvements
- **Documentation Accuracy Fixed**: Corrected outdated version references in README examples, so users deploying via Docker or Kubernetes will now see the correct v0.3.0+ image tags instead of deprecated v0.1.0 references

## Why It Matters

While this release doesn't introduce new features, it represents our commitment to maintaining a secure and well-supported platform:

- **Security First**: The dependency updates include security patches from multiple Google API libraries, keeping your token portal protected against known vulnerabilities
- **Production Confidence**: By staying current with the Go runtime and GCP client libraries, you benefit from upstream stability improvements and continued support
- **Better Documentation**: If you were following the README instructions and found yourself pointed to an outdated version, this fix ensures you'll now deploy the right image

The quick turnaround from v0.3.0 to v0.3.1 demonstrates active project maintenance and responsiveness to user feedback—particularly the documentation correction that could have caused confusion during deployment.

## Upgrading to v0.3.1

Upgrading is straightforward with no breaking changes or configuration modifications required:

**Docker:**
```bash
docker pull ghcr.io/unitvectory-labs/gcpidentitytokenportal:v0.3.1
```

**Kubernetes:** Update your Deployment image tag from `v0.3.0` to `v0.3.1`.

If you're still on v0.1.0 or earlier, we strongly recommend upgrading—v0.3.0 introduced full Kubernetes support with Workload Identity Federation, and v0.3.1 ensures you have the latest security patches.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Release information sourced from [UnitVectorY-Labs/gcpidentitytokenportal](https://github.com/UnitVectorY-Labs/gcpidentitytokenportal), release v0.3.1, published January 19, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
