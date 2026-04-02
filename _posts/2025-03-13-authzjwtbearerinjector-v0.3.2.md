---
layout: post
title: "authzjwtbearerinjector v0.3.2 Release"
date: 2025-03-13 02:26:00 -0500
tags: ["authzjwtbearerinjector", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Intro

On March 13, 2025, we released v0.3.2 of authzjwtbearerinjector—a routine maintenance update that keeps our ExtAuthz service running smoothly with the latest Go runtime and dependency updates. This release is fully backward compatible and requires no configuration changes from users.

## What's New

While v0.3.2 doesn't introduce new features, it brings important under-the-hood improvements that keep the service secure and performant:

**Runtime Updates**
- Upgraded to Go 1.24.1 for improved stability and bug fixes in the Go toolchain
- Updated gRPC library from 1.70.0 to 1.71.0, enhancing network communication between Envoy Proxy and the service
- Refreshed network libraries (golang.org/x/net) with security and performance patches

**Infrastructure Improvements**
- Enhanced automated dependency management through Dependabot, now tracking Docker ecosystem updates alongside Go modules
- Added project board automation to better track issues and pull requests

## Why It Matters

This maintenance release reflects our commitment to keeping authzjwtbearerinjector up-to-date with current dependencies. Regular dependency updates are crucial for:

- **Security**: Staying current with security patches in core libraries
- **Stability**: Benefiting from bug fixes in the Go runtime and gRPC stack
- **Maintainability**: Automated dependency management ensures nothing falls through the cracks

The addition of Docker ecosystem tracking in Dependabot means container base images will now receive the same proactive attention as application dependencies.

## Upgrade & Installation

**Docker Users**
Pull the updated image:
```
ghcr.io/unitvectory-labs/authzjwtbearerinjector:v0.3.2
```

Simply redeploy your sidecar container—no configuration changes required.

**Build from Source**
Ensure you have Go 1.24.1 or later installed. The updated `go.mod` now requires this version.

**Compatibility**
- Fully backward compatible with v0.3.1
- No API changes
- No Envoy Proxy configuration changes needed
- Upgrade when convenient as part of routine maintenance

---

*This post was AI-generated using unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M. Release v0.3.2 was published on March 13, 2025. Source: [authzjwtbearerinjector](https://github.com/UnitVectorY-Labs/authzjwtbearerinjector) | Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
