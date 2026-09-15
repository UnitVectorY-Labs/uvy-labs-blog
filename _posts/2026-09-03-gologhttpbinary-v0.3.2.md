---
layout: post
title: "gologhttpbinary v0.3.2 released"
date: 2026-09-03 09:52:20 +0000
tags: ["gologhttpbinary", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-09-03, UnitVectorY-Labs published v0.3.2 for gologhttpbinary. This is a maintenance and toolchain update that keeps the project current without changing how the server behaves. There are no new features or bug fixes for users, and the HTTP logging behavior remains identical to v0.3.1.

## What's new

v0.3.2 updates the build environment and CI hygiene. The Go module requirement is now `go 1.27.0` and the Dockerfile builder is based on `golang:1.27.1`, with CI workflows updated to use Go 1.27.1 for builds. The README Go Report Card badge was removed as a cosmetic cleanup.

Internally, CI actions across build, CodeQL, Docker build/dev, and release workflows were bumped to current minor versions, and checkout steps were hardened with `persist-credentials: false`. Two internal workflows were added for repository maintenance: Semgrep static analysis and a ChromaDB repository indexer. These changes affect the project's automation and security posture, not the running server.

No changes were made to `main.go` or application logic. The server still logs incoming requests with path, headers, and base64-encoded body, responds with HTTP 200 and body `OK`, and is intended for debugging binary payloads in container environments.

## Why it matters

For users, v0.3.2 is a drop-in update with no breaking changes or configuration differences. The application API and Docker image usage are unchanged, so existing deployments continue to work without modification. The toolchain upgrade ensures future builds are based on a supported Go release and that CI dependencies remain fresh and secure.

The internal security hardening and added scanning workflows improve the project's maintenance quality without affecting runtime behavior. You can upgrade confidently knowing the observable behavior is the same.

## Upgrading

If you use the published Docker image, pull the latest tag from `ghcr.io/unitvectory-labs/gologhttpbinary`. The image is built from the updated toolchain but provides the same logging interface.

If you build from source, ensure Go 1.27 or later is installed to satisfy `go.mod`. No environment variables or deployment steps change.

This post was AI-generated. Model used: unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Repository: UnitVectorY-Labs/gologhttpbinary, Release: v0.3.2, Date of generation: 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
