---
layout: post
title: "jsonparamunit v0.0.5 Released"
date: 2024-06-28 01:36:33 -0500
tags: [jsonparamunit, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

jsonparamunit v0.0.5 was released on June 28, 2024. This maintenance release strengthens the project's foundation by switching to a more actively maintained dependency, ensuring long-term stability for your parameterized JSON tests without requiring any changes to your existing test code.

## What's New

Version 0.0.5 is a streamlined maintenance release focused on improving the library's underlying dependencies. The core change is transparent to users: jsonparamunit now uses `jsonassertify` (an actively maintained fork) instead of the original JSONassert library for test assertions.

### Key Points

- **Zero breaking changes** – Your existing tests continue to work identically
- **Same test behavior** – All comparison logic remains functionally the same  
- **Better long-term maintenance** – Built on a dependency with active development and security updates

For users, this release means updating your version number is all that's required. No code modifications, no test migrations, no disruptions to your existing test suites.

## Why It Matters

This release addresses a potential future compatibility concern. The original JSONassert library had been minimally maintained for years, and a subsequent unexpected release required Java 21. By switching to JSONassertify—a modernized fork by the same author—jsonparamunit ensures:

- **Continued Java 17+ compatibility** without forcing users to upgrade their JDK
- **Ongoing security patches** through an actively maintained dependency
- **Long-term stability** for projects relying on jsonparamunit for data-driven testing

For teams using jsonparamunit to streamline their JUnit 5 testing with JSON-defined test cases, this release provides peace of mind that the library's foundation is secure and sustainable.

## Upgrade Instructions

Upgrading to v0.0.5 is straightforward. Simply update your Maven dependency:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonparamunit</artifactId>
    <version>0.0.5</version>
    <scope>test</scope>
</dependency>
```

If you're using the companion fileparamunit library, we recommend version 0.0.4:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>fileparamunit</artifact>
    <version>0.0.4</version>
    <scope>test</scope>
</dependency>
```

That's it—no code changes required. Run your tests and verify everything works as expected.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 18, 2026. Source: [UnitVectorY-Labs/jsonparamunit](https://github.com/UnitVectorY-Labs/jsonparamunit) (v0.0.5 release). By [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
