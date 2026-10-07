---
layout: post
title: "crossfiresync v0.0.9 Released"
date: 2026-10-07 02:26:09 +0000
tags: ["crossfiresync", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On October 7, 2026, UnitVectorY-Labs published crossfiresync v0.0.9. This is a maintenance release for the Java library that enables real-time Firestore synchronization across regions using Pub/Sub. The version is focused on keeping dependencies fresh and strengthening CI security rather than changing functionality.

## What's new

v0.0.9 contains no changes to source code under `src/`. The public API and replication behavior for `FirestoreChangePublisher` and `PubSubChangeConsumer` remain identical to v0.0.8.

The release updates project metadata and transitive dependencies:
- Project version bumped to 0.0.9 in `pom.xml`
- Google Cloud libraries BOM updated to 26.88.1
- `functions-framework-api` 2.0.2, `firestoreproto2map` 0.0.7, and internal test utilities updated
- Lombok, Maven plugins, and test dependencies refreshed

Repository automation was also improved with pinned GitHub Actions, CodeQL 4.38.x, a new Semgrep static analysis workflow, and a ChromaDB repository indexer. These changes affect the build and security posture of the project but do not alter runtime behavior for users.

## Why it matters

For users, v0.0.9 is a low-risk, drop-in update. Keeping the Google Cloud libraries and functions framework current reduces exposure to known issues and ensures compatibility with the wider GCP ecosystem. The CI hardening and dependency refresh provide a more secure and maintainable foundation without requiring any code changes in your application.

Because no source changes were made, existing deployments using v0.0.8 continue to work unchanged. The release is binary compatible and can be adopted with confidence.

## Upgrading

Update your Maven dependency to 0.0.9:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>crossfiresync</artifactId>
    <version>0.0.9</version>
</dependency>
```

The library remains Java 17, published to Maven Central. No configuration changes are required.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/crossfiresync v0.0.9 released 2026-10-07, generated 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
