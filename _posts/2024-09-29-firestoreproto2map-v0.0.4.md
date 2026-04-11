---
layout: post
title: "firestoreproto2map v0.0.4: Strengthening Build Security and Transparency"
date: 2024-09-29 09:00:00 -0500
tags: ["firestoreproto2map", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on September 29, 2024, firestoreproto2map v0.0.4 is a maintenance release focused on improving the project's infrastructure. This update enhances the reliability and security of our build pipeline, ensuring that users can trust the artifacts they integrate into their Java applications.

## What's new

This release focuses on the "under-the-hood" machinery of the project:

- **Build Provenance:** We have integrated build provenance into our release workflow. This provides a verifiable record of how the library was built, adding a critical layer of transparency and security to the software supply chain.
- **Enhanced Artifact Publishing:** Improvements were made to the CI/CD pipeline to ensure more robust and reliable publishing of Java artifacts.

## Why it matters

While this release doesn't introduce new API features, it significantly improves the trust and stability of the library. For developers using `firestoreproto2map` to handle Firestore Protocol Buffers in their Cloud Functions, build provenance means you can have greater confidence in the integrity of the binary you are deploying to production.

## Upgrade and Installation

Upgrading to v0.0.4 is straightforward. Simply update the version in your `pom.xml` dependency:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2map</artifactId>
    <version>0.0.4</version>
</dependency>
```

There are no breaking changes in this release, and it remains fully compatible with Java 17.

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It was generated on April 11, 2026, based on the [firestoreproto2map](https://github.com/UnitVectorY-Labs/firestoreproto2map) repository and the [v0.0.4 release](https://github.com/UnitVectorY-Labs/firestoreproto2map/releases/tag/v0.0.4). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*