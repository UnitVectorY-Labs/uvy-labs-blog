---
layout: post
title: "kubetogoogleidtoken v0.1.3 Released"
date: 2026-08-13 00:56:37 +0000
tags: ["kubetogoogleidtoken", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

kubetogoogleidtoken v0.1.3 was released on August 13, 2026. This is a maintenance release focused on keeping the project current and secure. The library source code is unchanged from v0.1.2, so there are no API changes, new features, or bug fixes for users. The release updates build dependencies and modernizes CI workflows, providing a safe drop-in upgrade for anyone already using the library.

## What's new

This version contains no user-facing functional changes. The public API and behavior remain identical to v0.1.2.

Under the hood, the release bumps the project version from 0.1.2 to 0.1.3 and refreshes build and test dependencies:

- Gson 2.13.2 → 2.14.0
- Lombok 1.18.42 → 1.18.46
- Mockito Core 5.20.0 → 5.23.0
- JUnit Jupiter Engine 5.13.4 → 5.14.4
- jsonassertify 0.0.5 → 0.0.6

Maven plugins were also updated for build reproducibility, including surefire, compiler, source, central publishing, and JaCoCo.

CI and repository maintenance improvements include pinned GitHub Actions to commit SHAs, `persist-credentials: false` on checkout steps, CodeQL updates, and new workflows for Semgrep static analysis and ChromaDB repository indexing. These changes do not affect the published artifact.

## Why it matters

For users of kubetogoogleidtoken, v0.1.3 offers continued stability with no breaking changes. Because the library code is unchanged, existing integrations continue to work exactly as before while benefiting from refreshed dependencies and a more secure, reproducible build pipeline. It's a safe upgrade for production workloads that rely on Kubernetes Service Accounts and GCP Workload Identity Federation to obtain Google ID tokens.

## Upgrade

Upgrading is straightforward. Update your Maven dependency to version 0.1.3:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>kubetogoogleidtoken</artifactId>
    <version>0.1.3</version>
</dependency>
```

The library requires Java 17 and is published to Maven Central. No code changes are needed on your side.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/kubetogoogleidtoken, release v0.1.3, date of generation 2026-08-18. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
