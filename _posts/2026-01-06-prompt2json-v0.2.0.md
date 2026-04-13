---
layout: post
title: "Peek Under the Hood: prompt2json v0.2.0 Introduces Dry-Run Debugging"
date: 2026-01-06 09:00:00 -0500
tags: ["prompt2json", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on January 6, 2026, prompt2json v0.2.0 is all about enhancing observability and the developer experience. This release introduces powerful "dry-run" capabilities that let you inspect exactly what is being sent to the LLM, alongside a comprehensive overhaul of our documentation to help you get up and running faster.

## What's new

The highlight of v0.2.0 is the introduction of dry-run debugging flags. When working with complex JSON schemas and intricate system instructions, it can be difficult to know exactly how your request is being constructed before it hits the API.

To solve this, we've added two new flags:
- `--show-url`: Displays the exact API endpoint URL that will be called.
- `--show-request-body`: Outputs the full JSON request payload, including your schema and instructions.

Pair these with the `--pretty-print` flag to get a human-readable view of your request, allowing you to verify your configuration without spending a single token.

Beyond the CLI, we've completely revamped our documentation. We've added a new system architecture diagram to clarify the operational flow, expanded our example library in `docs/EXAMPLES.md`, and updated our installation guides to prioritize pre-built binaries for a smoother setup.

## Why it matters

Precision is everything when it comes to machine-reliable JSON. By exposing the request body, developers can now iterate on their prompt engineering with total transparency, ensuring that schemas are correctly formatted and system instructions are exactly as intended before deployment.

Additionally, the shift toward promoting pre-built binaries lowers the barrier to entry, making `prompt2json` accessible to users who may not have a Go environment configured. Under the hood, we've also optimized the JSON formatting pipeline, reducing overhead and ensuring a leaner, more efficient tool.

## Getting started with v0.2.0

Updating to v0.2.0 is seamless, as this release introduces no breaking changes; your existing workflows will continue to work without modification. 

We now recommend downloading the pre-built binaries directly from the [GitHub Releases](https://github.com/UnitVectorY-Labs/prompt2json/releases) page for the fastest and easiest installation.

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It was generated on 2026-04-13 based on the [v0.2.0 release](https://github.com/UnitVectorY-Labs/prompt2json/releases/tag/v0.2.0) of the [prompt2json](https://github.com/UnitVectorY-Labs/prompt2json) repository. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
