---
layout: post
title: "Introducing prompt2json v0.1.0: LLM-Powered JSON Generation for Shell Workflows"
date: 2025-12-20 20:04:02 -0500
tags: [prompt2json, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

Today we're excited to announce the launch of `prompt2json` v0.1.0, a Unix-style command-line tool that transforms natural language prompts into schema-validated JSON output. Released on December 20, 2025, this initial release brings production-ready capabilities for integrating LLM-powered data extraction directly into shell scripts and automation pipelines.

## What's New

As the inaugural release, v0.1.0 establishes the core functionality that makes `prompt2json` a reliable tool for LLM interactions in automated workflows:

### Schema-Validated JSON Output

The tool validates all LLM responses against user-provided JSON schemas before outputting results. The `--pretty-print` flag provides human-readable formatting, while validation failures trigger exit code 4 for easy detection in shell scripts.

### Multi-Provider Support

Works seamlessly with both Google Cloud's Vertex AI (Gemini models) and any OpenAI-compatible endpoint. This flexibility lets you use commercial APIs, self-hosted models via Ollama, or other compatible services from a single CLI interface.

### Pipeline-Friendly Design

Built to follow Unix conventions—valid JSON goes to STDOUT, diagnostics go to STDERR, and meaningful exit codes enable reliable pipeline composition with tools like `jq`, `grep`, and `awk`.

### Configurable Timeout Protection

The `--timeout` flag lets you set HTTP request timeouts (default: 60 seconds), preventing hung operations in automated workflows.

### Enhanced Diagnostics

Verbose mode provides detailed insight into input sources, schema compilation status, token usage, and validation results—without contaminating machine-readable output.

## Why It Matters

Integrating LLMs into shell scripts has historically been challenging. Raw LLM responses are often unreliable for downstream processing, requiring brittle regex parsing or complex post-processing logic. `prompt2json` solves this by:

- **Enforcing structure**: JSON Schema validation ensures outputs match expected formats before they reach your scripts
- **Enabling automation**: Clean STDOUT/STDERR separation means pipelines work predictably
- **Reducing friction**: Single-command interface replaces custom Python or Node.js glue code
- **Supporting experimentation**: Repeatable, inspectable prompt workflows from the command line

This release represents a significant step toward treating LLM calls as deterministic interfaces rather than interactive sessions—making them viable for CI/CD pipelines, data processing jobs, and repeatable automation tasks.

## Getting Started

### Installation

Install directly from source using Go:

```bash
go install github.com/UnitVectorY-Labs/prompt2json@latest
```

Or download pre-built binaries from the [v0.1.0 release page](https://github.com/UnitVectorY-Labs/prompt2json/releases/tag/v0.1.0). Assets are available for Windows, macOS (Intel and Apple Silicon), and Linux across multiple architectures.

### Quick Example

Here's a simple example extracting structured data from text:

```bash
echo "Review this product feedback: Great service but slow delivery" | \
  prompt2json \
  --system-instruction "Extract sentiment and key topics" \
  --schema '{"type":"object","properties":{"sentiment":{"type":"string"},"topics":{"type":"array","items":{"type":"string"}}}}' \
  --project your-gcp-project \
  --location us-central1 \
  --model gemini-2.5-flash \
  --pretty-print
```

### Authentication

For Gemini (Vertex AI), authenticate using Google Application Default Credentials:

```bash
gcloud auth application-default login
```

Or set a service account key:

```bash
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json
```

For OpenAI-compatible providers, supply your API key via `--api-key` or the `OPENAI_API_KEY` environment variable.

---

### A Note on AI Assistance

This release announcement was drafted using an AI model (unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M) to help generate user-facing documentation. The code and features described here were developed through collaboration between human contributors and GitHub Copilot coding agents. For full transparency, this post was AI-generated on March 17, 2026, by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
