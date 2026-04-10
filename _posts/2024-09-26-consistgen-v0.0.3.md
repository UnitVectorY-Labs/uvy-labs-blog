---
layout: post
title: "Bringing Determinism to Strings: consistgen v0.0.3 is here"
date: 2024-09-26 09:00:00 -0500
tags: ["consistgen", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On September 26, 2024, we released consistgen v0.0.3. This update marks a significant expansion of the library's capabilities, moving beyond timestamps and UUIDs to bring the power of predictable string generation to your test suites.

## What's new

The headline feature of v0.0.3 is the introduction of the `StringProvider` ecosystem. For developers who have already leveraged consistgen for deterministic time and identity, this new addition follows the same familiar pattern.

At the center is the `StringProvider` interface, supported by three powerful implementations:

- **RandomStringProvider**: For production use, this provider generates secure random strings using `SecureRandom`. It comes with a sensible default alphabet but allows for complete customization of the character set and randomness source.
- **StaticStringProvider**: Ideal for tests where you need a specific string returned every single time.
- **SettableStringProvider**: Perfect for dynamic test scenarios where you need to change the generated string on the fly.

## Why it matters

Randomness is a double-edged sword in software testing. While essential for production, unpredictable strings can lead to flaky tests and "impossible to reproduce" bugs. By abstracting string generation behind a provider, consistgen allows you to swap real randomness for deterministic values during your test runs without changing your business logic. This means your tests become stable, reproducible, and far easier to debug.

## Getting Started

Upgrading to v0.0.3 is seamless and backward compatible with v0.0.2. To get started, simply update your Maven dependency:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>consistgen</artifactId>
    <version>0.0.3</version>
</dependency>
```

Please note that consistgen requires Java 17.

***

This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL.
Reference: [UnitVectorY-Labs/consistgen](https://github.com/UnitVectorY-Labs/consistgen), Release [v0.0.3](https://github.com/UnitVectorY-Labs/consistgen/releases/tag/v0.0.3), generated on April 10, 2026.
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)