---
layout: post
title: "jsonschema4springboot v0.0.2 Released: Maintenance Updates and Infrastructure Improvements"
date: 2024-06-28 09:00:00 -0500
tags: [jsonschema4springboot, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

We're pleased to announce the availability of jsonschema4springboot v0.0.2, released on June 28, 2024. This maintenance release focuses on keeping your dependencies up-to-date while maintaining full backward compatibility with v0.0.1.

## What's New

Version 0.0.2 is a carefully curated maintenance release that brings important dependency updates without changing the library's public API. Here's what you get:

### Updated Dependencies

The release includes critical updates to several key dependencies:

- **json-schema-validator**: Upgraded from 1.4.0 to 1.4.3, bringing bug fixes and improvements to the underlying validation engine
- **Spring Framework**: Spring Web updated from 6.1.5 to 6.1.10, incorporating five minor version updates with cumulative fixes
- **Jakarta Servlet API**: Moved from 6.0.0 to 6.1.0 for continued compatibility with modern servlet containers
- **Lombok**: Updated to 1.18.34 for the latest annotation processing improvements

### Enhanced Documentation

The README has been refreshed with:
- Maven Central availability badge, confirming easy access through standard Maven repositories
- JavaDoc documentation badge for quick access to API reference
- Removal of the "active development" disclaimer as the project matures

### Improved Infrastructure

Behind the scenes, v0.0.2 establishes sustainable maintenance practices:
- Automated Dependabot integration with scheduled checks every Saturday
- Enhanced GitHub Actions workflows with improved code coverage reporting
- Dependency snapshot submission for better security scanning

## Why It Matters

This release demonstrates jsonschema4springboot's commitment to long-term sustainability. By implementing automated dependency management, the project ensures users stay protected with security patches and bug fixes without requiring manual intervention.

For existing users, upgrading is straightforward:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonschema4springboot</artifactId>
    <version>0.0.2</version>
</dependency>
```

No code changes are required—this is a drop-in replacement for v0.0.1. Your existing `@ValidateJsonSchema` annotations and configuration remain unchanged.

The updated Spring Framework dependency (6.1.10) ensures compatibility with the latest Spring Boot 3 applications, while the json-schema-validator updates bring improvements to the core validation engine that powers your JSON schema checks.

## Get Started

jsonschema4springboot is now available on Maven Central. Add the dependency above to your `pom.xml` and register the `ValidateJsonSchemaArgumentResolver` in your Spring configuration to start validating incoming JSON requests against your schema definitions.

For documentation, see the [README](https://github.com/UnitVectorY-Labs/jsonschema4springboot) or browse the [JavaDoc](https://javadoc.io/doc/com.unitvectory/jsonschema4springboot) for API details.

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 18, 2026. Original release: v0.0.2 of [jsonschema4springboot](https://github.com/UnitVectorY-Labs/jsonschema4springboot/releases/tag/v0.0.2) by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
