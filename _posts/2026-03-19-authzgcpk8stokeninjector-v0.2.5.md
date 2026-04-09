---
layout: post
title: "Enhancing Security and Observability: authzgcpk8stokeninjector v0.2.5"
date: 2026-03-19 09:00:00 -0500
tags: ["authzgcpk8stokeninjector", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On March 19, 2026, we released v0.2.5 of authzgcpk8stokeninjector. This update focuses on hardening the security of our token injection service and improving operational visibility, ensuring a more robust and transparent experience for users running Envoy in Kubernetes on GCP.

## What's new

- **Hardened Container Security**: The service now runs as a non-root user, and we have upgraded the base image to Debian 13 distroless to minimize the attack surface.
- **Version Transparency**: We've added version logging on startup, allowing operators to easily verify the running version directly from the logs.
- **Core Updates**: This release includes an update to the Go toolchain (1.26.1) and bumps for critical dependencies, including gRPC and the Envoy control plane, for improved stability.

## Why it matters

Transitioning to a non-root execution model is a critical security best practice that reduces the potential impact of container breakouts. Combined with the latest distroless base image, your infrastructure gains a smaller, more secure footprint. Additionally, the new version logging removes guesswork from operations, enabling your team to confirm deployments and troubleshoot issues with confidence.

## Upgrade and Installation

Upgrading to v0.2.5 is straightforward. However, because the container now runs as a non-root user (UID 65532), we recommend that users with highly customized security contexts or volume mounts verify that the non-root user has the necessary permissions to access required filesystem paths.

To upgrade, simply update your Kubernetes deployment to use the v0.2.5 image tag.

---
*This post was AI-generated.*
*Model used: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL*
*Repository: UnitVectorY-Labs/authzgcpk8stokeninjector*
*Release: v0.2.5*
*Date of generation: 2026-04-09*
*Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*