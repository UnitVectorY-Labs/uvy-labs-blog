---
layout: post
title: "firestore-batch-incrementer v0.1.5 Released"
date: 2026-09-03 09:51:59 +0000
tags: ["firestore-batch-incrementer", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-09-03, firestore-batch-incrementer v0.1.5 was published. This is a maintenance release that keeps the project current with its toolchain and dependencies without changing the incrementer’s runtime behavior. The application code remains unchanged from v0.1.4, so existing deployments continue to work as before with no configuration changes required.

## What's new

v0.1.5 is focused on build hygiene and security improvements rather than new features:

- Go toolchain updated to 1.27.1 for builds and the Dockerfile builder stage. `go.mod` now requires `go 1.27.0`.
- Go module dependencies refreshed, including `cloud.google.com/go/firestore` 1.22.0 → 1.25.0, `google.golang.org/api` 0.285.0 → 0.293.0, and `google.golang.org/grpc` 1.81.1 → 1.83.2, with corresponding transitive updates.
- Dockerfile builder base changed from `golang:1.26.4` to `golang:1.27.1`; runtime remains distroless.
- CI and security workflows modernized: checkout steps now use `persist-credentials: false`, semgrep static analysis was added, CodeQL and GitHub Actions actions were bumped, and a ChromaDB repo indexer workflow was added for internal observability.
- README cleanup removed the Go Report Card badge.

No changes were made to `main.go` or the public configuration surface. The supported environment variables, batching logic, rate limiting, and update modes `INCREMENT`, `START_TIMESTAMP`, and `CURRENT_TIMESTAMP` are unchanged.

## Why it matters

Keeping the build toolchain and cloud client libraries up to date is essential for security and long-term support. The Firestore client and gRPC updates in v0.1.5 incorporate upstream maintenance and security patches, while the Go 1.27 upgrade ensures compatibility with the current compiler and standard library. CI hardening reduces token exposure and adds automated static analysis, improving confidence in future changes.

Because the application code is unchanged, this release is fully backward compatible. Users can upgrade to benefit from fresher dependencies and a more secure build pipeline without adjusting `PROJECT_ID`, `COLLECTION`, `FIELD_KEY`, `BATCH_SIZE`, `RATE_LIMIT`, or any other runtime settings.

## Upgrading

To upgrade, pull the latest container image from GHCR built from this tag, or build from source with Go 1.27.x:

```bash
go version # should be 1.27.x
git checkout v0.1.5
go mod download
go build -o firestore-batch-incrementer .
```

Existing Cloud Run Jobs can be redeployed with the new image using the same environment variables. No migration steps are required.

*This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/firestore-batch-incrementer, release v0.1.5, date of generation 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
