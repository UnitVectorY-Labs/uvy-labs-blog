---
layout: post
title: "prompt2json v0.7.1 — Security Rebuild Release"
date: 2026-10-22 00:50:29 -0500
tags: ["prompt2json", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

prompt2json v0.7.1 was released on 2026-10-22. This release is a security-focused rebuild with no functional changes from v0.7.0. The binaries are rebuilt with Go 1.27.3 to distrust compromised eMudhra intermediate CAs referenced in GO-2026-6809 / CVE-2026-111943, ensuring the toolchain trust store used during builds is up to date.

## What's new

- Security rebuild: v0.7.1 artifacts are built with Go 1.27.3 to apply the CA distrust fix for eMudhra intermediate certificates.
- No functional code changes: CLI behavior, providers, JSON Schema enforcement, decisions mode, and output format are unchanged from v0.7.0.
- CI maintenance: dependency pins were updated in workflows, including Go version in govulncheck and CodeQL action bumps from 4.38.2 to 4.38.3, and astral-sh/setup-uv 10.2.0 to 10.3.0. These changes do not affect end users.

## Why it matters

prompt2json is designed to turn free-form prompts into machine-reliable JSON for automation in bash workflows, with schema-validated outputs for Vertex AI Gemini and OpenAI-compatible Chat Completions endpoints. Keeping the build toolchain trustworthy is essential for users who rely on pre-built binaries in scripts and data pipelines. Upgrading to v0.7.1 ensures you are running binaries built with a hardened trust store, with zero changes to how the tool behaves.

## Upgrade and installation

This release is fully backward compatible. No workflow changes are required.

Install or update via:

```bash
go install github.com/UnitVectorY-Labs/prompt2json@latest
```

Or download the pre-built assets for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, and windows variants from the v0.7.1 release page on GitHub. Existing flags, schemas, and provider configurations continue to work as before.

*This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/prompt2json release v0.7.1 published 2026-10-22, article generated 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
