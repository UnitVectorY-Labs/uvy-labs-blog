---
layout: post
title: "bulkfilepr v0.2.3 Released - Security Updates and Go 1.26 Support"
date: 2026-02-25 01:34:46 -0500
tags: ["bulkfilepr", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're pleased to announce the release of bulkfilepr v0.2.3, a maintenance release that strengthens the project's security posture and updates its build infrastructure. Released on February 25, 2026, this version focuses on supply chain hardening while maintaining full compatibility with existing installations.

## What's New

While v0.2.3 doesn't introduce new user-facing features, it brings important improvements under the hood:

**Security Enhancements**
- Updated all GitHub Actions workflow dependencies to pinned, verified versions
- Enhanced supply chain security through explicit commit hashes for critical actions
- Improved build provenance attestation for better artifact verification

**Build System Updates**
- Upgraded Go language version from 1.25.7 to 1.26.0
- Refined automated version management with stricter semantic versioning validation
- Streamlined branch naming conventions for automated tooling updates

## Why It Matters

For users downloading pre-built binaries, this release ensures you're benefiting from a more secure build pipeline. The pinned action versions reduce supply chain attack surface by eliminating reliance on mutable tags - every step of the build process now references verified commit hashes.

The Go 1.26.0 upgrade brings performance improvements and bug fixes from the Go team. While end users won't notice any behavioral changes (binaries are pre-compiled), developers building bulkfilepr from source will need to ensure they have Go 1.26.0 or later installed.

These maintenance updates reflect our commitment to operational excellence. By investing in security infrastructure and build reliability now, we create a solid foundation for future feature development.

## Upgrade Instructions

Upgrading to v0.2.3 is straightforward:

**For Binary Users:**
Download the appropriate release asset for your platform from the [v0.2.3 release page](https://github.com/UnitVectorY-Labs/bulkfilepr/releases/tag/v0.2.3). Releases are available for:
- Linux (amd64, arm64, 386)
- macOS (amd64, arm64)  
- Windows (amd64, 386)

Each archive includes checksum files to verify download integrity. No configuration changes are required - simply replace your existing binary.

**For Source Builders:**
Update your Go installation to version 1.26.0 or later before building:

```bash
go version  # Verify you have Go 1.26.0+
```

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was published on February 25, 2026, based on the v0.2.3 release of bulkfilepr from the [UnitVectorY-Labs/bulkfilepr](https://github.com/UnitVectorY-Labs/bulkfilepr) repository. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
