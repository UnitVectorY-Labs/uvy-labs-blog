---
layout: post
title: "Introducing firestoreproto2json v0.0.1 - Convert Firestore Protocol Buffers to JSON"
date: 2024-02-29 02:07:30 -0500
tags: [firestoreproto2json, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Announcing firestoreproto2json v0.0.1

Today marks an exciting milestone for Java developers working with Firebase Cloud Functions. We're thrilled to announce the first release of **firestoreproto2json** (v0.0.1), a utility library that bridges a critical gap in the Firestore ecosystem.

Published on February 29, 2024, this initial release provides a clean solution for converting Firestore's internal Protocol Buffer document representations into JSON objects that your applications can easily consume.

## What's New

As the inaugural release of this project, v0.0.1 introduces core functionality built from the ground up:

### Complete Firestore Type Support

The library handles all 11 Firestore data types out of the box:

- **Simple types**: Integers, floating-point numbers, booleans, and strings convert cleanly to JSON
- **Complex structures**: Arrays and nested maps maintain their hierarchy
- **Specialized types**: Timestamps become ISO 8601 strings, GeoPoints become latitude/longitude objects, and binary data gets Base64-encoded
- **Document references**: Stored as full document path strings for easy access

### Pluggable Architecture

One of the standout features is the extensible design. Need to customize how timestamps format or how binary data encodes? The library provides mapper interfaces for:

- Timestamp conversion (`ValueMapperTimestamp`)
- GeoPoint handling (`ValueMapperGeoPoint`)  
- Binary data encoding (`ValueMapperBytes`)

Just implement the interface and plug in your custom logic—the rest of the conversion happens automatically.

### Multiple API Entry Points

Work with the library in the way that suits your needs:

```java
// Get JSON objects for direct manipulation
JsonObject value = FirestoreProto2Json.DEFAULT.valueToJsonObject(documentEventData);

// Get ready-to-use JSON strings
String json = FirestoreProto2Json.DEFAULT.valueToJsonString(documentEventData);

// Convert raw protobuf bytes directly (including Base64 input)
```

## Why It Matters

Here's the problem this solves: When you attach a Cloud Function to Firestore document changes, you receive `DocumentEventData` objects containing binary Protocol Buffer data—not the JSON you might expect. Google doesn't provide built-in conversion because there's no single "correct" way to translate these complex types for every application use case.

firestoreproto2json makes thoughtful decisions about those conversions while giving you the flexibility to override them when needed. The result is a library that works immediately for most use cases but won't force your hand if you need something different.

### Production-Ready Foundation

Despite the pre-1.0 version number, this release ships with:

- **Full test coverage** across all data types and edge cases
- **Published to Maven Central** with proper artifact signing—no custom repositories needed
- **Apache 2.0 license** for unrestricted use in commercial and open-source projects
- **Clear documentation** covering installation, usage patterns, and limitations

### Get Started Today

Adding firestoreproto2json to your project is straightforward. If you're using Maven, just add this dependency:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2json</artifactId>
    <version>0.0.1</version>
</dependency>
```

**Requirements**: Java 17 or higher

The library is now available on Maven Central and ready for integration into your Cloud Functions or any other Firestore event-processing workflows.

### Looking Ahead

This initial release establishes the foundation for future development. While v0.0.1 provides stable core functionality, expect the API to evolve before reaching a 1.0 milestone. The pluggable converter architecture ensures you can adapt to changes without rewriting your integration layer.

We invite you to try firestoreproto2json in your projects and provide feedback as we move toward a stable 1.0 release.

---

## Transparency Note

This release announcement was generated with AI assistance using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For full details about this release, visit the [GitHub repository](https://github.com/UnitVectorY-Labs/firestoreproto2json) or view the [v0.0.1 release page](https://github.com/UnitVectorY-Labs/firestoreproto2json/releases/tag/v0.0.1). This post was published on February 29, 2024 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
