---
layout: post
title: "authzjwtbearerinjector v0.3.5 Released"
date: 2026-03-19 09:00:00 -0500
tags: [authzjwtbearerinjector, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introduction

Today, March 19, 2026, we're pleased to announce the release of **authzjwtbearerinjector v0.3.5**. This maintenance release builds on the strong foundation established in previous versions, delivering important infrastructure improvements and enhanced operational visibility for teams running this gRPC-based ExtAuthz service with Envoy Proxy.

Five months after v0.3.4, this update focuses on keeping your deployment secure and up-to-date while introducing helpful new features that make day-to-day operations smoother.

## What's New

### Version Visibility at Startup

You can now see exactly which version of authzjwtbearerinjector is running directly in the application logs. On startup, the service will log:

```
Starting authzjwtbearerinjector version <version>
```

The version is injected at build time, making it easy to verify deployments and troubleshoot issues without needing to dig through container metadata or registry tags.

### Enhanced Multi-Architecture Docker Support

Docker images now include proper support for multiple architectures. Whether you're running on standard x86_64 servers or ARM-based infrastructure like Apple Silicon or AWS Graviton processors, you'll get optimized builds that have been properly tested for your platform.

### Security Hardening

This release includes important security improvements:

- **Non-root container execution**: The Docker image now runs as a non-root user (UID 65532), following security best practices for containerized workloads
- **Debian 13 base image**: Migration from Debian 12 to Debian 13 brings the latest security patches and updated system packages
- **Updated dependencies**: Critical libraries including Envoy control plane, gRPC, and Google protobuf libraries have been updated to their latest versions

## Why It Matters

While v0.3.5 doesn't introduce new functional features, maintenance releases like this are essential for keeping your infrastructure secure and reliable. The dependency updates alone may include critical security patches that protect against newly discovered vulnerabilities.

The version logging feature addresses a common operational need: quickly identifying which version is running across multiple environments. This becomes invaluable during incident response or when coordinating rollouts across staging and production systems.

For teams deploying to heterogeneous infrastructure, the improved multi-architecture Docker builds ensure consistent performance and behavior regardless of your underlying hardware platform.

## Upgrade and Installation

Upgrading to v0.3.5 is straightforward and requires no configuration changes:

```bash
docker pull ghcr.io/unitvectory-labs/authzjwtbearerinjector:v0.3.5
```

The new version maintains full backward compatibility with v0.3.4. Your existing configuration files, environment variables, and Envoy route metadata settings will continue to work exactly as before.

### Deployment Verification

After deploying v0.3.5, check your application logs for the startup message confirming the version:

```
Starting authzjwtbearerinjector version v0.3.5
```

This confirms you're running the correct release and helps validate that your deployment succeeded.

---

**About This Release**: This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The information in this announcement reflects the official v0.3.5 release published on March 19, 2026 from the [UnitVectorY-Labs/authzjwtbearerinjector](https://github.com/UnitVectorY-Labs/authzjwtbearerinjector) repository. Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
