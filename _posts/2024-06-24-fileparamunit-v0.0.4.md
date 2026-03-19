---
layout: post
title: "fileparamunit v0.0.4 Released: Maintenance and Security Updates"
date: 2024-06-24 22:45:30 -0500
tags: [fileparamunit, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

We're pleased to announce the release of fileparamunit v0.0.4, available now on June 24, 2024. This release focuses on keeping your testing infrastructure secure and up-to-date with the latest dependency versions.

## What's New

Version 0.0.4 is a maintenance release that brings important dependency updates to ensure fileparamunit continues to work reliably with the broader Java testing ecosystem. There are no breaking changes or modifications to the library's public API.

**Key Updates:**

- **Build Tools:** Updated 7 Maven plugins including the compiler plugin, surefire plugin, and javadoc plugin to their latest versions
- **Testing Framework:** Bumped mockito-core from 5.11.0 to 5.12.0 for improved test mocking capabilities
- **Code Coverage:** Upgraded JaCoCo plugin to 0.8.12 for accurate coverage reporting
- **Security Scanning:** Added automated dependency submission for vulnerability detection and monitoring

The core functionality of fileparamunit remains unchanged. The `@ListFileSource` annotation and all existing features work exactly as they did in v0.0.3.

## Why It Matters

This release represents responsible open-source stewardship. By keeping dependencies current, we ensure that fileparamunit users benefit from:

- **Security:** Updated dependencies include important security patches from across the Maven ecosystem
- **Compatibility:** Staying aligned with the latest versions of JUnit 5 and related testing tools prevents future compatibility issues
- **Reliability:** Modern build tools and plugins provide better error reporting and more robust CI/CD integration
- **Visibility:** New vulnerability scanning capabilities help identify potential security issues before they affect users

The addition of automated dependency submission means fileparamunit now proactively submits its dependency tree for security analysis, adding another layer of protection for everyone who uses the library.

## Upgrade Instructions

Upgrading to v0.0.4 is straightforward. Simply update your Maven dependency:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>fileparamunit</artifactId>
    <version>0.0.4</version>
    <scope>test</scope>
</dependency>
```

No changes to your test code are required. This release is fully backward compatible with v0.0.3 and earlier versions in the 0.0.x series.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Source: [fileparamunit v0.0.4](https://github.com/UnitVectorY-Labs/fileparamunit/releases/tag/v0.0.4), released June 24, 2024. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
