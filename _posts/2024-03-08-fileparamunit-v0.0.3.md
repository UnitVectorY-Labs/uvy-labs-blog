---
layout: post
title: "Enhancing Reliability and Rigor: fileparamunit v0.0.3"
date: 2024-03-08 09:00:00 -0500
tags: ["fileparamunit", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on March 8, 2024, fileparamunit v0.0.3 is a maintenance release dedicated to hardening the library's core and ensuring a rock-solid foundation for developers relying on file-based parameterized testing in JUnit 5. While this update focuses on the engine under the hood, the result is a more stable and secure experience for every user.

## What's new

This release introduces a critical fix to the resource loading mechanism within `ListFileArgumentsProvider`. By correcting how the library handles `getResource`, we've eliminated an edge case that could cause instability when loading test files across different execution environments.

Beyond the bug fix, v0.0.3 represents a major milestone in quality assurance. We are proud to announce that the project has achieved 100% code test coverage. This was made possible through a comprehensive refactoring effort and the integration of Mockito to simulate complex scenarios. To maintain this standard, we've also integrated Codecov for continuous tracking and GitHub CodeQL to automatically scan for security vulnerabilities.

## Why it matters

For developers, these changes mean greater peace of mind. The fix in resource loading ensures that your tests behave consistently, whether they are running locally or in a CI pipeline. 

The achievement of full test coverage and the addition of automated security scanning aren't just metrics—they are a commitment to reliability. By eliminating blind spots in the code and proactively hunting for vulnerabilities, we're ensuring that `fileparamunit` remains a dependable tool in your testing arsenal, allowing you to focus on your application logic rather than debugging your test infrastructure.

## Getting started with v0.0.3

Upgrading to the latest version is straightforward. Update the version in your `pom.xml` to `0.0.3`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>fileparamunit</artifactId>
    <version>0.0.3</version>
    <scope>test</scope>
</dependency>
```

We encourage all users to move to v0.0.3 to benefit from the improved stability and security enhancements.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It refers to the [UnitVectorY-Labs/fileparamunit](https://github.com/UnitVectorY-Labs/fileparamunit) repository, release v0.0.3, and was generated on April 10, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*