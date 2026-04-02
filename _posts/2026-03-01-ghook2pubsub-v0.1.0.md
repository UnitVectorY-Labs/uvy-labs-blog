---
layout: post
title: "Announcing ghook2pubsub v0.1.0: GitHub Webhooks to GCP Pub/Sub"
date: 2026-03-01 00:07:15 -0500
tags: ["ghook2pubsub", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the first public release of **ghook2pubsub** – a lightweight service that bridges GitHub webhooks to Google Cloud Pub/Sub for event-driven architectures.

Released on March 1, 2026, v0.1.0 introduces the complete core functionality of this single-purpose ingestion service, ready for production use.

## What's New

As the initial release, v0.1.0 brings all the project's documented features to life:

### Webhook Ingestion
- Accepts GitHub webhook HTTP POST requests at `/webhook`
- Health check endpoint at `/healthz` for deployment monitoring
- Returns `204 No Content` on successful processing

### Security First
- Validates GitHub User-Agent headers (`GitHub-Hookshot/`)
- Verifies HMAC-SHA256 signatures to authenticate webhook origin
- Supports multiple secrets for zero-downtime secret rotation via `WEBHOOK_SECRETS`

### Rich Message Attributes
Every published message includes 14+ attributes extracted from webhook headers and payloads:
- `gh_delivery` – Unique delivery GUID for tracing and deduplication
- `gh_event` – GitHub event type (push, pull_request, workflow_run, etc.)
- `gh_hook_id`, `gh_target_type`, `gh_target_id` – Webhook configuration details
- `action`, `organization`, `repository`, `sender` – Event context
- `ref`, `ref_type`, `base_ref`, `head_ref` – Git reference information
- `state`, `status`, `conclusion` – Event outcome data

### Production Ready
- Structured JSON logging with delivery IDs and event details
- Graceful shutdown handling (SIGTERM/SIGINT) with 15-second drain time
- Docker-based deployment with Go 1.26.0 and distroless base image
- Prometheus metrics support for observability

## Why It Matters

Building event-driven architectures that react to GitHub activity just got simpler. ghook2pubsub eliminates the need to write custom webhook handlers when you want to pipe GitHub events into GCP Pub/Sub for downstream processing.

With ghook2pubsub, your subscribers can:
- Build reactive workflows triggered by pushes, pull requests, workflow runs, and more
- Filter and route messages based on rich event attributes
- Trace deliveries end-to-end using the `gh_delivery` GUID
- Handle at-least-once delivery semantics with built-in deduplication support

The service is stateless and purpose-built – it accepts valid webhooks and publishes them to Pub/Sub. Filtering, routing, and processing happen where you need them: in your subscribers.

## Getting Started

### Prerequisites
- A GCP project with the Pub/Sub API enabled
- GCP credentials configured (via application default credentials or service account)
- Docker for containerized deployment

### Run with Docker

```bash
docker run \
  -e PUBSUB_PROJECT_ID=your-gcp-project \
  -e PUBSUB_TOPIC_ID=github-webhooks \
  -e WEBHOOK_SECRETS=your-webhook-secret \
  -p 8080:8080 \
  ghook2pubsub
```

### Configure GitHub Webhook

Point your GitHub repository or organization webhook to:
```
POST https://your-ghook2pubsub-instance:8080/webhook
```

Configure the secret token in your webhook settings to match the `WEBHOOK_SECRETS` environment variable.

### See More Details

Full documentation is available in the repository:
- [Configuration Guide](https://github.com/UnitVectorY-Labs/ghook2pubsub/blob/main/docs/configuration.md)
- [Message Attributes Reference](https://github.com/UnitVectorY-Labs/ghook2pubsub/blob/main/docs/attributes.md)
- [Architecture Overview](https://github.com/UnitVectorY-Labs/ghook2pubsub/blob/main/docs/architecture.md)

## Join the Project

ghook2pubsub is released under the MIT License. We welcome contributions and feedback from the community.

Check out the project on GitHub: https://github.com/UnitVectorY-Labs/ghook2pubsub

---

*This post was AI-generated using unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M. Based on the v0.1.0 release of [ghook2pubsub](https://github.com/UnitVectorY-Labs/ghook2pubsub/releases/tag/v0.1.0) published March 1, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
