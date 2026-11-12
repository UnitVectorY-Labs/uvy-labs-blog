---
layout: post
title: "prompt2json v0.7.2: Stricter JSON Validation and Toolchain Hardening"
date: 2026-11-12 09:00:00 -0500
tags: ["prompt2json", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

prompt2json v0.7.2 was released on 2026-11-12. This maintenance release hardens JSON handling and the build toolchain without changing the CLI interface, delivering more reliable schema-validated output from Gemini and OpenAI-compatible providers and safer decisions-mode workflows.

## What's new

The core change is a migration of all JSON handling to Go's encoding/json/v2. Parsing is now strict: duplicate object keys, invalid UTF-8, trailing documents after a valid value, and case-mismatched provider response fields are rejected instead of being silently accepted. Output formatting uses deterministic marshaling so repeated runs produce consistent, readable JSON.

Decision mode serialization was refined. DecisionQuestion fields now use `omitzero` tagging, which omits nil instructions or criteria while preserving empty strings and empty containers. This keeps the previous user-visible behavior for empty descriptions while aligning with the new JSON library.

The build toolchain is updated to Go 1.27.4, and weekly OSV-Scanner vulnerability scans are added alongside cleanup of superseded workflows. No new flags, providers, or configuration options are introduced.

## Why it matters

Stricter validation means malformed LLM responses that previously slipped through are now caught early with clear errors. Users processing batches of schema-validated JSON benefit from fewer silent data issues and more predictable output formatting. The decisions-mode adjustment preserves existing expectations for empty question fields while improving correctness under the new JSON implementation.

For operators, the Go 1.27.4 build and OSV scanning improve supply-chain hygiene without requiring runtime changes.

## Upgrade

Upgrading is drop-in. Install or update with:

```bash
go install github.com/UnitVectorY-Labs/prompt2json@latest
```

Prebuilt binaries for macOS, Linux, and Windows are available on the release page with checksums. No configuration changes are needed.

Because validation is stricter, inputs or LLM responses that contain duplicate keys, invalid UTF-8, trailing data, or case-mismatched fields will now error. This is intentional hardening.

Transparency note: this post was AI-generated using unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. It references the repository https://github.com/UnitVectorY-Labs/prompt2json, release v0.7.2 published 2026-11-12, and was generated on 2026-11-12. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
