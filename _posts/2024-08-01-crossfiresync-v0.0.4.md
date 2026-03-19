---
layout: post
title: CrossFireSync v0.0.4 Released - API Accessibility Fix
date: 2024-08-01 10:25:14 -0500
tags: [crossfiresync, qwen3.5-122b-a10b-gguf]
---

CrossFireSync version 0.0.4 was released on August 1, 2024. This release addresses an important API visibility issue that was preventing developers from fully utilizing the cross-region processing capabilities introduced in v0.0.3.

## What's New

The v0.0.4 release makes two key model classes publicly accessible:

- **`PubSubMessage`** - Now a public class for representing Firestore change messages
- **`PubSubPublish`** - Now a public class for constructing publish messages

These classes have also been reorganized into a dedicated `pubsub.model` subpackage for better code organization and discoverability.

## Why It Matters

Version 0.0.3 introduced a new architecture designed to decouple processing logic from CloudEvent-specific code, enabling developers to deploy their synchronization logic on either Cloud Functions or Cloud Run. However, an oversight left the core message classes package-private, effectively blocking external developers from using the intended Cloud Run deployment pattern.

This release corrects that issue. External developers can now:
- Instantiate `PubSubMessage` objects directly in their own code
- Use the cross-region processing patterns with Cloud Run deployments
- Leverage the full flexibility of the v0.0.3 architecture

### Breaking Change Notice

If your code references `PubSubMessage` or `PubSubPublish` classes directly, you'll need to update your import statements:

**Old (v0.0.3):**
```java
import com.unitvectory.crossfiresync.PubSubMessage;
import com.unitvectory.crossfiresync.PubSubPublish;
```

**New (v0.0.4):**
```java
import com.unitvectory.crossfiresync.pubsub.model.PubSubMessage;
import com.unitvectory.crossfiresync.pubsub.model.PubSubPublish;
```

## Upgrade Instructions

To upgrade to v0.0.4, update your Maven dependency:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>crossfiresync</artifactId>
    <version>0.0.4</version>
</dependency>
```

The library still requires Java 17 and maintains full compatibility with all other v0.0.3 functionality beyond the import changes noted above.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Source: [UnitVectorY-Labs/crossfiresync](https://github.com/UnitVectorY-Labs/crossfiresync), release v0.0.4, published August 1, 2024. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
