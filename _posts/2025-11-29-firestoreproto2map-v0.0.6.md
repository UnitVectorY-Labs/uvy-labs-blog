---
layout: post
title: "Keeping Things Current: firestoreproto2map v0.0.6"
date: 2025-11-29 09:00:00 -0500
tags: ["firestoreproto2map", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On November 29, 2025, we released firestoreproto2map v0.0.6. This is a focused maintenance update designed to keep the library aligned with the latest cloud standards and ensure long-term stability for developers working with Firestore Protocol Buffers in Java.

## What's new

This release is primarily about "dependency hygiene." We've updated the core Google Cloud SDKs, including `google-cloud-firestore` and `google-cloudevent-types`, to their latest compatible versions. Additionally, we've modernized our build pipeline and CI/CD infrastructure to ensure the library remains robust and secure.

## Why it matters

While there are no changes to the API, keeping dependencies current is critical for cloud-native libraries. By bumping the Google Cloud SDKs, we ensure that `firestoreproto2map` remains compatible with the evolving Firestore ecosystem, benefiting from the latest performance improvements and security patches provided by Google.

## Upgrade and Installation

Upgrading is straightforward. Simply update the version number in your `pom.xml` or build configuration to `0.0.6`. This release introduces no breaking changes and continues to support Java 17.

***

This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL.
Repository: UnitVectorY-Labs/firestoreproto2map
Release: v0.0.6
Date of generation: 2026-04-11
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)