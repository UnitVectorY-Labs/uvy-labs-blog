---
layout: post
title: "prompt2json v0.5.1: Intelligent HTTP Timeouts for Better Local and Remote API Support"
date: 2026-03-01 08:48:40 -0500
tags: ["prompt2json", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the release of prompt2json v0.5.1, a focused update that makes working with local LLM servers smoother while giving you better control over API timeouts for remote services. Released on March 1, 2026, this version introduces intelligent HTTP timeout handling that automatically adapts to your setup.

## What's New

### Intelligent HTTP Timeout Handling

The headline feature in v0.5.1 is smarter timeout management for API requests. The tool now detects whether you're calling a remote service or a local server and applies the appropriate default:

- **Remote APIs (OpenAI, Vertex AI):** 300 seconds (5 minutes) default timeout
- **Localhost URLs (Ollama, local inference servers):** Timeout disabled by default

This means local LLM servers like Ollama won't get cut off prematurely during longer generation tasks, while remote API calls still have reasonable safeguards against hanging requests.

You retain full control with the `--timeout` flag:
- Leave it unspecified for automatic behavior
- Set `-1` for auto mode (same as omitting the flag)
- Use `0` to explicitly disable timeout
- Specify any positive value for a fixed timeout

### Visual Guide Added

The README now includes a diagram that illustrates how prompt2json fits into your workflow, making it easier to understand the tool's place in your command-line pipeline.

### Developer Convenience

A new `justfile` provides convenient shortcuts for common tasks:
- `just build` - Build the Go application
- `just test` - Run the test suite
- `just docs-serve` - Serve documentation locally

## Why It Matters

For users working with local inference servers, this release removes a significant friction point. Previously, the fixed 60-second timeout could interrupt slower model generations, especially with larger models or complex prompts. The new localhost detection ensures your local LLM has the time it needs to complete requests.

Remote API users benefit from the increased default timeout (5 minutes vs. 60 seconds), which accommodates more complex extraction tasks without hitting premature timeouts. This is particularly valuable when using prompt2json for data extraction, structured summarization, or batch processing where response times may vary.

The intelligent defaults mean you can use prompt2json across different setups—cloud APIs and local servers—without constantly adjusting timeout parameters. It's a small change that makes the tool more polished and production-ready.

## Getting Started

Upgrade to v0.5.1 with one of these methods:

```bash
# Install via Go
go install github.com/UnitVectorY-Labs/prompt2json@v0.5.1

# Or build from source
git clone https://github.com/UnitVectorY-Labs/prompt2json.git
cd prompt2json
git checkout v0.5.1
go build -o prompt2json
```

**Backward Compatibility:** This release has no breaking changes. If you relied on the previous 60-second timeout default, simply add `--timeout 60` to your commands to preserve that behavior.

Explore the full documentation in the [repository](https://github.com/UnitVectorY-Labs/prompt2json) and check out the [examples](https://github.com/UnitVectorY-Labs/prompt2json/blob/main/docs/EXAMPLES.md) to see how you can integrate prompt2json into your own workflows.

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 17, 2026. Source: [UnitVectorY-Labs/prompt2json](https://github.com/UnitVectorY-Labs/prompt2json) (v0.5.1). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
