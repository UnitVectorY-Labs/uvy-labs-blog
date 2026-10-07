---
layout: post
title: "ghook2pubsub v0.2.5"
date: 2026-10-06 16:45:57 -0500
tags: ["ghook2pubsub", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On October 6, 2026, ghook2pubsub v0.2.5 was released. This is a maintenance update focused on security hardening and repository upkeep. The release contains no new features and no changes to the webhook ingestion or Pub/Sub publishing behavior that users interact with. Existing deployments can upgrade with no configuration changes.

## What's new

v0.2.5 updates indirect dependencies to address security issues and keeps the build environment current. The most notable change is the bump of `golang.org/x/crypto` to v0.56.0, which remediates SSH-related denial-of-service vulnerabilities in the dependency chain. Transitive updates also include `klauspost/compress` to 1.20.1 and `google.golang.org/grpc` to 1.83.2, along with routine CI workflow updates.

The repository was also standardized with gitrepoforge configuration, updated CI and security workflows, and a refreshed README header with status badges. These changes are developer-facing and do not affect runtime behavior.

No application code was changed between v0.2.4 and v0.2.5, and there are no breaking changes or bug fixes in the webhook handling, compression options, or configuration parsing.

## Why it matters

For operators running ghook2pubsub, the security dependency update reduces exposure to known denial-of-service issues in an indirect dependency without requiring any code changes on your side. Because the application source is unchanged, the behavior you rely on for `POST /webhook`, `GET /healthz`, webhook secret validation, and optional gzip/zstd payload compression remains identical.

The repository standardization improves maintainability and CI reliability going forward, which supports faster, safer future releases.

## Upgrading

v0.2.5 is a drop-in upgrade. If you deploy via Docker, pull the v0.2.5 image and restart with the same environment variables for `WEBHOOK_SECRETS`, Pub/Sub project and topic IDs, and compression settings. No migration steps are needed and no configuration changes are required.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/ghook2pubsub v0.2.5 released 2026-10-06. Generated 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
