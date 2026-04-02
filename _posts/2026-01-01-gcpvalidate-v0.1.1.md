---
layout: post
title: "gcpvalidate v0.1.1: Fixing Vertex AI Model Name Validation"
date: 2026-01-01 14:25:00 -0500
tags: ["gcpvalidate", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

Released on January 1, 2026, gcpvalidate v0.1.1 delivers a focused fix that makes the library more accurate for real-world Vertex AI usage. This update ensures that model names containing periods—like Google's own `gemini-2.5-flash`—now validate correctly instead of being incorrectly rejected.

## What's New

The star of this release is a corrected validation rule for Vertex AI model and endpoint names. In v0.1.0, the validator only allowed letters, numbers, dashes, and underscores in model names. This excluded period characters, which are actually valid according to Google Cloud's Vertex AI resource naming conventions.

**The fix:** The regular expression now includes periods as an allowed character:
- Old pattern: `^[a-zA-Z][a-zA-Z0-9_-]*$`
- New pattern: `^[a-zA-Z][a-zA-Z0-9_.-]*$`

This change means model names like `gemini-2.5-flash`, `model.v2`, and other period-containing identifiers now pass validation as they should.

Beyond the core fix, v0.1.1 includes enhanced documentation:
- Inline Go doc comments now explicitly mention that periods are allowed, with an explanation of why they appear in Google's model names
- The user-facing documentation at `docs/validators/vertexai.md` has been updated with the same clarity
- Both include a reference link to [Vertex AI Resource Naming](https://docs.cloud.google.com/vertex-ai/docs/general/resource-naming) guidelines

A new test case for `gemini-2.5-flash` ensures this real-world model name is properly validated going forward.

## Why It Matters

For developers building applications with Vertex AI, this fix removes an unexpected friction point. If your application uses gcpvalidate for configuration validation or input guard rails, you may have encountered situations where valid Google model names were rejected without clear reason.

This release aligns the library more closely with actual Google Cloud behavior:
- **No false rejections:** Valid model names from Google's published catalog now work as expected
- **Consistency:** The validator better reflects official Vertex AI naming rules
- **User confidence:** Applications can trust the validation results when working with real-world model identifiers

The change is purely additive—no previously valid names are affected. All model names that passed in v0.1.0 continue to pass; only period-containing names that were incorrectly rejected are now accepted.

## Upgrade and Installation

Upgrading to v0.1.1 is straightforward for Go module users:

```bash
go get github.com/UnitVectorY-Labs/gcpvalidate@v0.1.1
go mod tidy
```

There are no breaking changes, no API surface modifications, and no new dependencies. The library remains dependency-free in production code, relying only on the Go standard library.

This is a low-risk upgrade that you can apply with confidence.

---

**Transparency Note:** This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was generated based on research from the [gcpvalidate](https://github.com/UnitVectorY-Labs/gcpvalidate) repository, release v0.1.1 (January 1, 2026). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
