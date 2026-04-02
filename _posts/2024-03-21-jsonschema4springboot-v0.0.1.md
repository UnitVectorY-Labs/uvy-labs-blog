---
layout: post
title: "Announcing jsonschema4springboot v0.0.1: JSON Schema Validation for Spring Boot 3"
date: 2024-03-21 02:10:38 -0500
tags: ["jsonschema4springboot", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the initial release of **jsonschema4springboot** (v0.0.1), a new Spring Boot 3 library that brings JSON Schema validation to your REST APIs through simple annotations. Published on March 21, 2024, this library enables developers to enforce strict JSON input validation without writing custom validators.

## What's New

This initial release introduces the core functionality that makes JSON Schema validation seamless in Spring Boot 3 applications:

### Simple Annotation-Based Validation
The `@ValidateJsonSchema` annotation replaces the standard `@RequestBody` for parameters that need schema validation. Just specify your schema file path and JSON Schema version, and let the library handle the rest.

### Broad JSON Schema Support
From day one, the library supports all major JSON Schema specification versions:
- Draft V4
- Draft V6
- Draft V7
- Draft 2019-09
- Draft 2020-12

### Out-of-the-Box Spring Integration
The `ValidateJsonSchemaArgumentResolver` integrates directly with Spring MVC through the familiar `WebMvcConfigurer` pattern. Register it once, and you're ready to validate JSON requests across all your controllers.

### Consistent Error Responses
Validation failures throw a `ValidateJsonSchemaException` that includes structured error details, making it easy to return consistent validation error responses to API clients.

## Why It Matters

For teams building REST APIs, input validation is essential but often repetitive. jsonschema4springboot shifts validation logic from Java code to JSON Schema definitions, offering several key benefits:

**Separation of Concerns**: Validation rules live in schema files separate from your business logic. This keeps controllers clean and makes validation rules easier to review and maintain.

**Schema-First Development**: Define your API contracts using standard JSON Schema before writing a single line of controller code. Your schemas become the source of truth for both documentation and validation.

**Type Safety**: Once validation passes, you know your deserialized objects match the expected structure. No more runtime surprises from missing or malformed fields.

**Reusability**: Share schema files across multiple endpoints and even projects. Update a schema once, and all consuming endpoints get the validation update automatically.

## Getting Started

To add jsonschema4springboot to your Spring Boot 3 project, include the Maven dependency:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonschema4springboot</artifactId>
    <version>0.0.1</version>
</dependency>
```

Then register the argument resolver in your configuration:

```java
@Configuration
public class JsonValidationConfiguration implements WebMvcConfigurer {
    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(ValidateJsonSchemaArgumentResolver.newInstance());
    }
}
```

Finally, use the annotation on your controller parameters:

```java
@PostMapping("/users")
public ResponseEntity<?> createUser(@ValidateJsonSchema(schemaPath = "schemas/user.json", version = V202012) UserDto user) {
    // Validation happens before this method is called
    return ResponseEntity.ok(user);
}
```

### Requirements
- Java 17 or higher
- Spring Boot 3.x

This initial release is licensed under Apache License 2.0 and is available on Maven Central. We look forward to your feedback as we continue to develop the library.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For more information, see the [jsonschema4springboot repository](https://github.com/UnitVectorY-Labs/jsonschema4springboot) and the [v0.0.1 release](https://github.com/UnitVectorY-Labs/jsonschema4springboot/releases/tag/v0.0.1). Generated on March 18, 2026 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
