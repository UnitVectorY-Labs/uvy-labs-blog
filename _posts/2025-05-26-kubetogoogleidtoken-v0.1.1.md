---
layout: post
title: "kubetogoogleidtoken v0.1.1: Security Enhancements and Dependency Updates"
date: 2025-05-26 09:00:00 -0500
tags: [kubetogoogleidtoken, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

Released on May 26, 2025, kubetogoogleidtoken v0.1.1 is a focused maintenance release that strengthens the security posture and reliability of this Java library for obtaining Google ID tokens through Kubernetes Service Accounts with GCP Workload Identity Federation.

While the core API remains unchanged, this update delivers important improvements to the project's security infrastructure, documentation, and build processes—ensuring users can continue to rely on kubetogoogleidtoken for secure, production-ready token acquisition.

## What's New

### Security Enhancements

The most significant addition in v0.1.1 is a new **zizmor security workflow** that automatically scans GitHub Actions configurations for security vulnerabilities. This proactive scanning helps catch supply chain risks before they reach users.

Additionally, the release upgrades build provenance attestations to version 2, strengthening the supply chain security guarantees for all released artifacts. Every JAR file published to Maven Central now includes verified build provenance that can be audited for authenticity.

### Improved Documentation

The README has been significantly enhanced with a comprehensive **Getting Started** section that includes:
- Direct Maven Central dependency configuration
- Clear installation instructions for Java 17+ projects
- Updated version badges showing the latest release status

These improvements make it easier than ever to integrate kubetogoogleidtoken into new projects.

### Dependency Updates

All build and test dependencies have been updated to their latest compatible versions, incorporating upstream bug fixes and security patches:

- **Gson**: Updated to 2.13.1
- **Mockito**: Updated to 5.18.0
- **JUnit Jupiter**: Updated to 5.12.2
- **Lombok**: Updated to 1.18.38
- Maven plugins and CI/CD actions also updated

These updates ensure the project benefits from the latest improvements in the Java ecosystem while maintaining full compatibility with existing code.

## Why It Matters

### Zero Breaking Changes

This release is a **drop-in upgrade** from v0.1.0. The public API—including `KubeToGoogleIdTokenClient`, `KubeToGoogleIdTokenRequest`, and `KubeToGoogleIdTokenResponse`—remains completely unchanged. Users can upgrade immediately without any code modifications.

### Production-Ready Security

For teams running kubetogoogleidtoken in production environments, the new security scanning and provenance attestations provide additional assurance that your dependencies are secure and authentic. The zizmor workflow adds an important layer of protection against supply chain attacks targeting GitHub Actions configurations.

### Reliable Maintenance

This release demonstrates a commitment to responsible open-source maintenance. By keeping dependencies up-to-date and investing in security tooling, the project ensures long-term viability and trustworthiness for its users.

## Getting Started

To use v0.1.1 in your Java project, update your Maven dependency:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>kubetogoogleidtoken</artifactId>
    <version>0.1.1</version>
</dependency>
```

The library requires Java 17 or later and is available on Maven Central. For detailed usage instructions, see the [Getting Started guide](https://github.com/UnitVectorY-Labs/kubetogoogleidtoken#getting-started) in the repository README.

## Upgrade Considerations

Upgrading to v0.1.1 from v0.1.0 requires no migration effort:
- API surface is unchanged
- No configuration changes needed
- Safe to deploy immediately

Known limitations from previous versions remain unchanged:
- Token caching is not implemented (new tokens are requested for each invocation)
- Custom audiences for Workload Identity Federation use the default pattern

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 18, 2026. For more information about this release, see the [GitHub release page](https://github.com/UnitVectorY-Labs/kubetogoogleidtoken/releases/tag/v0.1.1).*

*Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
