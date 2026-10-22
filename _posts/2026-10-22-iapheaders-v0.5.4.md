---
layout: post
title: "iapheaders v0.5.4: Security Rebuild for Trusted CA Store"
date: 2026-10-22 02:23:35 +0000
tags: ["iapheaders", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-10-22, UnitVectorY-Labs published iapheaders v0.5.4. This release is a security-focused rebuild of the existing application with no functional code changes. The container image is now built with Go 1.27.3 to incorporate an updated certificate authority trust store that distrusts compromised eMudhra intermediate CAs, tracked as GO-2026-6809 / CVE-2026-111943. For users running the iapheaders Docker image, this is a drop-in update that improves TLS verification posture without changing behavior or configuration.

## What's new

v0.5.4 delivers the same iapheaders experience for inspecting Google Cloud Identity-Aware Proxy headers and JWT assertions, with one important hardening behind the scenes. The application continues to display `x-goog-authenticated-user-email`, `x-goog-authenticated-user-id`, and `x-goog-iap-jwt-assertion`, decode the JWT, verify its signature using Google's public JWK, and indicate validity. Environment variables `HIDE_SIGNATURE` and `PORT` remain unchanged, and there are no new features or API changes in this version.

The release notes highlight the security rebuild and a set of internal CI improvements that do not affect users: Go version bumps in workflows to 1.27.2, a fix for govulncheck SARIF upload failures via stack deduplication, and routine dependency updates for actions/upload-artifact, astral-sh/setup-uv, and the CodeQL action group. No application source files were modified between v0.5.3 and v0.5.4.

## Why it matters

iapheaders relies on outbound HTTPS to fetch Google's JWK set for JWT verification. An up-to-date CA trust store is essential for safe TLS verification. By rebuilding with Go 1.27.3, v0.5.4 inherits the Go toolchain's distrust of the compromised eMudhra intermediate CAs. Pulling the new image reduces the risk of TLS interception or mis-issued certificates affecting verification requests, while keeping the application behavior identical to v0.5.3.

There are no breaking changes and no migration steps. The update is fully compatible with existing deployments, and the same Docker image reference `ghcr.io/unitvectory-labs/iapheaders` applies.

## Upgrade

Users should update their deployments to the v0.5.4 tag to benefit from the CA trust store fix:

```bash
docker pull ghcr.io/unitvectory-labs/iapheaders:v0.5.4
```

No configuration changes are required. The image is a drop-in replacement for v0.5.3. As always, review the release notes at https://github.com/UnitVectorY-Labs/iapheaders/releases/tag/v0.5.4 and test in your environment before rolling out broadly.

*This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. It references repository UnitVectorY-Labs/iapheaders, release v0.5.4, and was generated on 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
