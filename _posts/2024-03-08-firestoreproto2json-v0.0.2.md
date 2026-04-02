---
layout: post
title: "firestoreproto2json v0.0.2 - Usability and Documentation Release"
date: 2024-03-08 02:27:29 -0500
tags: ["firestoreproto2json", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the release of firestoreproto2json v0.0.2, published on March 8, 2024. This release focuses on dramatically improving the developer experience with comprehensive documentation, practical examples, and expanded test coverage—making it easier than ever to convert Firestore Protocol Buffer documents to JSON in your Cloud Functions.

## What's New

### Comprehensive Documentation Overhaul

The most significant change in v0.0.2 is a complete transformation of the project documentation. The README has more than tripled in size, evolving from basic snippets into a full integration guide with copy-paste ready examples.

**Cloud Function Integration Example**: A complete, working Cloud Function example shows exactly how to:
- Set up a Maven project with proper dependencies
- Parse `DocumentEventData` from Firestore triggers
- Convert both new and old document values to JSON
- Output results as either Strings or GSON JsonObject instances

### Customization Patterns Revealed

While the core library behavior remains unchanged, v0.0.2 surfaces powerful customization capabilities that were previously undocumented:

**Custom Timestamp Formatting**: Easily control how timestamps appear in your JSON output:
```java
FirestoreProto2Json converter = FirestoreProto2Json.builder()
    .valueMapperTimestamp(
        new ValueMapperTimestampDefault("yyyy-MM-dd'T'HH:mm:ss'Z'", ZoneOffset.UTC))
    .build();
```

**Custom Bytes Encoding**: Choose how binary data is represented—base64, hex, or your own format:
```java
FirestoreProto2Json converter = FirestoreProto2Json.builder()
    .valueMapperBytes(new ValueMapperBytes() {
        @Override
        public void convert(JsonObject jsonObject, String key, byte[] bytes) {
            jsonObject.addProperty(key, HexFormat.of().formatHex(bytes));
        }
        // ...
    })
    .build();
```

### Enhanced Test Coverage

New test cases ensure the library handles edge cases correctly:
- Binary data stored within array fields (previously uncovered)
- Custom timestamp formatting variations including date-only and year-only formats

## Why It Matters

Firestore triggers in Cloud Functions deliver data in Protocol Buffer format—the binary encoding Firestore uses internally. While efficient for transmission, this format isn't practical for application logic. firestoreproto2json bridges this gap by converting Protocol Buffers into standard JSON objects your code can work with directly.

Version 0.0.2 makes the library truly production-ready by removing friction points:
- **Reduced Integration Time**: Full Maven project templates and working examples mean you spend less time figuring out setup and more time building features
- **Clear Customization Paths**: See exactly how to adapt the library's output format to your needs without modifying source code
- **Confidence Through Testing**: Expanded test coverage demonstrates the library handles edge cases correctly
- **Zero Risk Upgrade**: Fully backward compatible with v0.0.1—no breaking changes, no API modifications

This release prioritizes developer experience over new features, recognizing that great documentation is just as valuable as new functionality.

## Getting Started

### Installation

Add the dependency to your Maven project:

```xml
<dependency>
    <groupId>io.github.UnitVectorY-Labs</groupId>
    <artifactId>firestoreproto2json</artifactId>
    <version>0.0.2</version>
</dependency>
```

### Upgrade from v0.0.1

If you're already using firestoreproto2json, upgrading is simple:

```xml
<!-- Change this version number -->
<version>0.0.1</version>
<!-- To -->
<version>0.0.2</version>
```

No code changes required—this release is fully backward compatible. The improved documentation and Javadoc will immediately enhance your IDE experience with better autocomplete and inline help.

### Learn More

- [Full Documentation on GitHub](https://github.com/UnitVectorY-Labs/firestoreproto2json)
- [Release Details](https://github.com/UnitVectorY-Labs/firestoreproto2json/releases/tag/v0.0.2)

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 18, 2026. For more information about this release, see the [firestoreproto2json repository](https://github.com/UnitVectorY-Labs/firestoreproto2json) and [v0.0.2 release page](https://github.com/UnitVectorY-Labs/firestoreproto2json/releases/tag/v0.0.2).*

*This post was authored by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
