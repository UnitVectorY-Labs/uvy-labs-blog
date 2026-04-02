---
layout: post
title: "ghook2pubsub v0.2.0: Introducing Payload Compression for Pub/Sub"
date: 2026-03-03 01:35:00 -0500
tags: ["ghook2pubsub", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

ghook2pubsub v0.2.0 was released on March 3, 2026, bringing a highly requested capability to reduce your Google Cloud Pub/Sub costs: **optional payload compression**. This feature release enables users to compress webhook payloads before publishing them to Pub/Sub, with flexible algorithm choices and configuration options—all without breaking existing deployments.

## What's New

The star of this release is **payload compression support**, giving you control over how webhook data flows from GitHub into your GCP infrastructure.

### Compression Algorithms

You now have two compression algorithms to choose from:

- **gzip** – The safe, universally compatible choice. Use this when working with heterogeneous downstream consumers or when maximum compatibility is a priority.
- **zstd** (Zstandard) – Offers superior speed-to-compression-ratio tradeoffs for users who need better efficiency and have decompression support in their subscribers.

Both algorithms support configurable compression levels, letting you tune the balance between CPU usage and data reduction based on your specific needs.

### New Configuration Options

Two new environment variables give you full control:

| Variable | Purpose |
|----------|---------|
| `PAYLOAD_COMPRESSION` | Enable compression with format `<algorithm>:<level>` (e.g., `gzip:6`, `zstd:3`) |
| `PAYLOAD_COMPRESSION_ATTRIBUTE` | Optionally add an attribute to messages so downstream consumers can detect compressed payloads |

### Quick Start Example

Enable gzip compression with balanced settings:

```bash
docker run \
  -e PUBSUB_PROJECT_ID=my-gcp-project \
  -e PUBSUB_TOPIC_ID=github-webhooks \
  -e WEBHOOK_SECRETS=your-secret \
  -e PAYLOAD_COMPRESSION=gzip:6 \
  -e PAYLOAD_COMPRESSION_ATTRIBUTE=compression \
  ghook2pubsub
```

Or opt for zstd's superior efficiency:

```bash
docker run \
  -e PUBSUB_PROJECT_ID=my-gcp-project \
  -e PUBSUB_TOPIC_ID=github-webhooks \
  -e WEBHOOK_SECRETS=your-secret \
  -e PAYLOAD_COMPRESSION=zstd:3 \
  -e PAYLOAD_COMPRESSION_ATTRIBUTE=compression \
  ghook2pubsub
```

## Why It Matters

### Cost Reduction

Pub/Sub costs are driven by data volume. By compressing webhook payloads before publication, you directly reduce both network transfer and storage costs—especially impactful for high-volume webhook sources or large payload events.

### Flexibility Without Friction

This release offers choice without complexity:

- **Algorithm freedom**: Select gzip for compatibility or zstd for efficiency
- **Granular control**: Tune compression levels to match your performance requirements
- **Opt-in design**: Existing deployments continue working unchanged; compression activates only when explicitly configured

### Safe Upgrades, Zero Breaking Changes

This is a backward-compatible release. The default behavior (`PAYLOAD_COMPRESSION=none`) maintains the exact same functionality as v0.1.0. You can upgrade to v0.2.0 with confidence—your existing deployments will continue operating without modification.

### Built for Real-World Adoption

The implementation follows solid software engineering practices:

- Comprehensive unit tests ensure reliability
- Configuration validation catches errors at startup
- Full documentation covers all use cases
- A graceful decorator pattern keeps the codebase maintainable

## Upgrade and Installation

### Upgrading from v0.1.0

No action required. Simply pull the new image or binary and your service will continue running with default (no compression) behavior:

```bash
docker pull ghook2pubsub:latest
# or specify the version explicitly
docker pull ghook2pubsub:v0.2.0
```

### Enabling Compression

Once upgraded, add the `PAYLOAD_COMPRESSION` environment variable to activate compression. Remember: **downstream subscribers must support decompression** for the chosen algorithm if you enable this feature.

### Installation

Download v0.2.0 from the [GitHub releases page](https://github.com/UnitVectorY-Labs/ghook2pubsub/releases/tag/v0.2.0) or pull the Docker image:

```bash
docker pull ghcr.io/unitvectory-labs/ghook2pubsub:v0.2.0
```

For complete configuration options, see the [documentation](https://github.com/UnitVectorY-Labs/ghook2pubsub/blob/main/docs/configuration.md).

---

**Transparency Note:** This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was produced on March 18, 2026, based on the official v0.2.0 release of [ghook2pubsub](https://github.com/UnitVectorY-Labs/ghook2pubsub/releases/tag/v0.2.0). For questions or feedback, please visit the [release-storyteller project](https://github.com/UnitVectorY-Labs/release-storyteller).
