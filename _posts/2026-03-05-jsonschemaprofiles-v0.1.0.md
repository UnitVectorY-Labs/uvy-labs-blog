---
layout: post
title: "Announcing jsonschemaprofiles v0.1.0: Validate JSON Schemas for LLM Provider Structured Outputs"
date: 2026-03-05 02:21:10 -0500
tags: [jsonschemaprofiles, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

We're excited to announce the launch of jsonschemaprofiles v0.1.0, released on March 5, 2026. This is the first available version of a Go library and CLI tool that solves a critical challenge for developers working with large language models: validating JSON Schemas against provider-specific structured output requirements.

When integrating LLMs like OpenAI or Google Gemini into applications, each provider accepts only specific subsets of JSON Schema for their structured output features. A schema that works perfectly with one provider may be rejected by another. jsonschemaprofiles bridges this gap by validating your schemas before you send them to the API, catching compatibility issues early in development.

## What's New

This initial release delivers a complete, production-ready implementation with several powerful capabilities:

### Two-Phase Validation Engine
The core innovation is a two-phase validation approach that combines structural and semantic checking:
- **Phase 1** validates your schema against embedded meta-schemas using JSON Schema Draft 2020-12
- **Phase 2** runs provider-specific code checks for constraints that can't be expressed in pure JSON Schema, including limits on property counts, traversal depth, and semantic invariants

### Four Provider Profiles Available
Choose from four pre-configured profiles targeting specific providers:
- `OPENAI_202602` - OpenAI Structured Outputs with strict limits (5000 properties, depth ≤10, 120K string budget)
- `GEMINI_202602` - Gemini baseline with object discipline and property ordering support
- `GEMINI_202503` - Gemini 2.0 with required property ordering for all objects
- `MINIMAL_202602` - A conservative subset compatible across multiple providers

### Schema Coercion
Non-compliant schemas can be automatically repaired with deterministic, traceable changes. Choose from conservative mode (minimal modifications) or permissive mode (more aggressive fixes), and preview changes before applying them.

### Command-Line Interface
Get started immediately without writing any code:
```bash
# List available profiles
jsonschemaprofiles profiles list

# Validate a schema against OpenAI's requirements
jsonschemaprofiles validate schema --profile OPENAI_202602 --in my_schema.json

# Fix a schema automatically
jsonschemaprofiles coerce schema --profile GEMINI_202503 --in broken.json --out fixed.json
```

### Pre-Built Binaries
Don't have Go installed? Download ready-to-use binaries for Linux, macOS, and Windows (supporting both amd64 and arm64 architectures).

## Why It Matters

Developers building with LLM structured outputs face a frustrating reality: documentation is scattered, requirements change frequently, and there's no standard way to verify schema compatibility until you hit the API. A rejected schema means debugging sessions, failed requests, and delayed deployments.

jsonschemaprofiles shifts validation left in your development workflow. Instead of discovering incompatibilities at runtime when your API call fails, validate schemas during build time, in CI/CD pipelines, or as part of your local development loop.

The two-phase architecture is particularly powerful because it acknowledges that provider requirements span both structural constraints (which keywords are allowed) and semantic rules (how deep can your schema nest, how many properties can you have). By separating these concerns, the tool provides precise feedback about what's wrong and why.

For teams working across multiple providers, the ability to validate against different profiles from a single tool eliminates the need to maintain separate validation logic for each integration.

## Getting Started

Install via Go:
```bash
go install github.com/UnitVectorY-Labs/jsonschemaprofiles/cmd/jsonschemaprofiles@latest
```

Or download pre-built binaries from the [releases page](https://github.com/UnitVectorY-Labs/jsonschemaprofiles/releases).

To use it as a Go library in your own projects:
```go
import jsp "github.com/UnitVectorY-Labs/jsonschemaprofiles"

report, err := jsp.ValidateSchema(jsp.OPENAI_202602, schemaBytes, nil)
```

Full documentation including usage examples, profile-specific guides, and library API reference is available in the repository's `docs/` directory.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Reference: https://github.com/UnitVectorY-Labs/jsonschemaprofiles/releases/tag/v0.1.0, released March 5, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
