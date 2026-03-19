---
layout: post
title: "firestoreproto2json v0.0.3 Released"
date: 2024-03-19 09:00:00 -0500
tags: [firestoreproto2json, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## A Streamlined Build for Your Firestore Cloud Functions

On March 19, 2024, we're pleased to announce the release of firestoreproto2json v0.0.3. This maintenance release delivers a cleaner dependency structure while maintaining full backward compatibility with your existing code.

firestoreproto2json is a Java library that converts Firestore Protocol Buffer data into JSON objects, solving a common challenge for developers building Cloud Functions triggered by Firestore events.

## What's New

v0.0.3 focuses on behind-the-scenes improvements rather than new features. The primary change is a streamlined dependency management approach:

### Dependency Cleanup
The explicit `protobuf-java` dependency declaration has been removed. The library now relies on transitive dependencies to provide this requirement. For users, this means:
- A simpler dependency tree
- Reduced potential for version conflicts
- No changes needed to your build configuration

### Test and Build Updates
We've also updated our test framework (jsonparamunit to v0.0.3) and build tools to keep the project current and maintainable.

## Why It Matters

This release represents a commitment to code quality and developer experience. By simplifying the dependency structure, we're reducing friction for new users setting up the library and minimizing potential compatibility issues for existing users.

The best part? This is a **safe, zero-risk upgrade**. If you're currently using v0.0.2, updating to v0.0.3 requires nothing more than changing the version number in your build file. No code changes, no configuration updates, no breaking changes—just a cleaner underlying implementation.

## Upgrade and Installation

### New Users
Add the dependency to your `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2json</artifactId>
    <version>0.0.3</version>
</dependency>
```

### Upgrading from v0.0.2
Simply update your version number to `0.0.3`. The library maintains complete backward compatibility, and protobuf-java will be pulled in automatically as a transitive dependency.

For more details on how to use the library's conversion capabilities—including handling timestamps, GeoPoints, byte arrays, and all Firestore data types—check out the full documentation in the repository README.

---

*This post was AI-generated using the model unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M. The information is based on the v0.0.3 release of firestoreproto2json, published on March 19, 2024. Original author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
