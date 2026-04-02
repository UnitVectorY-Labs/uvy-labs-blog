---
layout: post
title: JSONassertify v0.0.5 Released
date: 2025-10-21 20:51:10 -0400
tags: ["jsonassertify", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introduction

We're pleased to announce the availability of JSONassertify v0.0.5, released on October 21, 2025. This maintenance release continues our commitment to keeping the JSONassertify library well-maintained with up-to-date build infrastructure and dependencies.

JSONassertify simplifies JSON unit testing in Java applications by providing intuitive assertion syntax for comparing JSON structures. Whether you're testing REST API responses or validating configuration files, JSONassertify helps you write cleaner, more maintainable tests.

## What's New

v0.0.5 is a maintenance-focused release that bundles automated dependency updates to keep your build infrastructure current. While there are no new features or API changes in this release, it ensures your development environment stays secure and compatible with the latest tooling.

### Build Infrastructure Updates

This release includes updates to several Maven plugins and GitHub Actions:

- **Maven Plugins**: Updated compiler, surefire, javadoc, GPG, and central publishing plugins to their latest versions
- **JUnit Jupiter API**: Bumped from 5.12.2 to 5.13.4 for improved test framework support
- **GitHub Actions**: Upgraded to actions/checkout v5, actions/setup-java v5, and CodeQL v4 for enhanced CI/CD reliability

All changes were processed through our automated Dependabot workflow, ensuring thorough testing before release.

## Why It Matters

Keeping your dependencies current is essential for maintaining a secure and efficient development workflow. While these updates primarily affect the build process rather than runtime behavior, they provide several benefits:

- **Security**: Latest versions include patches for known vulnerabilities in build tools
- **Compatibility**: Ensures compatibility with the latest Java versions and Maven features  
- **Reliability**: Updated GitHub Actions provide improved CI/CD pipeline performance
- **Support**: Active maintenance of dependencies ensures continued bug fixes and improvements

For users of JSONassertify, v0.0.5 is a straightforward upgrade with no breaking changes. The library's API and behavior remain identical to v0.0.4.

## Upgrade Instructions

Upgrading to v0.0.5 is simple. Update your dependency configuration:

**Maven:**
```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonassertify</artifactId>
    <version>0.0.5</version>
    <scope>test</scope>
</dependency>
```

**Gradle:**
```groovy
testImplementation 'com.unitvectory:jsonassertify:0.0.5'
```

No code changes are required. The release is fully backward compatible with v0.0.4 and earlier versions.

## Get Started

If you're new to JSONassertify, check out our [README](https://github.com/UnitVectorY-Labs/JSONassertify) for quick start guides and examples. The library provides powerful JSON comparison capabilities with minimal boilerplate code.

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For more information, see the [JSONassertify v0.0.5 release](https://github.com/UnitVectorY-Labs/JSONassertify/releases/tag/v0.0.5) on GitHub. Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
