---
layout: post
title: "Introducing CrossFireSync: Real-Time Firestore Replication Across GCP Regions"
date: 2024-04-16 01:06:36 -0500
tags: ["crossfiresync", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introducing CrossFireSync

On April 16, 2024, UnitVectorY Labs launched **CrossFireSync**, a new open-source Java library that enables real-time synchronization of Google Cloud Firestore databases across different geographic regions. This capability fills a critical gap for organizations running globally distributed applications that need low-latency access to data while maintaining regional compliance requirements.

Firestore doesn't natively support cross-region database replication. CrossFireSync solves this problem by leveraging Google Cloud Pub/Sub to bridge the gap between regional Firestore instances, giving developers fine-grained control over their multi-region data architecture.

## What's New

CrossFireSync v0.0.1 introduces two operational modes to suit different application needs:

### Single Region Primary Mode
Ideal for applications where all writes naturally flow through a central region. In this mode:
- All write operations target a single primary region
- Changes automatically replicate to other configured regions
- Documents remain clean with no additional attributes

This approach provides the simplest data model while still delivering read latency benefits from regional replicas.

### Multi Region Primary Mode
For applications that need write availability from any geographic location:
- Writes can be directed to any region
- Each region deploys both publisher and consumer functions
- Enables true distributed write capabilities

This mode adds replication tracking attributes (`crossfiresync:timestamp`, `crossfiresync:sourcedatabase`, `crossfiresync:delete`) to documents, giving you flexibility at the cost of a slightly more complex schema.

### Production-Ready Foundation

The initial release includes:
- Two Cloud Functions working together for bidirectional replication
- Comprehensive test coverage ensuring reliable operation
- Maven Central distribution for easy integration (`com.unitvectory:crossfiresync:0.0.1`)
- Apache 2.0 licensing for commercial and personal use

## Why It Matters

### Solving a Real GCP Gap

Google Cloud Firestore doesn't provide built-in cross-region replication. Teams needing this capability previously had to build custom solutions from scratch. CrossFireSync delivers a battle-tested implementation that handles the complexity of Pub/Sub messaging, document change detection, and conflict resolution.

### Flexible Deployment Strategies

Not every application has the same requirements. CrossFireSync's dual-mode approach lets teams choose their consistency model:

- **Latency-focused apps** can use single-region primary to serve reads from nearby regions while keeping writes centralized
- **Globally distributed apps** can use multi-region primary to accept writes from any location, improving availability for users worldwide

### Built for Java Developers

As a native Java library with first-class Cloud Functions support, CrossFireSync integrates seamlessly into existing GCP + Java ecosystems. The clean API and factory pattern design make it straightforward to configure and extend.

## Getting Started

CrossFireSync is available on Maven Central. Add it to your `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>crossfiresync</artifactId>
    <version>0.0.1</version>
</dependency>
```

### Prerequisites

- Java 17 or higher
- GCP project with Firestore and Pub/Sub enabled
- Cloud Functions deployment access

### Deployment Overview

The library ships with two Cloud Functions:
- **FirestoreChangePublisher**: Listens to Firestore changes and publishes to Pub/Sub
- **PubSubChangeConsumer**: Consumes Pub/Sub messages and updates local Firestore

Deploy these functions according to your chosen replication mode, configuring environment variables for `REPLICATION_MODE` and `DATABASE_NAME`.

### Important Considerations

CrossFireSync provides eventual consistency across regions. Due to the nature of distributed systems:
- Conflicting edits in separate regions may result in last-write-wins behavior
- Best practice is to route writes for individual documents to the same region when possible
- No global transactions span multiple regions

Review the [full documentation](https://github.com/UnitVectorY-Labs/crossfiresync) before deploying to production.

---

## Transparency Note

This post was AI-generated using the `unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M` model. It was generated on March 18, 2026, based on the v0.0.1 release of the [crossfiresync](https://github.com/UnitVectorY-Labs/crossfiresync) repository. The author is [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
