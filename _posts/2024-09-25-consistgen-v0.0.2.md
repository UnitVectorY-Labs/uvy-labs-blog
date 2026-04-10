---
layout: post
title: "Enhancing Test Predictability: Introducing Settable Providers in consistgen v0.0.2"
date: 2024-09-25 09:00:00 -0500
tags: ["consistgen", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on September 25, 2024, consistgen v0.0.2 brings significant improvements to how developers handle unpredictable system outputs during testing. This update introduces "settable" implementations for time and UUID generation, providing the flexibility needed to simulate dynamic scenarios within a single test case.

## What's new

This release introduces two key components to the library:

- **Settable Epoch Time Provider**: The new `SettableEpochTimeProvider` allows you to define the epoch time in milliseconds at runtime. It also includes a convenient method to set time using seconds, making it easier to align with various API requirements.
- **Settable UUID Generator**: With the `SettableUuidGenerator`, you can now specify exactly which UUID string should be returned whenever a new identifier is requested.

## Why it matters

While static providers are useful for returning a constant value, many complex test scenarios require the ability to change state. Whether you are simulating the passage of time to test a timeout or needing to rotate through different UUIDs to verify uniqueness handling, the ability to update these values at runtime is critical. 

By using these settable implementations, you can move beyond simple fixed-value mocks and create more realistic, stateful test simulations without the overhead of constantly re-initializing your dependency injection container.

## Getting Started

Upgrading to v0.0.2 is straightforward. Update your `pom.xml` to use the latest version:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>consistgen</artifactId>
    <version>0.0.2</version>
</dependency>
```

We encourage all users of `consistgen` to adopt these settable providers to bring more precision and control to their test suites.

***

*This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`. It was generated on 2026-04-10 based on the [UnitVectorY-Labs/consistgen](https://github.com/UnitVectorY-Labs/consistgen) repository and the [v0.0.2 release](https://github.com/UnitVectorY-Labs/consistgen/releases/tag/v0.0.2). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*