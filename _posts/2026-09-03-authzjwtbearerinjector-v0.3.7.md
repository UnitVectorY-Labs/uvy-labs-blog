---
layout: post
title: "authzjwtbearerinjector v0.3.7 Released"
date: 2026-09-03 09:51:52 +0000
tags: ["authzjwtbearerinjector", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On September 3, 2026, UnitVectorY-Labs published v0.3.7 of authzjwtbearerinjector, the gRPC-based ExtAuthz service for Envoy Proxy that implements the JWT-bearer flow. This release is a maintenance update focused on keeping the build environment and dependencies current. There are no user-facing functional changes to the service itself, so v0.3.7 is a drop-in replacement for v0.3.6 with improved dependency freshness and a more secure CI pipeline.

## What's new

v0.3.7 updates the toolchain and dependencies without touching application code:

- Go toolchain bumped to 1.27.1 in go.mod, Dockerfile, and CI workflows. The Dockerfile builder image is now golang:1.27.1 and source builds require Go 1.27+.
- Go module dependencies refreshed, including google.golang.org/grpc 1.81.1 → 1.83.2, github.com/envoyproxy/go-control-plane/envoy 1.37.0 → 1.39.0, golang.org/x/net 0.51.0 → 0.58.0, golang.org/x/sys 0.42.0 → 0.47.0, and golang.org/x/text 0.34.0 → 0.41.0, with corresponding go.sum updates.
- README cleanup: the Go Report Card badge was removed as goreportcard.com is retired.
- CI and security hardening: persist-credentials: false added to checkout steps, Semgrep static analysis action added, CodeQL action pinned and bumped to 4.37.9, ChromaDB repo indexer workflow added, and various GitHub Actions dependencies updated.

No changes were made to internal/, main.go, or any runtime logic. Configuration, API, and behavior remain identical to v0.3.6.

## Why it matters

Keeping dependencies up to date reduces exposure to known issues in upstream libraries and ensures the project builds on a supported Go release. The grpc and Envoy control plane bumps bring in upstream fixes, while the CI changes improve supply-chain hygiene for builds without affecting the running service.

Because the application code is unchanged, existing deployments can upgrade with confidence and no configuration changes. Users building from source will need Go 1.27+ to match go.mod, and container users will benefit from the updated base image in the published GHCR image.

## Upgrade and installation

Upgrade is straightforward:

- Container: pull ghcr.io/unitvectory-labs/authzjwtbearerinjector:v0.3.7 and replace the existing image tag. No Envoy configuration changes are required.
- Source: checkout v0.3.7, ensure Go 1.27+ is installed, then go build ./... . No migration steps are needed.

For full details, see the release notes at https://github.com/UnitVectorY-Labs/authzjwtbearerinjector/releases/tag/v0.3.7.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/authzjwtbearerinjector v0.3.7, release date 2026-09-03, article generated 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).