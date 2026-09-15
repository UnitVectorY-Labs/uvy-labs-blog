---
layout: post
title: "localmodelproxy v0.9.2 Released"
date: 2026-09-03 09:52:36 +0000
tags: ["localmodelproxy", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On September 3, 2026, UnitVectorY-Labs released localmodelproxy v0.9.2. This is a maintenance release focused on toolchain and CI updates. The proxy’s OpenAI-compatible API, configuration, and runtime behavior are unchanged from v0.9.1, making v0.9.2 a safe drop-in replacement for existing deployments.

## What's new

v0.9.2 contains no user-facing feature changes. The release updates the build toolchain and CI dependencies:

* Go version bumped to 1.27.x for building the project, with go.mod updated to require Go 1.27.0 and CI configured for Go 1.27.1
* CodeQL actions and SARIF upload actions refreshed to 4.37.9
* setup-uv updated to 10.0.1
* chromadb-repo-indexer action updated to 1.2.0

Pre-built binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64 are available with checksums, as in previous releases.

## Why it matters

The changes are internal to the build and security scanning pipeline. There are no API, config schema, or behavior changes for users running the proxy. Keeping the toolchain current helps ensure reliable builds and up-to-date static analysis for future development without affecting the experience of routing requests to local or remote models.

For operators, v0.9.2 means you can upgrade without changing configuration or expecting behavioral differences. For contributors building from source, the Go requirement moves forward to 1.27, aligning the project with the current Go release line.

## Upgrade and installation

Existing binary users can replace v0.9.1 with the v0.9.2 release for the same platform with no migration steps. Configuration in YAML and environment variables remains compatible.

If you build from source, update your Go toolchain to 1.27.x before running `go build`. The proxy continues to listen on `http://127.0.0.1:8080/v1` by default and exposes `GET /healthz`, `GET /v1/models`, and `POST /v1/chat/completions` as before.

Full release notes and assets are available at https://github.com/UnitVectorY-Labs/localmodelproxy/releases/tag/v0.9.2.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/localmodelproxy, release v0.9.2, published 2026-09-03. Date of generation: 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
