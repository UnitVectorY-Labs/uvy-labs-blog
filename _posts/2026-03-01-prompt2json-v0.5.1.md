---
layout: post
title: "prompt2json v0.5.1: Smarter Timeouts for Remote and Local LLMs"
date: 2026-03-01 09:00:00 -0500
tags: ["prompt2json", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on March 1, 2026, prompt2json v0.5.1 introduces significant improvements to how the tool handles network requests. This release focuses on robustness and flexibility, ensuring that whether you are calling a powerful remote API or running a local model, your JSON generation workflows remain stable and reliable.

## What's new

The headline feature of this release is the introduction of **Automatic HTTP Timeout Logic**. Instead of a one-size-fits-all timeout, prompt2json now intelligently determines the best timeout based on your destination:

- **Remote APIs:** For hosted services like Vertex AI (Gemini) or OpenAI, the default timeout has been increased from 60 seconds to **300 seconds (5 minutes)**. This provides more breathing room for complex prompts that may take longer to process.
- **Local APIs:** For requests sent to `localhost` or loopback addresses (such as those used by Ollama), the **timeout is now disabled by default**. This is a game-changer for local LLM inference, where generation speeds can vary wildly and often exceed standard timeout limits.
- **Manual Control:** You still have full control. If the automatic defaults don't fit your specific use case, you can explicitly set a timeout using the `--timeout SECONDS` flag.

Additionally, we've updated the documentation in `USAGE.md` and `EXAMPLES.md` to reflect these changes, and added a new conceptual project diagram to the `README.md` to help new users get up to speed quickly.

## Why it matters

Reliability is the core promise of prompt2json. When using LLMs in shell pipelines and automation scripts, a timeout is more than just an error—it's a break in the pipeline. 

By differentiating between remote and local endpoints, we've removed a major pain point for the local-first community. You no longer have to guess the maximum possible generation time for your local model or manually pass long timeout flags every time you run a command. At the same time, the increased remote timeout ensures that your production pipelines are less likely to fail during periods of high API latency.

## Getting started

Upgrading to v0.5.1 is simple. You can install the latest version directly using Go:

```bash
go install github.com/UnitVectorY-Labs/prompt2json@latest
```

This release is a non-breaking update, meaning your existing scripts will continue to work perfectly, but they will now benefit from more sensible and flexible timeout behaviors.

***

*This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`. It was generated on 2026-04-13 based on the release v0.5.1 of the [UnitVectorY-Labs/prompt2json](https://github.com/UnitVectorY-Labs/prompt2json) repository. Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
