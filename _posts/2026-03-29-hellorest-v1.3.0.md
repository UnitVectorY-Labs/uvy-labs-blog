---
layout: post
title: "hellorest v1.3.0 Now Available with Multi-Architecture Support"
date: 2026-03-29 17:14:00 -0400
tags: [hellorest, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

hellorest v1.3.0 was released on March 29, 2026, bringing two major enhancements that make this lightweight REST service more versatile and accessible than ever before. This release introduces multi-architecture Docker support for broader hardware compatibility and adds version tracking capabilities for better visibility in production environments.

## What's New

### Multi-Architecture Docker Images

The most significant improvement in v1.3.0 is native support for multiple CPU architectures. The Docker image `ghcr.io/unitvectory-labs/hellorest:v1.3.0` now works seamlessly on both Intel/AMD systems (amd64) and ARM-based devices including Apple Silicon Macs (M1/M2/M3), AWS Graviton instances, and other ARM64 platforms.

Previously, users on non-x86 hardware needed workarounds or emulation. Now, pulling the same image tag automatically delivers the correct architecture-specific build for your platform.

### Version Tracking via HTTP Headers

hellorest now exposes its running version through the `X-App-Version` HTTP response header. This capability is invaluable when managing multiple deployments or debugging production issues where knowing the exact running version matters.

```bash
curl -I https://your-host/
# Response includes: X-App-Version: v1.3.0
```

The version is injected at build time and falls back to Go build information if not explicitly set, ensuring you always have visibility into what's running.

### Security Updates

This release updates the base image from Debian 12 to Debian 13, bringing security patches and updated system libraries to your deployment. The Go runtime has also been upgraded to version 1.26.1 as part of ongoing maintenance.

## Why It Matters

These enhancements address two common operational needs: platform flexibility and observability. Multi-architecture support removes a significant barrier for teams standardizing on ARM hardware or working across diverse infrastructure environments. Version headers simplify monitoring setups and make it easier to validate deployments without accessing container internals.

The beauty of v1.3.0 is that it delivers these improvements while maintaining complete backward compatibility. If you're running v1.2.0, upgrading to v1.3.0 requires no configuration changes—just pull the new image tag.

## Get Started

### Pulling the Image

```bash
docker pull ghcr.io/unitvectory-labs/hellorest:v1.3.0
```

The same command works regardless of your hardware architecture.

### Quick Test

```bash
docker run -p 8080:8080 ghcr.io/unitvectory-labs/hellorest:v1.3.0
curl http://localhost:8080/
# Returns: {"hello": "world"}

curl -I http://localhost:8080/
# Includes: X-App-Version: v1.3.0
```

### Upgrade Notes

Existing deployments can upgrade directly from v1.2.0 to v1.3.0 without any changes to your orchestration configuration, port mappings, or networking setup.

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The article is based on the v1.3.0 release of [hellorest](https://github.com/UnitVectorY-Labs/hellorest) published on March 29, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
