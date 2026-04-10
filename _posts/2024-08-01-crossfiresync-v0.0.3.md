---
layout: post
title: "Expanding Deployment Flexibility with crossfiresync v0.0.3"
date: 2024-08-01 09:00:00 -0500
tags: ["crossfiresync", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

We are excited to announce the release of crossfiresync v0.0.3 on August 1, 2024. This update marks a significant step forward in how the library can be integrated into your Google Cloud Platform architecture, offering greater flexibility in deployment options.

## What's new

The headline change in v0.0.3 is a strategic architectural refactor. We have decoupled the core processing logic from the `CloudEvent` wrapper in both the `FirestoreChangePublisher` and `PubSubChangeConsumer`. By extracting the synchronization logic into dedicated `process()` methods, we've separated the "what" of the synchronization from the "how" of the event trigger.

## Why it matters

Until now, `crossfiresync` was primarily designed for use within GCP Cloud Functions. While powerful, some use cases require the more robust scaling or environment controls found in other services. With this decoupling, you can now easily deploy your synchronization logic in services like Cloud Run. This gives developers more freedom to choose the compute environment that best fits their performance and operational requirements without sacrificing the real-time synchronization capabilities of the library.

## Getting Started

Upgrading to v0.0.3 is straightforward. Simply update the version in your Maven `pom.xml` file:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>crossfiresync</artifactId>
    <version>0.0.3</version>
</dependency>
```

This update is backward compatible and continues to require Java 17.

***

This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`. It is based on the `UnitVectorY-Labs/crossfiresync` repository and the `v0.0.3` release, generated on 2026-04-10. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).