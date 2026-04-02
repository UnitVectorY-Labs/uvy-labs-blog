---
layout: post
title: "Introducing jsonparamunit: Data-Driven JUnit 5 Testing with JSON"
date: 2024-03-04 09:00:00 -0500
tags: ["jsonparamunit", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## A New Way to Write Parameterized Tests

We're excited to announce the launch of **jsonparamunit**, a new Java library that transforms how you write parameterized tests in JUnit 5. Released on March 4, 2024, jsonparamunit shifts test case definition from Java code to JSON files, making data-driven testing simpler and more maintainable.

Developed by UnitVectorY Labs, this library lets developers focus on the logic being tested rather than the mechanics of test setup. Instead of cluttering your test classes with numerous test methods or complex parameter sources, you define test cases in clean, self-contained JSON files.

---

## What's New

jsonparamunit v0.0.1 introduces three powerful base classes for different testing scenarios:

### JsonNodeParamUnit
The foundation class that provides input and output as Jackson `JsonNode` objects. It handles JSON file parsing, validation, and result assertion using JSONAssert, supporting optional context values for additional test information.

### JsonStringParamUnit
Designed for tests where input and output are passed as JSON-encoded strings. This extension automatically handles string encoding and decoding, making it ideal when working with methods that accept or return raw JSON strings.

### JsonClassParamUnit<I, O>
Provides type-safe testing with POJOs using Jackson's automatic serialization and deserialization. Generic types for input and output define your expected object models, enabling strongly-typed test case definitions.

### Configuration and Error Handling
The release includes `JsonParamUnitConfig`, a builder-pattern configuration class that lets you customize the Jackson `ObjectMapper` and control strict output mode. Custom exceptions via `JsonParamError` provide clear error messages when test files are malformed or validation fails.

---

## Why It Matters

### Simplified Test Maintenance
Adding new test cases is as simple as creating a new JSON file—no Java code changes required. This separation of test data from test logic makes it easier to expand coverage without growing your test class complexity.

### Declarative Test Definitions
JSON files serve as self-documenting test cases. Each file contains input, optional context, and expected output in a clear structure that anyone on the team can understand:

```json
{
  "input": {
    "value": "1234567890"
  },
  "context": "optionalContext",
  "output": {
    "value": "0987654321"
  }
}
```

### Flexible Abstraction Levels
Whether you prefer working with raw JSON nodes, string-based APIs, or type-safe POJOs, jsonparamunit accommodates different development preferences. This flexibility helps teams adopt the library incrementally based on their existing code patterns.

### Built on Proven Technology
jsonparamunit integrates seamlessly with JUnit 5 parameterized tests and works alongside the companion [fileparamunit](https://github.com/UnitVectorY-Labs/fileparamunit) library for a complete file-based testing workflow. The library leverages well-established dependencies like Jackson for JSON processing and JSONassert for reliable comparisons.

---

## Getting Started

To add jsonparamunit to your Maven project, include the following dependency:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonparamunit</artifactId>
    <version>0.0.1</version>
    <scope>test</scope>
</dependency>
```

**Requirements:**
- Java 17 or higher
- JUnit 5 in your project dependencies

Here's a basic example of extending `JsonClassParamUnit`:

```java
public class MyTest extends JsonClassParamUnit<InputType, OutputType> {
    
    @ParameterizedTest
    @ListFileSource(resources = "/test-cases/", fileExtension = ".json")
    public void testMethod(String file) {
        run(file);
    }
    
    protected MyTest() {
        super(InputType.class, JsonParamUnitConfig.builder().build());
    }
    
    @Override
    protected OutputType process(InputType input, String context) {
        // Implementation to test
    }
}
```

Full documentation and working examples are available in the [README](https://github.com/UnitVectorY-Labs/jsonparamunit/blob/main/README.md).

---

## Join Us

jsonparamunit is open source under the Eclipse Public License v2.0. We welcome contributions, feedback, and bug reports. Check out the repository at [github.com/UnitVectorY-Labs/jsonparamunit](https://github.com/UnitVectorY-Labs/jsonparamunit) to get started.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For details about this release, visit the [jsonparamunit repository](https://github.com/UnitVectorY-Labs/jsonparamunit) or the [v0.0.1 release page](https://github.com/UnitVectorY-Labs/jsonparamunit/releases/tag/v0.0.1). Generated on March 18, 2026 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
