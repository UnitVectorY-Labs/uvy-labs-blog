---
layout: post
title: "FileParamUnit v0.0.6 Release"
date: 2025-05-25 19:14:00 -0500
tags: [fileparamunit, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introduction

On May 25, 2025, we released v0.0.6 of FileParamUnit, a Java library that extends JUnit 5's parameterized testing capabilities with file-based test data sources. This maintenance release focuses on keeping the project's dependencies current and strengthening our CI/CD infrastructure, ensuring the library remains secure and reliable for the Java testing community.

## What's New

### Dependency Updates

This release brings several important dependency updates that keep your testing stack current:

- **JUnit Jupiter Params**: Updated to 5.12.2
- **Mockito**: Updated to 5.18.0 for improved mocking capabilities
- **Maven Surefire Plugin**: Updated to 3.5.3 for reliable test execution
- **Maven Compiler Plugin**: Updated to 3.14.0
- **Maven Central Publishing**: Updated to 0.7.0

These updates ensure compatibility with the latest Java ecosystem components while maintaining full backward compatibility.

### CI/CD Improvements

We've enhanced our build infrastructure with new workflows:

- **Automated Maven Central Publishing**: Artifacts are now automatically published to Maven Central upon release, including build provenance attestations
- **Security Scanning**: New zizmor workflow for GitHub Actions security analysis
- **Project Board Automation**: Issues and pull requests are now automatically added to our project management board

### Build Asset Enhancements

Each release now includes comprehensive artifacts:
- Main library JAR (fileparamunit-0.0.6.jar)
- Source code JAR (fileparamunit-0.0.6-sources.jar)
- API documentation JAR (fileparamunit-0.0.6-javadoc.jar)
- Maven POM file for dependency management

## Why It Matters

This release demonstrates our commitment to maintaining a secure and reliable testing library. By keeping dependencies current, we ensure:

- **Security**: Latest security patches applied across the dependency chain
- **Reliability**: Updated CI/CD workflows reduce build failures and improve consistency
- **Transparency**: Build provenance attestations verify artifact origins
- **Accessibility**: Automated Maven Central publishing makes integration smoother for new users

For library users, this release maintains complete backward compatibility. If you're upgrading from v0.0.5, there are no changes to the public API—your existing tests will continue to work without modification.

## Getting Started

If you're new to FileParamUnit, add the dependency to your Maven project:

```xml
<dependency>
    <groupId>your-group-id</groupId>
    <artifactId>fileparamunit</artifactId>
    <version>0.0.6</version>
    <scope>test</scope>
</dependency>
```

The library requires Java 17+ and depends on `junit-jupiter-params`. Once configured, use the `@ListFileSource` annotation to specify file-based test parameters:

```java
@ParameterizedTest
@ListFileSource(path = "src/test/resources/testdata", recursive = true)
void testWithFileData(File testData) {
    // Your test logic here
}
```

---

**Transparency Note**: This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The content is based on the official release information from [UnitVectorY-Labs/fileparamunit](https://github.com/UnitVectorY-Labs/fileparamunit) v0.0.6, published on May 25, 2025. Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
