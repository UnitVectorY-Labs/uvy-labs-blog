---
layout: post
title: "Maintaining the Foundation: firestoreproto2json v0.0.8"
date: 2025-11-29 09:00:00 -0500
tags: ["firestoreproto2json", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On November 29, 2025, we released v0.0.8 of firestoreproto2json. This maintenance release focuses on enhancing the stability, security, and build reliability of the library, ensuring it continues to provide a seamless experience for developers converting Firestore Protocol Buffer data to JSON.

## What's new

This release primarily delivers under-the-hood improvements to keep the project current with the Java ecosystem:

- **Dependency Updates**: We've updated key production dependencies, including `google-cloudevent-types`, `gson`, and `lombok`, to their latest versions.
- **Build Tooling Modernization**: Several Maven plugins and GitHub Actions workflows have been updated to ensure a more robust and efficient CI/CD pipeline.
- **Test Framework Enhancements**: The integration of the JUnit BOM (`junit-bom`) provides better consistency across our testing suite.

## Why it matters

While v0.0.8 does not introduce new functional features, these updates are essential for the long-term health of the library. By keeping our dependencies up to date, we reduce the risk of security vulnerabilities and ensure compatibility with the evolving Google Cloud environment. The improvements to our build tooling mean that we can iterate faster and provide more reliable releases moving forward.

## Upgrade and Installation

Upgrading to v0.0.8 is straightforward and involves no breaking changes. It is a drop-in replacement for v0.0.7. To upgrade, simply update the version of `firestoreproto2json` in your `pom.xml` to `0.0.8`.

***

This post was AI-generated.
- **Model**: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL
- **Repository**: [UnitVectorY-Labs/firestoreproto2json](https://github.com/UnitVectorY-Labs/firestoreproto2json)
- **Release**: [v0.0.8](https://github.com/UnitVectorY-Labs/firestoreproto2json/releases/tag/v0.0.8)
- **Generated on**: 2026-04-11
- **Author**: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)