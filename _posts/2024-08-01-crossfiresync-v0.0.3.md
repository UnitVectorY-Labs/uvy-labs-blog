---
layout: post
title: "CrossfireSync v0.0.3: Cloud Run Deployment Support"
date: 2024-08-01 09:58:38 -0500
tags: ["crossfiresync", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're pleased to announce the release of CrossfireSync v0.0.3, published on August 1, 2024. This update brings a significant deployment enhancement that gives users more flexibility in how they run their Firestore cross-region synchronization.

## What's New

The headline feature in v0.0.3 is **Cloud Run deployment support**. While CrossfireSync has long been designed for Cloud Functions, this release introduces architectural changes that now allow you to deploy your synchronization service to Cloud Run as well.

### Key Changes

- **New Deployment Option**: Deploy CrossfireSync to Cloud Run for more control over resources and scaling
- **Backward Compatible**: Existing Cloud Functions deployments continue to work without any modifications
- **Routine Maintenance**: Updated dependencies including Google Cloud libraries BOM, Maven Surefire plugin, and Maven Javadoc plugin

### Under the Hood

The Cloud Run capability was enabled by refactoring the core processing logic in both `FirestoreChangePublisher` and `PubSubChangeConsumer` classes. The processing logic has been extracted into dedicated public methods (`process()`), decoupling it from the CloudEvent-specific handlers. This means your synchronization code can now run directly in environments beyond Cloud Functions.

## Why It Matters

For teams building multi-region Firestore architectures, this release expands your deployment options. Cloud Run provides:

- **Greater control** over resource allocation and scaling parameters
- **Flexible runtime environments** for custom deployment needs  
- **Alternative architecture patterns** beyond serverless functions

If you're already using CrossfireSync with Cloud Functions, no action is required—your existing setup remains fully supported. But if you've been considering Cloud Run for your sync infrastructure, v0.0.3 makes that possible.

## Getting Started

### Upgrading

If you're using CrossfireSync as a Maven dependency, update your `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>crossfiresync</artifactId>
    <version>0.0.3</version>
</dependency>
```

### Requirements

- Java 17 or higher
- GCP project with Firestore and Pub/Sub enabled

### Documentation

For deployment examples, see the related repositories:
- [crossfiresync-firestore](https://github.com/UnitVectorY-Labs/crossfiresync-firestore) - Example deployment for Firestore trigger
- [crossfiresync-pubsub](https://github.com/UnitVectorY-Labs/crossfiresync-pubsub) - Example deployment for Pub/Sub trigger

---

*Transparency note: This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Research conducted on the [UnitVectorY-Labs/crossfiresync](https://github.com/UnitVectorY-Labs/crossfiresync) repository, release v0.0.3 (August 1, 2024). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
