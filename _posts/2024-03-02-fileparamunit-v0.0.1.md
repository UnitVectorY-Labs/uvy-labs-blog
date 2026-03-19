---
layout: post
title: "Introducing fileparamunit v0.0.1: File-Based Parameterized Testing for JUnit 5"
date: 2024-03-02 09:00:00 -0500
tags: [fileparamunit, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introducing fileparamunit

On March 2, 2024, we're excited to announce the initial release of **fileparamunit** (v0.0.1), a new Java library that extends JUnit 5's parameterized test capabilities with powerful file-based test data sourcing.

For developers who write extensive test suites with multiple data files—JSON fixtures, CSV datasets, XML samples—fileparamunit eliminates repetitive test code by automatically discovering and iterating through files in your resource directories. Instead of manually listing every test case, you define your test logic once and let fileparamunit handle the rest.

---

## What's New

This initial release introduces the core functionality that makes file-based parameterized testing straightforward:

### @ListFileSource Annotation

The star of the show is the new `@ListFileSource` annotation. When combined with JUnit 5's `@ParameterizedTest`, it automatically discovers files matching your criteria and runs your test against each one:

```java
@ParameterizedTest
@ListFileSource(resources = "/testData/", fileExtension = ".json", recurse = true)
public void exampleTest(String fileName) {
    File file = new File(fileName);
    // Your test logic here
    assertTrue(file.exists());
}
```

### Flexible Configuration

The annotation gives you control over how files are discovered:

- **`resources`**: Specify the resource folder path to search (e.g., `/testData/`)
- **`fileExtension`**: Filter by file extension (e.g., `.json`, `.csv`, `.xml`)
- **`recurse`**: Optionally traverse subdirectories recursively

### What This Means for Your Tests

You can now write a single test method that validates your code against dozens or hundreds of data files without duplicating test logic. Whether you're testing JSON parsers, configuration loaders, or any component that processes files, fileparamunit keeps your test code DRY while maintaining thorough coverage.

---

## Why It Matters

Testing with multiple data files is a common pattern across Java projects. Traditionally, developers have two choices:

1. **Manual enumeration**: List every file path explicitly in the test annotation—tedious and brittle when files change
2. **Custom implementations**: Write boilerplate code to discover and iterate through files—time-consuming and error-prone

fileparamunit solves both problems with a focused, reusable solution built on JUnit 5's established parameterized test framework. By shifting testing complexity from code to data, you spend less time maintaining test infrastructure and more time validating actual behavior.

The library's minimalist design (just two core classes) ensures there's little new code to learn while delivering maximum value for file-driven test scenarios.

---

## Getting Started

### Prerequisites

- Java 17 or higher
- JUnit 5 already present in your project dependencies

### Maven Dependency

Add fileparamunit to your `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>fileparamunit</artifactId>
    <version>0.0.1</version>
    <scope>test</scope>
</dependency>
```

### Next Steps

1. Add the dependency to your project
2. Create test data files in your resources directory
3. Write parameterized tests using `@ListFileSource`
4. Run your tests as usual with JUnit 5

For complete usage examples and API documentation, see the [README](https://github.com/UnitVectorY-Labs/fileparamunit).

---

## A Note on Availability

This initial release marks the beginning of fileparamunit's journey. The library is actively under development, and we welcome feedback from early adopters as we refine the tooling and expand capabilities.

---

### Transparency Note

This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 18, 2026. For complete details about this release, visit the [fileparamunit repository](https://github.com/UnitVectorY-Labs/fileparamunit) and [release v0.0.1](https://github.com/UnitVectorY-Labs/fileparamunit/releases/tag/v0.0.1).

Authored by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
