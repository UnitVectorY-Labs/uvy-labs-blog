---
layout: post
title: "jsonparamunit v0.0.2 Release: Quality Refinements and Context Support"
date: 2024-03-08 02:07:49 -0500
tags: ["jsonparamunit", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the availability of jsonparamunit v0.0.2, released on March 8, 2024. Just four days after our initial release, this iteration represents our commitment to rapid improvement and code quality from day one.

This update focuses on strengthening the foundation of jsonparamunit with internal refinements that directly benefit developers building data-driven tests. The highlight of v0.0.2 is the introduction of context support—a new capability that lets you include optional contextual information in your test cases without affecting input/output data.

## What's New

### Context Support for Test Cases

The standout feature in v0.0.2 is context support. Your JSON test files can now include an optional `context` field that provides additional processing information to your tests. This context is passed to the `process()` method but remains separate from your input/output data, keeping test cases clean and focused.

For example, you can now structure a test file like this:

```json
{
  "input": "...",
  "output": "...",
  "context": "a"
}
```

This is particularly useful when your test logic needs supplementary information—like configuration flags, environmental parameters, or metadata—that shouldn't be confused with the actual test data.

### Enhanced Extensibility

For developers extending jsonparamunit's base classes, we've exposed a new protected method `assertJsonEquals()` in `JsonNodeParamUnit`. This method allows you to customize JSON assertion behavior when needed, giving advanced users more control over how their tests validate output.

### Code Quality Foundations

Behind the scenes, v0.0.2 establishes rigorous quality standards for the project:

- **100% code coverage enforcement** via JaCoCo ensures every line and branch is tested
- **Mockito integration** enables sophisticated mocking in test scenarios
- **Centralized JSON conversion** through a new `JsonConverter` utility reduces duplication and simplifies maintenance

These improvements mean more reliable releases and a solid base for future features.

## Why It Matters

jsonparamunit was built to help developers shift test case creation from Java code to JSON files—making tests simpler to write, maintain, and extend. With v0.0.2, we're doubling down on that vision while establishing quality practices that will scale with the project.

The context feature directly addresses a common testing pattern: needing additional metadata during test execution without polluting your input/output data model. It's a small addition that unlocks significant flexibility for complex test scenarios.

More importantly, the 100% coverage mandate means every future feature and fix comes with comprehensive testing baked in. When you depend on jsonparamunit, you're depending on code that's been thoroughly vetted.

## Getting Started

### Installation

If you're upgrading from v0.0.1, update your Maven dependency:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonparamunit</artifactId>
    <version>0.0.2</version>
    <scope>test</scope>
</dependency>
```

No breaking changes were introduced in v0.0.2—all tests written for v0.0.1 continue to work without modification.

### Try Context Support

To experiment with the new context feature, add a `context` field to any of your existing test JSON files:

```json
{
  "input": {"value": 42},
  "output": {"result": 84},
  "context": "doubling-mode"
}
```

Your overridden `process()` method receives this context value and can use it to adjust test behavior accordingly.

### Documentation

The README has been updated with Maven Central badges and improved getting started instructions. Full API documentation is available via javadoc.io.

---

**Transparency Note:** This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Release source: [UnitVectorY-Labs/jsonparamunit](https://github.com/UnitVectorY-Labs/jsonparamunit), release [v0.0.2](https://github.com/UnitVectorY-Labs/jsonparamunit/releases/tag/v0.0.2). Published March 8, 2024. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
