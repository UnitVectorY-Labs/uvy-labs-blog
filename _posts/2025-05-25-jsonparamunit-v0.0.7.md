---
layout: post
title: "jsonparamunit v0.0.7 Release: Strengthening the Foundation"
date: 2025-05-25 20:04:46 -0500
tags: [jsonparamunit, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

We're pleased to announce the release of jsonparamunit v0.0.7, published on May 25, 2025. This update focuses on strengthening the library's foundation through comprehensive dependency updates and enhanced CI/CD security measures, ensuring jsonparamunit remains a reliable choice for your Java testing needs.

## What's New

While v0.0.7 doesn't introduce new features to the library itself, it delivers important under-the-hood improvements that benefit all users:

### Dependency Updates
- **Jackson Databind** upgraded from 2.18.0 to 2.19.0, bringing bug fixes and performance improvements
- **JUnit Jupiter Params** updated from 5.11.1 to 5.12.2
- **Mockito Core** updated from 5.14.0 to 5.18.0
- Companion libraries **jsonassertify** (v0.0.1 → v0.0.4) and **fileparamunit** (v0.0.5 → v0.0.6) updated
- Various build plugins including Maven Surefire, Compiler, and Javadoc plugins upgraded

### Security & Infrastructure Enhancements
- **Zizmor security scanning** added for automated GitHub Actions security analysis with weekly scheduled scans
- **GitHub Attestation** integration provides tamper-evident build provenance verification
- New consolidated **Maven Central release workflow** with automatic artifact attestation
- Project automation workflows for issue and PR management

## Why It Matters

This maintenance release demonstrates jsonparamunit's commitment to production-ready reliability:

**Security First**: The addition of zizmor security scanning ensures GitHub Actions workflows are continuously audited for potential vulnerabilities, while GitHub Attestation provides cryptographic proof of build integrity—critical features for enterprise users concerned about supply chain security.

**Staying Current**: Keeping dependencies up-to-date is essential for security and compatibility. This release updates all major dependencies to their latest versions, protecting against known vulnerabilities and ensuring smooth integration with modern Java tooling.

**Stable API**: With no breaking changes, v0.0.7 maintains full backward compatibility with v0.0.6. Your existing test suites continue to work without modification while benefiting from the underlying improvements.

## Upgrade Instructions

Upgrading to v0.0.7 is straightforward:

**Maven:**
```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonparamunit</artifactId>
    <version>0.0.7</version>
    <scope>test</scope>
</dependency>
```

**Gradle:**
```groovy
testImplementation 'com.unitvectory:jsonparamunit:0.0.7'
```

The library still requires Java 17 or higher and works seamlessly with your existing JUnit 5 test setups. If your project directly uses Jackson, you may want to review the [Jackson 2.19.0 release notes](https://github.com/FasterXML/jackson/releases) for any relevant changes.

## Get Started

jsonparamunit helps Java developers create data-driven tests using JSON files, separating test logic from test data. Whether you're using `JsonStringParamUnit` for raw JSON strings, `JsonNodeParamUnit` for flexible processing, or `JsonClassParamUnit` for POJO-based testing, v0.0.7 ensures you have a secure, well-maintained foundation for your testing needs.

Explore the full release details at the [GitHub Release page](https://github.com/UnitVectorY-Labs/jsonparamunit/releases/tag/v0.0.7) and check out the comprehensive [Javadoc documentation](https://javadoc.io/doc/com.unitvectory/jsonparamunit/0.0.7).

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Research based on the jsonparamunit v0.0.7 release (May 25, 2025) from [UnitVectorY-Labs/jsonparamunit](https://github.com/UnitVectorY-Labs/jsonparamunit). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
