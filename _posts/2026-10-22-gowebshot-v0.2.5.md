---
layout: post
title: "gowebshot v0.2.5 Released"
date: 2026-10-22 00:30:00 +0000
tags: ["gowebshot", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

gowebshot v0.2.5 was released on October 22, 2026. This release is a security rebuild with no functional changes to the application. Binaries are rebuilt with Go 1.27.3 to distrust compromised eMudhra intermediate CAs referenced by GO-2026-6809 / CVE-2026-111943. For users, the upgrade is drop-in and preserves existing behavior while improving trust posture for TLS validation.

## What's new

v0.2.5 does not introduce new features, user-facing improvements, or bug fixes. The application code is identical to v0.2.4. The release focuses on the security rebuild noted above.

Under the hood, the release includes infrastructure updates that do not affect users:
- CI workflows updated to Go 1.27.2 for builds and vulnerability checks
- govulncheck SARIF upload deduplication to prevent code scanning failures
- Dependency and action bumps for upload-artifact, setup-uv, and CodeQL components

## Why it matters

The rebuild addresses a toolchain-level security issue. Compromised eMudhra intermediate CAs can undermine TLS trust decisions made by Go's certificate verification. Rebuilding with Go 1.27.3 ensures the shipped binaries distrust those CAs, reducing risk when gowebshot fetches pages over HTTPS.

Because there are no functional changes, existing scripts, presets, and configurations continue to work without modification. Users who downloaded v0.2.4 should upgrade to v0.2.5 to obtain binaries built with the patched toolchain.

## Upgrade

Upgrade is straightforward. Download the latest assets for your platform from the GitHub release page for v0.2.5 and replace your current binary. Checksums are provided for verification. No configuration changes or migration steps are required.

---

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/gowebshot, release v0.2.5, date of generation 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
