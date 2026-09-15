---
layout: post
title: "ghook2pubsub v0.2.4 Released"
date: 2026-09-03 09:52:07 +0000
tags: ["ghook2pubsub", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On September 3, 2026, UnitVectorY-Labs released ghook2pubsub v0.2.4. This is a routine maintenance release focused on keeping dependencies fresh and tightening CI security. The webhook to Pub/Sub behavior is unchanged, so users can upgrade with no configuration changes.

## What's new

v0.2.4 contains no changes to application source code in `main.go` or `internal/`. The release updates the build toolchain and dependencies:

- Go toolchain upgraded to 1.27.1, with `go.mod` and Dockerfile builder updated from Go 1.26 to 1.27. Builds from source now require Go 1.27+.
- Go module dependencies refreshed, including `cloud.google.com/go/pubsub` 1.50.2 → 1.51.1, `github.com/klauspost/compress` 1.19.0 → 1.19.2, and transitive updates to auth, IAM, gRPC, OpenTelemetry, crypto, and net libraries.
- CI security hardening: `persist-credentials: false` added to checkout steps across workflows, Semgrep static analysis workflow added, CodeQL action versions bumped, and repository indexing workflow added.

No new features, bug fixes to webhook handling, or breaking changes are included.

## Why it matters

Even though the service behavior is identical to v0.2.3, the dependency refresh brings security patches and compatibility updates from the Google Cloud Pub/Sub client, gRPC, and cryptography libraries. The Go 1.27 upgrade ensures builds use a current toolchain, and CI improvements reduce credential exposure and add automated security scanning for future changes.

For operators, this is a safe, drop-in update with no migration steps.

## Upgrade

Pull the latest container image tagged v0.2.4 and redeploy. Environment variables and configuration remain the same. If you build from source, update to Go 1.27 or newer before building.

Transparency note: This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. It references repository UnitVectorY-Labs/ghook2pubsub, release v0.2.4, and was generated on 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
