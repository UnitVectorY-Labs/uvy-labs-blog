---
layout: post
title: "authzgcpk8stokeninjector v0.2.5: Security Hardening and Infrastructure Updates"
date: 2026-03-19 00:00:00 -0500
tags: [authzgcpk8stokeninjector, "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're pleased to announce the availability of **authzgcpk8sTokenInjector v0.2.5**, released on March 19, 2026. This maintenance release focuses on security hardening, dependency updates, and infrastructure improvements that keep your deployments secure and up-to-date without requiring any configuration changes.

## What's New

### Security Enhancements

The most significant change in v0.2.5 is improved container security posture. The service now runs as a **non-root user** (UID 65532:65532) inside the container, aligning with security best practices for production workloads. This change reduces the attack surface and helps organizations meet compliance requirements that mandate non-root container execution.

### Version Visibility

Users can now see the running version directly in startup logs. When the service starts, it reports its version number, making it easier to verify deployments and troubleshoot issues in production environments.

### Infrastructure Updates

- **Base Image Upgrade:** Migrated from Debian 12 to Debian 13 distroless base image for enhanced security and reduced attack surface
- **Go Runtime:** Updated to Go 1.26.1 for improved performance and security patches
- **Multi-Architecture Support:** Enhanced Docker build workflows now provide better support for both AMD64 and ARM64 architectures, including Apple Silicon

### Dependency Refresh

This release incorporates updates across the entire dependency stack:

| Component | Update |
|-----------|--------|
| gRPC | v1.76.0 → v1.79.3 |
| Envoy Control Plane | v1.35.0 → v1.37.0 |
| Go Protobuf | v1.36.6 → v1.36.11 |
| Google APIs RPC | Aug 2025 → Dec 2025 |

These updates bring bug fixes, security patches, and compatibility improvements from upstream projects while maintaining full backward compatibility.

## Why It Matters

Security isn't just about adding new features—it's also about maintaining a strong defensive posture through regular maintenance. The v0.2.5 release embodies this principle:

- **Compliance Ready:** Non-root container execution satisfies security policies in regulated environments
- **Attack Surface Reduction:** Distroless base images contain only what's needed to run the application, minimizing vulnerabilities
- **Supply Chain Security:** Keeping dependencies current ensures protection against newly discovered CVEs in upstream projects
- **Production Stability:** The enhanced multi-architecture build pipeline provides more reliable image distribution across different infrastructure

For teams running authzgcpk8stokeninjector as an Envoy Proxy sidecar for GCP workload identity federation, this release means you can upgrade with confidence. There are no breaking changes, no configuration modifications required, and no expected behavioral differences—the improvements happen entirely under the hood.

## Upgrading

Upgrading to v0.2.5 is straightforward:

```bash
docker pull ghcr.io/unitvectory-labs/authzgcpk8stokeninjector:v0.2.5
```

For Kubernetes deployments, update your image tag and rollout the change. The container's non-root execution mode may require adjusting your Pod's `securityContext` if you have restrictive Pod Security Policies in place, though running as non-root is typically the recommended configuration.

After upgrading, check your logs for the version announcement:
```
Starting authzjwtbearerinjector version v0.2.5
```

All existing environment variable configurations remain unchanged, and the service continues to operate on port 50051 by default.

---

## Transparency Note

This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The content is based on the v0.2.5 release of authzgcpk8stokeninjector published on March 19, 2026. For complete details, see the [GitHub release](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector/releases/tag/v0.2.5).

Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
