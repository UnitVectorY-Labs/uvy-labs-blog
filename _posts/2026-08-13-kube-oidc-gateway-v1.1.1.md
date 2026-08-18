---
layout: post
title: "kube-oidc-gateway v1.1.1 Released"
date: 2026-08-13 00:57:42 -0500
tags: ["kube-oidc-gateway", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

kube-oidc-gateway v1.1.1 is now available as of August 13, 2026. This is a maintenance release focused on build hygiene and toolchain freshness for the OIDC discovery proxy. The gateway continues to expose Kubernetes OIDC discovery and JWKS endpoints with in-memory caching, and v1.1.1 keeps that behavior unchanged while updating the build environment and CI workflows for improved reliability.

## What's new

v1.1.1 contains no functional changes to the gateway binary. The update is a drop-in patch that refreshes the build pipeline:

* The builder image is updated to golang:1.26.5 and go.mod reflects Go 1.26, picking up upstream toolchain improvements.
* Application code receives a minor Go idiom update from `interface{}` to `any` with whitespace cleanup in `internal/gateway/handlers.go`. No behavior change.
* CI and repository tooling are hardened with dependency updates across GitHub Actions, addition of Semgrep security scanning, a ChromaDB repo indexer workflow, and a fix to `persist-credentials` settings.
* Documentation housekeeping removes the retired Go Report Card badge from the README.

## Why it matters

For operators using kube-oidc-gateway to enable workload identity federation, Vault JWT/OIDC auth, or CI/CD OIDC without exposing the Kubernetes API server anonymously, v1.1.1 delivers the same runtime behavior with a more current build base. The toolchain refresh and CI hygiene reduce supply-chain risk and make future updates smoother, while the lack of functional changes means you can upgrade with confidence and no configuration adjustments.

## Upgrade

Upgrading is straightforward. Pull the v1.1.1 image from ghcr.io/unitvectory-labs/kube-oidc-gateway or continue using the `latest` tag. No manifest, ConfigMap, RBAC, or environment variable changes are required. The release is fully compatible with v1.1.0 deployments.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/kube-oidc-gateway, release v1.1.1, date of generation 2026-08-18. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
