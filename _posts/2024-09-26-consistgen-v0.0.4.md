---
layout: post
title: "ConsistGen v0.0.4 Release Announcement"
date: 2024-09-26 23:32:19 -0500
tags: ["consistgen", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're pleased to announce the release of ConsistGen v0.0.4, published on September 26, 2024. This release brings important consistency improvements to the library's API design while maintaining its core mission of providing predictable test data through dependency injection.

## What's New

### Builder Pattern for SettableUuidGenerator

The headline change in v0.0.4 is the refactoring of `SettableUuidGenerator` to use the builder pattern. This brings it in line with other generators in the library, creating a more consistent and predictable developer experience across all ConsistGen components.

**Before (v0.0.3):**
```java
SettableUuidGenerator generator = new SettableUuidGenerator();
SettableUuidGenerator generator = new SettableUuidGenerator(customUuid);
```

**After (v0.0.4):**
```java
SettableUuidGenerator generator = SettableUuidGenerator.builder().build();
SettableUuidGenerator generator = SettableUuidGenerator.builder().uuid(customUuid).build();
```

### Improved Null Safety

The new builder implementation includes enhanced null handling. If `null` is passed to the builder or setter, it now safely defaults to `"00000000-0000-0000-0000-000000000000"` rather than potentially causing unexpected behavior.

### Community Growth

This release marks the first contribution from @JaredHatfield to the repository, welcoming a new voice to the ConsistGen project.

## Why It Matters

Consistency in API design reduces cognitive load for developers working with multiple components. By aligning `SettableUuidGenerator` with the builder pattern already used by `StaticUuidGenerator`, `StaticEpochTimeProvider`, and other generators, v0.0.4 creates a more unified experience across the library.

For teams writing tests that rely on ConsistGen's injectable test data providers, this change means one less pattern to remember and a more predictable interface when configuring test fixtures.

## Upgrading to v0.0.4

### Breaking Changes

⚠️ **API Change Alert**: If your code directly instantiates `SettableUuidGenerator`, you'll need to update your construction pattern.

**Migration steps:**

1. Search your codebase for `new SettableUuidGenerator(`
2. Replace with the builder pattern: `SettableUuidGenerator.builder()`
3. Add `.build()` at the end of the construction chain
4. If passing a UUID parameter, add `.uuid(yourUuid)` before `.build()`

The `setUuid(String uuid)` method continues to work as before, now with improved null handling that resets to the default UUID when null is passed.

### Installing v0.0.4

Update your Maven dependency:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>consistgen</artifactId>
    <version>0.0.4</version>
</dependency>
```

All other ConsistGen components (`RandomUuidGenerator`, `StaticUuidGenerator`, `EpochTimeProvider` implementations, and `StringProvider` implementations) remain unchanged and fully compatible with existing code.

---

As a pre-1.0 release, v0.0.4 reflects the library's ongoing maturation. While API changes may occur in future versions as ConsistGen evolves, this release focuses on improving the developer experience through consistent design patterns.

**Transparency Note:** This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It references the ConsistGen repository (https://github.com/UnitVectorY-Labs/consistgen), release v0.0.4 (published September 26, 2024), and was authored by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
