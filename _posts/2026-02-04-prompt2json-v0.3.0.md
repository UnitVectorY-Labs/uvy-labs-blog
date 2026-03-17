---
layout: post
title: "prompt2json v0.3.0: Multi-Provider Support Arrives"
date: 2026-02-04 00:25:55 -0500
tags: [prompt2json, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

# prompt2json v0.3.0: Multi-Provider Support Arrives

**Released:** February 4, 2026

We're excited to announce **prompt2json v0.3.0**, a major release that transforms our CLI tool from a single-provider utility into a universal LLM-to-JSON interface. This release brings OpenAI provider support, enabling you to use prompt2json with OpenAI models, Ollama local deployments, Google Cloud's OpenAI-compatible endpoint, or any server implementing the OpenAI Chat Completions API.

## What's New

### Multi-Provider Support

The headline feature of v0.3.0 is **OpenAI provider support**. You can now choose between two providers:

- **`gemini`** - Google Cloud's Vertex AI (the previous single provider)
- **`openai`** - OpenAI Chat Completions API and compatible endpoints

This flexibility means you can switch between providers based on your budget, infrastructure preferences, or model requirements—all with the same prompt2json interface.

### New Command-Line Flags

v0.3.0 introduces several new flags to support multi-provider functionality:

- **`--provider`** (required) - Choose your backend: `gemini` or `openai`
- **`--api-key`** - Supply bearer token authentication for the OpenAI provider
- **`--url`** - Override default API endpoints (works with both providers)
- **`--strict-schema`** - Enable OpenAI's strict mode for structured outputs

### Local LLM Support

With the `--url` flag and OpenAI provider, you can now point prompt2json at local LLM deployments:

```bash
echo "extract entities" | prompt2json \
    --provider openai \
    --url "http://localhost:11434/v1/chat/completions" \
    --model "llama3.2" \
    --schema '{"type": "object", "properties": {...}}'
```

This opens up privacy-sensitive use cases and eliminates cloud dependency for development and testing.

### OpenAI Structured Outputs

The new `--strict-schema` flag leverages OpenAI's structured outputs feature, which rejects responses that don't conform exactly to your JSON schema. This provides stronger guarantees for automation workflows.

## Breaking Changes

**Important:** If you're upgrading from v0.2.0, your scripts need a quick update. The `--provider` flag is now required:

**Before (v0.2.0):**
```bash
prompt2json --system-instruction "..." --schema '...' \
    --project "my-project" --location "us-central1" \
    --model "gemini-2.5-flash"
```

**After (v0.3.0):**
```bash
prompt2json --provider gemini --system-instruction "..." --schema '...' \
    --project "my-project" --location "us-central1" \
    --model "gemini-2.5-flash"
```

Note that `--project` and `--location` are now Gemini-only flags. Using them with the OpenAI provider will result in an error.

## Why It Matters

prompt2json solves a fundamental problem: **turning free-form LLM prompts into reliable, schema-validated JSON** for automation and batch processing. Before v0.3.0, you were locked into Google's Vertex AI. Now you have choices:

- **Cost optimization:** Run local models with Ollama for zero per-call costs
- **Model experimentation:** Test the same prompt across Gemini, GPT-4o, or open-source alternatives
- **Infrastructure flexibility:** Use cloud APIs during development and switch to local deployment in production
- **Vendor independence:** No more lock-in; your prompts work anywhere

### Provider Comparison

| Feature | Gemini | OpenAI |
|---------|--------|--------|
| Attachments (images/files) | ✅ Yes | ❌ Text-only |
| Requires API key | ADC or `--url` | Required (or custom `--url`) |
| Strict schema mode | ❌ | ✅ Via `--strict-schema` |
| Local deployment | ❌ | ✅ Via `--url` |

## Upgrade & Installation

### Install v0.3.0

**Using Go install:**
```bash
go install github.com/UnitVectorY-Labs/prompt2json@v0.3.0
```

**From source:**
```bash
git clone https://github.com/UnitVectorY-Labs/prompt2json.git
cd prompt2json
git checkout v0.3.0
go build -o prompt2json
```

**Pre-built binaries:** Available for macOS (Intel/Apple Silicon), Linux (x86_64/ARM/32-bit), and Windows from the [GitHub release page](https://github.com/UnitVectorY-Labs/prompt2json/releases/tag/v0.3.0).

### Getting Started with OpenAI Provider

1. Set your API key:
   ```bash
   export OPENAI_API_KEY="sk-..."
   ```

2. Run your first OpenAI prompt:
   ```bash
   echo "summarize this" | prompt2json \
       --provider openai \
       --model "gpt-4o" \
       --schema '{"type": "object", "properties": {"summary": {"type": "string"}}}'
   ```

### Documentation

Full usage guides, examples, and installation instructions are available in the [docs](https://unitvectory-labs.github.io/prompt2json/).

---

## Transparency Note

This release announcement was AI-generated using the **unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M** model on February 4, 2026, based on the v0.3.0 release of the [prompt2json](https://github.com/UnitVectorY-Labs/prompt2json) repository. The article was authored by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
