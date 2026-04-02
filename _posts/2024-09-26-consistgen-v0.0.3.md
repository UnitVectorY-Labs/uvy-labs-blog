---
layout: post
title: "ConsistGen v0.0.3 Now Available: String Generation for Predictable Testing"
date: 2024-09-25 22:14:55 -0400
tags: ["consistgen", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the release of ConsistGen v0.0.3, a significant update that completes the library's core test data generation capabilities with the addition of flexible string generation.

Released on September 25, 2024, this version introduces the new StringProvider interface alongside the existing timestamp and UUID generators, giving Java developers a complete toolkit for creating predictable, injectable test data without relying on mocking frameworks.

## What's New

### String Generation Capabilities

The headline feature in v0.0.3 is the brand-new **StringProvider** interface with three ready-to-use implementations:

- **RandomStringProvider**: Generate cryptographically secure random strings using SecureRandom. Perfect for production scenarios where you need unpredictable test data that still flows through your dependency injection pattern.

- **StaticStringProvider**: Get deterministic, repeatable string output for your tests. Configure an alphabet and length, and receive the exact same string every time—ideal for assertions and predictable test cases.

- **SettableStringProvider**: Combine the simplicity of static generation with runtime configurability. Change alphabets on the fly without creating new instances.

All implementations default to an alphanumeric character set but support fully custom alphabets, giving you precise control over generated output format.

### Bug Fixes and Quality Improvements

This release includes important validation to prevent null or empty alphabets from being accepted, throwing clear `IllegalArgumentException` exceptions when misconfigured. Test coverage has been expanded to verify edge cases across all new StringProvider implementations.

## Why It Matters

Testing with time-based data, UUIDs, and random strings has always been frustrating. Direct calls to `System.currentTimeMillis()`, `UUID.randomUUID()`, or `SecureRandom` produce different results on every execution, making reliable test assertions nearly impossible.

While mocking frameworks like Mockito can help, they add complexity and dependencies just to handle these common scenarios. ConsistGen solves this elegantly by providing drop-in implementations that work seamlessly with dependency injection—no mocking required.

With v0.0.3, you now have a unified approach for all three major types of unpredictable test data:

| Data Type | Interface | Use Case |
|-----------|-----------|----------|
| Timestamps | EpochTimeProvider | Time-sensitive logic testing |
| UUIDs | UuidGenerator | Unique identifier scenarios |
| Strings | StringProvider | Random ID, token, or code generation |

## Getting Started

### Installation

Add the dependency to your Maven project:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>consistgen</artifactId>
    <version>0.0.3</version>
</dependency>
```

### Quick Example

Here's how you might use the new StringProvider in production and test code:

```java
// Production: random strings for testing external integrations
RandomStringProvider provider = RandomStringProvider.getInstance();
String randomId = provider.generate(10);  // e.g., "lBDo1sZw4H"

// Test: predictable output for reliable assertions
StaticStringProvider staticProvider = StaticStringProvider.builder()
    .alphabet("abcde")
    .build();
String testId = staticProvider.generate(10);  // Always "abcdeabcde"
```

### Upgrade Notes

Upgrading from v0.0.2 is straightforward—this release is fully backward compatible. Your existing code using `EpochTimeProvider` and `UuidGenerator` continues to work without modification. Just add the new imports from `com.unitvectory.consistgen.string` when you're ready to leverage string generation.

## Learn More

Ready to dive deeper? Check out the [full documentation](https://github.com/UnitVectorY-Labs/consistgen) for complete usage examples and API details. The library is available on Maven Central, and Javadocs are hosted at javadoc.io.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It covers the consistgen v0.0.3 release from September 25, 2024. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
