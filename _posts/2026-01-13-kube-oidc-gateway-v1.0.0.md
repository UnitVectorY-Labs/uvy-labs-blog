---
layout: post
title: "Announcing kube-oidc-gateway v1.0.0: OIDC Discovery Proxy for Secure Kubernetes Clusters"
date: 2026-01-13 00:03:59 -0500
tags: [kube-oidc-gateway, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introduction

We're excited to announce the launch of **kube-oidc-gateway**, now available as v1.0.0. Released on January 13, 2026, this lightweight Go application solves a critical challenge for secure Kubernetes deployments: enabling external systems to access OIDC discovery and JWKS endpoints when your cluster is configured with `--anonymous-auth=false`.

For teams running production Kubernetes clusters that have disabled anonymous authentication for enhanced security, kube-oidc-gateway provides the bridge needed for workload identity federation without compromising your security posture.

## What's New

As an initial release, v1.0.0 introduces the complete core functionality of kube-oidc-gateway:

### Core Gateway Capabilities
- **OIDC Discovery Proxy**: Serves the Kubernetes API server's OIDC discovery document at `/.well-known/openid-configuration`
- **JWKS Proxy**: Provides access to the JSON Web Key Set at `/openid/v1/jwks`
- **In-Cluster Authentication**: Uses ServiceAccount tokens automatically mounted in the pod to authenticate with your Kubernetes API server
- **TLS Verification**: Validates all upstream connections using the cluster's CA certificate

### Caching and Performance
- **Configurable TTL Cache**: Built-in in-memory caching with a default 60-second time-to-live
- **Stale-on-Error Fallback**: When upstream fetches fail, the gateway serves cached content instead of returning errors—improving availability during transient API server issues
- **ETag Support**: SHA-256 ETags enable downstream caching optimization and reduce bandwidth

### Production Hardening
Despite being a v1.0.0 release, kube-oidc-gateway ships with production-grade features typically added later:
- HTTP server timeouts to prevent resource exhaustion
- Graceful shutdown with a 30-second drain window for clean Kubernetes rollouts
- Context-aware upstream requests that cancel when clients disconnect
- Response size limiting (10MB) to protect against memory exhaustion

### Simple Configuration
Everything is configurable through environment variables with sensible defaults for in-cluster operation:

| Variable | Default | Purpose |
|----------|---------|---------|
| `LISTEN_PORT` | `8080` | HTTP listen port |
| `CACHE_TTL_SECONDS` | `60` | Cache time-to-live |
| `UPSTREAM_TIMEOUT_SECONDS` | `5` | Upstream request timeout |
| `PRETTY_PRINT_JSON` | `true` | JSON formatting option |

## Why It Matters

### Solves a Real Security Challenge

Many security teams require `--anonymous-auth=false` on their Kubernetes API servers to prevent unauthenticated access. However, this creates a problem: external systems (like CI/CD pipelines, external identity providers, or federated workload systems) need access to the OIDC discovery and JWKS endpoints for token validation and workload identity federation.

kube-oidc-gateway solves this by running inside your cluster as an authenticated ServiceAccount, fetching these endpoints on behalf of external callers, and presenting them securely.

### Built for High Availability

The release includes thoughtful availability features:
- **Graceful Shutdown**: When Kubernetes terminates a pod during a rollout, the gateway completes in-flight requests before shutting down—no dropped connections
- **Stale Cache Fallback**: If your API server has a brief hiccup, external systems can still validate tokens using cached JWKS data
- **Multiple Replicas**: Designed to run with 2+ replicas behind a Service for redundancy

### Minimal Security Footprint

Security was a core design principle:
- **Minimal RBAC**: The ServiceAccount only has permission to read two non-resource URLs—nothing more
- **Non-Root Container**: Runs as UID 65532 in distroless base images
- **No External Dependencies**: Pure in-memory caching; no databases or external state stores required

## Getting Started

### Building Locally

```bash
go build -o kube-oidc-gateway .
```

### Docker Build

```bash
docker build -t kube-oidc-gateway:latest .
```

The Docker image uses `gcr.io/distroless/base-debian13` as its runtime base, providing a minimal attack surface.

### Deployment Considerations

To deploy kube-oidc-gateway in your cluster, you'll need to create a Kubernetes deployment with:

1. **ServiceAccount** for API server authentication
2. **ClusterRole and ClusterRoleBinding** granting read access to the OIDC endpoints:
   ```yaml
   apiVersion: rbac.authorization.k8s.io/v1
   kind: ClusterRole
   metadata:
     name: kube-oidc-gateway
   rules:
   - nonResourceURLs:
     - "/openid/v1/jwks"
     - "/.well-known/openid-configuration"
     verbs: ["get"]
   ```
3. **Deployment** with 2+ replicas for high availability
4. **ClusterIP Service** for internal cluster exposure

**Note**: Official deployment manifests will be provided in a future release. For now, you can create custom manifests following the pattern above.

### Important Security Note

kube-oidc-gateway does not implement its own authentication or authorization. Since it serves public OIDC discovery data, you should control access to the service using Kubernetes NetworkPolicies, Ingress controllers with authentication, or firewall rules as appropriate for your environment.

## What's Next

This v1.0.0 release establishes the foundation for kube-oidc-gateway. Future releases will include:
- Official Kubernetes deployment manifests
- Additional documentation (architecture and operations guides)
- Prometheus metrics endpoint for observability
- Container image publishing to GitHub Container Registry

## Try It Out

kube-oidc-gateway is now available on [GitHub](https://github.com/UnitVectorY-Labs/kube-oidc-gateway). Check out the repository for source code, build instructions, and the full feature documentation.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was generated based on the v1.0.0 release of kube-oidc-gateway from https://github.com/UnitVectorY-Labs/kube-oidc-gateway/releases/tag/v1.0.0 (released January 13, 2026). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
