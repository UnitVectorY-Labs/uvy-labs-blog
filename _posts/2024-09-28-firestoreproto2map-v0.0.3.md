---
layout: post
title: "firestoreproto2map v0.0.3 Released"
date: 2024-09-28 00:00:00 -0500
tags: ["firestoreproto2map", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

# What's in firestoreproto2map v0.0.3

On September 28, 2024, we released version 0.0.3 of firestoreproto2map – a maintenance update that keeps your Firebase Cloud Functions integrations running smoothly with the latest Google Cloud Firestore SDK improvements.

## What's New

Version 0.0.3 is a focused dependency update release. The library's core functionality remains unchanged, but you now benefit from an updated Google Cloud Firestore SDK (from 3.21.6 to 3.26.4), which spans several minor versions of upstream improvements.

**Key updates include:**
- **google-cloud-firestore**: Updated to version 3.26.4
- **google-cloudevent-types**: Updated to version 0.16.0
- **JUnit Jupiter**: Updated to version 5.11.1 for enhanced testing capabilities
- Various build and plugin improvements

## Why It Matters

For developers using firestoreproto2map in their Firebase Cloud Functions, this release ensures you're automatically receiving bug fixes, security patches, and performance improvements from the Google Cloud Firestore SDK without any additional configuration required.

The `provided` scope of the Firestore SDK dependency means your application will seamlessly benefit from these upstream updates while maintaining full compatibility with your existing code. No API changes, no breaking modifications – just a smoother, more secure foundation for your Firestore document processing.

## Upgrade Instructions

Updating to v0.0.3 is straightforward. Simply change the version number in your `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2map</artifactId>
    <version>0.0.3</version>
</dependency>
```

That's it – no code changes required. Your existing integrations will continue to work exactly as before, now with the benefits of the updated Firestore SDK underneath.

For new users, firestoreproto2map remains available on the Maven Central Repository and requires Java 17 or higher.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Release details based on the official [firestoreproto2map v0.0.3 release](https://github.com/UnitVectorY-Labs/firestoreproto2map/releases/tag/v0.0.3) published on September 28, 2024. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
