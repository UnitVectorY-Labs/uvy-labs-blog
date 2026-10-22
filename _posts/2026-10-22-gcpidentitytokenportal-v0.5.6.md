---
layout: post
title: "gcpidentitytokenportal v0.5.6 Released"
date: 2026-10-22 01:12:05 +0000
tags: ["gcpidentitytokenportal", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

gcpidentitytokenportal v0.5.6 was released on October 22, 2026. This is a security maintenance release with no functional changes to the portal. The build environment was updated to Go 1.27.3 to incorporate the upstream fix that distrusts compromised eMudhra intermediate CAs (GO-2026-6809 / CVE-2026-111943). The application behavior, endpoints, and configuration remain identical to v0.5.5.

## What's new

v0.5.6 is a rebuild of the v0.5.5 release with an updated Go builder image.

- The Dockerfile now builds from `golang:1.27.3` instead of `golang:1.27.2`
- No source code, templates, configuration, or feature changes were made
- The resulting container image is built with a patched toolchain that includes the CA distrust update

This release contains no new features, improvements, or bug fixes.

## Why it matters

The portal vendors GCP identity tokens for testing and debugging across metadata, service account keys, and Workload Identity Federation. While the application code is unchanged, building with Go 1.27.3 ensures the container is produced with the security-relevant toolchain update that distrusts the compromised eMudhra intermediate certificates. Updating to v0.5.6 is a straightforward way to stay aligned with upstream security recommendations without changing how you use the portal.

There are no breaking changes and no user-facing behavior differences. Existing deployments continue to work with the same environment variables, endpoints, and Docker usage.

## Upgrade

If you run gcpidentitytokenportal via container, update the image tag to v0.5.6. No configuration changes are required.

Images are published to `ghcr.io/unitvectory-labs/gcpidentitytokenportal`. Pull the new tag and redeploy as you normally would. The upgrade is backward compatible with v0.5.5.

Full release notes: https://github.com/UnitVectorY-Labs/gcpidentitytokenportal/releases/tag/v0.5.6

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/gcpidentitytokenportal, release v0.5.6, generated on 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
