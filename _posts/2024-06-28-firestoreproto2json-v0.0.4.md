---
layout: post
title: "firestoreproto2json v0.0.4: Stability and Dependency Updates"
date: 2024-06-28 09:00:00 -0500
tags: ["firestoreproto2json", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on June 28, 2024, firestoreproto2json v0.0.4 is a maintenance release dedicated to strengthening the foundation of the project. While this update doesn't introduce new user-facing features, it focuses on essential dependency updates and internal improvements to ensure continued stability and reliability for all users.

## What's new

This release primarily focuses on keeping the project's core dependencies current:

* **Core Library Updates**: We have updated key libraries, including `gson` to version 2.11.0 and `google-cloudevent-types` to 0.15.0.
* **Enhanced Testing Infrastructure**: Under the hood, we've transitioned our testing assertion library to `jsonassertify`, providing a more robust framework for verifying conversion accuracy.

## Why it matters

Maintenance releases like v0.0.4 are critical for the long-term health of any open-source tool. By updating to the latest versions of `gson` and other core libraries, we ensure that `firestoreproto2json` benefits from the latest performance optimizations and security patches.

Additionally, the shift in our testing approach allows for more precise validation of the proto-to-JSON conversion process. While these changes are invisible during daily use, they significantly reduce the risk of regressions and provide a more stable experience as the project evolves.

## Getting started

To upgrade to v0.0.4, simply update the version reference in your project's dependency management file (e.g., `pom.xml` or `build.gradle`) to the latest version.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It references the [UnitVectorY-Labs/firestoreproto2json](https://github.com/UnitVectorY-Labs/firestoreproto2json) repository, release v0.0.4, and was generated on Sat Apr 11 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*