---
layout: post
title: "Introducing gologhttpjson v0.1.0: A Lightweight HTTP Server for Debugging JSON Payloads"
date: 2025-08-31 09:00:00 -0500
tags: [gologhttpjson, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## A Simple Tool for HTTP Request Inspection

On August 31, 2025, we're excited to announce the launch of **gologhttpjson** with its inaugural v0.1.0 release. This lightweight HTTP server fills a practical gap for developers who need to inspect and debug incoming JSON payloads during testing and local development.

Think of gologhttpjson as your disposable webhook endpoint—point any service at it, and it will faithfully log every incoming POST request with structured JSON output, ready for immediate analysis.

## What's New

As the project's first release, v0.1.0 introduces the complete core functionality that makes gologhttpjson useful:

### Core Features
- **Structured JSON Logging**: Every incoming POST request gets logged as a clean JSON object containing the original payload, request path, and optional metadata—no timestamps or formatting noise to parse through.
- **Configurable Header Capture**: Enable HTTP header logging via the `LOG_HEADERS` environment variable when you need full request context for debugging.
- **Metadata Injection**: Automatically capture environment variables prefixed with `METADATA_` to add custom context (like service name, version, or environment) to every log entry.
- **Smart Validation**: The server gracefully rejects non-POST requests and invalid JSON, returning appropriate HTTP error codes so you know exactly what went wrong.

### Flexible Configuration
The server runs on any port you specify via the `PORT` environment variable (default: 8080), making it easy to run multiple instances or integrate into various development setups.

## Why It Matters

Developers often face a simple but annoying problem during integration testing: how do you actually see what a third-party service is sending to your webhook? Traditional approaches involve complex logging infrastructure, temporary debugging servers that come with baggage, or guesswork.

gologhttpjson cuts through that complexity with an extremely focused design philosophy: **it's just a JSON log server**. There are no databases, no APIs to query, no authentication overhead. Run it, send it requests, watch the structured logs roll by on stdout.

The attention to detail—like removing timestamp formatting from the log output to ensure clean, machine-parseable JSON—shows this tool was built with real developer workflows in mind. Whether you're testing Stripe webhooks, debugging CI/CD pipeline notifications, or validating data formats from external APIs, gologhttpjson gives you immediate visibility into what's actually hitting your endpoints.

### Built for Development, Not Production
Importantly, gologhttpjson is designed explicitly for **development and testing environments only**. The logging of payloads and headers means it could expose sensitive information, so it shouldn't run in production. This honest positioning helps users make safe architectural decisions from the start.

## Getting Started

Getting up and running takes seconds with Docker:

```bash
docker run -p 8080:8080 ghcr.io/unitvectory-labs/gologhttpjson:latest
```

That's it. Your server is now listening on port 8080. Send it a POST request:

```bash
curl -X POST http://localhost:8080/test \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello, World!"}'
```

You'll see structured JSON output on the server's stdout:

```json
{
  "body": {"message": "Hello, World!"},
  "path": "/test"
}
```

### With Metadata and Headers

Want to add custom context? Set environment variables with the `METADATA_` prefix:

```bash
docker run -p 8080:8080 \
  -e METADATA_SERVICE=myapp \
  -e METADATA_VERSION=1.0.0 \
  ghcr.io/unitvectory-labs/gologhttpjson:latest
```

Enable header capture for full request visibility:

```bash
docker run -p 8080:8080 -e LOG_HEADERS=1 ghcr.io/unitvectory-labs/gologhttpjson:latest
```

## Looking Ahead

The v0.1.0 release establishes a solid foundation with all the essential features needed for effective request inspection during development. As the project matures, future releases will focus on maintaining this lightweight simplicity while adding quality-of-life improvements based on real-world usage.

The codebase is production-quality despite the tool's development-only purpose: it uses modern Go (1.25.0), includes comprehensive CI/CD pipelines with security scanning, and ships as a minimal Docker image using distroless base images for reduced attack surface.

## Join the Project

gologhttpjson is open source under the MIT license and lives on GitHub at [github.com/UnitVectorY-Labs/gologhttpjson](https://github.com/UnitVectorY-Labs/gologhttpjson). The Docker images are published to GitHub Container Registry. Whether you're using it for webhook testing, API debugging, or pipeline validation, we'd love to hear how it fits into your development workflow.

---

**Transparency Note**: This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The post was generated on behalf of [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller) based on the v0.1.0 release of UnitVectorY-Labs/gologhttpjson, published on August 31, 2025.
