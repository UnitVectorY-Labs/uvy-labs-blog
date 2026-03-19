---
layout: post
title: "yamlequal v0.1.0: Correct Multi-Document YAML Comparison"
date: 2026-02-28 17:30:00 -0500
tags: [yamlequal, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

We're excited to announce the release of yamlequal v0.1.0, a significant update that fixes a critical bug in multi-document YAML handling and achieves 100% test coverage.

Released on February 28, 2026, this version ensures that YAML files with multiple documents are now compared correctly—no more silently ignoring subsequent documents. For developers working with YAML configuration files, data pipelines, or Kubernetes manifests, this release brings improved reliability and accuracy to your YAML comparisons.

## What's New

### Multi-Document YAML Support Fixed

The headline change in v0.1.0 is proper handling of multi-document YAML streams. In previous versions, only the first document in a YAML file was compared, while additional documents were silently ignored. This could lead to incorrect equality results when comparing files with multiple YAML documents.

Now, yamlequal uses a decoder-based approach that parses and compares **all** documents in a YAML stream. Whether your YAML file contains one document or twenty, they will all be included in the comparison.

### New Validated Behaviors

Beyond the multi-document fix, v0.1.0 now properly validates several edge cases:

- **Document count differences:** Files with different numbers of documents are now correctly identified as unequal
- **YAML anchors and aliases:** Anchor syntax is handled semantically—expanded anchors compare equal to their inline equivalents
- **Comments:** Comments in YAML files continue to be ignored, ensuring comparison focuses on data rather than documentation

### 100% Test Coverage

This release achieves complete test coverage across all code paths. New test suites cover multi-document scenarios, anchor handling, comment filtering, and error conditions. This investment in testing means you can trust yamlequal to handle edge cases correctly now and in future versions.

## Why It Matters

If you've ever compared YAML files containing multiple documents separated by `---`, v0.1.0 fixes a silent bug that could have affected your results. Imagine comparing two Kubernetes configuration files or database migration scripts with multiple documents—previous versions would only check the first document, potentially missing critical differences in subsequent ones.

This isn't just a bug fix; it's a correctness guarantee. The library now does what users expect: compares entire YAML files for semantic equality, regardless of how many documents they contain.

For teams using yamlequal in CI/CD pipelines, configuration validation, or testing frameworks, this release eliminates a class of false positives where unequal files could have been incorrectly reported as equal.

## Upgrade and Installation

Upgrading to v0.1.0 is straightforward—there are **no breaking changes** and the public API remains unchanged. Your existing code will continue to work without modifications.

To install or update:

```bash
go get github.com/UnitVectorY-Labs/yamlequal@v0.1.0
```

**Requirements:** Go 1.26 or later

The library requires Go 1.26 for modern type syntax (`any` instead of `interface{}`), but this is a straightforward requirement for most Go projects in 2026.

### What to Expect When Upgrading

- **No code changes needed:** The API signature remains identical
- **Improved correctness:** Multi-document YAML files will now compare accurately
- **Same behavior for single documents:** Files with one document behave exactly as before

## Getting Started

yamlequal is a lightweight Go library for semantic YAML file comparison. It ignores formatting differences (whitespace, indentation) and key ordering, focusing only on whether the data is the same.

Basic usage:

```go
import "github.com/UnitVectorY-Labs/yamlequal"

// Compare two files
equal, err := yamlequal.CompareFiles("config1.yaml", "config2.yaml")

// Or compare content strings directly
equal, err := yamlequal.CompareYAML(content1, content2)
```

For complete documentation and examples, visit the [repository](https://github.com/UnitVectorY-Labs/yamlequal).

---

**Transparency Note:** This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Article generated on March 19, 2026. Source repository: [UnitVectorY-Labs/yamlequal](https://github.com/UnitVectorY-Labs/yamlequal/releases/tag/v0.1.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
