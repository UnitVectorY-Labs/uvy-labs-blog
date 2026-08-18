---
layout: post
title: "fileparamunit v0.1.3 Released"
date: 2026-08-13 00:00:00 -0500
tags: ["fileparamunit", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On August 13, 2026, UnitVectorY-Labs published fileparamunit v0.1.3. This is a maintenance release for the JUnit 5 `@ListFileSource` library that lets parameterized tests iterate over files in resources. There are no changes to the public API or library code — the update focuses on keeping build dependencies current and strengthening CI workflows.

## What's new

v0.1.3 contains no new features and no user-facing bug fixes. The source in `src/main/java` and `src/test/java` is identical to v0.1.2.

The release updates project metadata and dependencies:
- Project version bumped to 0.1.3 in `pom.xml`
- Test and build dependencies refreshed, including junit-jupiter-params 5.13.4 → 5.14.4 and mockito-core 5.20.0 → 5.23.0
- Maven plugins updated for surefire, compiler, source, jacoco and central publishing
- CI improvements: actions pinned to SHA, `persist-credentials: false` set on checkout, CodeQL and Semgrep workflow corrections
- New workflows added for semgrep scanning and ChromaDB repo indexing
- 40+ Dependabot updates for GitHub Actions, codecov and related tooling

No breaking changes are introduced.

## Why it matters

For users, v0.1.3 is a safe, drop-in update. Keeping junit-jupiter-params and mockito current helps maintain compatibility with the latest JUnit 5 ecosystem and reduces exposure to known issues in build tooling. The CI hardening ensures releases continue to be built and tested reliably, without changing how `@ListFileSource` behaves in your tests.

## Upgrading

Upgrade is straightforward. Change the Maven dependency to 0.1.3:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>fileparamunit</artifactId>
    <version>0.1.3</version>
    <scope>test</scope>
</dependency>
```

No code changes are required. The library continues to require Java 17 and JUnit 5, and the public API remains unchanged from v0.1.2.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository UnitVectorY-Labs/fileparamunit, release v0.1.3, date of generation 2026-08-18. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
