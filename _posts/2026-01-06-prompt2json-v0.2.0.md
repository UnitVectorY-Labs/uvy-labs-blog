---
layout: post
title: "prompt2json v0.2.0: Debugging Just Got Easier with Dry-Run Flags"
date: 2026-01-06 18:21:00 -0500
tags: ["prompt2json", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introduction

We're excited to announce the release of prompt2json v0.2.0, launched on January 6, 2026. This update brings powerful new debugging capabilities that make it easier than ever to understand and troubleshoot how your prompts are translated into API requests to Google's Vertex AI Gemini models.

For developers integrating LLM-powered JSON extraction into their automation workflows, visibility matters. With v0.2.0, you can now inspect exactly what the tool is sending to the API before it actually makes the call—helping you debug issues faster and test commands without incurring unnecessary costs.

## What's New

### Dry-Run Debugging Flags

The star of this release is the introduction of two new command-line flags designed for debugging:

**`--show-url`**  
See the exact Vertex AI endpoint URL that would be called. This is invaluable for verifying your regional endpoint configuration and understanding request routing.

```bash
echo "this is great" | prompt2json \
    --system-instruction "Classify sentiment" \
    --schema '{"type":"object","properties":{"sentiment":{"type":"string"}},"required":["sentiment"]}' \
    --project my-project \
    --location us-central1 \
    --model gemini-2.5-flash \
    --show-url

# Output:
# https://us-central1-aiplatform.googleapis.com/v1/projects/my-project/locations/us-central1/publishers/google/models/gemini-2.5-flash:generateContent
```

**`--show-request-body`**  
View the complete JSON request payload that would be sent to the Gemini API. Use this to verify your prompt formatting, schema structure, and how attachments are processed.

```bash
echo "this is great" | prompt2json \
    --system-instruction "Classify sentiment" \
    --schema '{"type":"object","properties":{"sentiment":{"type":"string"}},"required":["sentiment"]}' \
    --project my-project \
    --location global \
    --model gemini-2.5-flash \
    --show-request-body \
    --pretty-print
```

### How Dry-Run Mode Works

When you use either `--show-url` or `--show-request-body`:
- No actual API call is made
- No authentication credentials are required
- Output goes to STDOUT (or a file if you specify `--out`)
- You avoid hitting rate limits or incurring costs

## Why It Matters

Debugging LLM integrations has always been tricky. You send a prompt, expect JSON back, and when something goes wrong, you're often guessing whether the issue is with your schema, your prompt formatting, or how the request is being constructed.

With v0.2.0's dry-run flags, you can:
- **Verify endpoint configuration** before running production commands
- **Inspect request structure** to ensure your prompts and schemas are formatted correctly
- **Test safely** without burning through API quota or credits during development
- **Understand the tool better** by seeing exactly what data prompt2json sends to Gemini

This transparency turns prompt2json from a "black box" into a fully inspectable tool that fits naturally into Unix-style workflows where knowing what's happening at each step is essential.

## Documentation Improvements

Alongside the new flags, we've enhanced our documentation:
- A new workflow diagram showing how prompt2json processes requests
- Reorganized installation guide with clear billing warnings
- Comprehensive examples demonstrating dry-run usage in real scenarios

## Upgrade and Installation

Upgrading to v0.2.0 is straightforward—and completely backward compatible. All existing commands work exactly as before.

**Install via Go toolchain (recommended):**
```bash
go install github.com/UnitVectorY-Labs/prompt2json@v0.2.0
```

**Download a pre-built binary:**  
Visit the [v0.2.0 release page](https://github.com/UnitVectorY-Labs/prompt2json/releases/tag/v0.2.0) to download binaries for your platform.

**Build from source:**
```bash
git clone https://github.com/UnitVectorY-Labs/prompt2json.git
cd prompt2json
git checkout v0.2.0
go build -o prompt2json
```

## Get Started Today

Try the new dry-run flags with your existing commands to see exactly how prompt2json translates your inputs into API requests. Check out the full documentation on [Usage](https://unitvectory-labs.github.io/prompt2json/usage) and [Examples](https://unitvectory-labs.github.io/prompt2json/examples).

As always, we welcome your feedback and contributions. Head over to the [repository](https://github.com/UnitVectorY-Labs/prompt2json) to open issues or submit pull requests.

---

**Transparency Note:** This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 17, 2026, as part of an automated release documentation workflow. The tool used to generate this post is [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
