---
layout: post
title: "lockboxkms v0.2.1: Stability and Maintenance Update"
date: 2025-01-19 09:00:00 -0500
tags: ["lockboxkms", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on January 19, 2025, lockboxkms v0.2.1 is a maintenance release focused on enhancing the stability and reliability of the application. While this update primarily addresses internal dependencies and runtime updates, it ensures that the tool remains secure and performant for users managing their encryption needs via Google Cloud KMS.

## What's new

This release introduces a refinement to how the application handles web requests. Specifically, we have implemented a routing fix that ensures any requests made to paths other than the root directory now correctly return a `404 Not Found` response.

## Why it matters

While the routing change is subtle, it brings the application's behavior in line with standard web expectations, preventing unexpected page loads on invalid paths. 

Under the hood, this release also brings significant technical updates:
- **Runtime Upgrade:** We've bumped the Go version to 1.23.5, taking advantage of the latest language improvements and security patches.
- **Dependency Refresh:** Critical Google Cloud libraries, including the KMS and API client libraries, have been updated to their latest versions to ensure compatibility and stability.
- **CI/CD Improvements:** We've introduced a new build workflow to streamline our release process and improve the quality of our artifacts.

## Getting the update

Upgrading to v0.2.1 is straightforward. Since lockboxkms is distributed via Docker, you can simply pull the latest image from GitHub Packages:

`ghcr.io/unitvectory-labs/lockboxkms`

This release contains no breaking changes to configuration or API behavior, making the transition seamless.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It was generated on April 12, 2026, based on the [lockboxkms](https://github.com/UnitVectorY-Labs/lockboxkms) repository and the [v0.2.1 release](https://github.com/UnitVectorY-Labs/lockboxkms/releases/tag/v0.2.1). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*