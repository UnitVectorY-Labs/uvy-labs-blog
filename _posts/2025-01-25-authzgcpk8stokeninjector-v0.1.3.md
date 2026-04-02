---
layout: post
title: "authzgcpk8stokeninjector v0.1.3 Released"
date: 2025-01-25 13:19:25 -0500
tags: ["authzgcpk8stokeninjector", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introduction

We're pleased to announce the availability of authzgcpk8stokeninjector v0.1.3, released on January 25, 2025. This maintenance release focuses on keeping your deployment secure and up-to-date with the latest dependency improvements.

authzgcpk8stokeninjector is a gRPC-based ExtAuthz service for Envoy Proxy that injects Google Cloud Platform identity tokens into requests in Kubernetes environments. By running as a sidecar to Envoy Proxy, it handles JWT token requests from GCP using Workload Identity Federation and provides in-memory token caching to reduce overhead.

## What's New

Version 0.1.3 is a dependency maintenance release that incorporates important updates to core libraries:

- **gRPC library updated** to v1.70.0, bringing bug fixes and performance improvements
- **Network package updated** to golang.org/x/net v0.33.0 with security patches and parser improvements
- Related system and text package updates for enhanced stability

### Key Benefits from the Updates

The gRPC library update delivers tangible improvements:

- **Fixed deadlock scenarios** when using xDS management servers with the xds:/// scheme
- **Better performance** for unary requests with improved memory handling
- **Enhanced resilience** with automatic fallback to secondary management servers when the primary is unavailable

## Why It Matters

While this release doesn't introduce new features, it ensures your deployment benefits from:

1. **Security patches** through updated network and system packages
2. **Stability improvements** by incorporating bug fixes from the gRPC library
3. **Better resource utilization** with performance optimizations in the transport layer

This update is fully backward compatible for typical deployments. No configuration changes or migration steps are required.

## Upgrade Instructions

Upgrading to v0.1.3 is straightforward:

```bash
# Pull the new Docker image
docker pull ghcr.io/unitvectory-labs/authzgcpk8stokeninjector:v0.1.3

# Or use the latest tag if configured
docker pull ghcr.io/unitvectory-labs/authzgcpk8stokeninjector:latest
```

For Kubernetes deployments, update your pod spec to reference the new image tag and redeploy your sidecar containers.

That's it—no configuration changes needed. The updated dependencies take effect automatically on restart.

---

*This post was AI-generated using unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M. For more details, visit the [GitHub repository](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector) or see the [v0.1.3 release notes](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector/releases/tag/v0.1.3). Generated on March 17, 2026 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
