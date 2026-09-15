---
layout: post
title: "hallucinateapi v0.1.1"
date: 2026-09-03 09:52:26 +0000
tags: ["hallucinateapi", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

hallucinateapi v0.1.1 was released on September 3, 2026. This maintenance release focuses on improving documentation and developer experience without changing application behavior. The project continues to provide an OpenAPI-driven LLM-backed API server that implements GET and POST operations from an OpenAPI 3.0 specification using LLM instructions, with support for Gemini on Vertex AI and OpenAI-compatible providers.

## What's new

The primary updates in v0.1.1 are documentation and build improvements:

- A new centralized installation guide has been added in `docs/INSTALL.md`. The guide covers downloading pre-built binaries from GitHub Releases, installing with `go install github.com/UnitVectorY-Labs/hallucinateapi@latest`, and building from source with `go build -o hallucinate`. It also documents authentication setup for the Gemini provider using Google Cloud Application Default Credentials or a service account, and for OpenAI providers via `OPENAI_API_KEY` or `--api-key`.
- Documentation navigation was reordered to surface installation first. `docs/INSTALL.md` is now nav_order 2, with usage, prompts, and OpenAPI docs following.
- The README now includes a GitHub release badge for quick visibility of the latest version.
- Build requirements were updated for current toolchains: `go.mod` is now `go 1.27.0` and the Dockerfile builder uses `golang:1.27.1`. Dependency `github.com/pb33f/libopenapi` was bumped from 0.38.2 to 0.38.7.
- No application source files changed between v0.1.0 and v0.1.1. `internal/`, `main.go`, prompts, examples, and test data remain unchanged, so runtime behavior is identical.

## Why it matters

Clear onboarding is critical for adoption. The new installation guide reduces friction for new users by providing explicit steps for binaries, `go install`, and source builds, plus concrete authentication examples for both Gemini and OpenAI providers. Raising the Go toolchain requirement and updating dependencies keeps the project aligned with supported versions and security updates, while the release badge makes current version tracking immediate.

These changes make it easier to get started with hallucinateapi and maintain the project without impacting existing deployments.

## Upgrade and installation

There are no breaking changes and no migration steps required. Users already running v0.1.0 can continue unchanged.

If you build from source, ensure Go 1.27 or newer is installed:

```bash
go install github.com/UnitVectorY-Labs/hallucinateapi@latest
```

Or build locally:

```bash
git clone https://github.com/UnitVectorY-Labs/hallucinateapi
cd hallucinateapi
go build -o hallucinate
```

Full installation and authentication instructions are in `docs/INSTALL.md`. The server remains configured via CLI flags and environment variables, with Swagger UI at `/` and spec served at `/openapi.json` or `/openapi.yaml`.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Repository: UnitVectorY-Labs/hallucinateapi, Release: v0.1.1, Date of generation: 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
