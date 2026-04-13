---
layout: post
title: "prompt2json v0.3.0: Breaking Boundaries with Multi-Provider Support"
date: 2026-02-04 09:00:00 -0500
tags: ["prompt2json", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on February 4, 2026, prompt2json v0.3.0 marks a major milestone in the project's evolution. Previously a Gemini-centric tool, prompt2json has now expanded into a versatile, multi-provider utility, allowing users to bring the power of deterministic, schema-validated JSON to a wider array of Large Language Models.

### What's new

The headline feature of v0.3.0 is the introduction of **Multi-Provider Support**. By introducing the `--provider` flag, the tool now supports both Google's Gemini and OpenAI-compatible Chat Completions APIs.

**OpenAI and Local LLM Integration**
Users can now leverage OpenAI's state-of-the-art models or run local LLMs via servers like Ollama. This integration brings full support for structured outputs via `json_schema`, ensuring that the LLM adheres strictly to your defined output shape. For those using OpenAI, a new `--strict-schema` flag enables "Strict" mode for even more reliable validation.

**Universal Control**
To make the tool more flexible across different environments, v0.3.0 introduces universal API overrides. The `--url` flag allows you to point the tool at any compatible endpoint, and the `--api-key` flag provides a consistent way to handle authentication regardless of the provider you are using.

**Enhanced Gemini Experience**
While expanding its horizons, prompt2json continues to support Gemini's unique capabilities, including the ability to attach images and PDFs to prompts. Additionally, Gemini users can now use the universal `--api-key` flag as an alternative to Application Default Credentials.

### Why it matters

For developers and automation engineers, the value of prompt2json lies in its ability to turn non-deterministic LLMs into reliable interfaces. By expanding provider support, this reliability is no longer locked to a single ecosystem.

Whether you need the massive context windows of Gemini, the widespread availability of OpenAI, or the privacy and cost-efficiency of a local Ollama instance, prompt2json provides a unified CLI experience. You can now swap models and providers while keeping your JSON schemas and shell pipelines exactly the same.

### Getting Started and Upgrading

If you are upgrading from a previous version, please note that the **`--provider` flag is now mandatory**. To keep your existing workflows running, simply add `--provider gemini` to your commands.

To try out the new OpenAI support:
1. Add `--provider openai`.
2. Specify your model (e.g., `--model gpt-4o`).
3. Provide your key via `--api-key` or the `OPENAI_API_KEY` environment variable.

For local LLMs, use the `--url` flag to specify your local server address.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Based on the release of prompt2json v0.3.0 on February 4, 2026. Generated on April 13, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
