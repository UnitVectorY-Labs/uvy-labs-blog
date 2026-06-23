---
layout: post
title: "lockboxkms v0.3.6: Stability and Security Maintenance Update"
date: 2026-06-22 09:00:00 -0500
tags: ["lockboxkms", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on June 22, 2026, lockboxkms v0.3.6 is a maintenance release focused on strengthening the foundation of the project. This update ensures that the system remains secure, stable, and compatible with the latest upstream improvements.

## What's new

This release primarily focuses on toolchain and dependency upgrades:

- **Go Runtime Update**: Upgraded to Go 1.26.4, bringing the latest performance and security enhancements from the Go team.
- **Google Cloud SDK Upgrades**: The Google Cloud KMS SDK has been updated to v1.31.0 and the Google API Go client to v0.285.0.
- **CI/CD Enhancements**: Updated various GitHub Action workflows, including checkout, Docker build-push, and Codecov actions, to improve the reliability of our automated pipelines.

## Why it matters

While this release does not introduce new user-facing features, it is critical for the long-term health of your deployments. Staying current with the Go runtime and official Google Cloud libraries means you are protected by the latest security patches and can take advantage of under-the-hood stability improvements. For users relying on lockboxkms for sensitive key management, these foundational updates are essential for maintaining a robust security posture.

## Upgrade and Installation

Upgrading to v0.3.6 is seamless. You can simply pull the latest Docker image or update your source references to the `v0.3.6` tag. We encourage all users to perform this update to ensure they are running the most secure and stable version of the software.

---

*This post was AI-generated.*
*Model: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL*
*Repository: UnitVectorY-Labs/lockboxkms*
*Release: v0.3.6*
*Generated on: 2026-06-23*
*Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
