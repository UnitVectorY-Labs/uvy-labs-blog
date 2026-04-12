---
layout: post
title: "Introducing kube-oidc-gateway: Securely Exposing Kubernetes OIDC Endpoints"
date: 2026-01-13 09:00:00 -0500
tags: ["kube-oidc-gateway", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On January 13, 2026, we are excited to announce the launch of **kube-oidc-gateway**, a lightweight reverse proxy designed to solve a critical challenge for operators of hardened Kubernetes clusters: exposing OIDC discovery and JWKS endpoints without compromising security.

### What is kube-oidc-gateway?

`kube-oidc-gateway` is a production-ready tool that allows external systems to verify Kubernetes ServiceAccount tokens via OpenID Connect (OIDC). 

In many secure environments, Kubernetes clusters are configured with `--anonymous-auth=false` to prevent unauthorized access to the API server. While this is a best practice for hardening, it creates a problem for Workload Identity Federation. External providers (like AWS, GCP, or Vault) need access to the cluster's OIDC discovery document and public keys (JWKS) to validate tokens, but these endpoints are blocked when anonymous access is disabled.

`kube-oidc-gateway` bridges this gap. It runs inside your cluster with its own ServiceAccount, authenticates to the API server on behalf of the requester, and serves the necessary OIDC metadata to the public.

### Why it matters

For organizations implementing zero-trust architectures and Workload Identity Federation, `kube-oidc-gateway` provides a secure and reliable path to identity verification:

*   **Maintain Hardening:** You no longer have to choose between enabling anonymous authentication and supporting Workload Identity. Keep your API server locked down.
*   **High Availability:** The gateway includes an in-memory cache with a "stale-on-error" mechanism. If the Kubernetes API server is momentarily unavailable, the gateway continues to serve the last known valid keys, ensuring that authentication for your workloads doesn't break.
*   **Production-Grade Stability:** Built with stability in mind, the gateway features strict HTTP timeouts to prevent resource exhaustion, response limiting to protect memory, and graceful shutdown handling for seamless Kubernetes rollouts.
*   **Observability:** Integrated health checks (`/healthz` and `/readyz`) and ETag support make it easy to monitor and integrate with standard Kubernetes probes and downstream caches.

### Getting Started

`kube-oidc-gateway` is designed for simplicity, configured entirely through environment variables such as `UPSTREAM_HOST`, `CACHE_TTL_SECONDS`, and `LISTEN_PORT`.

To deploy the gateway, you will need to provide it with a ServiceAccount associated with a `ClusterRole` that has `get` permissions for the following non-resource URLs:
- `/.well-known/openid-configuration`
- `/openid/v1/jwks`

By providing a secure, authenticated proxy for these public endpoints, `kube-oidc-gateway` simplifies the path to secure, federated identity in Kubernetes.

***

*This post was AI-generated. The model used was unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Reference: [UnitVectorY-Labs/kube-oidc-gateway](https://github.com/UnitVectorY-Labs/kube-oidc-gateway), release v1.0.0, generated on 2026-04-12. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*