---
layout: post
title: "Maintaining the Bridge: firestoreproto2map v0.0.5"
date: 2025-05-26 09:00:00 -0500
tags: ["firestoreproto2map", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on May 26, 2025, version v0.0.5 of `firestoreproto2map` is a dedicated maintenance release. While it doesn't introduce new functional features, it focuses on strengthening the project's foundation through critical dependency updates and documentation refinements to ensure a smoother developer experience.

## What's new

This release focuses on stability and accuracy:

- **Documentation Improvements:** The usage example in the `README.md` has been corrected. This ensures that developers can implement the library quickly and correctly without encountering discrepancies in the example code.
- **Core Dependency Updates:** The library has been updated to use `google-cloud-firestore` version 3.31.4, keeping the project aligned with the latest Google Cloud standards.
- **Infrastructure Hardening:** We've refined our CI/CD pipelines, explicitly targeting Java 17 across workflows and integrating `zizmor` for enhanced static analysis and security scanning.

## Why it matters

For a utility library like `firestoreproto2map`, reliability is the primary feature. By updating core dependencies, we ensure that users benefit from the latest performance improvements and security patches provided by the official Google Cloud SDKs.

Furthermore, the correction of the README examples removes friction for new adopters, ensuring the "time to first success" is as short as possible. The upgrades to our internal tooling and CI pipelines mean that future updates will be more stable and secure, providing a more robust platform for the community.

## Getting started with v0.0.5

Updating to the latest version is straightforward. Simply update the version in your `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2map</artifactId>
    <version>0.0.5</version>
</dependency>
```

This is a non-breaking release, so you can upgrade with confidence. We encourage all users to move to v0.0.5 to take advantage of the updated dependencies and improved documentation.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It refers to the repository [UnitVectorY-Labs/firestoreproto2map](https://github.com/UnitVectorY-Labs/firestoreproto2map) and release v0.0.5, generated on 2026-04-11. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*