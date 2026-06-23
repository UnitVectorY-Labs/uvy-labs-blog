---
layout: post
title: "lockboxkms v0.3.6: Maintenance and Stability Update"
date: 2026-06-22 09:00:00 -0500
tags: ["lockboxkms", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On June 22, 2026, we released lockboxkms v0.3.6. This is a maintenance update focused on ensuring the long-term stability, security, and compatibility of our lightweight encryption interface for Google Cloud KMS.

## What's new

This release focuses on essential under-the-hood updates. We've upgraded the Go runtime to version 1.26.4 and bumped several critical dependencies, including the Google Cloud KMS and API libraries. Additionally, our CI/CD pipelines have been refreshed with the latest GitHub Actions to ensure a more robust and secure build process.

## Why it matters

While this release doesn't introduce new features, keeping dependencies and runtimes current is vital for any security-focused tool. By updating the Go runtime and Google Cloud SDKs, we ensure that lockboxkms benefits from the latest performance improvements and security patches. These updates maintain the reliability of our one-way encryption workflow, allowing you to continue protecting your data with confidence.

## Getting Started

Upgrading to v0.3.6 is seamless. If you are deploying via Docker, simply pull the latest image from `ghcr.io/unitvectory-labs/lockboxkms` to apply these updates.

---

*This post was AI-generated.*
*Model: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL*
*Repository: https://github.com/UnitVectorY-Labs/lockboxkms*
*Release: v0.3.6*
*Date: 2026-06-23*
*Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
