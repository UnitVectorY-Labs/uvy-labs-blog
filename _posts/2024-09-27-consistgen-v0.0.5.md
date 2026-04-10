---
layout: post
title: "consistgen v0.0.5: Polishing the API"
date: 2024-09-27 09:00:00 -0500
tags: ["consistgen", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On September 27, 2024, we released consistgen v0.0.5. This is a small but important maintenance update focused on improving the quality and correctness of our public API.

## What's new

This release focuses on cleaning up the developer experience by correcting a typographical error in one of our core classes. Specifically, we have renamed a method in the `SettableEpochTimeProvider` class to ensure it follows proper English spelling and remains intuitive for all users.

## Why it matters

While a typo might seem trivial, a clean and professional API is crucial for a library designed to be integrated into other projects. By correcting `setEpohTimeSeconds` to `setEpochTimeSeconds`, we ensure that the library remains easy to use, discoverable via IDE autocomplete, and free of confusing misspellings.

**Note on Breaking Changes:** Since this involves renaming a public method, this is a breaking change. If your project specifically uses the `SettableEpochTimeProvider` to dynamically set epoch time, you will need to update your method calls to the corrected spelling.

## Getting started with v0.0.5

Updating to the latest version is straightforward. Simply update the version number in your `pom.xml` file:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>consistgen</artifactId>
    <version>0.0.5</version>
</dependency>
```

We encourage all users to upgrade to ensure they are using the most polished version of the library.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It is based on the release v0.0.5 of the [consistgen](https://github.com/UnitVectorY-Labs/consistgen) repository, generated on April 10, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*