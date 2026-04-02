---
layout: post
title: "authzgcpk8stokeninjector v0.2.0 Release"
date: 2025-01-26 09:00:00 -0500
tags: ["authzgcpk8stokeninjector", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introduction

We're pleased to announce the release of authzgcpk8stokeninjector v0.2.0, available now on [GitHub](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector/releases/tag/v0.2.0). Released on January 26, 2025, this update brings an important structural improvement that makes the project properly consumable as a Go module dependency.

For users familiar with authzgcpk8stokeninjector—the gRPC ExtAuthz service that injects GCP identity tokens into Envoy Proxy requests in Kubernetes environments—this release ensures the project is now correctly structured for versioning and import within the Go ecosystem.

## What's New

### Proper Go Module Path

The primary change in v0.2.0 is the update of the Go module path from an incomplete local declaration to the full GitHub repository structure: `github.com/UnitVectorY-Labs/authzgcpk8stokeninjector`. This correction enables:

- **Proper Go module resolution**: The project can now be imported and versioned correctly within the Go dependency management system
- **Semantic import paths**: Developers can now use standard Go import statements with full repository path specification
- **Better ecosystem integration**: The module is now properly discoverable via `pkg.go.dev` and other Go tooling

### New Contributor Welcome

This release marks the first contribution from [@JaredHatfield](https://github.com/JaredHatfield), who submitted the pull request to correct the module path. Welcome to the project!

## Why It Matters

### For Container Users

If you're using authzgcpk8stokeninjector as a Docker sidecar container in your Kubernetes deployments, this release is a seamless drop-in upgrade. No configuration changes are required—simply pull the updated image:

```bash
docker pull ghcr.io/unitvectory-labs/authzgcpk8stokeninjector:v0.2.0
```

### For Go Module Consumers

For developers importing authzgcpk8stokeninjector as a Go module dependency, this fix is essential. Update your `go.mod` file:

```
require github.com/UnitVectorY-Labs/authzgcpk8stokeninjector v0.2.0
```

And update import statements throughout your codebase from:
- `authzgcpk8stokeninjector/internal/cache` → `github.com/UnitVectorY-Labs/authzgcpk8stokeninjector/internal/cache`
- `authzgcpk8stokeninjector/internal/token` → `github.com/UnitVectorY-Labs/authzgcpk8stokeninjector/internal/token`

This change makes proper Go module versioning and dependency management possible for the project.

## Getting Started

The authzgcpk8stokeninjector service requires the following environment variables to operate:

| Variable | Description |
|----------|-------------|
| `K8S_TOKEN_PATH` | Path to Kubernetes service account token |
| `PROJECT_NUMBER` | GCP Project Number |
| `WORKLOAD_IDENTITY_POOL` | Workload Identity Pool name |
| `WORKLOAD_PROVIDER` | Workload Identity Provider name |
| `SERVICE_ACCOUNT_EMAIL` | Email of GCP service account |

Optional variables include `PORT` (defaults to 50051) and `DEBUG` for verbose logging.

For complete installation and configuration details, see the [repository documentation](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector).

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Original release date: January 26, 2025. Repository: [UnitVectorY-Labs/authzgcpk8stokeninjector](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
