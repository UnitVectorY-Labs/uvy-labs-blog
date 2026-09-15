---
layout: post
title: "iapheaders v0.5.2 – maintenance release with Go 1.27 and security updates"
date: 2026-09-03 09:52:00 +0000
tags: ["iapheaders", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-09-03, UnitVectorY-Labs released iapheaders v0.5.2. This is a maintenance update for the Go web app that displays and validates Google Cloud Identity-Aware Proxy request headers and JWT assertions. There are no functional changes to the application itself, but the release modernizes the build toolchain, refreshes dependencies, and hardens CI workflows.

## What's new

The update moves the build environment to Go 1.27.1, updating the Dockerfile builder base image and the Go module directive from 1.26 to 1.27. Direct dependencies were refreshed, including the JWT library `github.com/lestrrat-go/jwx/v2` from 2.1.6 to 2.1.7, along with security-relevant updates to `golang.org/x/crypto` and `golang.org/x/sys`.

The README Go Report Card badge was removed as the service is retired, a cosmetic change with no impact on usage. CI workflows were updated with newer GitHub Actions, CodeQL 4.37.9, and security hardening such as `persist-credentials: false` in checkout steps. New internal workflows for Semgrep static analysis and ChromaDB repository indexing were added for development quality.

## Why it matters

For users, v0.5.2 provides a drop-in upgrade with no configuration changes and no breaking behavior. The dependency refresh brings security patches to the crypto stack used for JWT verification and keeps the project on a supported Go toolchain. The CI improvements help maintain build reliability and supply chain security for future releases.

## Upgrade and installation

Pull the latest image from `ghcr.io/unitvectory-labs/iapheaders` or rebuild from the updated tags. Environment variables `HIDE_SIGNATURE` and `PORT` remain unchanged, and the application behavior is identical to v0.5.1. Upgrading is recommended to benefit from the refreshed dependencies and toolchain.

Transparency note: This post was AI-generated using unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. It references repository UnitVectorY-Labs/iapheaders, release v0.5.2 published 2026-09-03, and was generated on 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
