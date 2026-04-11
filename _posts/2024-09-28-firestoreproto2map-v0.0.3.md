---
layout: post
title: "firestoreproto2map v0.0.3: Keeping Things Current"
date: 2024-09-28 09:00:00 -0500
tags: ["firestoreproto2map", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On September 28, 2024, we released v0.0.3 of firestoreproto2map. This maintenance update focuses on keeping the library aligned with the latest Google Cloud ecosystems and improving our build infrastructure to ensure long-term stability.

## What's new

This release is centered around dependency management and project health:

- **Core SDK Updates**: We have updated the `google-cloud-firestore` SDK to version 3.26.4 and refreshed `google-cloudevent-types` to 0.16.0.
- **Tooling Improvements**: Our testing and build pipeline received several updates, including newer versions of JUnit, Mockito, and essential Maven plugins.
- **Documentation**: We've added a project status badge to the README to provide clearer visibility into the project's active state.

## Why it matters

For developers using `firestoreproto2map` to handle Firestore events in Java, staying current with the Google Cloud SDKs is critical for maintaining compatibility and stability. These updates ensure that the library continues to work seamlessly as the underlying Firestore protocol and cloud event types evolve. By refining our build and test tools, we ensure a more robust delivery process, providing a reliable foundation for your production workloads.

## Upgrading

Upgrading to v0.0.3 is straightforward. Simply update the version in your `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2map</artifactId>
    <version>0.0.3</version>
</dependency>
```

As a reminder, the library requires **Java 17**.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It refers to the [firestoreproto2map](https://github.com/UnitVectorY-Labs/firestoreproto2map) repository, release [v0.0.3](https://github.com/UnitVectorY-Labs/firestoreproto2map/releases/tag/v0.0.3), and was generated on April 11, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*