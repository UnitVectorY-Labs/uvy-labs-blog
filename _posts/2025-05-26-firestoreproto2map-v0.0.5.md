---
layout: post
title: "firestoreproto2map v0.0.5 Released"
date: 2025-05-26 13:45:08 -0500
tags: ["firestoreproto2map", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

FirestoreProto2Map v0.0.5 was released on May 26, 2025, bringing important documentation improvements and updated dependencies to this Java helper library for Firebase Cloud Functions developers.

## What's New

This maintenance release focuses on quality improvements that make the library more reliable and easier to use:

### Corrected Documentation

The usage example in the README has been fixed to ensure code copied directly from the documentation will compile correctly. This addresses an inconsistency in variable naming that could have caused compilation errors for developers following the examples.

### Updated Dependencies

v0.0.5 includes updated transitive dependencies that your applications will benefit from:

- **Google Cloud Firestore SDK** updated from 3.26.4 to 3.31.4, bringing the latest bug fixes and security patches
- **Testing libraries** upgraded to newer versions (JUnit Jupiter 5.12.2, Mockito 5.18.0)
- **Build tooling** improvements for more reliable CI/CD pipelines

### Community Contributions

This release marks the first contribution from @JaredHatfield, who helped improve the documentation quality.

## Why It Matters

While v0.0.5 doesn't introduce new features, it strengthens the foundation of your Firebase Cloud Functions infrastructure:

**Reliability**: Updated Firestore SDK dependencies mean your Cloud Functions benefit from Google's latest improvements and security patches without requiring changes to your code.

**Developer Experience**: If you've been copying examples from the README, you'll appreciate that the documentation now works as shown. No more debugging typos in tutorial code.

**Zero Breaking Changes**: This is a drop-in upgrade. The public API remains unchanged, so you can update with confidence knowing your existing code will continue to work.

## Getting Started

### Installing v0.0.5

Add the dependency to your Maven project:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2map</artifactId>
    <version>0.0.5</version>
</dependency>
```

### Upgrading from v0.0.4

Upgrading is straightforward—simply update the version number in your `pom.xml`. No code changes are required since this release maintains full backward compatibility with v0.0.4.

Requirements remain unchanged: Java 17 or higher.

### Learn More

- [View the release on GitHub](https://github.com/UnitVectorY-Labs/firestoreproto2map/releases/tag/v0.0.5)
- [Read the documentation](https://github.com/UnitVectorY-Labs/firestoreproto2map)
- [Browse on Maven Central](https://central.sonatype.com/artifact/com.unitvectory/firestoreproto2map)

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was generated based on the v0.0.5 release of [firestoreproto2map](https://github.com/UnitVectorY-Labs/firestoreproto2map), released on May 26, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
