---
layout: post
title: "firestoreproto2map v0.0.2 Released"
date: 2024-06-28 02:05:00 -0500
tags: [firestoreproto2map, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

FirestoreProto2Map v0.0.2 is now available, bringing important dependency updates and documentation improvements to this Java helper library for working with Firestore Protocol Buffers in Cloud Functions.

Released on June 28, 2024, this maintenance release builds on the foundation established in v0.0.1 (April 2024) by updating critical dependencies and improving the developer experience without introducing any breaking changes.

## What's New

### Dependency Updates

The most significant change in v0.0.2 is the update of the Google Cloud Firestore SDK from version 3.20.0 to 3.21.6. This spans multiple incremental updates that bring upstream bug fixes and improvements from Google's team, ensuring your application benefits from the latest stability and security patches in the Firestore ecosystem.

Test dependencies have also been updated, including JUnit Jupiter, Mockito, and other testing utilities to their latest compatible versions.

### Documentation Improvements

The README has been enhanced with:

- **Maven Central Repository badge** - Quick access to artifact information
- **Javadoc badge** - Direct links to API documentation
- **Usage examples** - Clear Maven dependency snippets for integration
- **Confidence signal** - Removal of the "under development" warning, indicating the core functionality has reached a stable state suitable for production use

### Build System Refinements

Behind the scenes, CI/CD workflows and build tools have been updated to improve reliability and maintainability for future releases.

## Why It Matters

This release represents a commitment to maintaining a healthy, up-to-date library even when no new features are being added. For users, this means:

**Zero-friction upgrades**: v0.0.2 is a drop-in replacement for v0.0.1. If you're already using firestoreproto2map, upgrading requires only a version number change in your `pom.xml` file. No code modifications, no API changes, no migration headaches.

**Transitive security and bug fixes**: By updating the Google Cloud Firestore SDK dependency, your application indirectly receives all the improvements, performance enhancements, and bug fixes that Google has released between versions 3.20.0 and 3.21.6. Keeping dependencies current is one of the simplest ways to maintain application health.

**Developer experience**: With proper Maven Central badges and Javadoc links now prominently displayed in the README, new users can quickly verify the library's legitimacy and access documentation without digging through code repositories.

## Getting Started or Upgrading

### New Users

Add the dependency to your Maven project:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2map</artifactId>
    <version>0.0.2</version>
</dependency>
```

### Upgrading from v0.0.1

Simply update your version number:

```xml
<!-- Before -->
<version>0.0.1</version>

<!-- After -->
<version>0.0.2</version>
```

No additional configuration or code changes are required. The library maintains 100% API compatibility with v0.0.1.

### Requirements

- Java 17 or higher
- Maven project structure (for dependency management)

---

**About firestoreproto2map**: A Java helper library that converts Firestore Protocol Buffer documents from Cloud Functions events into Java Map objects that can be inserted back into Firestore. It handles the complexity of Protocol Buffer conversion and supports optional custom mapping for DocumentReference fields through the `ValueToDocumentReferenceMapper` interface.

## Transparency Note

This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 18, 2026. The article is based on official GitHub release data from the [UnitVectorY-Labs/firestoreproto2map](https://github.com/UnitVectorY-Labs/firestoreproto2map) repository and its v0.0.2 release published on June 28, 2024.

Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
