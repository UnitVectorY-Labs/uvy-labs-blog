---
layout: post
title: "kube-oidc-gateway v1.1.0: Enhanced Cache Control and Improved Documentation"
date: 2026-03-02 11:56:00 -0500
tags: [kube-oidc-gateway, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introducing kube-oidc-gateway v1.1.0

We're pleased to announce the release of kube-oidc-gateway v1.1.0, published on March 2, 2026. This minor release introduces configurable client-side cache control headers and delivers comprehensive documentation improvements that make deployment simpler than ever.

kube-oidc-gateway is a lightweight reverse proxy that exposes Kubernetes OIDC discovery and JWKS endpoints with in-memory caching, enabling external systems to configure workload identity federation without requiring anonymous authentication on your Kubernetes API server.

## What's New

### Configurable Client Cache Control

The most significant addition in v1.1.0 is the new `CLIENT_CACHE_TTL_SECONDS` environment variable. This feature gives operators precise control over how long external clients should cache OIDC responses, separate from the gateway's internal API server cache TTL.

**Configuration:**
- **Environment Variable**: `CLIENT_CACHE_TTL_SECONDS`
- **Default**: 3600 seconds (1 hour)
- **Effect**: Sets `Cache-Control` and `Expires` headers in responses

This addition allows you to optimize client behavior independently from upstream request handling. For example, you might keep the internal `CACHE_TTL_SECONDS` at 60 seconds to maintain fresh data from the API server while allowing clients to cache for longer periods with `CLIENT_CACHE_TTL_SECONDS` set to 3600 or more.

### Version Reporting at Startup

The gateway now reports its version at startup when built with the updated Dockerfile. This makes it easier to verify which version is running in your cluster, improving operational visibility and debugging capabilities.

### Comprehensive Documentation Overhaul

We've significantly enhanced the README with:
- A complete, copy-pasteable deployment manifest including all necessary Kubernetes resources
- Detailed explanations of when and why you need kube-oidc-gateway
- Expanded project overview covering supported use cases (AWS IRSA, GCP Workload Identity, Azure Workload Identity, HashiCorp Vault, GitHub Actions, GitLab CI)
- Updated configuration reference including the new `CLIENT_CACHE_TTL_SECONDS` option
- Recommended resource limits and security context settings

The deployment manifest now includes Namespace, ServiceAccount, ClusterRole, ClusterRoleBinding, Deployment, and Service resources—everything you need to get started in a single file.

## Why It Matters

### Better Cache Control Means Better Performance

Separating client cache TTL from internal cache TTL addresses a common operational pattern. Your Kubernetes API server data changes frequently, so you want the gateway to fetch fresh information often. However, OIDC discovery documents and JWKS sets typically change infrequently. By allowing clients to cache these responses longer, you reduce unnecessary traffic while maintaining data freshness on the gateway side.

### Lower Barrier to Entry

The enhanced documentation removes friction for new users. Having a complete, tested deployment example directly in the README means you can deploy kube-oidc-gateway in minutes without hunting through separate files or examples directories. The detailed explanations also help operators understand not just how to deploy, but why certain configurations matter.

### Active Maintenance Signal

This release includes updates to Go 1.26.0 and numerous dependency updates via Dependabot. Regular maintenance updates like these keep the project secure and ensure compatibility with the broader Kubernetes ecosystem.

## Upgrade Instructions

Upgrading to v1.1.0 is straightforward—there are **no breaking changes**. Your existing deployments will continue to work without modification.

### For Existing Deployments

Simply update your container image tag to `v1.1.0`:

```yaml
spec:
  containers:
  - name: kube-oidc-gateway
    image: ghcr.io/unitvectory-labs/kube-oidc-gateway:v1.1.0
```

### For New Users

Deploy using the complete manifest in the README. The default configuration works well for most use cases, but you can customize cache behavior:

```yaml
env:
- name: CACHE_TTL_SECONDS
  value: "60"   # Internal API server cache (default)
- name: CLIENT_CACHE_TTL_SECONDS
  value: "3600" # Client-facing cache headers (default: 1 hour)
```

### Rolling Update Considerations

As with any stateful service update, we recommend using a rolling update strategy. The gateway's in-memory cache will be rebuilt on the new pods automatically after they start.

---

*This post was AI-generated using unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M. Generated on March 18, 2026 based on the v1.1.0 release from the [UnitVectorY-Labs/kube-oidc-gateway](https://github.com/UnitVectorY-Labs/kube-oidc-gateway) repository. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
