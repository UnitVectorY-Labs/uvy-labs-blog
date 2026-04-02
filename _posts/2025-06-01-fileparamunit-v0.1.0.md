---
layout: post
title: "fileparamunit v0.1.0: JUnit 5.13 Compatibility Release"
date: 2025-06-01 15:57:41 -0500
tags: ["fileparamunit", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introduction

On June 1, 2025, we released fileparamunit v0.1.0, a maintenance release that ensures continued compatibility with JUnit 5.13.0. While this update doesn't introduce new features, it addresses an important breaking change in the JUnit framework that affects users upgrading to the latest version of JUnit.

This release demonstrates our commitment to keeping fileparamunit current with the evolving JUnit ecosystem while maintaining backward compatibility for existing users.

## What's New

### JUnit 5.13 Compatibility

The primary update in v0.1.0 is compatibility with JUnit 5.13.0. This version addresses a breaking change introduced in JUnit 5.13 related to the `AnnotationBasedArgumentsProvider` class method signature.

**Key changes:**
- Updated `junit-jupiter-params` dependency from version 5.12.2 to 5.13.0
- Added support for the new `ParameterDeclarations` parameter in the provider API
- Maintained backward compatibility with existing code

### Version Milestone

This release marks a version bump from 0.0.x to 0.1.0, signaling a notable milestone in the library's development journey toward early stability.

## Why It Matters

### For Users on JUnit 5.12.x

If you're currently using JUnit 5.12.x, this release is optional but recommended. Your existing test code will continue to work without any changes, and upgrading now ensures smooth forward compatibility when you're ready to move to JUnit 5.13.

### For Users Upgrading to JUnit 5.13+

If you're planning to upgrade to JUnit 5.13.0 or later, **this version is required**. Without it, you would encounter compilation errors due to the deprecated method signature in the JUnit framework.

### Zero Breaking Changes for End Users

The best news: your existing test code requires **no modifications** when upgrading from v0.0.6 to v0.1.0. The library internally handles the API transition while preserving the same user-facing `@ListFileSource` annotation behavior you rely on.

## Upgrade Instructions

Upgrading to v0.1.0 is straightforward. Update your Maven dependency:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>fileparamunit</artifactId>
    <version>0.1.0</version>
    <scope>test</scope>
</dependency>
```

No changes to your test code are required. Simply update the version number and continue testing with file-based parameterized tests as before.

## Available Artifacts

The v0.1.0 release includes:
- `fileparamunit-0.1.0.jar` - Main library JAR
- `fileparamunit-0.1.0-sources.jar` - Source code
- `fileparamunit-0.1.0-javadoc.jar` - Full API documentation
- `fileparamunit-0.1.0.pom` - Maven POM file

All artifacts are available on Maven Central and the [GitHub releases page](https://github.com/UnitVectorY-Labs/fileparamunit/releases/tag/v0.1.0).

---

**Transparency Note:** This release announcement was generated with AI assistance using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The announcement was drafted based on research from the [UnitVectorY-Labs/fileparamunit](https://github.com/UnitVectorY-Labs/fileparamunit) repository and v0.1.0 release published on June 1, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
