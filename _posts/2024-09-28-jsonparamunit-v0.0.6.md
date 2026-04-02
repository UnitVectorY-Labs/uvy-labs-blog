---
layout: post
title: "jsonparamunit v0.0.6: Dependency Maintenance Release"
date: 2024-09-28 00:00:00 -0500
tags: ["jsonparamunit", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

jsonparamunit v0.0.6 was released on September 28, 2024. This release focuses on keeping your testing framework current with updated dependencies and improved build reliability.

## What's New

This maintenance release brings several important dependency updates that enhance jsonparamunit's compatibility and performance:

### Updated Test Framework Dependencies
- **JUnit Jupiter Params** upgraded from 5.10.2 to 5.11.1, bringing the latest parameterized testing capabilities
- **Mockito** updated from 5.12.0 to 5.14.0 for improved mocking features
- **Jackson Databind** bumped from 2.17.1 to 2.18.0 with bug fixes and improvements

### Build Process Improvements
The Maven compiler plugin now includes explicit Lombok annotation processor configuration, ensuring more reliable builds across different development environments.

### Supply Chain Security
Release artifacts now include provenance attestations generated through GitHub's attestation framework, giving you cryptographic verification of artifact origins.

### Companion Library Updates
jsonparamunit v0.0.6 is now compatible with fileparamunit v0.0.5, the companion library for iterating through multiple JSON files in directories.

## Why It Matters

While this release doesn't introduce new library features, it maintains jsonparamunit's health and longevity by:

- **Keeping pace with JUnit 5**: The jump to JUnit Jupiter Params 5.11.x ensures continued compatibility with the broader JUnit ecosystem and access to latest parameterized testing features
- **Security updates**: Upstream dependency updates include important security patches from Jackson and other libraries
- **Build reliability**: Explicit annotation processor configuration reduces build inconsistencies across CI/CD pipelines and local environments
- **Supply chain trust**: Artifact provenance attestations allow you to verify that the artifacts you download are genuinely from the jsonparamunit project

## Upgrading to v0.0.6

Upgrading is straightforward—no migration steps are required:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonparamunit</artifactId>
    <version>0.0.6</version>
    <scope>test</scope>
</dependency>
```

If you use fileparamunit alongside jsonparamunit, consider updating to v0.0.5 as well:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>fileparamunit</artifactId>
    <version>0.0.5</version>
    <scope>test</scope>
</dependency>
```

After updating, run `mvn clean test` to verify your existing tests pass. The core API remains unchanged, so no code modifications should be necessary.

---

**Transparency Note**: This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For full details about this release, visit the [GitHub repository](https://github.com/UnitVectorY-Labs/jsonparamunit) and see the [v0.0.6 release](https://github.com/UnitVectorY-Labs/jsonparamunit/releases/tag/v0.0.6). Generated on 2025-01-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
