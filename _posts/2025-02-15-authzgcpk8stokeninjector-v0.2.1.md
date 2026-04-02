---
layout: post
title: "AuthZ GCP K8s Token Injector v0.2.1 Released"
date: 2025-02-15 00:00:00 -0500
tags: ["authzgcpk8stokeninjector", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introduction

On February 15, 2025, we released version 0.2.1 of authzgcpk8stokeninjector. This maintenance release brings important build improvements and dependency updates that enhance deployment reliability and portability for users running this service in Kubernetes environments with Envoy Proxy.

While this release doesn't introduce new features, it focuses on the foundational aspects that make deployments more robust - from producing statically linked binaries to keeping dependencies current and secure.

## What's New

### Static Binary Builds

The most significant improvement in v0.2.1 is the introduction of static binary compilation. By disabling CGO during the build process, we now produce fully self-contained binaries with no dynamic library dependencies. This change means:

- **Better container portability**: Your containers work across different base image types without compatibility concerns
- **Reduced runtime issues**: No missing library errors when deploying to minimal or distroless container environments
- **Simplified deployments**: One binary works everywhere, eliminating environment-specific build variations

### Dependency Updates

We've kept the project's dependencies current with several important updates:

- **gRPC v1.70.0**: Upgraded from v1.69.4 for improved performance and stability in gRPC communications between Envoy and the token injector service
- **Envoy go-control-plane v1.32.4**: Patch update from v1.32.3 ensuring compatibility with the latest Envoy protocol definitions
- **Go runtime v1.24.0**: Built with the latest Go version for performance improvements and security patches

These updates maintain software supply chain security while ensuring compatibility with the broader ecosystem.

## Why It Matters

For teams running authzgcpk8stokeninjector as a sidecar alongside Envoy Proxy in Kubernetes, this release removes potential deployment friction points. The static binary approach eliminates a common source of container deployment issues - missing shared libraries that vary between base images.

The dependency updates, while routine, ensure your authorization service remains compatible with evolving Envoy and gRPC standards. Keeping these dependencies current is essential for long-term maintenance and security.

## Upgrade and Installation

### Container Deployment (Recommended)

Pull the new image and update your deployment:

```bash
docker pull ghcr.io/unitvectory-labs/authzgcpk8stokeninjector:v0.2.1
```

Update your Kubernetes manifests or deployment configurations to reference `ghcr.io/unitvectory-labs/authzgcpk8stokeninjector:v0.2.1`. No configuration changes are required - all environment variables and operational settings remain unchanged from v0.2.0.

### Building from Source

If you build from source, ensure you're using Go 1.24.0 or compatible. The recommended build command is:

```bash
CGO_ENABLED=0 go build -mod=readonly -o server .
```

**Note for Go module users**: This release corrected the module path from `authzgcpk8stokeninjector` to `github.com/UnitVectorY-Labs/authzgcpk8stokeninjector`. If you import this project as a library in other Go code, update your import statements accordingly.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The original release information can be found at [github.com/UnitVectorY-Labs/authzgcpk8stokeninjector](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector/releases/tag/v0.2.1). Generated on March 17, 2026 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
