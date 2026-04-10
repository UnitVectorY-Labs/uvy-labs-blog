---
layout: post
title: "Announcing crossfiresync: Real-Time Firestore Replication Across GCP Regions"
date: 2024-04-16 09:00:00 -0500
tags: ["crossfiresync", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

We are excited to announce the launch of **crossfiresync**, released on April 16, 2024. This new project brings powerful real-time replication capabilities to Google Cloud Platform (GCP) Firestore, allowing developers to synchronize data across different GCP regions seamlessly.

## What is crossfiresync?

`crossfiresync` is a Java-based library that enables the replication of Firestore document changes—including inserts, updates, and deletes—across multiple regions. By leveraging GCP Pub/Sub as the transport layer, it creates an event-driven pipeline that ensures your data remains consistent regardless of where it is accessed.

The system operates through two key components deployed as Cloud Functions:
- **FirestoreChangePublisher**: Listens for document writes in a source region and publishes those changes to a Pub/Sub topic.
- **PubSubChangeConsumer**: Subscribes to the Pub/Sub topic and applies those changes to the local Firestore instance in the target region.

Depending on your needs, you can choose between two replication strategies:
- **Single Region Primary**: A straightforward setup where all writes occur in one primary region, which then replicates to others.
- **Multi Region Primary**: A more advanced mode allowing writes in any region, providing maximum availability and resilience.

## Why it matters

For applications with a global user base, latency and availability are critical. By replicating Firestore data across regions, `crossfiresync` helps you:
- **Reduce Latency**: Serve data from the region closest to your users.
- **Increase Availability**: Ensure your application remains operational even if a specific GCP region experiences an outage.
- **Simplify Disaster Recovery**: Maintain a real-time copy of your critical data in a secondary region.

## Getting Started

`crossfiresync` is designed for Java 17 and integrates directly with the Google Cloud ecosystem. To get started, you will need a GCP project with both Firestore and Pub/Sub enabled.

You can add `crossfiresync` to your project via Maven:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>crossfiresync</artifactId>
    <version>0.0.1</version>
</dependency>
```

Whether you are building a globally distributed application or simply looking to harden your infrastructure against regional failures, `crossfiresync` provides the foundational tools to keep your Firestore data in sync.

***

**Transparency Note:** This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`. It was generated on April 10, 2026, based on the [crossfiresync](https://github.com/UnitVectorY-Labs/crossfiresync) repository and the [v0.0.1](https://github.com/UnitVectorY-Labs/crossfiresync/releases/tag/v0.0.1) release.
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)