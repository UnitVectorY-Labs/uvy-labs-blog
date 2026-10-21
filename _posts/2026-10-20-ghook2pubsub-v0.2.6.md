---
layout: post
title: "ghook2pubsub v0.2.6 Released"
date: 2026-10-20 00:00:00 -0500
tags: ["ghook2pubsub", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

ghook2pubsub v0.2.6 was released on 2026-10-20. This is a maintenance release focused on security hardening and keeping the build toolchain current, with no changes to application behavior or configuration.

The release updates the underlying Go dependencies used by the Cloud Pub/Sub client transport and moves builds to Go 1.27.2. For users, this means the service runs with patched HTTP/2 libraries and a current compiler toolchain, while the webhook-to-Pub/Sub functionality remains unchanged.

## What's new

**Security update for HTTP/2 transport**

The indirect dependency `golang.org/x/net` is bumped from v0.58.0 to v0.61.0. This brings fixes for five HTTP/2 security advisories that are reachable through the Pub/Sub client's gRPC/HTTP2 transport, including issues related to flow control, memory exhaustion, malformed framing, CPU exhaustion, and an HPACK encoder race.

**Toolchain refresh**

Builds and the Docker builder image are updated to Go 1.27.2. The runtime distroless image is unchanged and no binary interface changes are introduced.

**Dependency maintenance**

Optional compression and supporting libraries are kept up to date, including `github.com/klauspost/compress` 1.20.1 → 1.20.3 and related `golang.org/x/*` updates required by the net bump.

No new features, configuration options, or breaking changes are included. Application source code is unchanged from v0.2.5.

## Why it matters

ghook2pubsub forwards GitHub webhooks to Google Cloud Pub/Sub. The Pub/Sub client relies on HTTP/2 for transport, so the `golang.org/x/net` HTTP/2 fixes directly improve the security posture of webhook delivery without requiring any changes on your side. Updating the Go toolchain also ensures builds are reproducible on a supported compiler and aligns CI with current best practices.

## Upgrade

Upgrading is straightforward. Pull the v0.2.6 container image to receive the binary built with Go 1.27.2 and the patched dependencies. No configuration changes or migrations are required.

If you build from source, use Go 1.27.2 and run `go mod tidy` to pick up the updated `go.mod`/`go.sum`. The service behavior and environment variables remain the same.

Transparency note: this post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/ghook2pubsub, release v0.2.6 published 2026-10-20. Date of generation: 2026-10-21. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
