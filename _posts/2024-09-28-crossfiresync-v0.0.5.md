---
layout: post
title: "CrossFireSync v0.0.5 Released"
date: 2024-09-28 16:48:55 -0500
tags: ["crossfiresync", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

CrossFireSync v0.0.5 was released on September 28, 2024. This maintenance release keeps your multi-region Firestore synchronization infrastructure up-to-date with the latest dependencies and enhanced build security features.

## What's New

v0.0.5 is a stability-focused release that delivers important updates beneath the surface:

### Dependency Updates
- Updated Google Cloud libraries-bom to version 26.47.0 for access to the latest GCP SDK improvements
- Upgraded JUnit Jupiter testing framework to 5.11.1
- Enhanced Mockito mocking capabilities with version 5.14.0
- Updated supporting test utilities and internal dependencies

### Build Security Enhancements
This release introduces **build provenance attestation**, adding a new layer of supply chain security. When you download CrossFireSync artifacts, you can now cryptographically verify their authenticity and origin, giving you confidence that your dependencies haven't been tampered with.

### Documentation Improvements
The README has been expanded to include a comprehensive References section, making it easier to discover the full CrossFireSync ecosystem including:
- `crossfiresyncrun` for Docker-based deployments
- `crossfiresyncrun-tofu` for OpenTofu automation
- Reference implementations for Firestore publishers and Pub/Sub consumers

## Why It Matters

While v0.0.5 doesn't introduce new features, maintenance releases like this are critical for production systems:

**Security:** Staying current with dependency updates ensures you benefit from security patches and improvements in the underlying libraries that CrossFireSync depends on.

**Reliability:** The updated build tooling and Lombok annotation processor configuration improves build consistency for teams building CrossFireSync from source.

**Trust:** Build provenance attestations represent industry best practices for software supply chain security, giving enterprises greater confidence in their infrastructure dependencies.

## Upgrade Instructions

Upgrading to v0.0.5 is straightforward. The release maintains full backward compatibility with v0.0.4, so you can update without concerns about breaking changes.

Add or update the dependency in your Maven project:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>crossfiresync</artifactId>
    <version>0.0.5</version>
</dependency>
```

No code changes are required on your end. Simply update the version number and rebuild your project.

## Get Involved

CrossFireSync continues to evolve as a community-driven project for multi-region Firestore synchronization. Explore the full ecosystem of related projects and contribute to the future development of cross-region data replication on GCP.

- [GitHub Repository](https://github.com/UnitVectorY-Labs/crossfiresync)
- [View v0.0.5 Release](https://github.com/UnitVectorY-Labs/crossfiresync/releases/tag/v0.0.5)

---

**Transparency Note:** This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 18, 2026. For details about this release and the CrossFireSync project, visit the [UnitVectorY-Labs/crossfiresync](https://github.com/UnitVectorY-Labs/crossfiresync) repository. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
