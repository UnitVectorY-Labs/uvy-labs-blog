---
layout: post
title: "jsonparamunit v0.0.3 Released"
date: 2024-03-19 09:00:00 -0500
tags: [jsonparamunit, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

We're pleased to announce the release of jsonparamunit v0.0.3, a maintenance update that keeps your testing library dependencies current and secure. Released on March 19, 2024, this version upgrades the underlying Jackson library to 2.17.0, bringing users the latest improvements in JSON processing performance and security.

## What's New

The v0.0.3 release focuses on dependency maintenance with a single important update:

- **Jackson Databind 2.17.0**: The core Jackson library has been updated from 2.16.1 to 2.17.0, delivering bug fixes, security patches, and performance improvements from the Jackson project team.

That's it! This is a focused maintenance release that ensures jsonparamunit stays aligned with the latest stable Jackson releases.

## Why It Matters

Keeping dependencies current is critical for any production library. By upgrading to Jackson 2.17.0, jsonparamunit v0.0.3 provides:

- **Security**: Users benefit from security patches included in the Jackson update
- **Performance**: Improved JSON serialization and deserialization speeds
- **Stability**: Bug fixes that improve reliability across modern Java applications

For teams using jsonparamunit to power their parameterized JUnit 5 tests, this update means continued stability with no disruptions to your existing test suites.

## Seamless Upgrade

Upgrading to v0.0.3 is straightforward:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonparamunit</artifactId>
    <version>0.0.3</version>
    <scope>test</scope>
</dependency>
```

This release is fully backward-compatible with v0.0.2. No code changes are required—simply update the version number and run your tests.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Source: [UnitVectorY-Labs/jsonparamunit](https://github.com/UnitVectorY-Labs/jsonparamunit), Release v0.0.3, Generated on 2026-03-18. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
