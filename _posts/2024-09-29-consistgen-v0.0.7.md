---
layout: post
title: ConsistGen v0.0.7 Release
date: 2024-09-29 09:00:00 -0500
tags: ["consistgen", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the release of ConsistGen v0.0.7, published on September 29, 2024. This release focuses on strengthening the delivery infrastructure behind ConsistGen, making it easier and more secure for users to access and verify the library artifacts they depend on.

## What's New

While the core functionality of ConsistGen remains unchanged in v0.0.7, there are important improvements to how the library is distributed and verified:

- **Direct Download from GitHub Releases** - JAR files and POM files are now available for direct download from GitHub Releases. Users who prefer not to pull from Maven Central can now access artifacts directly from the repository.

- **Enhanced Build Provenance** - v0.0.7 introduces provenance attestations for both JAR files and POM files. This provides supply chain security verification, allowing users to confirm the authenticity and origin of the artifacts they download.

- **Improved Maven Central Publishing** - The publishing workflow has been refined with better artifact metadata extraction and more clearly organized steps, ensuring more reliable delivery to Maven Central.

## Why It Matters

ConsistGen is designed to simplify testing by providing predictable implementations for generating timestamps, UUIDs, and random strings through dependency injection. Reliability in how the library itself is delivered matters just as much as the reliability it provides to your tests.

These infrastructure improvements mean:

- **Flexibility in Artifact Access** - Whether you prefer Maven Central or GitHub Releases, you now have multiple pathways to obtain ConsistGen artifacts.

- **Confidence Through Verification** - Build provenance attestations add a layer of security assurance, important for teams with strict supply chain requirements.

- **Continued Stability** - With no changes to the library's API, v0.0.7 maintains full backward compatibility. Your existing code continues to work without modification.

## Upgrading to v0.0.7

Upgrading is straightforward. Update your Maven dependency to reference the new version:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>consistgen</artifactId>
    <version>0.0.7</version>
</dependency>
```

No code changes are required. The library still requires Java 17, and all existing implementations (EpochTimeProvider, UuidGenerator, StringProvider) work exactly as before.

## Looking Forward

This release reflects our commitment to maintaining not just the quality of ConsistGen's code, but also the reliability and security of how it reaches users. Future releases will continue to build on this foundation while delivering new features and improvements to the library itself.

We appreciate your continued use of ConsistGen in your testing workflows. As always, feedback and contributions are welcome via our GitHub repository.

---

**Transparency Note:** This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on September 29, 2024. The post was generated for release v0.0.7 of the [consistgen](https://github.com/UnitVectorY-Labs/consistgen) repository by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
