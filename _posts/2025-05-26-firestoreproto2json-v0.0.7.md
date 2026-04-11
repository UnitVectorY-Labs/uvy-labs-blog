---
layout: post
title: "firestoreproto2json v0.0.7: Maintenance and Stability Update"
date: 2025-05-26 09:00:00 -0500
tags: ["firestoreproto2json", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on May 26, 2025, firestoreproto2json v0.0.7 is a maintenance release dedicated to enhancing the stability and security of the library. While this version doesn't introduce new functional features, it ensures the project remains robust by updating critical dependencies and refining the build infrastructure.

## What's new

This release focuses on the "under the hood" health of the project:

- **Dependency Updates:** We've updated several key libraries, including a bump of `gson` to version 2.13.1 and `lombok` to 1.18.38, ensuring better performance and compatibility.
- **Infrastructure Refinement:** Our CI/CD pipelines have been reorganized for better clarity, with updated GitHub Actions workflows that explicitly target Java 17.
- **Enhanced Code Quality:** We've integrated `zizmor` for advanced static analysis, allowing us to catch potential issues earlier in the development cycle.
- **Build Tooling:** Various Maven plugins have been updated to their latest stable versions to streamline the publishing process.

## Why it matters

For developers using `firestoreproto2json` to simplify Firestore Protocol Buffer conversions in their Java Cloud Functions, maintenance releases like v0.0.7 are essential. By keeping dependencies current, we reduce security vulnerabilities and ensure that the library continues to operate reliably as the broader Java ecosystem evolves. The improvements to our build and analysis pipelines mean a higher standard of quality and more predictable releases moving forward.

## Upgrade and Installation

Upgrading to v0.0.7 is straightforward. Simply update the version in your `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2json</artifactId>
    <version>0.0.7</version>
</dependency>
```

There are no breaking changes in this release, so your existing implementation will continue to work seamlessly.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It is based on the release v0.0.7 of the [firestoreproto2json](https://github.com/UnitVectorY-Labs/firestoreproto2json) repository, released on 2025-05-26. Generated on 2026-04-11 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*