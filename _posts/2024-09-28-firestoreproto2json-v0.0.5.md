---
layout: post
title: "firestoreproto2json v0.0.5 Released"
date: 2024-09-28 09:00:00 -0500
tags: ["firestoreproto2json", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Maintaining Excellence: firestoreproto2json v0.0.5 Now Available

Released on September 28, 2024, the v0.0.5 update to firestoreproto2json continues our commitment to keeping this library modern, secure, and reliable. While this release focuses on maintenance and infrastructure improvements rather than new features, it represents an important step in ensuring the long-term health of the project.

## What's New

The v0.0.5 release brings targeted dependency updates that benefit all users:

- **Updated CloudEvent Types**: The `google-cloudevent-types` production dependency has been upgraded from 0.15.0 to 0.16.0, ensuring compatibility with the latest Google Cloud Event specifications
- **Enhanced Build Reliability**: Added explicit Lombok annotation processor configuration for more consistent builds when using this library in conjunction with Lombok-based projects
- **Improved Supply Chain Security**: The release now includes security provenance attestations, providing verification of the artifact's origin and build process

The update also includes upgrades to testing infrastructure (JUnit 5.11.1) and Maven plugins, ensuring the project maintains high standards for code quality and documentation generation.

## Why It Matters

For developers working with Firestore documents in Cloud Functions or event-driven architectures, this release reinforces the stability you can rely on. The firestoreproto2json library handles the critical task of converting Protocol Buffer-encoded Firestore documents into usable JSON format—something your applications depend on daily.

By keeping dependencies current, we reduce potential security vulnerabilities and ensure compatibility with the evolving Google Cloud ecosystem. The addition of provenance attestations adds a layer of trust, allowing teams with strict supply chain security requirements to verify artifact authenticity.

This maintenance-focused approach reflects our philosophy: reliable libraries deserve continuous care, even between major feature releases. Users can upgrade with confidence—v0.0.5 is fully backward compatible with v0.0.4, requiring no code changes.

## Getting Started

The library requires Java 17+ and is available on Maven Central. To use v0.0.5 in your Maven project:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2json</artifactId>
    <version>0.0.5</version>
</dependency>
```

For full documentation and usage examples, visit the [repository](https://github.com/UnitVectorY-Labs/firestoreproto2json).

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 18, 2026. Reference: [UnitVectorY-Labs/firestoreproto2json](https://github.com/UnitVectorY-Labs/firestoreproto2json) release v0.0.5 (September 28, 2024). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*

</content>
<parameter=filePath>
/out/article.md