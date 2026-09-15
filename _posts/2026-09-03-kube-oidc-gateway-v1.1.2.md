---
layout: post
title: "kube-oidc-gateway v1.1.2 released"
date: 2026-09-03 09:00:00 -0500
tags: ["kube-oidc-gateway", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

kube-oidc-gateway v1.1.2 was released on September 3, 2026. This is a maintenance update focused on build infrastructure and dependency hygiene with no changes to the gateway's runtime behavior or user-facing APIs.

The release modernizes the toolchain used to build the image and updates CI dependencies to current versions. Users running workload identity federation through the gateway will see the same endpoints, configuration, and caching behavior as before, built from a fresher Go toolchain.

## What's new

v1.1.2 contains no new features or bug fixes in the application code. The changes are confined to build and CI:

- The Go toolchain was updated to 1.27.1. go.mod, the Dockerfile builder stage, and the build workflow now target golang:1.27.1.
- CI and workflow dependencies were refreshed via dependabot and manual updates, including docker/setup-buildx-action, actions/attest-build-provenance, github/codeql-action/upload-sarif, astral-sh/setup-uv, and the chromadb-repo-indexer action.

No source files in main.go or internal/ were modified, and the public endpoints .well-known/openid-configuration, /openid/v1/jwks, /healthz, and /readyz remain unchanged.

## Why it matters

Keeping the build environment current reduces technical debt and ensures the image is produced with a supported Go release. For operators, this means the v1.1.2 container can be adopted as a drop-in replacement with confidence that the runtime contract is preserved while benefiting from upstream toolchain improvements and more recent CI actions for security scanning and provenance attestation.

There are no breaking changes, no configuration migrations, and no new RBAC requirements. The update is primarily about maintainability and supply chain hygiene.

Upgrading

Upgrade is straightforward. Pull the new image tag ghcr.io/unitvectory-labs/kube-oidc-gateway:v1.1.2 or update to latest in your deployment manifest. No environment variables, ServiceAccount bindings, or Kubernetes manifests need to change. The gateway continues to expose OIDC discovery and JWKS with in-memory caching for workload identity federation exactly as documented in the README.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/kube-oidc-gateway release v1.1.2 published 2026-09-03. Date of generation: 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
