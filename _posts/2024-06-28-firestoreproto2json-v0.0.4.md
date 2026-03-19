---
layout: post
title: "firestoreproto2json v0.0.4 Released"
date: 2024-06-28 00:00:00 -0500
tags: [firestoreproto2json, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introduction

We're pleased to announce the release of firestoreproto2json v0.0.4, published on June 28, 2024. This maintenance release continues our commitment to keeping the library's dependencies current and the build ecosystem healthy, while maintaining the stable API that users rely on.

## What's New

Version 0.0.4 is a dependency maintenance release that updates several key components:

**Core Runtime Updates:**
- `google-cloudevent-types`: Updated from 0.14.0 to 0.15.0
- `gson`: Updated from 2.10.1 to 2.11.0
- `lombok`: Updated from 1.18.30 to 1.18.34

**Build Tool Updates:**
- `maven-surefire-plugin`: 3.2.5 → 3.3.0
- `maven-javadoc-plugin`: 3.6.3 → 3.7.0
- `jacoco-maven-plugin`: 0.8.11 → 0.8.12
- Test framework migrated to `jsonassertify` for improved test capabilities

**Documentation Improvements:**
- Fixed version references in README examples
- Corrected minor typographical errors

The core library API remains unchanged, ensuring your existing code continues to work without modification.

## Why It Matters

While this release doesn't introduce new features, maintaining up-to-date dependencies is crucial for:

- **Security**: Keeping transitive dependencies current helps protect against known vulnerabilities in the dependency chain
- **Compatibility**: Ensuring continued compatibility with the broader Java and Google Cloud ecosystems
- **Reliability**: Building on well-tested, recent versions of foundational libraries

This release demonstrates our ongoing commitment to library maintenance and long-term stability. The firestoreproto2json core functionality that converts Firestore Protocol Buffer documents to JSON remains stable and reliable.

## Getting Started

Upgrading to v0.0.4 is straightforward. For Maven users, simply update your `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2json</artifactId>
    <version>0.0.4</version>
</dependency>
```

The release is fully backward compatible with v0.0.3 and earlier versions. No code changes are required on your end.

## Try It Out

The library is available on Maven Central and can be integrated into your Java projects immediately. If you're working with Cloud Functions or other services that trigger on Firestore events, firestoreproto2json makes it easy to convert Protocol Buffer data into manageable JSON objects.

For more information, check out the [README](https://github.com/UnitVectorY-Labs/firestoreproto2json) on GitHub.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was generated on behalf of the firestoreproto2json project (https://github.com/UnitVectorY-Labs/firestoreproto2json) for release v0.0.4 (June 28, 2024). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
