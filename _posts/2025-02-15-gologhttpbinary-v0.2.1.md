---
layout: post
title: "gologhttpbinary v0.2.1: Improved Build Reliability with Static Linking"
date: 2025-02-15 16:16:21 -0500
tags: [gologhttpbinary, unsloth-Qwen3.5-122B-A10B-GGUF-Q4_K_M]
---

## Introduction

On February 15, 2025, we released gologhttpbinary v0.2.1, a maintenance-focused update that strengthens the build quality and deployment reliability of this lightweight HTTP debugging tool. While this release doesn't introduce new features, it delivers important infrastructure improvements that make your deployments more robust and portable across different environments.

## What's New

### Static Binary Compilation

The headline improvement in v0.2.1 is the introduction of static binary compilation. By enabling `CGO_ENABLED=0` during the build process, the resulting binary is now fully self-contained with no external C library dependencies. This change produces a purely Go binary that works consistently across different Linux distributions and container environments.

### Go Runtime Update

This release upgrades the underlying Go runtime from 1.23.5 to 1.24.0, bringing you access to the latest performance optimizations and security updates from the Go team. The update flowed through three incremental bumps during this release cycle, ultimately landing on Go 1.24.0 for both the build pipeline and runtime.

## Why It Matters

For developers using gologhttpbinary in their development and testing workflows, these changes translate to fewer deployment headaches. Static linking eliminates a common source of container compatibility issues—you no longer need to worry about C library version mismatches between your base image and the compiled binary.

The Go 1.24.0 runtime update ensures you're running on a well-tested, secure foundation. While internal runtime changes don't directly affect the HTTP server's behavior or output format, they contribute to overall stability and performance in your containerized environments.

This release demonstrates the project's commitment to maintaining solid build infrastructure while preserving the simple, focused functionality that makes gologhttpbinary useful: capturing HTTP requests with base64-encoded bodies for debugging binary payloads like Protocol Buffers.

## Getting Started

Upgrading to v0.2.1 is straightforward since there are no breaking changes. The HTTP server behavior, configuration options, and log output format remain identical to v0.2.0.

Pull the latest container image:

```bash
docker run -p 8080:8080 ghcr.io/unitvectory-labs/gologhttpbinary:v0.2.1
```

The server continues to listen on port 8080 by default (configurable via the `PORT` environment variable) and outputs JSON logs containing the request path, headers, and base64-encoded body.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was generated based on the official release v0.2.1 from the [gologhttpbinary](https://github.com/UnitVectorY-Labs/gologhttpbinary) repository, published on February 15, 2025. Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
