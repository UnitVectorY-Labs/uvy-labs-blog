---
layout: post
title: "prompt2json v0.5.0: Bringing Multimodal Power to OpenAI"
date: 2026-02-19 09:00:00 -0500
tags: ["prompt2json", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on February 19, 2026, prompt2json v0.5.0 significantly expands the tool's capabilities by bringing multimodal support to the OpenAI provider. This update empowers users to extract structured JSON data from not just text, but also images and documents, widening the scope of automation and data processing possible with the CLI.

## What's new

The headline feature of this release is the addition of attachment support for the OpenAI provider. Previously a Gemini-exclusive feature, the `--attach` flag now works with OpenAI-compatible endpoints.

- **Visual and Document Analysis:** You can now attach images (PNG, JPG, JPEG, WEBP) and PDF files directly to your prompts. These are sent as base64-encoded data, allowing the LLM to "see" the content and return a structured JSON response based on your schema.
- **Enhanced Compatibility:** We've added detailed documentation and examples for using OpenAI-compatible endpoints, including a guide for targeting the OpenAI-compatible API on Google Cloud's Vertex AI.
- **Updated Examples:** Documentation has been refreshed with modern model references like `gpt-5-nano` and `llama3.2` to ensure you're using the best tools for the job.

## Why it matters

For many users, the most valuable data is locked in images or PDF documents. By integrating multimodal support into the OpenAI provider, prompt2json makes it trivial to build shell pipelines that convert visual information into machine-readable JSON.

Whether you are automating the extraction of data from invoices, analyzing screenshots for reports, or parsing technical PDFs, you can now do so using your preferred OpenAI-compatible model. This removes the limitation of being tied to a single provider for multimodal tasks and allows for a more flexible, composable architecture in your automation scripts.

## Getting started

Upgrading to v0.5.0 is simple. Use the following Go command to install the latest version:

```bash
go install github.com/UnitVectorY-Labs/prompt2json@latest
```

*Note: While prompt2json now supports sending multimodal payloads to OpenAI-compatible endpoints, please ensure that the specific model and endpoint you are using also support multimodal inputs.*

***

This post was AI-generated.
Model used: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL
Repository: [UnitVectorY-Labs/prompt2json](https://github.com/UnitVectorY-Labs/prompt2json)
Release: [v0.5.0](https://github.com/UnitVectorY-Labs/prompt2json/releases/tag/v0.5.0)
Date: 2026-04-13
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
