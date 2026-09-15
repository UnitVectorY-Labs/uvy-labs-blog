---
layout: post
title: "authzgcpk8stokeninjector v0.2.7 Released"
date: 2026-09-03 09:51:50 -0500
tags: ["authzgcpk8stokeninjector", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

authzgcpk8stokeninjector v0.2.7 was released on September 3, 2026. This is a maintenance and toolchain update for the gRPC ExtAuthz service that injects GCP identity tokens into Envoy Proxy requests in Kubernetes. The release focuses on build hygiene and supply-chain security with no changes to application behavior, making it a safe, drop-in update for existing deployments.

What's new

v0.2.7 modernizes the build environment and refreshes dependencies without touching application source code. The Docker build now uses golang:1.27.1 and go.mod is updated to Go 1.27. Transitive dependencies are refreshed, including google.golang.org/grpc to 1.83.2, github.com/envoyproxy/go-control-plane/envoy to 1.39.0, and golang.org/x/net, golang.org/x/sys, and golang.org/x/text to their current maintenance streams.

CI and security posture are improved. Semgrep static analysis is added via a new workflow, CodeQL is pinned and updated to 4.37.9, and GitHub Actions across build, Docker, and release workflows are bumped to current versions with persist-credentials disabled. A ChromaDB repo indexer workflow is added for documentation infrastructure, and the retired Go Report Card badge is removed from the README.

Why it matters

For operators, v0.2.7 delivers security hygiene without risk. The updated Go toolchain and dependency set bring routine bug fixes and security improvements from gRPC, Envoy control plane libraries, and the Go standard library ecosystem. Because no Go source files changed, the ExtAuthz gRPC interface and environment variable configuration remain identical to v0.2.6. There are no breaking changes, no configuration changes, and no new features to adopt.

The CI hardening strengthens supply-chain security for future releases and provides additional static analysis coverage today. Teams relying on the published image can upgrade with confidence knowing the runtime behavior is unchanged.

Upgrade

The release is available as ghcr.io/unitvectory-labs/authzgcpk8stokeninjector:v0.2.7. Upgrade is a drop-in replacement: pull the new image tag and redeploy. No environment variables, Kubernetes manifests, or Envoy configuration changes are required. The service continues to listen on port 50051 by default and uses the same K8S_TOKEN_PATH, PROJECT_NUMBER, WORKLOAD_IDENTITY_POOL, WORKLOAD_PROVIDER, SERVICE_ACCOUNT_EMAIL, and DEBUG settings as before.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/authzgcpk8stokeninjector release v0.2.7 published 2026-09-03. Generated 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
