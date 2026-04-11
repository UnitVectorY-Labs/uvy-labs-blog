---
layout: post
title: "Streamlining Your Firestore Integration: firestoreproto2json v0.0.3"
date: 2024-03-19 09:00:00 -0500
tags: ["firestoreproto2json", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On March 19, 2024, we released v0.0.3 of firestoreproto2json. This maintenance update focuses on improving the developer experience by refining how the library handles its dependencies, ensuring a smoother and more stable integration into your Java projects.

## What's new

The primary focus of v0.0.3 is a strategic cleanup of the project's dependency tree. Specifically, we have removed the explicit dependency on `protobuf-java`. 

## Why it matters

For developers working in modern cloud environments, such as Google Cloud Functions, dependency conflicts—often referred to as "dependency hell"—can be a significant hurdle. Because protobuf libraries are frequently provided by the runtime environment or included transitively via other Google Cloud SDKs, forcing a specific version can lead to version mismatches and unpredictable build errors.

By removing this explicit dependency, `firestoreproto2json` now avoids imposing a specific protobuf version on your project. This allows the library to adapt to the environment it's running in, letting your application or the cloud runtime determine the most compatible version. The result is a more flexible library that integrates seamlessly into your existing pipeline without the risk of version collisions.

## Getting Started

Upgrading to v0.0.3 is straightforward. Simply update the version in your `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2json</artifactId>
    <version>0.0.3</version>
</dependency>
```

We are committed to making the conversion of Firestore Protocol Buffers to JSON as frictionless as possible. This update is a step toward that goal, ensuring that our tool helps you process data without getting in the way of your build process.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Reference: [UnitVectorY-Labs/firestoreproto2json](https://github.com/UnitVectorY-Labs/firestoreproto2json), release [v0.0.3](https://github.com/UnitVectorY-Labs/firestoreproto2json/releases/tag/v0.0.3), generated on 2026-04-11. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*