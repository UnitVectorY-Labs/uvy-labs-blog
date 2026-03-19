---
layout: post
title: "firestoreproto2map v0.0.4: Strengthening Build Security"
date: 2024-09-29 17:08:32 -0500
tags: [firestoreproto2map, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introduction

On September 29, 2024, we released firestoreproto2map v0.0.4—a release focused on strengthening the security and trustworthiness of our artifact distribution pipeline. While the core library functionality remains unchanged from v0.0.3, this update introduces critical supply chain security improvements that benefit all users who depend on our Java artifacts.

## What's New

### Build Provenance Attestations

The headline feature of v0.0.4 is the addition of **GitHub Build Provenance Attestations**. Every artifact published in this release now carries cryptographic proof of its build origin, providing:

- **Verifiable Build Authenticity**: Prove that a JAR file came from our official GitHub workflow
- **Supply Chain Security**: Detect and prevent tampering with distribution artifacts
- **Audit Trail**: Maintain a clear record of who built what and when

These attestations are particularly valuable for organizations with strict software supply chain security requirements or compliance needs.

### Enhanced Release Workflow

Behind the scenes, we've improved our CI/CD pipeline to:

- Explicitly manage permissions for artifact publishing and attestation signing
- Provide clearer step naming for maintainability
- Ensure all release assets (main JAR, sources, Javadoc, and POM) are properly distributed

### Documentation Refinement

We corrected the Maven dependency example in our README to accurately reference version 0.0.3, ensuring new users see the correct version information when exploring the project.

## Why It Matters

In today's software ecosystem, trusting the binaries you download is increasingly important. Supply chain attacks have become a growing concern, and organizations need ways to verify that their dependencies haven't been tampered with during distribution.

By adding build provenance attestations to v0.0.4, firestoreproto2map takes a step toward **transparent, verifiable artifact distribution**. Users and security teams can now cryptographically verify that the JAR files they use originated from our official GitHub Actions workflow—not from an impersonator or compromised channel.

This release demonstrates our commitment to:

1. **Security**: Proactively improving the trustworthiness of our distribution
2. **Maintenance**: Continuously refining our infrastructure even between feature releases
3. **Transparency**: Making build provenance available for audit and verification

For existing users, this means you can upgrade to v0.0.4 with confidence—your code will work exactly as before, but the artifacts you're using now have an additional layer of cryptographic verification backing them up.

## Upgrading to v0.0.4

### For New Users

Add firestoreproto2map to your Maven project:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>firestoreproto2map</artifactId>
    <version>0.0.4</version>
</dependency>
```

The library requires **Java 17** and helps convert Firestore Protocol Buffer objects into Java Maps for easier manipulation in Cloud Functions.

### For Existing Users Upgrading from v0.0.3

**No code changes required.** Simply update your dependency version:

```xml
<!-- From -->
<version>0.0.3</version>

<!-- To -->
<version>0.0.4</version>
```

This release is fully backward compatible with no breaking changes or API modifications.

### Verifying Artifacts

If you want to verify the provenance of your downloaded artifacts, check the [v0.0.4 GitHub Release](https://github.com/UnitVectorY-Labs/firestoreproto2map/releases/tag/v0.0.4) for build attestation details.

## Looking Ahead

While v0.0.4 focuses on infrastructure improvements, we continue to maintain firestoreproto2map as a reliable helper library for Java developers working with Google Cloud Firestore. Future releases will bring functional enhancements while maintaining the security foundation established in this release.

As always, we welcome feedback and contributions from the community. Visit our [GitHub repository](https://github.com/UnitVectorY-Labs/firestoreproto2map) to report issues, suggest features, or contribute improvements.

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The post is based on the v0.0.4 release of firestoreproto2map published on September 29, 2024. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
