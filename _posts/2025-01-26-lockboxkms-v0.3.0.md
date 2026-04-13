---
layout: post
title: "lockboxkms v0.3.0: Strengthening the Foundation"
date: 2025-01-26 09:00:00 -0500
tags: ["lockboxkms", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On January 26, 2025, we released lockboxkms v0.3.0. This maintenance update focuses on project alignment and dependency modernization to ensure the long-term stability and compatibility of our one-way encryption utility.

## What's new

v0.3.0 is primarily a structural release. We have updated the project's Go module path to `github.com/UnitVectorY-Labs/lockboxkms`, bringing it into alignment with our GitHub repository structure. Additionally, we've bumped the Google API client library to version 0.218.0, incorporating the latest improvements and security patches from the Google Cloud ecosystem.

## Why it matters

While this release doesn't introduce new UI features, these "under-the-hood" changes are critical. Aligning the module path ensures that lockboxkms is correctly integrated into the Go ecosystem, making it easier for developers to contribute and for the project to be maintained. Updating core dependencies keeps our interface with Google Cloud KMS secure and performant, reducing the risk of regressions as cloud APIs evolve.

## Upgrade and Installation

Users deploying lockboxkms via the official Docker image (`ghcr.io/unitvectory-labs/lockboxkms`) can upgrade simply by pulling the latest image; no configuration changes are required. For developers integrating lockboxkms into other Go projects, please note that the module path change is a breaking change—you will need to update your imports to use the new GitHub-based prefix.

***

This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL.
Repository: UnitVectorY-Labs/lockboxkms
Release: v0.3.0
Date: 2026-04-12
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)