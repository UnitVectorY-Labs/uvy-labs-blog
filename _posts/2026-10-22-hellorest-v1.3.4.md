---
layout: post
title: "hellorest v1.3.4: Security Rebuild with Go 1.27.3"
date: 2026-10-22 02:16:40 +0000
tags: ["hellorest", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

hellorest v1.3.4 was released on October 22, 2026. This release is a security-focused rebuild with no changes to the public API. The Docker image is now built with Go 1.27.3 to apply Go's removal of trust for compromised eMudhra intermediate CAs referenced in GO-2026-6809 / CVE-2026-111943. For users, it means the same simple `GET /` service returning `{"hello":"world"}` with an unchanged `X-App-Version` header, delivered from a hardened build toolchain.

## What's new

v1.3.4 updates the build environment only. The Dockerfile builder image is bumped from golang:1.27.1 to golang:1.27.3, producing a binary built with Go 1.27.3. Application code in `main.go` and dependencies in `go.mod` / `go.sum` are unchanged from v1.3.3, and the runtime behavior is identical.

The release also includes repository maintenance: CI workflows now run on Go 1.27.2 and add an official govulncheck workflow for Go vulnerability scanning with SARIF reporting. These changes are infrastructure-only and do not affect the service exposed to users.

## Why it matters

The update addresses a supply-chain security issue in the Go toolchain without requiring any configuration changes. Distrusting the compromised eMudhra intermediate CAs reduces the risk of TLS verification failures or misuse in environments that rely on Go's certificate handling during build and runtime. Because there are no functional changes, existing deployments continue to work exactly as before while benefiting from the hardened build.

## Upgrading

Upgrading is a drop-in replacement. If you run hellorest from the published Docker image, pull the v1.3.4 tag and restart your container. No environment variables, ports, or request formats change; the service remains `GET /` returning `{"hello":"world"}` on the port set by `PORT`, defaulting to 8080.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/hellorest, release v1.3.4 published 2026-10-22, article generated 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
