---
layout: post
title: "fileparamunit v0.0.5 Release: Dependency Updates and Security Enhancements"
date: 2024-09-28 10:48:36 -0500
tags: ["fileparamunit", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introduction

On September 28, 2024, we released version 0.0.5 of fileparamunit, a Java library that extends JUnit 5 parameterized tests with file-based test data support. This release focuses on keeping dependencies current and strengthening the project's supply chain security posture.

While v0.0.5 does not introduce new features or bug fixes to the library itself, it represents an important maintenance milestone that ensures compatibility with the latest JUnit 5.11.x ecosystem and adds build provenance attestations for enhanced artifact verification.

## What's New

### Dependency Updates

The core update in v0.0.5 is a comprehensive refresh of project dependencies:

- **junit-jupiter-params:** Updated from 5.10.2 to 5.11.1
- **maven-surefire-plugin:** Updated from 3.3.0 to 3.5.0
- **maven-javadoc-plugin:** Updated from 3.7.0 to 3.10.0
- **mockito-core:** Updated from 5.12.0 to 5.14.0
- **maven-gpg-plugin:** Updated from 3.2.4 to 3.2.7
- **central-publishing-maven-plugin:** Updated from 0.5.0 to 0.6.0

The jump to JUnit 5.11.x is the most notable change, ensuring fileparamunit remains compatible with the latest parameterized test infrastructure from the JUnit team.

### Supply Chain Security Enhancements

Version 0.0.5 introduces build provenance attestations to the release workflow. This addition generates cryptographically verifiable attestations for published artifacts, allowing consumers to confirm the origin and build process of the libraries they use in their projects.

## Why It Matters

For users of fileparamunit, v0.0.5 offers a straightforward upgrade path with several benefits:

1. **Compatibility:** The update to JUnit 5.11.1 ensures your tests work with the latest JUnit parameterized testing features and bug fixes.

2. **Security Confidence:** Build provenance attestations provide enterprise users and security-conscious teams with additional verification that artifacts come from legitimate build processes.

3. **Active Maintenance:** Regular dependency updates demonstrate the project's commitment to staying current with the Java testing ecosystem.

### Upgrade Considerations

Upgrading to v0.0.5 is straightforward for most projects:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>fileparamunit</artifactId>
    <version>0.0.5</version>
    <scope>test</scope>
</dependency>
```

Since no source code changes were made in this release, there are no breaking changes to the library's API. However, if you're upgrading from a version earlier than v0.0.4, be aware that JUnit 5.11 introduced breaking changes to the `AnnotationBasedArgumentsProvider` class which may affect custom test implementations.

We recommend:
- Verifying your project's JUnit version compatibility
- Using the JUnit BOM for dependency management as recommended in our documentation
- Running your existing test suite after upgrade to confirm everything works as expected

## Getting Started

fileparamunit helps you reduce test code duplication by enabling file-based parameterized tests. Add the library to your Maven project and start using the `@ListFileSource` annotation to iterate through directories of test data files.

For detailed usage examples and API documentation, visit our [GitHub repository](https://github.com/UnitVectorY-Labs/fileparamunit).

---

**Transparency Note:** This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The post was generated on behalf of [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller) based on data from the fileparamunit v0.0.5 release dated September 28, 2024.
