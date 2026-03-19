---
layout: post
title: "fileparamunit v0.1.1 Released"
date: 2025-06-09 22:51:22 -0500
tags: [fileparamunit, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## fileparamunit v0.1.1 Released

Today, June 9, 2025, we're pleased to announce the availability of fileparamunit v0.1.1, a maintenance release that keeps your testing dependencies current and improves documentation for seamless integration.

This patch release focuses on keeping the library aligned with the latest JUnit 5 ecosystem updates while providing clearer guidance for developers integrating fileparamunit into their test suites.

## What's New

### Dependency Update

The primary change in v0.1.1 is an update to the underlying JUnit Jupiter Params dependency, moving from version 5.13.0 to 5.13.1. This patch-level update ensures your tests benefit from the latest bug fixes and improvements in the JUnit 5 parameterized testing framework.

### Enhanced Documentation

We've added a new "Dependencies and Compatibility" section to the README that provides:

- Clear minimum version requirements (JUnit 5.13.0+)
- Best practices for managing JUnit 5 dependencies using the JUnit BOM
- Complete configuration examples for Maven projects

This documentation helps developers avoid common integration pitfalls and ensures smooth setup experiences.

## Why It Matters

### Zero Friction Upgrades

This release is designed with backward compatibility in mind. There are **no breaking changes**, no API modifications, and no migration steps required. If you're currently using v0.1.0, upgrading is as simple as updating the version number in your `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>fileparamunit</artifactId>
    <version>0.1.1</version>
    <scope>test</scope>
</dependency>
```

### Confidence Through Documentation

The new compatibility documentation addresses a key integration concern: JUnit version alignment. By explaining the dependency on JUnit 5's `AnnotationBasedArgumentsProvider` and recommending the JUnit BOM, we help teams avoid version mismatch issues that can cause confusing test failures.

### Maintaining Ecosystem Alignment

Keeping dependencies current is essential for any library in the Java ecosystem. This release demonstrates our commitment to staying aligned with JUnit 5's development trajectory, ensuring fileparamunit continues to work seamlessly as the testing framework evolves.

## Getting Started

To start using v0.1.1, add it as a test dependency to your Maven project as shown above. The library requires:

- Java 17 or higher
- JUnit 5.13.0 or newer

For detailed usage examples with the `@ListFileSource` annotation, see the [full documentation on GitHub](https://github.com/UnitVectorY-Labs/fileparamunit).

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It is based on the v0.1.1 release published on June 9, 2025 from the [UnitVectorY-Labs/fileparamunit](https://github.com/UnitVectorY-Labs/fileparamunit) repository. Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
