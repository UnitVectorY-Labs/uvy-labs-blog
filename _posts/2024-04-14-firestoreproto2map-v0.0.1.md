---
layout: post
title: "Introducing firestoreproto2map v0.0.1: Converting Firestore Protocol Buffers to Java Maps"
date: 2024-04-14 14:16:36 -0500
tags: ["firestoreproto2map", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Welcome to firestoreproto2map

We're excited to announce the initial release of **firestoreproto2map** (v0.0.1), a new open-source utility library for Java developers working with Google Cloud Firestore and Firebase Cloud Functions. Released on April 14, 2024, this library solves a common pain point: converting Protocol Buffer data received from EventArc into standard Java Maps that can be directly used with Firestore operations.

## What's New

As the first public version of this project, v0.0.1 introduces complete support for converting Firestore documents from their internal Protocol Buffer format into Java Map objects. Key capabilities include:

- **Comprehensive Type Support**: Convert all standard Firestore data types including strings, numbers, booleans, nulls, timestamps, geopoints, binary data (Blob), arrays, and nested maps
- **DocumentReference Handling**: Optional pluggable mapper interface for preserving DocumentReference fields during conversion
- **Simple API**: A single converter class with a straightforward `convert()` method that transforms Protocol Buffer documents into ready-to-use Java Maps
- **Extensive Testing**: 21 parameterized test cases ensure reliable conversion across various data type scenarios, including complex nested structures

## Why It Matters

When Cloud Functions subscribe to Firestore document changes via EventArc, the data arrives in Protocol Buffer format. To re-insert or manipulate this data within Firestore, developers traditionally had to manually unpack these Protobuf messages into Map structures. FirestoreProto2Map eliminates this boilerplate work with a ready-made solution that handles all the type conversions correctly.

The library is particularly valuable for:
- Cloud Functions that need to transform and store Firestore document changes
- Applications that process Firestore event data and need to preserve complex nested structures
- Teams wanting a reliable, tested conversion utility rather than maintaining custom Protocol Buffer parsing code

## Installation

Get started with firestoreproto2map by adding it as a dependency to your project.

**Maven:**
```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2map</artifactId>
    <version>0.0.1</version>
</dependency>
```

**Gradle:**
```gradle
implementation 'com.unitvectory:firestoreproto2map:0.0.1'
```

### Requirements
- Java 17 or higher
- Google Cloud Firestore SDK (provided dependency)

## Quick Start

**Basic usage without DocumentReference handling:**
```java
FirestoreProto2Map converter = new FirestoreProto2Map();
Map<String, Object> data = converter.convert(documentEventData.getValue());
```

**Advanced usage with DocumentReference support:**
```java
FirestoreProto2Map converter = new FirestoreProto2Map(
    (referenceValue, documentPath) -> firestore.document(documentPath)
);
Map<String, Object> data = converter.convert(documentEventData.getValue());
```

## Getting Started

The library is available on Maven Central under the Apache License 2.0, making it free for both commercial and open-source use. Visit the [GitHub repository](https://github.com/UnitVectorY-Labs/firestoreproto2map) to explore the full documentation, source code, and test fixtures.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Reference: https://github.com/UnitVectorY-Labs/firestoreproto2map/releases/tag/v0.0.1, published April 14, 2024. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
