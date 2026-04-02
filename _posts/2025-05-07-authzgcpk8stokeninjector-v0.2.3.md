---
layout: post
title: "authzgcpk8stokeninjector v0.2.3 Released: Security Patch and Runtime Updates"
date: 2025-05-07 22:52:37 -0500
tags: ["authzgcpk8stokeninjector", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Intro

On May 7, 2025, we released authzgcpk8stokeninjector v0.2.3, a maintenance release focused on critical security updates and runtime improvements. This version patches a high-severity vulnerability in the JWT library and upgrades the Go runtime to 1.24.3, ensuring your deployment stays secure and up-to-date.

While this release doesn't introduce new features, it addresses important security concerns and provides ongoing maintenance improvements that keep your Envoy Proxy integration running smoothly.

---

## What's New

### Critical Security Patch: JWT Library Updated

The most important change in v0.2.3 is the upgrade of the `golang-jwt/jwt/v4` library from version 4.5.1 to 4.5.2. This update addresses **CVE-2025-30204** (GHSA-mh63-6h87-95cp), a high-severity vulnerability with a CVSS score of 8.7.

The vulnerability could allow excessive memory allocation during JWT header parsing, potentially enabling denial-of-service attacks through resource exhaustion. While your authzgcpk8stokeninjector deployment is typically protected behind Envoy Proxy in a controlled Kubernetes environment, applying this patch is essential for maintaining a strong security posture.

### Go Runtime Upgrade: 1.24.1 to 1.24.3

This release includes two incremental Go runtime upgrades, bringing you from version 1.24.1 to 1.24.3. These updates include:

- Security patches from the Go team
- Bug fixes and performance improvements
- Enhanced compatibility with modern Go packages

If you're running the official Docker images, you automatically receive these updates without any configuration changes.

### gRPC Library Updates

The gRPC library has been updated from 1.71.0 to 1.72.0 through two incremental releases. This brings:

- Bug fixes and stability improvements
- Updated protobuf definitions for better Envoy API compatibility
- Security patches from the gRPC maintainers

Additional network library updates (`golang.org/x/net`, `golang.org/x/sys`, and `golang.org/x/text`) provide further security patches and bug fixes as indirect dependencies.

---

## Why It Matters

### Security First

Authzgcpk8stokeninjector handles identity token injection for your Kubernetes workloads, making it a critical component in your service mesh authentication pipeline. Keeping this service patched ensures:

- **Defense-in-depth**: Even though the vulnerability's attack surface is limited in typical deployments, patching eliminates potential risks
- **Compliance**: Many security standards require timely application of high-severity patches
- **Peace of mind**: Your authentication infrastructure remains resilient against emerging threats

### Staying Current with Go

The Go runtime upgrades ensure your deployment benefits from the latest improvements while maintaining compatibility with the broader Go ecosystem. Since authzgcpk8stokeninjector is built on modern Go standards, staying current helps prevent technical debt accumulation.

### Zero Disruption Upgrades

This release maintains **full backward compatibility**:

- No configuration changes required
- No API changes
- Same port (default 50051) and environment variable setup
- Token caching behavior unchanged

You can upgrade with confidence using a standard rolling restart strategy.

---

## Upgrade Instructions

### For Docker Deployments

Pull the updated image and update your Kubernetes deployment:

```bash
docker pull ghcr.io/unitvectory-labs/authzgcpk8stokeninjector:v0.2.3
```

Then update your deployment manifest to reference the `v0.2.3` image tag and perform a rolling restart:

```bash
kubectl set image deployment/your-deployment authzgcpk8stokeninjector=ghcr.io/unitvectory-labs/authzgcpk8stokeninjector:v0.2.3
kubectl rollout restart deployment/your-deployment
```

### For Self-Compiled Builds

If you build from source:

```bash
git fetch --tags
git checkout v0.2.3
go mod tidy
go build -o server .
```

---

## Get the Release

Download v0.2.3 from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector/releases/tag/v0.2.3) or pull the Docker image from the GitHub Container Registry.

We recommend upgrading from v0.2.2 as soon as practicable to benefit from the security patches included in this release.

---

## Transparency Note

This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on May 7, 2025. The post was authored by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller) and is based on the official v0.2.3 release from the [authzgcpk8stokeninjector repository](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector/releases/tag/v0.2.3).
