---
layout: post
title: "jsonparamunit v0.0.9 Released"
date: 2026-08-13 00:53:49 +0000
tags: ["jsonparamunit", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

jsonparamunit v0.0.9 was released on 2026-08-13. This maintenance release keeps the library current with its dependencies and CI tooling without changing the public API. For users building data-driven JUnit 5 tests with JSON files, it is a safe, drop-in upgrade that brings fresher transitive libraries and improved build hygiene.

## What's new

This release contains no changes to source code. The artifact version moves from 0.0.8 to 0.0.9 with updated dependencies and workflow improvements:

* Jackson Databind upgraded from 2.20.1 to 2.22.1, bringing the latest security and bug fixes from the Jackson project.
* jsonassertify upgraded from 0.0.5 to 0.0.6, the assertion helper used for JSON output comparison.
* Test and build toolchain updates including JUnit Jupiter Params 5.14.4, Mockito 5.23.0, Lombok 1.18.46, Maven Surefire 3.5.6, Maven Compiler 3.15.0, Central Publishing Plugin 0.11.0 and JaCoCo 0.8.15.
* CI and security hardening: GitHub Actions pinned to specific SHAs, checkout with `persist-credentials: false`, new ChromaDB repo indexer and semgrep workflows, and Dependabot configuration tweaks.

No new classes, methods, or behavior were introduced. The public API remains identical to v0.0.8.

## Why it matters

jsonparamunit helps Java teams run parameterized tests from JSON files, reducing test duplication and keeping test data separate from code. Keeping dependencies up to date is important for security and long-term compatibility. The Jackson Databind bump addresses known issues in earlier 2.20.x releases, and the jsonassertify update ensures users benefit from any fixes in JSON assertion semantics.

Because there are no source changes, existing tests and integrations continue to work without modification. Users who pin transitive versions will see newer Jackson and assertion libraries on the classpath, which can resolve conflicts and improve stability.

## Upgrading

Upgrade is straightforward. The library is published to Maven Central under `com.unitvectory:jsonparamunit`. Update your dependency to version 0.0.9:

```xml
<dependency>
  <groupId>com.unitvectory</groupId>
  <artifactId>jsonparamunit</artifactId>
  <version>0.0.9</version>
</dependency>
```

No code changes are required. If you use a build tool that locks transitive dependencies, review the updated Jackson and jsonassertify versions to confirm compatibility.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/jsonparamunit, release v0.0.9, date of generation 2026-08-18. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
