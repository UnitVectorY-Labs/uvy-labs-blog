---
layout: post
title: Introducing simplegoogleidtoken v0.0.1
date: 2024-06-03 02:03:51 -0500
tags: ["simplegoogleidtoken", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Announcing simplegoogleidtoken v0.0.1

We're excited to announce the initial release of **simplegoogleidtoken**, a lightweight Java library that simplifies obtaining Google ID tokens from service account credentials. This marks the first public version of the library, now available for Java developers working with Google Cloud authentication.

Released on June 3, 2024, simplegoogleidtoken provides a clean, intuitive API for one of the more cumbersome aspects of Google Cloud integration: exchanging service account credentials for ID tokens that can be used to authenticate with other services.

---

## What's New

As the inaugural release, v0.0.1 introduces the complete initial feature set:

**Flexible Credential Configuration**  
The library supports three deployment scenarios out of the box:
- **GCP environments:** Automatically uses the metadata service—no credentials file required
- **Local development:** Load credentials from a JSON file path
- **Advanced use cases:** Provide credentials directly as a JSON string

**Clean Builder API**  
A fluent, builder-pattern interface makes constructing requests straightforward and readable. The API is designed with separation of concerns in mind, keeping configuration distinct from token generation logic.

**Production-Ready Foundation**  
The release includes:
- Complete type-safe request and response objects
- Proper exception handling for signing and exchange failures
- Full CI/CD pipeline with automated builds, security scanning, and release automation
- Apache 2.0 licensing for permissive use in commercial projects

---

## Why It Matters

Google ID token generation from service accounts typically requires juggling multiple Google Auth library components, managing JWT signing manually, and handling HTTP requests to Google's token endpoints. simplegoogleidtoken abstracts all of this complexity behind a single, easy-to-use interface.

For developers building applications that need to authenticate with Google services—or any service that accepts Google ID tokens—this library eliminates boilerplate code and reduces the chance of authentication errors. The ability to work seamlessly across both GCP and non-GCP environments means you can write once and deploy anywhere without credential-management headaches.

---

## Getting Started

**System Requirements:**  
- Java 17 or higher

**Dependencies:**  
Add simplegoogleidtoken to your Maven `pom.xml`:
```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>simplegoogleidtoken</artifactId>
    <version>0.0.1</version>
</dependency>
```

You'll also need the Google Auth library as a companion dependency:
```xml
<dependency>
    <groupId>com.google.auth</groupId>
    <artifactId>google-auth-library-oauth2-http</artifactId>
    <version>1.23.0</version>
</dependency>
```

**Basic Usage (GCP Environment):**
```java
SimpleGoogleIdToken simpleGoogleIdToken = SimpleGoogleIdToken.builder().build();
String idToken = simpleGoogleIdToken
    .getIdToken(SimpleRequest.builder().withTargetAudience("https://example.com").build())
    .getIdToken();
```

**Basic Usage (Local Development):**
```java
SimpleGoogleIdToken simpleGoogleIdToken = SimpleGoogleIdToken.builder()
    .withServiceAccountConfig(
        ServiceAccountFileConfig.builder()
            .withFilePath("/path/to/service-account.json")
            .build())
    .build();
```

For complete documentation and additional examples, see the [README](https://github.com/UnitVectorY-Labs/simplegoogleidtoken) on GitHub.

---

## A Note on AI Generation

This release announcement was generated with assistance from AI (model: unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M). The information presented is based on the actual code and documentation from the v0.0.1 release of [simplegoogleidtoken](https://github.com/UnitVectorY-Labs/simplegoogleidtoken), published June 3, 2024. For any discrepancies or questions, please refer to the official repository or file an issue.

Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
