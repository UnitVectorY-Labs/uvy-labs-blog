---
layout: post
title: "kube-oidc-gateway v1.1.3 — Security Rebuild"
date: 2026-10-22 02:30:31 +0000
tags: ["kube-oidc-gateway", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

kube-oidc-gateway v1.1.3 was released on 2026-10-22. This is a security-focused rebuild with no functional code changes. The container image is built with Go 1.27.3 to include the CA bundle update that distrusts compromised eMudhra intermediate certificates, tracked as GO-2026-6809 / CVE-2026-111943. For users, this means the same endpoints, configuration, and behavior as v1.1.2, but with an updated TLS trust store in the Go runtime used to connect to the Kubernetes API server.

## What's new

v1.1.3 updates the build toolchain only. The Dockerfile builder base is moved from golang:1.27.2 to golang:1.27.3, bringing the Go 1.27.3 CA bundle changes into the released image. The Go module file is normalized for consistency.

No application logic was changed. The OIDC discovery endpoint `/.well-known/openid-configuration`, the JWKS endpoint `/openid/v1/jwks`, and the health endpoints `/healthz` and `/readyz` behave identically to v1.1.2. Configuration via environment variables, RBAC requirements, and caching behavior are unchanged.

This release is a drop-in replacement for v1.1.2 with no breaking changes.

## Why it matters

kube-oidc-gateway exposes Kubernetes OIDC discovery and JWKS information to external systems for workload identity federation, without requiring anonymous authentication on the API server. The gateway relies on the Go runtime's TLS trust decisions when it authenticates to the Kubernetes API server.

Building with Go 1.27.3 ensures the runtime distrusts the compromised eMudhra intermediate CAs identified in GO-2026-6809 / CVE-2026-111943. Upgrading closes a trust store exposure at the build level while preserving the lightweight in-memory caching and the minimal RBAC profile that makes the gateway suitable for environments with `--anonymous-auth=false`.

Because there are no functional changes, operators can adopt the security rebuild with confidence and no operational changes.

## Upgrading

Update the container image tag from `v1.1.2` to `v1.1.3`. The image is published as `ghcr.io/unitvectory-labs/kube-oidc-gateway:v1.1.3`.

No configuration changes, RBAC updates, or redeployment procedures are required. The new image is fully compatible with existing deployments.

Transparency note: This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. It references repository UnitVectorY-Labs/kube-oidc-gateway, release v1.1.3, and was generated on 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
