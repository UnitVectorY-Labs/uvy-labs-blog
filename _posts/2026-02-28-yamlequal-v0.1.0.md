---
layout: post
title: "yamlequal v0.1.0: Bringing Full Semantic Equality to Multi-Document YAML"
date: 2026-02-28 09:00:00 -0500
tags: ["yamlequal", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on February 28, 2026, `yamlequal` v0.1.0 marks a significant step forward in the library's evolution. This release transforms the tool from an initial prototype into a robust utility for developers who need to ensure that their YAML configurations are semantically identical, regardless of formatting or structure.

## What's new

The headline feature of v0.1.0 is comprehensive support for multi-document YAML streams. Previously, `yamlequal` would only evaluate the first document it encountered in a file. Now, `CompareFiles` and `CompareYAML` iterate through every document in a stream, ensuring that the entire sequence of data is identical.

Beyond multi-document support, this release brings a massive leap in reliability. We have achieved 100% test coverage, with rigorous verification of:
- **YAML Anchors and Aliases**: Ensuring complex references are resolved and compared correctly.
- **Semantic Noise**: Confirming that comments and formatting changes are ignored.
- **Robust Error Handling**: Better feedback for invalid YAML syntax or missing files.

## Why it matters

For many teams, YAML is more than just a single config file; it's often a stream of documents used in Kubernetes manifests or complex CI pipelines. By supporting multi-document streams, `yamlequal` becomes a viable tool for validating these real-world workloads, preventing silent failures where only the first document was being checked.

The commitment to 100% test coverage means you can integrate `yamlequal` into your critical paths—such as automated testing or deployment gates—with full confidence that the semantic equality check is accurate and stable.

## Closing

Upgrading to v0.1.0 is seamless, as there are no breaking changes to the public API. If you are using Go 1.26.0 or later, you can simply update your dependency to the latest version.

Whether you are managing large-scale infrastructure or just want a cleaner way to compare config files in your tests, `yamlequal` provides the precision you need.

---

*This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL` on 2026-04-14. Reference: [UnitVectorY-Labs/yamlequal](https://github.com/UnitVectorY-Labs/yamlequal), Release [v0.1.0](https://github.com/UnitVectorY-Labs/yamlequal/releases/tag/v0.1.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
