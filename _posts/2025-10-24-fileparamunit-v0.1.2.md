---
layout: post
title: "fileparamunit v0.1.2 Released: Maintenance Update"
date: 2025-10-24 21:58:15 -0500
tags: ["fileparamunit", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introduction

We're pleased to announce the release of fileparamunit v0.1.2, published on October 24, 2025. This maintenance release focuses on keeping the project's dependencies and build infrastructure current, ensuring continued security and compatibility with the broader Java testing ecosystem.

## What's New

Version 0.1.2 is a maintenance release with no changes to the library's public API or functionality. The core `@ListFileSource` annotation and its parameterized testing capabilities remain exactly as you know them.

The update includes:

- **Updated test dependencies**: JUnit 5 bumped from 5.13.1 to 5.13.4, and Mockito updated from 5.18.0 to 5.20.0
- **Modernized GitHub Actions**: All CI workflows now use the latest major versions of actions (checkout v5, setup-java v5, codeql-action v4)
- **Build tool updates**: Maven plugins for compilation, testing, documentation, and publishing have been updated to their latest patch versions

These behind-the-scenes updates help maintain the project's security posture and ensure compatibility with the evolving Java development toolchain.

## Why It Matters

While this release doesn't introduce new features, it represents an important aspect of responsible open source maintenance:

- **Security**: Keeping dependencies current helps protect against known vulnerabilities in transitive dependencies
- **Compatibility**: Updated GitHub Actions ensure CI/CD pipelines remain reliable and efficient
- **Stability**: Regular maintenance releases mean fewer accumulated changes when functional updates do arrive

For users, this means you can upgrade to v0.1.2 with complete confidence. There are no breaking changes, no API modifications, and no code changes required in your projects.

## Upgrading

Upgrading to v0.1.2 is straightforward. Update your `pom.xml` dependency version:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>fileparamunit</artifactId>
    <version>0.1.2</version>
    <scope>test</scope>
</dependency>
```

That's it—no other changes needed. Your existing `@ListFileSource` annotated tests will continue to work exactly as before.

## Get Started

If you're new to fileparamunit, it's a lightweight Java library that extends JUnit 5's parameterized testing by allowing you to drive test cases from files in your resources directory. Perfect for data-driven testing with JSON, CSV, TXT, or any file format you need.

- **GitHub Repository**: https://github.com/UnitVectorY-Labs/fileparamunit
- **Maven Central**: com.unitvectory:fileparamunit:0.1.2
- **Release Notes**: https://github.com/UnitVectorY-Labs/fileparamunit/releases/tag/v0.1.2

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was generated on behalf of [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller) based on the official v0.1.2 release from October 24, 2025.*
