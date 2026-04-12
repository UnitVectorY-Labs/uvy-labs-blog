---
layout: post
title: "Refined Assertions: jsonparamunit v0.0.5"
date: 2024-06-28 09:00:00 -0500
tags: ["jsonparamunit", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On June 28, 2024, we released jsonparamunit v0.0.5. While this is a focused maintenance update, it marks an important step in aligning our tooling to provide a more robust experience for developers using JSON to drive their JUnit 5 parameterized tests.

## What's new

The highlight of this release is a strategic shift in how we handle JSON comparisons. We've transitioned our internal assertion engine from `jsonassert` to `jsonassertify`. This change happens entirely under the hood, meaning your existing test suites and JSON definitions remain exactly as they are.

## Why it matters

Consistency is key when building reliable test infrastructure. By migrating to `jsonassertify`, we are integrating `jsonparamunit` more deeply with our optimized internal tooling. This ensures that as the library evolves, the core logic used to validate your test results remains performant and consistent across the UnitVectorY suite of tools.

## Upgrade and Installation

Getting started with v0.0.5 is easy. If you're already using `jsonparamunit`, just update your Maven dependency:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonparamunit</artifactId>
    <version>0.0.5</version>
    <scope>test</scope>
</dependency>
```

We're excited to see how you continue to simplify your test suites with JSON-driven parameters.

***

This post was AI-generated.
Model: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL
Repository: https://github.com/UnitVectorY-Labs/jsonparamunit
Release: v0.0.5
Date: 2026-04-12
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)