---
layout: post
title: "FirestoreProto2JSON v0.0.8 Released"
date: 2025-11-29 14:40:13 -0500
tags: ["firestoreproto2json", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

FirestoreProto2JSON version 0.0.8 was released on November 29, 2025. This maintenance release keeps your library dependencies current while maintaining full backward compatibility with previous versions.

## What's New

Version 0.0.8 is a focused maintenance update that brings important dependency and infrastructure improvements without changing any user-facing functionality:

- **Updated Dependencies**: Runtime dependencies including google-cloudevent-types (v0.16.0 → v0.17.1) and gson (v2.13.1 → v2.13.2) have been updated to their latest versions
- **JUnit BOM Integration**: New dependency management section added with JUnit Bill of Materials (v5.13.4) for better version control in consumer projects
- **Build Infrastructure**: All Maven plugins updated to current versions including maven-javadoc-plugin, central-publishing-maven-plugin, and jacoco-maven-plugin
- **CI/CD Security**: GitHub Actions workflows upgraded to latest action versions, including CodeQL v4 for enhanced security scanning

## Why It Matters

This release represents a "zero-risk" upgrade path for all FirestoreProto2JSON users. With no source code changes and full backward compatibility maintained, you can update your dependency version with confidence that your existing code will continue to work exactly as before.

The updated dependencies ensure you benefit from the latest security patches and bug fixes from upstream projects. The addition of JUnit BOM provides better dependency management for projects that include FirestoreProto2JSON in their test suites, helping maintain version consistency across your entire project.

## Upgrading

Upgrading to v0.0.8 is straightforward. Simply update the version number in your `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2json</artifactId>
    <version>0.0.8</version>
</dependency>
```

The library still requires Java 17+. No code changes are necessary—this is a drop-in replacement for v0.0.7.

All release artifacts including the JAR, sources JAR, javadocs JAR, and POM file are available on Maven Central and in the [GitHub v0.0.8 release](https://github.com/UnitVectorY-Labs/firestoreproto2json/releases/tag/v0.0.8).

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Reference: [UnitVectorY-Labs/firestoreproto2json](https://github.com/UnitVectorY-Labs/firestoreproto2json), release v0.0.8, published November 29, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
