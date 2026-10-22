---
layout: post
title: "LockboxKMS v0.3.10: Security Rebuild with Updated Go Toolchain"
date: 2026-10-22 02:38:47 +0000
tags: ["lockboxkms", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On October 22, 2026, LockboxKMS v0.3.10 was released. This is a security-focused maintenance update for the web interface that encrypts text using Google Cloud KMS. The release contains no functional changes to the application itself; it is a drop-in rebuild with Go 1.27.3 to address trust store concerns around compromised eMudhra intermediate CAs referenced as GO-2026-6809 / CVE-2026-111943.

The update continues LockboxKMS’s rapid security maintenance cadence, ensuring the container image is built with an up-to-date toolchain while preserving the same user experience and configuration.

## What's new

LockboxKMS v0.3.10 ships the same application as v0.3.9 with one important build change:

- Security rebuild with Go 1.27.3. The Dockerfile builder base was updated from golang:1.27.2 to golang:1.27.3, aligning the build environment with the updated root CA trust store that distrusts the compromised eMudhra intermediate CAs.
- No source code, templates, configuration, or dependency changes. The web UI, environment variables, permissions, and encryption behavior are unchanged.
- The container image is available as `ghcr.io/unitvectory-labs/lockboxkms:v0.3.10`. No release assets are published; upgrades are via the container registry.

## Why it matters

LockboxKMS is intended to be deployed behind a reverse proxy and used for one-way encryption of sensitive text using your own Google Cloud KMS keys. While the application code is unchanged, building with Go 1.27.3 improves the security posture of the build chain and the toolchain’s TLS verification, reducing risk associated with the compromised CA chain identified in GO-2026-6809 / CVE-2026-111943.

For operators, this means you can upgrade with confidence: there is no new configuration, no migration, and no behavioral change for users. It is a safe, drop-in replacement that keeps your deployment aligned with current security recommendations without interrupting workflows.

## Upgrade and installation

Upgrading is straightforward:

1. Pull the new image: `docker pull ghcr.io/unitvectory-labs/lockboxkms:v0.3.10`
2. Redeploy the container using your existing environment variables:
   - `GOOGLE_CLOUD_PROJECT`
   - `KMS_LOCATION` defaults to us
   - `KMS_KEY_RING` defaults to lockboxkms
   - `GOOGLE_APPLICATION_CREDENTIALS` optional
   - `PORT` defaults to 8080
3. Restart behind your existing reverse proxy or Identity Aware Proxy layer.

No migration steps are required, and the service remains fully compatible with v0.3.9 deployments.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/lockboxkms, release v0.3.10, published 2026-10-22. Date of generation: 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
