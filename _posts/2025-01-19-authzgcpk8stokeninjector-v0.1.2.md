---
layout: post
title: "authzgcpk8stokeninjector v0.1.2 Released: Security Updates and Build Improvements"
date: 2025-01-19 15:32:46 -0500
tags: ["authzgcpk8stokeninjector", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## A Fresh Maintenance Release with Important Updates

We're pleased to announce the release of **authzgcpk8stokeninjector v0.1.2**, published on January 19, 2025. This maintenance release brings important security updates, dependency patches, and enhanced build infrastructure to help keep your Envoy Proxy authorization layer running smoothly and securely.

As a gRPC-based ExtAuthz service that injects GCP identity tokens into requests for Kubernetes environments running with Workload Identity Federation, staying current with security patches is essential. This release ensures you're running the latest patched versions of critical dependencies while maintaining full backward compatibility.

## What's New

While v0.1.2 doesn't introduce new features, it delivers important behind-the-scenes improvements:

**Security and Dependency Updates:**
- Updated Go runtime from 1.23.4 to 1.23.5, incorporating the latest security patches
- Upgraded `google.golang.org/grpc` from 1.69.2 to 1.69.4, which includes a critical fix for path header matcher support in RBAC configurations
- Updated `github.com/envoyproxy/go-control-plane/envoy` from 1.32.2 to 1.32.3

**Build Infrastructure:**
- New comprehensive CI workflow with automated testing, race detection, and code coverage reporting
- Enhanced build verification on every push and pull request to main

These updates strengthen the security posture of your deployment while improving the reliability of the authorization service you depend on.

## Why It Matters

### The gRPC Path Header Fix

The upgrade to gRPC 1.69.4 includes an important bug fix for `:path` header matchers in RBAC (Role-Based Access Control). Previously, path-based access control rules would never successfully match—a silent failure that could have security implications if you're relying on fine-grained authorization rules based on request paths.

If you've been experiencing unexpected behavior with path-based authorization rules, upgrading to v0.1.2 may resolve those issues.

### Security First

Running outdated dependencies in authentication and authorization components introduces unnecessary risk. This maintenance release ensures you're protected by the latest security patches from the Go runtime and gRPC library maintainers. The Envoy control plane updates also include upstream improvements that enhance overall stability.

### Better Project Health

The addition of automated CI with code coverage means the authzgcpk8stokeninjector project now has comprehensive test coverage and quality gates. This translates to more reliable releases and greater confidence in future updates.

## Upgrade Instructions

Upgrading to v0.1.2 is straightforward—there are no breaking changes or configuration modifications required.

**Docker:**
```bash
docker pull ghcr.io/unitvectory-labs/authzgcpk8stokeninjector:v0.1.2
```

**Kubernetes:** Update your deployment image tag to `ghcr.io/unitvectory-labs/authzgcpk8stokeninjector:v0.1.2`.

Your existing environment variables and Envoy Proxy configurations remain unchanged. The service continues to listen on port 50051 by default and maintains the same token caching behavior.

## Keep Moving Forward

This maintenance release exemplifies our commitment to keeping authzgcpk8stokeninjector secure, reliable, and well-maintained. While you won't see flashy new features here, you're getting something equally important: peace of mind that your authorization layer is running on a solid, up-to-date foundation.

For the complete list of changes, visit the [official release notes](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector/releases/tag/v0.1.2).

---

**Transparency Note:** This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was generated on 2026-03-17 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller) based on the official v0.1.2 release from https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector/releases/tag/v0.1.2 published on 2025-01-19.
