---
layout: post
title: "simplegoogleidtoken v0.0.2: Now on Maven Central"
date: 2024-06-03 09:00:00 -0500
tags: ["simplegoogleidtoken", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on June 3, 2024, v0.0.2 of `simplegoogleidtoken` is a minor but impactful update. This release focuses on making the library more accessible to the Java community and refining the developer experience.

## What's new

- **Maven Central Availability**: The library is now officially published to Maven Central, allowing you to add it as a standard dependency in your Java projects without needing custom repositories.
- **Refined API**: The `SimpleResponse` builder has been updated to follow a more consistent naming convention, improving clarity for those interacting with the response objects.
- **Enhanced Stability**: We have significantly increased internal test coverage and integrated Codecov into our CI pipeline, ensuring that the library remains reliable as it grows.

## Why it matters

The move to Maven Central removes significant friction for new adopters and integrates `simplegoogleidtoken` seamlessly into standard build pipelines. While this release introduces a small breaking change to the `SimpleResponse` builder, the increased stability and ease of distribution provide substantial value to the community.

## Upgrade and Installation

Upgrading to v0.0.2 is straightforward. If you manually instantiate `SimpleResponse` objects—typically only necessary in unit tests—please update your builder method calls to use the `with` prefix (for example, change `idToken()` to `withIdToken()`). 

You can now find the latest version of the library directly on Maven Central.

---

*This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL` on April 13, 2026. Referenced repository: [UnitVectorY-Labs/simplegoogleidtoken](https://github.com/UnitVectorY-Labs/simplegoogleidtoken), release [v0.0.2](https://github.com/UnitVectorY-Labs/simplegoogleidtoken/releases/tag/v0.0.2). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
