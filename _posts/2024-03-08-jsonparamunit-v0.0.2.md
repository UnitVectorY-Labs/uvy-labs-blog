---
layout: post
title: "jsonparamunit v0.0.2: Now on Maven Central with Enhanced Stability"
date: 2024-03-08 09:00:00 -0500
tags: ["jsonparamunit", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On March 8, 2024, we released jsonparamunit v0.0.2. This update marks a significant milestone for the library as it becomes more accessible to the Java community and more robust for production use.

## What's new

The headline for this release is the official publication of jsonparamunit to Maven Central. You can now integrate the library into your projects using standard dependency management without needing to host the artifacts yourself. Along with this, we've added Javadoc support, providing a clearer guide to the API and helping you get up and running faster.

Under the hood, we've performed a series of refactors to improve the library's maintainability. We introduced a centralized `JsonConverter` to handle conversions between JSON nodes and strings, ensuring more consistent behavior and better error reporting. We also strengthened our test suite, achieving a full 100% code coverage to ensure that your tests remain reliable.

## Why it matters

For developers, the move to Maven Central means less friction during setup and easier dependency resolution. The addition of Javadoc removes the guesswork from the API, allowing for a more intuitive development experience.

The internal improvements, while less visible, are crucial for long-term stability. By centralizing conversion logic and enforcing strict test coverage, we've reduced the likelihood of regressions and created a more stable foundation for future features.

## Getting Started

Upgrading to v0.0.2 is straightforward as there are no breaking changes to the public API. To get started or update your project, simply add the following dependency to your `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonparamunit</artifactId>
    <version>0.0.2</version>
    <scope>test</scope>
</dependency>
```

We encourage you to check out the updated README and the new Javadoc for more details on how to leverage JSON-driven testing in your JUnit 5 suites.

***

This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL.
Repository: https://github.com/UnitVectorY-Labs/jsonparamunit
Release: v0.0.2
Date of generation: 2026-04-12
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)