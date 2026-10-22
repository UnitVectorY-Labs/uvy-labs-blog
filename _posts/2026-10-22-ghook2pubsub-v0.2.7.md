---
layout: post
title: "ghook2pubsub v0.2.7 Released: Security Rebuild with Go 1.27.3"
date: 2026-10-22 01:26:08 +0000
tags: ["ghook2pubsub", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-10-22, UnitVectorY-Labs published ghook2pubsub v0.2.7. This release is a security-focused rebuild with no functional changes to how the service operates. ghook2pubsub bridges GitHub webhook deliveries to Google Cloud Pub/Sub, and v0.2.7 ensures the build toolchain itself reflects current security guidance around certificate authority trust.

## What's new

v0.2.7 is a maintenance release built with Go 1.27.3. The only change in this release is the builder image in the Dockerfile, updated from golang:1.27.2 to golang:1.27.3 to apply the Go toolchain fix that distrusts the compromised eMudhra intermediate CAs referenced in GO-2026-6809 / CVE-2026-111943.

There are no new features, no improvements to webhook handling, compression, HMAC verification, or Pub/Sub publishing, and no configuration changes. The service behavior, environment variables, and deployment model remain identical to v0.2.6.

## Why it matters

While users will not see a change in day-to-day operation, the rebuild matters for supply-chain and trust posture. Building with Go 1.27.3 ensures the toolchain no longer trusts the compromised eMudhra intermediate CAs. For teams running ghook2pubsub in production to forward GitHub events into Pub/Sub pipelines, upgrading preserves the existing workflow while aligning the binary provenance with current security guidance.

The release is fully backward compatible. Existing deployments continue to work without changes to `PUBSUB_PROJECT_ID`, `PUBSUB_TOPIC_ID`, `WEBHOOK_SECRETS`, or other configuration.

## Upgrading

Upgrade is a no-op for configuration. Pull the v0.2.7 container image tag and redeploy as you normally would. No code changes, secret rotations, or environment updates are required. Rolling back to v0.2.6 is possible but would revert to binaries built with the earlier Go toolchain.

Repository: https://github.com/UnitVectorY-Labs/ghook2pubsub
Release: https://github.com/UnitVectorY-Labs/ghook2pubsub/releases/tag/v0.2.7

*This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository UnitVectorY-Labs/ghook2pubsub release v0.2.7 published 2026-10-22. Generated 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
