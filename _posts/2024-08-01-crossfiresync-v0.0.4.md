---
layout: post
title: "crossfiresync v0.0.4: Refining the Foundation for Better Integration"
date: 2024-08-01 09:00:00 -0500
tags: ["crossfiresync", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on August 1, 2024, crossfiresync v0.0.4 is a focused maintenance update designed to streamline the library's internal architecture and improve the developer experience. While primarily a refactoring release, it lays the groundwork for more flexible integrations and cleaner code organization.

## What's new

The headline change in this release is the increased visibility of the `PubSubMessage` class, which is now public. Alongside this, we have reorganized our internal structure by moving `PubSubMessage` and `PubSubPublish` into a dedicated model package: `com.unitvectory.crossfiresync.pubsub.model`.

## Why it matters

By making `PubSubMessage` public, we are empowering developers who need a deeper level of control over their synchronization logic. Whether you are implementing custom Pub/Sub consumers or integrating crossfiresync into a larger, complex system, you now have direct access to the message models required to build robust data pipelines.

The package reorganization ensures that as the library grows, the separation between core logic and data models remains clear, making the codebase easier to navigate and maintain.

## Upgrading to v0.0.4

To upgrade, simply update the `crossfiresync` version to `0.0.4` in your `pom.xml`. 

**Important Note on Breaking Changes:** Because we have moved our model classes to a new package, you will need to update your import statements. If your code references `PubSubMessage` or `PubSubPublish`, please update the imports to:

`com.unitvectory.crossfiresync.pubsub.model`

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Reference: [UnitVectorY-Labs/crossfiresync](https://github.com/UnitVectorY-Labs/crossfiresync), release [v0.0.4](https://github.com/UnitVectorY-Labs/crossfiresync/releases/tag/v0.0.4), generated on 2026-04-10. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*