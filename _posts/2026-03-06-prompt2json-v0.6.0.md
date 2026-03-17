---
layout: post
title: "prompt2json v0.6.0: Schema Validation and Development Flexibility"
date: 2026-03-06 09:00:00 -0500
tags: [prompt2json, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

We're excited to announce the release of prompt2json v0.6.0, published on March 6, 2026. This update brings two major features that make working with LLM-powered JSON extraction more reliable and flexible: automatic schema validation before API calls and support for connecting to development servers with self-signed certificates.

## What's New

### Schema Profile Validation

For the first time, prompt2json validates your JSON schemas against provider-specific profiles before making any API calls. This means you'll catch compatibility issues early—saving both time and API costs.

Each provider gets an appropriate default profile:
- **OpenAI endpoint**: Uses `OPENAI_202602`
- **Gemini (Vertex AI)**: Uses `GEMINI_202602`

When a schema isn't compatible with your chosen provider, you'll see a clear error message on STDERR before any request is sent. If you need to override the default profile—for example, when using an OpenAI-compatible endpoint to call Gemini models—you can do so with the `--schema-profile` flag.

### Insecure TLS Mode

Developers working with local inference servers or development environments often deal with self-signed certificates. v0.6.0 introduces the `--insecure` flag (similar to `curl --insecure`) to skip certificate verification when needed. This is opt-in only—production behavior remains unchanged.

When verbose mode is enabled, prompt2json will warn you when TLS verification is disabled, so you always know what's happening under the hood.

### Configurable HTTP Timeouts

Building on improvements from the v0.5.x cycle, v0.6.0 includes smart timeout handling out of the box:
- **Remote APIs**: 300-second default timeout prevents hanging requests
- **Local servers** (Ollama, local LLMs): No timeout by default to accommodate slower inference

You can customize this with `--timeout N` for a specific deadline, or `--timeout 0` to disable timeouts entirely.

## Why It Matters

This release focuses on developer experience and reliability. Schema validation prevents the frustrating cycle of making API calls only to discover your schema isn't supported. The insecure TLS flag removes friction when experimenting with local models or development endpoints. And configurable timeouts give you control over request behavior whether you're hitting production APIs or running models on your own machine.

All new features are opt-in with sensible defaults, so upgrading is straightforward—no configuration changes required.

## Getting Started

### Install or Upgrade

**Via Go:**
```bash
go install github.com/UnitVectorY-Labs/prompt2json@v0.6.0
```

**From source:**
```bash
git clone https://github.com/UnitVectorY-Labs/prompt2json.git
cd prompt2json
git checkout v0.6.0
go build -o prompt2json
```

**Pre-built binaries** are available for Linux (amd64, arm64), macOS (amd64, arm64), and Windows (amd64) on the [GitHub releases page](https://github.com/UnitVectorY-Labs/prompt2json/releases/tag/v0.6.0).

### Try the New Features

Validate schemas against Gemini profiles:
```bash
prompt2json --provider gemini --schema-profile GEMINI_202602 --schema '{"type":"object"}' "Extract JSON from this text"
```

Connect to a local server with self-signed certs:
```bash
prompt2json --insecure --provider openai --base-url https://localhost:11434/v1 "Generate structured output"
```

Set custom timeouts for long-running inference:
```bash
prompt2json --timeout 600 "Process this large document into JSON"
```

---

**Transparency note:** This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The post was generated on March 6, 2026 for the UnitVectorY-Labs/prompt2json v0.6.0 release. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
