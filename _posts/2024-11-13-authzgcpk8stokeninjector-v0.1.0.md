---
layout: post
title: Introducing authzgcpk8stokeninjector v0.1.0 - GCP Identity Token Injection for Kubernetes
date: 2024-11-13 09:00:00 -0500
tags: [authzgcpk8stokeninjector, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

We're excited to announce the launch of `authzgcpk8stokeninjector` v0.1.0, a new open-source tool that brings passwordless authentication from Kubernetes workloads to Google Cloud Platform services. Released on November 13, 2024, this initial release introduces a gRPC-based ExtAuthz service designed to seamlessly inject GCP identity tokens into HTTP requests running in any Kubernetes environment.

## What's New

This v0.1.0 release marks the first public version of `authzgcpk8stokeninjector`, introducing several key capabilities:

### GCP Identity Token Injection

The core functionality enables automatic injection of GCP identity tokens into requests passing through Envoy Proxy. This eliminates the need for managing service account keys or relying on GKE-specific features, working instead with any Kubernetes cluster through Workload Identity Federation.

### Per-Audience Token Caching

Built-in intelligent token caching reduces load on GCP OAuth servers by:
- Keying cache entries by target service audience
- Reusing tokens until 75% of their lifetime has elapsed
- Preventing unnecessary token renewal requests

### Thread-Safe Token Retrieval

The implementation uses a double-check locking pattern to ensure concurrent requests don't trigger redundant token fetches, maximizing efficiency during high-traffic periods.

### Simple Configuration

Deployment is straightforward with environment variable-based configuration. The service requires just six variables: paths to Kubernetes tokens, GCP project details, workload identity pool and provider names, and the target service account email. Optional debug logging and custom port settings provide flexibility for different environments.

### Multi-Platform Container Support

Pre-built container images are available for both `linux/amd64` and `linux/arm64` architectures, published to GitHub Container Registry at `ghcr.io/unitvectory-labs/authzgcpk8stokeninjector`. The distroless base image minimizes the attack surface for production deployments.

## Why It Matters

Authenticating from Kubernetes to GCP services has traditionally required either running on GKE with Workload Identity, managing and rotating service account keys, or implementing custom OAuth flows. `authzgcpk8stokeninjector` solves this problem by leveraging GCP's Workload Identity Federation to enable passwordless authentication from any Kubernetes cluster.

The sidecar pattern—running alongside Envoy Proxy—provides a clean separation of concerns. Your application code doesn't need to handle token management; the injector service handles it transparently at the infrastructure level. This aligns with zero-trust security principles while keeping application logic simple.

For teams already using Envoy as their service mesh or ingress proxy, adding this ExtAuthz service integrates naturally into existing deployments. The per-audience design means different backend services can receive tokens scoped appropriately for their needs.

## Getting Started

To deploy `authzgcpk8stokeninjector` v0.1.0:

1. **Configure GCP Workload Identity Federation:** Create a workload identity pool and provider in GCP IAM, mapping them to your target service account.

2. **Pull the container image:**
   ```bash
   docker pull ghcr.io/unitvectory-labs/authzgcpk8stokeninjector:v0.1.0
   ```

3. **Set environment variables** for your deployment, including the Kubernetes token path, GCP project number, workload identity pool and provider details, and service account email.

4. **Configure Envoy Proxy** with the ExtAuthz filter pointing to the injector service on its gRPC port (default 50051).

The [README](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector) includes complete configuration examples for Envoy setup and per-route audience configuration.

This initial release is licensed under MIT, making it suitable for both internal and commercial use. We welcome contributions and feedback from the community as we continue to develop the project.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Research based on the [authzgcpk8stokeninjector](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector) v0.1.0 release published on November 13, 2024. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
