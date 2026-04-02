---
layout: post
title: "Introducing yamlequal: A Lightweight Go Library for YAML Semantic Equality"
date: 2025-02-26 02:20:54 -0500
tags: ["yamlequal", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the first public release of yamlequal (v0.0.1), a lightweight Go library for verifying the semantic equality of YAML files. Published on February 26, 2025, this initial release brings a simple yet powerful solution to developers who need to compare YAML content without getting tripped up by formatting differences or key ordering.

## What's New

The v0.0.1 release introduces two core functions that make YAML comparison straightforward:

- **`CompareFiles(filePath1, filePath2 string)`** - Compare two YAML files directly from disk
- **`CompareYAML(yamlContent1, yamlContent2 []byte)`** - Compare YAML content strings without file I/O

Both functions return clear results indicating whether the YAML documents are semantically equal, along with descriptive messages for any comparison outcomes or parsing errors.

Key capabilities available from launch:

| Capability | Description |
|------------|-------------|
| Semantic Comparison | Compares YAML data structure and values, ignoring formatting |
| Order Independence | Maps with same keys/values but different ordering are equal |
| Empty File Handling | Correctly identifies two empty files as equal |
| Error Reporting | Clear messages for parsing and I/O failures |

The library comes well-tested out of the box, with 13 test scenarios covering arrays, nested structures, whitespace differences, type comparisons, and edge cases like null versus empty values.

## Why It Matters

YAML is everywhere in modern development—configuration files, Kubernetes manifests, CI/CD pipelines, and more. But comparing YAML files has traditionally been frustrating. Standard string comparison fails when the same data is formatted differently or when keys appear in different orders, even though semantically they represent identical content.

yamlequal solves this by focusing on what actually matters: whether two YAML documents contain the same data. It unmarshals YAML into Go structures and uses deep reflection comparison, which naturally handles map key ordering differences. This means you can confidently verify that configuration files are equivalent, validate migration outputs, or test configuration transformations without worrying about cosmetic differences.

The library's lightweight design keeps dependencies minimal (relying on the trusted `gopkg.in/yaml.v3` package) while delivering reliable comparison for real-world use cases.

## Getting Started

Installing yamlequal is simple:

```bash
go get github.com/UnitVectorY-Labs/yamlequal
```

Then import it in your Go code:

```go
import "github.com/UnitVectorY-Labs/yamlequal"
```

The library requires Go 1.24.0 or compatible. It's released under the MIT License, making it free to use in both open-source and proprietary projects.

### Example Usage

Compare two YAML files:

```go
equal, msg, err := yamlequal.CompareFiles("config1.yaml", "config2.yaml")
if err != nil {
    log.Fatal(err)
}
fmt.Println(msg)  // "YAML content is equal" or "YAML content is NOT equal"
```

Compare YAML strings directly:

```go
yaml1 := []byte(`name: John\nage: 30`)
yaml2 := []byte(`age: 30\nname: John`)  // Same data, different order
equal, msg, err := yamlequal.CompareYAML(yaml1, yaml2)
```

## A Note on Versioning

As a v0.0.1 release, this is the initial public availability of yamlequal. While the core API is stable and well-tested, users should be aware that pre-1.0 releases may undergo API changes as the library evolves.

---

**About This Post**

This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For more information about yamlequal, visit the [GitHub repository](https://github.com/UnitVectorY-Labs/yamlequal) or check out the [v0.0.1 release](https://github.com/UnitVectorY-Labs/yamlequal/releases/tag/v0.0.1) published on February 26, 2025.

Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
