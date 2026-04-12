---
layout: post
title: "Updating the Foundations: jsonschema4springboot v0.0.2"
date: 2024-06-28 09:00:00 -0500
tags: ["jsonschema4springboot", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On June 28, 2024, we released version v0.0.2 of `jsonschema4springboot`. This maintenance release focuses on strengthening the library's foundations by updating core dependencies and build tooling, ensuring a more stable and secure environment for your Spring Boot 3 applications.

### What's new

This release is primarily focused on dependency management to keep the project current with the evolving Java and Spring ecosystems. Key updates include:

- **Spring Framework & Jakarta EE**: Updated `spring-web` to 6.1.10 and `jakarta.servlet-api` to 6.1.0, ensuring better compatibility and stability within the Spring Boot 3 environment.
- **Enhanced Validation**: The underlying `json-schema-validator` has been bumped to 1.4.3, bringing the latest improvements in JSON Schema processing.
- **Tooling Refresh**: We've updated our build plugins and CI/CD pipeline, including Codecov and Maven plugins, to improve the reliability of our release process.

### Why it matters

While v0.0.2 doesn't introduce new features, keeping dependencies up to date is critical for any production-ready library. By aligning with the latest stable versions of Spring and Jakarta EE, we reduce the risk of version conflicts in your projects and ensure you benefit from the latest security patches and performance optimizations provided by the upstream maintainers.

### Upgrade and Installation

Upgrading to v0.0.2 is straightforward and low-risk, as there are no breaking changes. Simply update the version in your `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>jsonschema4springboot</artifactId>
    <version>0.0.2</version>
</dependency>
```

We encourage all users to move to this version to ensure they are running on the most current and secure set of dependencies.

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It is based on the [jsonschema4springboot](https://github.com/UnitVectorY-Labs/jsonschema4springboot) repository and the [v0.0.2 release](https://github.com/UnitVectorY-Labs/jsonschema4springboot/releases/tag/v0.0.2) published on 2024-06-28. Generated on 2026-04-12 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*