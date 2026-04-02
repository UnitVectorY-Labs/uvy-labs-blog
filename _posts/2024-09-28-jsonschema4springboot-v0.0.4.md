---
layout: post
title: "jsonschema4springboot v0.0.4 Released"
date: 2024-09-28 01:50:38 -0500
tags: ["jsonschema4springboot", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're pleased to announce the release of **jsonschema4springboot v0.0.4**, published on September 28, 2024. This maintenance release delivers important updates to the underlying JSON schema validation engine, bringing bug fixes and security improvements to Spring Boot 3 developers who rely on declarative JSON validation in their APIs.

## What's New

Version 0.0.4 focuses on keeping your validation stack current and secure through targeted dependency updates:

### Updated json-schema-validator to v1.5.2

The core validation library has been updated from 1.5.1 to 1.5.2, which includes several important fixes:

- **OpenAPI 3.0 exclusiveMinimum/exclusiveMaximum support**: Validation now correctly handles these constraints, ensuring your API schemas are enforced as specified in OpenAPI 3.0 documents
- **Security hardening**: The transitive jackson-databind dependency has been patched from 2.17.1 to 2.17.2, addressing known vulnerabilities
- **Improved error logging**: PatternValidator now logs more accurately during fail-fast validation scenarios

### Enhanced Supply Chain Security

The release process now includes build provenance attestation, generating verifiable proofs of origin for JAR artifacts published to Maven Central. When you download jsonschema4springboot, you can now verify the artifact's authentic source and build history.

## Why It Matters

For developers using `@ValidateJsonSchema` annotations in their Spring Boot 3 controllers, this release ensures your validation logic works correctly with modern OpenAPI specifications. If you've been using exclusive minimum or maximum constraints in your JSON schemas (common for numeric fields like "age must be greater than 0" or "price must be at least 10"), this update fixes edge cases where these constraints weren't being enforced properly.

The jackson-databind security patch is particularly important for applications handling sensitive data, as it closes potential attack vectors in JSON parsing operations—exactly the kind of operation jsonschema4springboot performs on every validated request.

## Getting Started

Upgrading to v0.0.4 is straightforward with no breaking changes:

**Maven:**
```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonschema4springboot</artifactId>
    <version>0.0.4</version>
</dependency>
```

Simply update your `pom.xml`, run `mvn clean compile`, and you're ready to go. No code changes are required, and full backward compatibility with v0.0.3 is maintained.

**Requirements:** Java 17+ and Spring Boot 3.x remain unchanged.

---

This release continues jsonschema4springboot's commitment to keeping your API validation stack secure and up-to-date while maintaining the simple annotation-based developer experience that makes JSON Schema validation effortless in Spring Boot applications.

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For details about this release, see the [repository](https://github.com/UnitVectorY-Labs/jsonschema4springboot) and the [v0.0.4 release page](https://github.com/UnitVectorY-Labs/jsonschema4springboot/releases/tag/v0.0.4). Generated on March 18, 2026 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
