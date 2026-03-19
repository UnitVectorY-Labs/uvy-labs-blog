---
layout: post
title: "ConsistGen v0.0.2 Now Available"
date: 2024-09-25 10:49:46 -0500
tags: [consistgen, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

We're excited to announce the release of ConsistGen v0.0.2, published on September 25, 2024. This update brings enhanced testing flexibility to Java developers who rely on predictable data generation for their test cases.

As a dependency injection library that wraps time, UUID, and random string generation, ConsistGen continues to simplify test automation by replacing unpredictable system calls with injectable interfaces. Version 0.0.2 marks the project's promotion to "Active" status, signaling its readiness for production use.

## What's New

### Settable Implementations for Time and UUID Generation

The headline feature in v0.0.2 is the introduction of **SettableEpochTimeProvider** and **SettableUuidGenerator**. While previous versions offered static implementations with fixed values, these new classes let you change the returned values dynamically during test execution.

This is particularly useful when your tests need to verify behavior across multiple time points or UUIDs without creating separate test fixtures for each scenario. You can now set an initial value, run part of your test, update the value mid-test, and continue verifying different behaviors—all with a single provider instance.

### Enhanced Documentation

We've significantly improved the documentation experience:

- **Maven Central installation instructions** are now prominently featured in the README
- A new **Implementations section** clearly lists all available implementations for each interface
- **javadoc.io integration** provides quick access to generated API documentation
- Project status badge updated from "Work In Progress" to "Active" with full green badges

### Existing Implementations

To recap the full set of available implementations in v0.0.2:

| Interface | Available Implementations |
|-----------|--------------------------|
| `EpochTimeProvider` | `SystemEpochTimeProvider`, `StaticEpochTimeProvider`, `SettableEpochTimeProvider` |
| `UuidGenerator` | `RandomUuidGenerator`, `StaticUuidGenerator`, `SettableUuidGenerator` |

## Why It Matters

Testing time-dependent or UUID-generating code has always been challenging. The traditional approaches—either accepting flaky tests or creating complex test doubles—both have drawbacks. ConsistGen solves this by wrapping these unpredictable operations behind simple interfaces that support dependency injection.

With v0.0.2's settable implementations, you now have even more control. Consider a test scenario where you're validating an event-sourcing system: you might need to verify behavior at t=0, t=10 seconds, and t=60 seconds without mocking every single call. SettableEpochTimeProvider lets you advance time exactly when your test needs it to advance.

The library's small footprint (just two new classes in this release) means there's minimal complexity added while the value gained is substantial. You maintain predictable test outcomes while reducing boilerplate setup code.

## Get Started Upgrading

### Maven Installation

To add ConsistGen v0.0.2 to your project, update your `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>consistgen</artifactId>
    <version>0.0.2</version>
</dependency>
```

### Upgrade Path

If you're currently on v0.0.1, upgrading to v0.0.2 is straightforward—there are **no breaking changes**. All existing code will continue to work as before. You can adopt the new settable implementations at your own pace or ignore them entirely if static values suit your needs.

### Using the New Settable Providers

Here's a quick example of how to use the new settable implementations:

```java
// Time provider that you can advance during tests
SettableEpochTimeProvider timeProvider = new SettableEpochTimeProvider();
timeProvider.setEpochTimeMilliseconds(1234567890L);

// Later in your test, update the time
timeProvider.setEpohTimeSeconds(10); // Now returns 10000 milliseconds
```

## Join the Project

ConsistGen is open source under the Apache 2.0 license and lives on [GitHub](https://github.com/UnitVectorY-Labs/consistgen). Whether you're contributing code, reporting issues, or just trying it out, we'd love to hear from you.

For full API documentation, check out the [javadoc.io pages](https://javadoc.io/doc/com.unitvectory/consistgen) for v0.0.2.

---

*This release announcement was AI-generated using unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M. The original release v0.0.2 of the consistgen repository (UnitVectorY-Labs/consistgen) was published on September 25, 2024. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
