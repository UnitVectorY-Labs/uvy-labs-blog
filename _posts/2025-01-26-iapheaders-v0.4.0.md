---
layout: post
title: "iapheaders v0.4.0 Released"
date: 2025-01-26 14:10:21 -0500
tags: ["iapheaders", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introduction

On January 26, 2025, we released iapheaders v0.4.0, an update focused on improving the reliability and maintainability of our GCP Identity-Aware Proxy header inspection tool. While this release doesn't introduce new features, it delivers important infrastructure improvements that make deployments more robust and the project more compliant with Go best practices.

## What's New

### Improved Build Reliability
The Docker image for v0.4.0 is now built as a statically linked binary. By compiling with `CGO_ENABLED=0`, we've eliminated C library dependencies from the container, resulting in:
- Reduced attack surface with fewer runtime dependencies
- Improved portability across different Linux distributions
- Elimination of glibc-related compatibility issues in containerized environments

### Proper Go Module Compliance
The project's module path has been updated to use its full repository URL (`github.com/UnitVectorY-Labs/iapheaders`). This change aligns the project with Go module best practices and ensures proper resolution through GitHub's module proxy.

## Why It Matters

These infrastructure-focused changes may seem behind-the-scenes, but they directly impact your experience:

**More Reliable Deployments**: The statically linked binary means fewer things can go wrong when running the container across different environments. You get consistent behavior whether you're deploying to production, staging, or local development.

**Better Go Ecosystem Integration**: With proper module path naming, developers using iapheaders as a library dependency will experience smoother integration with standard Go tooling.

**Continued Stability**: Despite these backend improvements, all existing configurations, environment variables, and deployment patterns continue to work exactly as before.

## Getting Started

### Upgrade Instructions
For Docker deployments, upgrading is straightforward:

```bash
docker pull ghcr.io/unitvectory-labs/iapheaders:v0.4.0
docker run -p 8080:8080 ghcr.io/unitvectory-labs/iapheaders
```

### For Go Library Users
If you're importing iapheaders as a Go library dependency, update your import paths from:
- `import "iapheaders/..."` 

To:
- `import "github.com/UnitVectorY-Labs/iapheaders/..."`

### Configuration
All existing environment variable configurations remain unchanged:
- `PORT` (default: 8080): Server listening port
- `HIDE_SIGNATURE` (default: false): Control JWT signature display

## Conclusion

The v0.4.0 release demonstrates our commitment to maintaining a healthy, well-engineered project. While these changes operate behind the scenes, they lay important groundwork for future development and ensure your deployments run as smoothly as possible.

As always, iapheaders continues to provide a simple way to inspect GCP Identity-Aware Proxy headers and validate JWT tokens during development and testing. We appreciate your continued interest in the project.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The release announcement is based on the v0.4.0 release of [UnitVectorY-Labs/iapheaders](https://github.com/UnitVectorY-Labs/iapheaders/releases/tag/v0.4.0) published on January 26, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
