---
layout: post
title: Introducing JSONassertify v0.0.1 - A Modernized JSON Testing Library
date: 2024-06-27 09:00:00 -0500
tags: ["jsonassertify", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introducing JSONassertify

We're excited to announce the first official release of **JSONassertify v0.0.1**, launched on June 27, 2024. This marks the public debut of a modernized fork of the popular JSONassert library, rebuilt to address critical maintenance concerns while preserving the developer-friendly experience that made the original so beloved.

JSONassertify simplifies JSON comparison in unit tests, making it easier than ever to validate REST API responses and JSON data structures with intuitive, string-based assertions.

---

## What's New

As an initial release, JSONassertify brings several important modernization improvements while maintaining full API compatibility with JSONassert 1.5.1:

### Modernized Dependencies
- **JSON Library Migration**: Transitioned from the unmaintained `android-json` library to the actively maintained `org.json:json` (version 20240303)
- **JUnit 5 Upgrade**: Built on JUnit Jupiter API 5.10.2, replacing the legacy JUnit 4 framework
- **Java 8 Support**: Minimum requirement raised from Java 6 to Java 8, ensuring compatibility with modern JVM environments

### New Package Identity
- **New groupId**: `com.unitvectory`
- **New artifact**: `jsonassertify`
- **New package**: `com.unitvectory.jsonassertify` (moved from `org.skyscreamer.jsonassert`)

### Infrastructure Improvements
- **GitHub Actions CI/CD**: Automated build, code scanning, and release workflows
- **Security Updates**: All Maven plugins updated to modern versions with security fixes
- **Dependency Management**: Configured Dependabot for ongoing automatic updates

### Code Quality Enhancements
- Added comprehensive JavaDoc documentation throughout the codebase
- Improved code formatting and consistency
- License header cleanup and proper attribution

---

## Why It Matters

JSONassertify was created in direct response to growing concerns about the original JSONassert project's maintenance status, particularly following JSONassert 1.5.2's unexpected requirement for Java 21. Our goal is simple: **modernize while maintaining backward compatibility**.

For developers who rely on JSON assertion in their test suites, JSONassertify offers:

- **Peace of Mind**: Active maintenance and modern dependency management
- **Smoother Upgrades**: No need to rewrite existing tests—just update imports and dependencies
- **Modern Tooling**: Built with current best practices and CI/CD automation
- **Open Commitment**: Same Apache 2.0 license, same community spirit

The core functionality remains unchanged: you still write beautiful, readable JSON test expectations like this:

```java
JSONObject data = getRESTData("/friends/367.json");
String expected = "{friends:[{id:123,name:\"Corby Page\"},{id:456,name:\"Carter Page\"}]}";
JSONAssert.assertEquals(expected, data, false);
```

---

## Getting Started

### Maven Dependency

Add this to your `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonassertify</artifactId>
    <version>0.0.1</version>
    <scope>test</scope>
</dependency>
```

### Migration from JSONassert

If you're migrating from the original JSONassert library, the process is straightforward:

1. **Update your dependency**: Replace `org.skyscreamer:jsonassert` with `com.unitvectory:jsonassertify`
2. **Update imports**: Change `import org.skyscreamer.jsonassert.JSONAssert;` to `import com.unitvectory.jsonassertify.JSONAssert;`

That's it! Your existing test code should work without modification.

### A Note on Breaking Changes

One important difference to be aware of: the switch to `org.json` means that JSON with duplicate keys will now throw a parsing error (the original library would accept duplicates, using the most recent value). This edge case is uncommon in practice but worth noting if you encounter it.

---

## What's Next

JSONassertify v0.0.1 preserves all four comparison modes from the original library:
- **STRICT**: Not extensible, strict array ordering
- **LENIENT**: Extensible, non-strict array ordering (recommended default)
- **NON_EXTENSIBLE**: Not extensible, non-strict array ordering
- **STRICT_ORDER**: Extensible, strict array ordering

We're aware of some limitations in non-strict array comparisons (mixed types and nested arrays) and plan to address these in future releases.

---

## Transparency Note

This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The content is based on information from the JSONassertify v0.0.1 release published on June 27, 2024. For more details, visit the [JSONassertify repository](https://github.com/UnitVectorY-Labs/JSONassertify) or the [v0.0.1 release page](https://github.com/UnitVectorY-Labs/JSONassertify/releases/tag/v0.0.1).

*Authored by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
