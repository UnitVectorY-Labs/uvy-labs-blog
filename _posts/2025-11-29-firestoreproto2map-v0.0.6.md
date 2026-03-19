---
layout: post
title: "FirestoreProto2Map v0.0.6 Released: Dependency Updates for a Secure Future"
date: 2025-11-29 09:00:00 -0500
tags: [firestoreproto2map, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

FirestoreProto2Map v0.0.6 was released on November 29, 2025, marking another step forward in maintaining this essential Java helper library for Cloud Functions developers. This release focuses exclusively on keeping your dependencies current and secure while preserving the complete stability you expect from the library.

## What's New

This is a pure maintenance release with no changes to the library's public API or core functionality. All updates are focused on dependency management and build tooling improvements:

### Dependency Updates

The following dependencies have been upgraded to their latest compatible versions:

- **google-cloud-firestore**: 3.31.4 → 3.33.4
- **google-cloudevent-types**: 0.16.0 → 0.17.1
- **junit-jupiter-api**: 5.12.2 → 5.13.4
- **mockito-core**: 5.18.0 → 5.20.0
- **fileparamunit**: 0.0.6 → 0.1.2

### Build Tooling Improvements

All Maven plugins and GitHub Actions have been updated to their latest versions, ensuring your CI/CD pipelines remain secure and efficient:

- Maven compiler plugin: 3.14.0 → 3.14.1
- Maven surefire plugin: 3.5.3 → 3.5.4
- Central publishing plugin: 0.7.0 → 0.9.0
- GitHub Actions modernized (actions/checkout v6, actions/setup-java v5, CodeQL v4)

### New Addition

A JUnit BOM (Bill of Materials) dependency has been added for improved version management across the test ecosystem, contributed by JaredHatfield.

## Why It Matters

Keeping dependencies current is critical for any production library. This release ensures that firestoreproto2map users benefit from:

1. **Security**: The latest security patches across all transitive dependencies
2. **Compatibility**: Alignment with the most recent Firestore SDK improvements and bug fixes
3. **Stability**: Thoroughly tested versions of testing frameworks like JUnit and Mockito
4. **Future-proofing**: Modernized CI/CD infrastructure ensures continued support and integration with GitHub's latest features

For developers using firestoreproto2map in their Cloud Functions to convert Firestore Protocol Buffer documents into Java Maps, this release means peace of mind. You can upgrade knowing that nothing will break—the API remains unchanged, behavior is identical, and your code continues to work exactly as before.

## Upgrade Instructions

Upgrading to v0.0.6 is straightforward. Simply update the version number in your Maven `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2map</artifactId>
    <version>0.0.6</version>
</dependency>
```

**Breaking Changes**: None  
**API Changes**: None  
**Required Java Version**: Java 17 (unchanged)

The library is available on Maven Central at [https://central.sonatype.com/artifact/com.unitvectory/firestoreproto2map](https://central.sonatype.com/artifact/com.unitvectory/firestoreproto2map).

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It is based on the v0.0.6 release of [firestoreproto2map](https://github.com/UnitVectorY-Labs/firestoreproto2map) published on November 29, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
