---
layout: post
title: "Announcing ConsistGen v0.0.1: Testable Code Made Simple"
date: 2024-09-25 09:00:00 -0500
tags: ["consistgen", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the launch of ConsistGen, a lightweight Java library that makes testing timestamp and UUID-dependent code significantly easier. Version 0.0.1 was released on September 25, 2024, marking the introduction of this new tool to the Java development community.

## What's New

ConsistGen v0.0.1 introduces the foundational capabilities of the library:

### Injectable Time and UUID Abstractions

The release provides two simple interfaces that wrap common JDK calls:

- **`EpochTimeProvider`** - An interface for obtaining epoch time, replacing direct calls to `System.currentTimeMillis()`
- **`UuidGenerator`** - An interface for generating UUID strings, replacing direct calls to `UUID.randomUUID()`

### Production and Test Implementations

For each interface, ConsistGen supplies ready-to-use implementations:

| Interface | Production Use | Test Use |
|-----------|----------------|----------|
| EpochTimeProvider | `SystemEpochTimeProvider` (singleton) | `StaticEpochTimeProvider` (builder-pattern) |
| UuidGenerator | `RandomUuidGenerator` (singleton) | `StaticUuidGenerator` (builder-pattern) |

In production, you use the singleton implementations that delegate to the real JDK methods. In tests, you configure static providers with predictable values using a clean builder API:

```java
// Test setup with known values
EpochTimeProvider timeProvider = StaticEpochTimeProvider.builder()
    .epochTimeMilliseconds(1234567890L)
    .build();
UuidGenerator uuidGen = StaticUuidGenerator.builder()
    .uuid("12345678-1234-5678-1234-567812345678")
    .build();
```

### Dependency Injection Support

ConsistGen is designed to work naturally with dependency injection. By injecting these providers into your classes, you eliminate the testing headaches that come from calling unpredictable system methods directly. Your code remains clean, and your tests become deterministic and reliable.

## Why It Matters

Testing code that depends on `System.currentTimeMillis()` or `UUID.randomUUID()` has long been a nuisance for Java developers. These calls return different values every time, making assertions brittle and tests flaky. While mocking frameworks can help, they're often overkill for such simple dependencies.

ConsistGen solves this problem elegantly by providing minimal abstractions that follow the dependency injection pattern. The library has **no runtime dependencies**—Lombok is provided-scope only, and JUnit is test-scope only. This keeps your classpath clean while giving you a tested, reliable solution.

The result? Tests that always pass with consistent expected values, production code that behaves normally, and no heavyweight mocking infrastructure required.

## Getting Started

ConsistGen v0.0.1 requires **Java 17 or higher** and is built with Maven. To add it to your project:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>consistgen</artifactId>
    <version>0.0.1</version>
</dependency>
```

Once added, inject the providers into your classes and use them in place of direct JDK calls. The library is released under the **Apache License 2.0**, so you can use it freely in both open-source and commercial projects.

For complete code examples and usage patterns, check out the full documentation on the [ConsistGen GitHub repository](https://github.com/UnitVectorY-Labs/consistgen).

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was created on behalf of [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller) to document the v0.0.1 release of consistgen (published September 25, 2024).*
