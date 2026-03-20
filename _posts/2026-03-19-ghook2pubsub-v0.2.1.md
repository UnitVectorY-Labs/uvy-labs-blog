---
layout: post
title: "ghook2pubsub v0.2.1: Keeping Your Infrastructure Current"
date: 2026-03-19 22:45:36 -0500
tags: [ghook2pubsub, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Intro

On March 19, 2026, we released ghook2pubsub v0.2.1, a maintenance update that focuses on keeping your infrastructure secure and up-to-date. This release follows the feature-rich v0.2.0 (which introduced payload compression support) and demonstrates our commitment to proactive dependency management and security hygiene.

While this version doesn't introduce new user-facing features, it ensures your deployment runs on the latest patched versions of critical build tools and runtime libraries—giving you peace of mind that your webhook ingestion pipeline is built on a solid, current foundation.

## What's New

v0.2.1 is a maintenance-focused release centered on dependency updates:

- **Updated Go runtime** to version 1.26.1 for improved stability and security
- **Refreshed core libraries** including a significant update to the gRPC library (now at 1.79.3)
- **Modernized build pipeline** with updated Docker GitHub Actions across the board
- **Enhanced supply chain security** through updated attestations and CodeQL scanning

From your perspective as a user, these changes are invisible—you get all the reliability and security benefits without needing to modify any configuration or change how you deploy.

## Why It Matters

Regular maintenance might not grab headlines, but it's what keeps your systems running smoothly. This release reflects three core values:

**Security First:** By keeping dependencies current, we help ensure that known vulnerabilities are patched promptly. The CodeQL and gRPC updates specifically contribute to a more secure runtime environment for processing your GitHub webhooks.

**Production Readiness:** A maintenance cadence like this—one update every couple weeks—signals an actively maintained project. You're not deploying unmaintained software; you're using a tool that the team is committed to keeping healthy.

**Zero Friction Upgrades:** Unlike major version jumps, v0.2.1 requires nothing from you. Pull the new image and you're done. No config changes, no API updates, no breaking behavior. Just an upgrade with zero risk.

## Getting Started

If you haven't deployed ghook2pubsub yet, here's how to get up and running quickly:

```bash
docker run \
  -e PUBSUB_PROJECT_ID=my-gcp-project \
  -e PUBSUB_TOPIC_ID=github-webhooks \
  -e WEBHOOK_SECRETS=my-secret \
  -e PAYLOAD_COMPRESSION=gzip:6 \
  -e PAYLOAD_COMPRESSION_ATTRIBUTE=compression \
  -p 8080:8080 \
  ghook2pubsub
```

Then point your GitHub webhook to `http://<host>:8080/webhook`.

**Already running v0.2.0?** Simply update your container image:

```bash
docker pull ghook2pubsub:latest
docker stop ghook2pubsub && docker rm ghook2pubsub
docker run -d --name ghook2pubsub \
  -e PUBSUB_PROJECT_ID=my-gcp-project \
  -e PUBSUB_TOPIC_ID=github-webhooks \
  -e WEBHOOK_SECRETS=my-secret \
  -p 8080:8080 \
  ghook2pubsub
```

All existing configuration options remain unchanged, and your webhook payloads will continue flowing to GCP Pub/Sub exactly as before.

For complete documentation on configuration options, message attributes, and architecture details, check out the [docs folder](https://github.com/UnitVectorY-Labs/ghook2pubsub/tree/main/docs) in the repository.

---

*Transparency note: This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 19, 2026. The original content is based on official release information from [UnitVectorY-Labs/ghook2pubsub](https://github.com/UnitVectorY-Labs/ghook2pubsub/releases/tag/v0.2.1). This post was authored by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
