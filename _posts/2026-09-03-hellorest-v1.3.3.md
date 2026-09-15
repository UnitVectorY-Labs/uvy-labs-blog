---
layout: post
title: "hellorest v1.3.3 Released: Toolchain Update and CI Hardening"
date: 2026-09-03 09:52:28 +0000
tags: ["hellorest", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-09-03, hellorest v1.3.3 was released for UnitVectorY-Labs/hellorest. This is a maintenance release focused on build infrastructure and toolchain freshness. The API behavior is unchanged — `GET /` still returns `{"hello":"world"}` and all other paths return 404 — but the image is now built with a current Go toolchain and the CI pipeline has been refreshed with updated actions and security scanning.

## What's new

v1.3.3 updates the build environment without changing the service contract.

The Go toolchain was upgraded. `go.mod` now requires `go 1.27.0` and the Dockerfile builder image moved to `golang:1.27.1`. The CI workflow `build-go.yml` was updated to use actions/setup-go v7.0.0 with Go 1.27.1. The application source in `main.go` is unchanged, so runtime behavior is identical to v1.3.2.

The README header was tidied by removing the Go Report Card badge. No other documentation content changed.

CI and build workflows received broad updates across the repository:
- GitHub Actions actions were bumped, including checkout, setup-go, actions/cache, docker build-push-action, docker/login-action, setup-buildx-action, and attest-build-provenance.
- CodeQL analysis was updated to version 4.37.9 with consistent SARIF uploads.
- `persist-credentials: false` is now enforced in checkout steps.
- A new ChromaDB repo indexer workflow was added for repository indexing on pushes to main.
- A new Semgrep static analysis workflow was added with SARIF upload.

No runtime dependencies were changed and no new API features or bug fixes were introduced.

## Why it matters

For users running hellorest as a minimal test API container, v1.3.3 delivers the same predictable response with a more current build base. Building with Go 1.27 ensures compatibility with the latest compiler improvements and security fixes while keeping the binary behavior stable.

The refreshed CI pipeline improves supply-chain hygiene and security scanning for maintainers. Updated actions reduce exposure to deprecated workflows, and the addition of Semgrep and maintained CodeQL checks provides ongoing static analysis without affecting the published image.

Because the service contract is unchanged, existing deployments require no configuration changes. The release is a safe drop-in for anyone pinning the image tag.

## Upgrading

Pull the new image tag for v1.3.3 from the GitHub Container Registry. No migration steps are required:

- The `GET /` endpoint continues to return `{"hello":"world"}`.
- All other verbs and paths continue to return 404.
- If you build from source, ensure your environment satisfies `go 1.27.0` as declared in `go.mod`.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/hellorest, release v1.3.3, published 2026-09-03. Date of generation: 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
