---
layout: post
title: "consistgen v0.0.5 Released"
date: 2024-09-27 00:44:00 -0500
tags: ["consistgen", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introduction

On September 27, 2024, we released consistgen v0.0.5, a patch update that brings an important code quality improvement to our Java testing library. This release corrects a method name typo in the `SettableEpochTimeProvider` class while maintaining the library's core mission of enabling predictable test data generation through dependency injection.

consistgen helps developers write better tests by wrapping unpredictable operations like timestamps, UUIDs, and random string generation behind interfaces that can be easily swapped between production and test implementations. This makes your tests more reliable, repeatable, and easier to reason about.

## What's New

### Method Name Correction

The primary change in v0.0.5 is a correction to the `SettableEpochTimeProvider` class. The method previously named `setEpohTimeSeconds()` has been corrected to `setEpochTimeSeconds()`, fixing a typo that was present since the class was introduced in v0.0.2.

**Affected Component:**
- `SettableEpochTimeProvider.setEpochTimeSeconds(long epochTimeSeconds)`

This improvement ensures our API follows proper naming conventions and is more intuitive for users working with the library.

## Why It Matters

### Improved Code Quality

Correct method names make your codebase more maintainable and professional. The corrected spelling aligns with standard English conventions and reduces confusion for developers integrating consistgen into their projects.

### Breaking Change Notice

While this change improves code quality, it does represent a breaking API change for users who have already adopted the `setEpohTimeSeconds()` method name in their test code. Upgrading from v0.0.4 to v0.0.5 will require updating any calls to this method:

```java
// Before (v0.0.4):
provider.setEpohTimeSeconds(1234567890L);

// After (v0.0.5+):
provider.setEpochTimeSeconds(1234567890L);
```

If you're not using `SettableEpochTimeProvider` or have not yet adopted the library, there's no action required—this change only affects code that directly calls this specific method.

### Continuous Improvement

This release reflects our commitment to maintaining high code quality standards from the outset of the project. Released just one day after v0.0.4, it demonstrates our agile approach to addressing issues promptly and keeping the library polished for early adopters.

## Upgrade Instructions

Upgrading to consistgen v0.0.5 is straightforward. Update your Maven dependency:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>consistgen</artifactId>
    <version>0.0.5</version>
</dependency>
```

If you're using the `SettableEpochTimeProvider.setEpohTimeSeconds()` method in your code, simply rename it to `setEpochTimeSeconds()` and rebuild your project. The functionality remains identical—only the spelling has changed.

### Build Requirements

- Java 17 or higher
- Maven for dependency management

## Get Started

If you're new to consistgen, check out our [GitHub repository](https://github.com/UnitVectorY-Labs/consistgen) to learn more about:
- Setting up the library in your project
- Using EpochTimeProvider, UuidGenerator, and StringProvider interfaces
- Implementing both static and dynamic value generation for your tests

We welcome feedback and contributions from the community as we continue developing consistgen!

---

**Transparency Note:** This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was created on March 18, 2026, based on official repository data from [UnitVectorY-Labs/consistgen](https://github.com/UnitVectorY-Labs/consistgen) release v0.0.5. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
