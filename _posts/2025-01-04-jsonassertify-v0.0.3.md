---
layout: post
title: "JSONassertify v0.0.3 Released: Security Updates and Enhanced Stability"
date: 2025-01-04 08:42:00 -0500
tags: ["jsonassertify", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introducing JSONassertify v0.0.3

We're pleased to announce the release of JSONassertify v0.0.3, published on January 4, 2025. This maintenance release focuses on keeping your JSON testing toolkit secure and up-to-date with the latest improvements from the underlying libraries.

JSONassertify continues to be a modernized fork of the popular JSONassert library, helping developers simplify JSON comparisons in unit tests—especially when testing REST interfaces. With over a decade of value from the original project, JSONassertify brings active maintenance, security updates, and continued support for Java 8+.

## What's New

### Updated Core JSON Library

The headline change in v0.0.3 is the update to the `org.json:json` dependency, moving from version 20240303 to 20241224. This ~9-month update includes upstream security fixes and improvements to the core JSON parsing library that powers JSONassertify's assertion capabilities.

### No Breaking Changes

Importantly, this release introduces **zero API changes**. If you're upgrading from v0.0.2, you can make the switch with confidence—your existing tests will continue to work without modification. The update is purely a behind-the-scenes maintenance improvement.

### Documentation Updates

The project documentation now includes a GitHub release badge for quick version reference, and custom domain support has been added for improved accessibility at [jsonassertify.unitvectorylabs.com](https://jsonassertify.unitvectorylabs.com).

## Why It Matters

### Security First

Keeping dependencies current isn't just about new features—it's about security. The `org.json` library update brings nearly a year of upstream fixes, ensuring your test suite runs on a well-vetted, secure foundation. While these fixes operate beneath the API surface, they contribute to the overall reliability and trustworthiness of your testing infrastructure.

### Stability Through Maintenance

The fact that v0.0.3 requires no code changes from users is a testament to JSONassertify's mature, stable API. The project has reached a point where careful dependency management and security hardening can proceed without disrupting your workflows. This is the mark of a library that's ready for production use.

### Behind-the-Scenes Improvements

While end users won't notice these changes directly, the project has also strengthened its CI/CD infrastructure with:
- Enhanced Maven Central publishing with build provenance attestations
- Added security scanning via zizmor for GitHub Actions
- Supply chain security hardening throughout the build process

These improvements reflect a commitment to best practices that benefits everyone relying on JSONassertify.

## Upgrading to v0.0.3

Upgrading from v0.0.2 is straightforward—just update your dependency version:

**Maven:**
```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonassertify</artifactId>
    <version>0.0.3</version>
    <scope>test</scope>
</dependency>
```

**Gradle:**
```groovy
testImplementation 'com.unitvectory:jsonassertify:0.0.3'
```

That's it—no code changes required.

### First-Time Users

If you're new to JSONassertify, check out the [full documentation](https://jsonassertify.unitvectorylabs.com) to get started. The library provides a clean API for asserting JSON structure and values in your tests, with support for both exact matching and flexible field ordering.

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For more information, see the [JSONassertify v0.0.3 release](https://github.com/UnitVectorY-Labs/JSONassertify/releases/tag/v0.0.3) (published January 4, 2025). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
