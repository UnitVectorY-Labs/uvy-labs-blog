---
layout: post
title: "prompt2json v0.7.0: Decisions Mode for Jev Questions"
date: 2026-10-12 00:05:33 +0000
tags: ["prompt2json", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

prompt2json v0.7.0 was released on 2026-10-12. This release adds a first-class decisions operation built around Jev-style questions, expanding the CLI beyond schema-driven JSON generation to structured decision evaluation. Existing JSON mode workflows are unchanged, while new decisions mode, a native System One provider, and simulation support for OpenAI and Gemini providers make it practical to evaluate prompts as machine-readable decisions in shell pipelines and automation.

## What's new

Decisions mode introduces `--mode decisions` as a new operation alongside the default JSON mode. Instead of `--system-instruction` and `--schema`, users supply questions via `--questions` or `--questions-file`. Questions are validated against an embedded schema before any API call, checking for duplicate keys, trailing documents, blank identifiers, and conformance.

State input is provided through the familiar `--prompt`, `--prompt-file`, or stdin, with a new `--state-format text|json` option to interpret the state as plain text or JSON. Output follows the Jev-compatible envelope with model name, answers, and usage, with probabilities and confidence values serialized in decimal notation.

A native System One provider is now available via `--provider systemone` targeting the Typesafe API. Authentication uses `--api-key` or `SYSTEMONE_API_KEY` and decisions mode only. OpenAI and Gemini providers can simulate decisions mode, either one call per question or a combined batch call with `--batch-questions`. Token usage is summed across calls and all calls must resolve to the same model.

CLI ergonomics improve with colored help output that respects `NO_COLOR` and `TERM=dumb`, a `prompt2json --help` hint when required options are missing, rejection of positional arguments with a clear error, and stricter validation of mode and provider flag combinations. Documentation is expanded with `docs/DECISIONS.md`, updated usage and examples, a questions schema, and example files.

The toolchain is updated to Go 1.27.2 with dependency bumps for jsonschemaprofiles and actions/upload-artifact. A CI fix deduplicates govulncheck SARIF stacks to stabilize vulnerability reporting.

## Why it matters

Decisions mode lets users treat LLM evaluation as a repeatable, inspectable operation in Unix-style workflows. By accepting Jev questions and returning structured answers with scores and confidence, prompt2json enables batch decision evaluation, A/B testing of prompts, and integration with data pipelines without custom post-processing.

The native System One provider gives direct access to a purpose-built decisions API, while simulation through existing OpenAI and Gemini endpoints lowers adoption friction for teams already using those providers. Schema validation for questions and stricter CLI checks reduce silent errors and make scripts more reliable.

## Upgrade and installation

Pre-built binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64 are available on the v0.7.0 release page with checksums. Users building from source now require Go 1.27.2.

Existing JSON mode invocations continue to work unchanged. Users who previously relied on positional arguments should switch to `--prompt`/`--prompt-file` or stdin, as positional args are now rejected. Decisions mode requires exactly one of `--questions`/`--questions-file` and rejects schema-related flags, while JSON mode rejects decisions-specific flags. `--provider systemone` requires `--mode decisions` and `--batch-questions` is not valid with systemone.

See the repository README and `docs/DECISIONS.md` for examples and question format details.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/prompt2json release v0.7.0 published 2026-10-12. Article generated 2026-10-12. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
