---
layout: post
title: "Keeping Firestore Integration Smooth: firestoreproto2map v0.0.2"
date: 2024-06-28 09:00:00 -0500
tags: ["firestoreproto2map", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On June 28, 2024, we released v0.0.2 of `firestoreproto2map`. This is a maintenance release focused on ensuring the library remains stable, secure, and compatible with the latest cloud ecosystem.

## What's new

This release focuses on essential under-the-hood improvements. We have updated several key dependencies, most notably the `google-cloud-firestore` SDK, which has been moved from version 3.20.0 to 3.21.6. Additionally, we've bumped the versions of our testing frameworks, including JUnit and Mockito, and refined our Maven plugins to keep the build pipeline modern and efficient.

## Why it matters

While this version doesn't introduce new features, keeping dependencies current is critical for production-grade software. By updating the Firestore SDK, we ensure that developers using `firestoreproto2map` benefit from the latest bug fixes and performance enhancements provided by Google. These updates minimize technical debt and provide a more reliable foundation for processing Firestore events in Java.

## Upgrade and Installation

Upgrading to v0.0.2 is straightforward. Simply update the version in your `pom.xml` file:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2map</artifactId>
    <version>0.0.2</version>
</dependency>
```

We recommend this update for all users to ensure continued compatibility and stability.

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It was generated on 2026-04-11 based on the v0.0.2 release of the [UnitVectorY-Labs/firestoreproto2map](https://github.com/UnitVectorY-Labs/firestoreproto2map) repository. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*