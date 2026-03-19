---
layout: post
title: "iapheaders v0.4.1 Released: Go Runtime Update"
date: 2025-02-15 09:00:00 -0500
tags: [iapheaders, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

On February 15, 2025, we released iapheaders v0.4.1, a maintenance update that keeps the project running on the latest Go runtime.

## What's New

This release focuses on infrastructure and build hygiene rather than new features. The primary change is upgrading the Go version from 1.23.5 to 1.24.0 across all build artifacts:

- **Updated Go runtime** in `go.mod`, `Dockerfile`, and CI workflows
- **Refined `.dockerignore`** to exclude the `.github/` directory from Docker builds

These changes ensure the application benefits from the latest Go language improvements, performance enhancements, and security patches included in the 1.24.x series.

## Why It Matters

While this release doesn't introduce visible feature changes, staying current with runtime updates is essential for maintaining a secure and performant application. The Go 1.24.0 upgrade brings:

- **Security improvements** from cumulative Go security patches
- **Performance optimizations** in the Go runtime itself
- **CI/CD reliability** by using actively maintained toolchain versions

For users deploying iapheaders as a container image (`ghcr.io/unitvectory-labs/iapheaders`), no action is required. The upgrade is transparent and fully backward compatible with v0.4.0.

## Getting Started

If you're already using iapheaders, simply pull the latest container image to get v0.4.1:

```bash
docker pull ghcr.io/unitvectory-labs/iapheaders:v0.4.1
```

All environment variables and configuration options remain unchanged:
- `PORT`: Server listening port (default: 8080)
- `HIDE_SIGNATURE`: Toggle JWT signature display (default: false)

For new users, iapheaders helps developers inspect and debug Google Cloud Platform Identity-Aware Proxy headers by displaying authenticated user information and validating JWT tokens. See the [repository](https://github.com/UnitVectorY-Labs/iapheaders) for setup instructions.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Reference: UnitVectorY-Labs/iapheaders v0.4.1, released February 15, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
