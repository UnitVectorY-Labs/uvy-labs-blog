---
layout: post
title: "ConsistGen v0.0.8: Active Maintenance Release"
date: 2025-05-25 19:38:34 -0500
tags: [consistgen, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introduction

On May 25, 2025, we released ConsistGen v0.0.8, a maintenance update that reinforces our commitment to the security and reliability of this testing utility library. While this release contains no changes to the library's public API or functionality, it represents important infrastructure improvements that keep ConsistGen running smoothly and securely for all users.

## What's New

v0.0.8 is a maintenance-focused release with zero changes to the library code itself. If you're upgrading from v0.0.7, your existing code will continue to work exactly as before—no modifications required.

### Infrastructure Improvements

This release updates the build and CI/CD infrastructure with several important enhancements:

- **Security Enhancements**: New zizmor security scanning workflow added for GitHub Actions analysis, plus `persist-credentials: false` settings across all workflows
- **Dependency Updates**: Build tools and test frameworks updated to their latest versions (Lombok 1.18.38, JUnit 5.12.2, Maven plugins updated)
- **Workflow Improvements**: Added 30-minute timeouts to prevent stuck jobs, renamed workflow files for clarity with `-java-17` suffixes
- **Automation**: New auto-add-to-project workflow for better issue and PR tracking

### Release Assets

The following artifacts are available:
- `consistgen-0.0.8.jar` (18 KB)
- `consistgen-0.0.8-sources.jar` (15 KB)
- `consistgen-0.0.8-javadoc.jar` (147 KB)

## Why It Matters

While there are no new features to showcase in v0.0.8, these infrastructure updates matter for several reasons:

**Active Maintenance**: Regular maintenance releases like this one demonstrate that ConsistGen is actively maintained and supported. We're committed to keeping the library secure, up-to-date, and reliable for your testing needs.

**Security First**: By implementing GitHub Actions security scanning and tightening workflow configurations, we're ensuring that every build of ConsistGen meets modern security standards—benefiting users who depend on supply chain security in their own projects.

**Stability You Can Count On**: With zero breaking changes, zero deprecations, and full backwards compatibility from v0.0.7, this is a safe upgrade you can apply at your convenience.

## Upgrade Instructions

Upgrading to v0.0.8 is straightforward. Simply update your Maven dependency:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>consistgen</artifactId>
    <version>0.0.8</version>
</dependency>
```

Or use the latest version available on [Maven Central](https://central.sonatype.com/artifact/com.unitvectory/consistgen). No code changes or migrations are necessary.

## Looking Forward

ConsistGen continues to be a simple, effective solution for generating predictable timestamps, random strings, and UUIDs in your test cases. We appreciate the community's trust in this library and remain committed to providing a stable testing utility with predictable behavior.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Release details sourced from [UnitVectorY-Labs/consistgen v0.0.8](https://github.com/UnitVectorY-Labs/consistgen/releases/tag/v0.0.8), published May 25, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
