---
layout: post
title: "prompt2json v0.5.0: OpenAI Provider Attachment Support Now Available"
date: 2026-02-18 19:19:00 -0500
tags: ["prompt2json", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introducing Multimodal Support Across All Providers

On February 18, 2026, we released **prompt2json v0.5.0**, a significant update that brings attachment support to the OpenAI provider, unlocking multimodal capabilities for users across the entire ecosystem of supported models.

This release removes a key limitation: previously, only the Gemini provider could process images and PDFs alongside text prompts. Now, whether you're using OpenAI's GPT models, Google Cloud's OpenAI-compatible endpoints, Ollama, or other compatible services, you can include visual and document attachments with your structured JSON extraction tasks.

## What's New

### OpenAI Provider Attachment Support

The headline feature of v0.5.0 is full attachment support for the OpenAI provider. Users can now:

- **Process images** (PNG, JPG, JPEG, WebP) in their prompts
- **Analyze PDFs** alongside text instructions
- **Combine multimodal inputs** with structured JSON schema requirements

This works through inline base64-encoded content sent directly in API requests, making it compatible with any OpenAI-compatible Chat Completions endpoint that supports multimodal payloads.

### Example Usage

Here's a practical example of analyzing an image with OpenAI:

```bash
prompt2json \
    --provider openai \
    --prompt "Identify the character in this photo" \
    --system-instruction "Extract the character name, franchise they belong to, and your confidence level" \
    --schema '{"type":"object","properties":{"name":{"type":"string"},"franchise":{"type":"string"},"confidence":{"type":"integer","minimum":0,"maximum":100}},"required":["name","franchise","confidence"]}' \
    --attach picture.png \
    --model gpt-5-nano \
    --api-key "$OPENAI_API_KEY" \
    --pretty-print
```

### Documentation Updates

The release includes comprehensive documentation updates showing how to leverage attachments with both providers. Example workflows now cover:

- Image processing with character identification and object detection use cases
- PDF analysis for document extraction tasks
- Side-by-side examples comparing Gemini and OpenAI provider usage

## Why It Matters

This release unifies multimodal capabilities across prompt2json's supported providers, giving users the flexibility to choose their preferred LLM ecosystem without sacrificing functionality. Before v0.5.0, teams working with Ollama for local inference or OpenAI-compatible endpoints couldn't leverage image and document processing features. Now they can.

For shell automation and data pipeline workflows, this means:

- **Consistent interfaces** regardless of provider choice
- **Portable scripts** that work across different LLM backends
- **Unified structured output** from multimodal analysis tasks

The expanded attachment support opens up new use cases like automated image metadata extraction, document content parsing, and visual data analysis—all with the deterministic, schema-validated output prompt2json is known for.

## Get Started

### Installation

prompt2json v0.5.0 is available through all standard installation methods:

1. **Download binary** from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/prompt2json/releases/tag/v0.5.0)
2. **Install with Go:** `go install github.com/UnitVectorY-Labs/prompt2json@latest`
3. **Build from source:** Clone the repository and run `go build -o prompt2json`

### Provider Considerations

When using attachments with the OpenAI provider:

- Ensure your chosen model or endpoint supports multimodal Chat Completions
- Some Ollama setups may require specific model configurations for image processing
- File types supported include PNG, JPG, JPEG, WebP, and PDF

For Gemini users, the familiar size limits apply (7 MB per image, ~20 MB total per request).

### Upgrading from v0.4.0

This release has no breaking changes. Existing workflows using the `--prompt` flag or stdin piping will continue to work as before. The documentation has been updated to emphasize the `--prompt` flag syntax for new examples.

---

**Transparency Note:** This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was produced on February 18, 2026, referencing the prompt2json v0.5.0 release from https://github.com/UnitVectorY-Labs/prompt2json/releases/tag/v0.5.0. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
