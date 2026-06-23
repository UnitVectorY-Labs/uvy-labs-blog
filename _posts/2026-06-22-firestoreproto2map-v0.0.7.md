---
layout: post
title: "Keeping Firestoreproto2map Current: Release v0.0.7"
date: 2026-06-22 09:00:00 -0500
tags: ["firestoreproto2map", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On June 22, 2026, we released version v0.0.7 of firestoreproto2map. This maintenance release is all about stability and compatibility, ensuring that the library continues to work seamlessly with the latest Google Cloud Firestore tools.

## What's new

This release primarily focuses on keeping the project's engine running smoothly under the hood. The most significant change is an update to the `google-cloud-firestore` dependency, moving from version `3.33.4` to `3.43.1`. 

Additionally, we've updated our internal development and testing suite—including JUnit and Mockito—and modernized our CI/CD workflows to improve build reliability and security provenance.

## Why it matters

In the fast-moving world of cloud development, dependency drift can lead to unexpected version conflicts and stability issues. By updating the Firestore SDK compatibility, we ensure that developers can integrate `firestoreproto2map` into their latest Cloud Function environments without friction. 

While there are no new features in this version, the improvements to our build pipeline mean a more robust and secure delivery process for all future updates.

## Getting Started with v0.0.7

Upgrading to the latest version is simple. Just update the version number in your `pom.xml` file:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2map</artifactId>
    <version>0.0.7</version>
</dependency>
```

---

*This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL` on 2026-06-23, based on the release of `v0.0.7` in the [UnitVectorY-Labs/firestoreproto2map](https://github.com/UnitVectorY-Labs/firestoreproto2map) repository. Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
