---
layout: post
title: "JSONassertify v0.0.4: Keeping Your JSON Tests Stable and Secure"
date: 2025-05-25 09:00:00 -0500
tags: ["jsonassertify", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On May 25, 2025, we released JSONassertify v0.0.4. This is a maintenance update dedicated to ensuring the library's dependencies and build infrastructure remain current, secure, and stable for all users.

## What's new
This release focuses on essential under-the-hood updates:
- **Core Library Update:** We've upgraded `org.json:json` to version `20250517`, ensuring the latest improvements in JSON parsing and manipulation.
- **Test Framework Refresh:** JUnit 5 (Jupiter API) has been updated to version `5.12.2` to provide a more robust testing environment.
- **Tooling & CI Upgrades:** Various Maven plugins and GitHub Actions have been updated to their latest versions to improve build reliability and security.

## Why it matters
While v0.0.4 doesn't introduce new features, maintenance releases are critical for the long-term health of your projects. By keeping dependencies fresh, we reduce security vulnerabilities and ensure that JSONassertify continues to work seamlessly within modern Java development pipelines—all while maintaining our commitment to Java 8 compatibility.

## Upgrade today
Upgrading to v0.0.4 is simple and contains no breaking changes. Just update the version in your `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonassertify</artifactId>
    <version>0.0.4</version>
    <scope>test</scope>
</dependency>
```

Stay tuned for more features and improvements as we continue to modernize JSON testing!

---
*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Generated on 2026-04-09 based on the release v0.0.4 of the [UnitVectorY-Labs/JSONassertify](https://github.com/UnitVectorY-Labs/JSONassertify) repository. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*