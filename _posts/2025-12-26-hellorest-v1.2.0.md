---
layout: post
title: hellorest v1.2.0 Released
date: 2025-12-26 20:00:20 -0500
tags: ["hellorest", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're pleased to announce the release of hellorest v1.2.0, published on December 26, 2025. This update brings important security improvements and runtime enhancements to the minimal Go REST API container that developers rely on for testing deployments and configurations.

## What's New

### Security Hardening
The most significant change in v1.2.0 is enhanced container security. The application now runs as a non-root user (UID 65532), following container security best practices. This change reduces potential attack surface without requiring any configuration changes from users.

### Updated Go Runtime
The release upgrades the underlying Go runtime to version 1.25.5, incorporating the latest performance improvements and fixes from the Go ecosystem.

## Why It Matters

This update demonstrates hellorest's commitment to maintaining a secure, well-maintained foundation for your testing workflows. Running containers as non-root is a fundamental security practice that helps protect your infrastructure, especially in production environments where containerized services interact with shared resources.

The seamless Go runtime updates ensure you're benefitting from the latest improvements while keeping hellorest's predictable behavior intact. Since this release maintains full backward compatibility, you can upgrade with confidence knowing your existing deployments will continue to work exactly as before.

## Getting Started

Upgrading to v1.2.0 is straightforward:

```bash
# Pull the latest version
docker pull ghcr.io/unitvectory-labs/hellorest:v1.2.0
```

The container continues to listen on port 8080 by default, and all existing configuration options remain unchanged. The API still responds with `{"hello": "world"}` on `GET /` requests—nothing has broken, everything works the same, but now with better security under the hood.

---

**About this post**: This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For more information, see the [hellorest repository](https://github.com/UnitVectorY-Labs/hellorest) and the [v1.2.0 release](https://github.com/UnitVectorY-Labs/hellorest/releases/tag/v1.2.0) published on December 26, 2025. Authored by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
