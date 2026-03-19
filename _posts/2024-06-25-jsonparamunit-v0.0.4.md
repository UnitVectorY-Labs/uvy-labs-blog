---
layout: post
title: "jsonparamunit v0.0.4 Released: Security Updates and Build Improvements"
date: 2024-06-25 09:00:00 -0500
tags: [jsonparamunit, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introducing jsonparamunit v0.0.4

On June 25, 2024, we released version 0.0.4 of jsonparamunit, a maintenance release focused on security updates and build infrastructure improvements. While this release doesn't introduce new features, it ensures your testing setup stays secure and up-to-date with the latest dependency patches.

## What's New

### Security Update: Jackson Databind
The most important change in v0.0.4 is the upgrade of jackson-databind from version 2.17.0 to 2.17.1. This patch update includes critical security fixes from FasterXML that help protect your test suite and dependencies.

### Dependency Updates
This release also includes routine updates to several test and build dependencies:

- **mockito-core**: Updated to 5.12.0 for improved test mocking capabilities
- **fileparamunit**: Companion library updated to v0.0.4 for seamless integration
- Build plugins including maven-gpg-plugin, maven-compiler-plugin, and jacoco-maven-plugin all received minor version upgrades

### Build Infrastructure Improvements
Behind the scenes, we've enhanced our CI/CD pipeline with:

- Improved Codecov integration for better test coverage reporting
- Automated dependency snapshot submissions for supply chain visibility
- Updated Dependabot configuration for more predictable maintenance schedules

## Why It Matters

This release follows jsonparamunit's commitment to maintaining a secure and reliable testing library. By keeping dependencies current, we ensure that:

1. **Security remains paramount** - The jackson-databind patch addresses known vulnerabilities, protecting projects that use jsonparamunit in their test suites
2. **Build reliability stays high** - Updated build plugins reduce the risk of CI/CD failures and compatibility issues
3. **Integration works smoothly** - The fileparamunit companion library sync ensures seamless data-driven testing across both libraries

For users upgrading from v0.0.3, this is a straightforward, backward-compatible update with no code changes required on your end.

## Upgrade Instructions

Upgrading to v0.0.4 is simple. Update your Maven dependency to:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonparamunit</artifactId>
    <version>0.0.4</version>
    <scope>test</scope>
</dependency>
```

If you're using jsonparamunit alongside fileparamunit, consider updating that library to v0.0.4 as well for the best compatibility.

No changes to your test code are necessary—this upgrade is purely about keeping your dependencies secure and current.

---

## Transparency Note

This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For more details, see the [jsonparamunit v0.0.4 release](https://github.com/UnitVectorY-Labs/jsonparamunit/releases/tag/v0.0.4) on GitHub. Published on June 25, 2024 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
