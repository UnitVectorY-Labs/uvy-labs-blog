---
layout: post
title: "hellorest v1.1.3: Infrastructure Updates and Dependency Modernization"
date: 2025-10-14 01:36:54 -0500
tags: ["hellorest", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

hellorest v1.1.3 was released on October 14, 2025, bringing a focused set of infrastructure updates that keep the project's build toolchain modern and secure. While this release doesn't introduce new API features, it represents the maintainers' commitment to proactive dependency management and operational excellence.

## What's New

This maintenance release concentrates on updating the underlying tooling and runtime environment:

**Go Runtime Updates**
- Upgraded from Go 1.24.3 to Go 1.25.2 across all build configurations
- Updated `go.mod`, `Dockerfile`, and CI workflows to use the latest version

**GitHub Actions Modernization**
Several core GitHub Actions have been bumped to their latest major versions:
- `actions/checkout`: v4 → v5
- `actions/setup-go`: v5 → v6
- `actions/attest-build-provenance`: v2 → v3
- `github/codeql-action`: v3 → v4
- `astral-sh/setup-uv`: v6 → v7

**Build Optimizations**
- Streamlined dependency handling by switching from `go mod tidy` to `go mod download` in the build workflow

## Why It Matters

For API consumers, this release requires no action. The `GET /` endpoint continues to return `{"hello": "world"}` exactly as before, and all existing deployments will function identically.

The value here lies in the project's operational health:

- **Security**: Keeping Actions and toolchains up-to-date ensures the latest security patches and protections
- **Reliability**: Modern runtime versions provide performance improvements and bug fixes from the Go team
- **Automation**: Dependabot-driven updates demonstrate a mature approach to dependency management, reducing manual maintenance overhead

This release showcases how even a minimal test project can serve as a model for good practices in CI/CD maintenance.

## Upgrade Notes

**For API Users:** No upgrade is necessary. The service behavior remains unchanged.

**For Deployers:** If you rebuild Docker images locally, ensure your registry can pull the `golang:1.25.2` base image. The published images on GHCR are already built and ready to use.

**For Contributors:** Local development now requires Go 1.25.2. Update your local toolchain if you plan to build or contribute to the project.

## Getting Started

hellorest remains a simple Go API that returns `{"hello": "world"}` on `GET /` requests. It's perfect for testing deployment setups, networking configurations, and container environments.

Pull the latest Docker image:
```bash
docker pull ghcr.io/unitvectory-labs/hellorest:latest
```

Or build from source after cloning the repository:
```bash
git clone https://github.com/UnitVectorY-Labs/hellorest.git
cd hellorest
go run main.go
```

The service listens on port 8080 by default (configurable via the `PORT` environment variable).

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It is based on the v1.1.3 release of [UnitVectorY-Labs/hellorest](https://github.com/UnitVectorY-Labs/hellorest/releases/tag/v1.1.3), published on October 14, 2025. Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
