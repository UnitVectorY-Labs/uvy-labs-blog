---
layout: post
title: "authzgcpk8stokeninjector v0.2.10 – Security Rebuild"
date: 2026-10-22 00:52:22 +0000
tags: ["authzgcpk8stokeninjector", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On October 22, 2026, authzgcpk8stokeninjector v0.2.10 was released. This is a security-focused rebuild of the container image with no functional code changes. The update moves the build toolchain to Go 1.27.3 to address a compromised eMudhra certificate authority issue, ensuring the images you deploy are built with a hardened trust store.

## What's new

v0.2.10 contains no new features, bug fixes, or behavioral changes. The release updates the Docker builder from golang:1.27.2 to golang:1.27.3 as a direct response to GO-2026-6809 / CVE-2026-111943, which concerns compromised eMudhra intermediate CAs. The application code, dependencies, configuration surface, and Envoy integration remain identical to v0.2.9.

## Why it matters

The change is about build supply-chain integrity rather than runtime behavior. Go 1.27.3 distrusts the affected eMudhra intermediates, so images built with this toolchain are not vulnerable to the certificate authority compromise. For teams running authzgcpk8stokeninjector as a sidecar to Envoy in Kubernetes, pulling v0.2.10 provides defense-in-depth without any operational changes.

Because there are no functional changes, existing Workload Identity configuration, environment variables, and Envoy ExtAuthz filter settings continue to work as before.

## Upgrade

Upgrading is a drop-in container image replacement. Pull the v0.2.10 image from GitHub Packages at `ghcr.io/unitvectory-labs/authzgcpk8stokeninjector` and update your deployment to use the new tag. No configuration changes, migrations, or restarts beyond the normal rollout are required. Rollback to v0.2.9 is also safe if needed.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/authzgcpk8stokeninjector, release v0.2.10, date of generation 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).