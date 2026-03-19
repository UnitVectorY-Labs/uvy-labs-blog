---
layout: post
title: "gologhttpbinary v0.2.3: Maintenance Update"
date: 2025-10-14 09:00:00 -0500
tags: [gologhttpbinary, unsloth-Qwen3.5-122B-A10B-GGUF-Q4_K_M]
---

gologhttpbinary v0.2.3 was released on October 14, 2025 as a maintenance-focused update designed to keep the project's build environment and CI/CD tooling current.

This lightweight HTTP debugging tool continues to serve its core purpose: capturing HTTP requests and logging them as base64-encoded strings, making it ideal for inspecting binary payloads like protobuf messages during development and testing.

## What's New

Release v0.2.3 is a behind-the-scenes maintenance update with no changes to the application's functionality. The update focuses on keeping the project healthy and up-to-date:

**Runtime Updates:**
- Go runtime updated through version 1.25.2 across all build configurations

**CI/CD Tooling Updates:**
- GitHub Actions workflows updated to latest versions (actions/checkout@v5, actions/setup-go@v6, github/codeql-action@v4, and others)

For users of the gologhttpbinary service, the HTTP server behaves exactly as before—capturing request paths, headers, and bodies, and returning HTTP 200 with "OK".

## Why It Matters

While this release doesn't introduce new features, it represents good maintenance practice:

- **Security & Stability**: Updated runtime environments help ensure the build process uses current, patched versions of dependencies
- **Supply Chain Integrity**: Updated GitHub Actions with latest security features and provenance attestations
- **Continued Development**: Regular dependency updates signal an actively maintained project

For developers using gologhttpbinary in their testing workflows, this means continued reliability and confidence that the tool is being kept current.

## Getting Started

### Docker Deployment

The easiest way to run gologhttpbinary v0.2.3:

```bash
docker run -p 8080:8080 ghcr.io/unitvectory-labs/gologhttpbinary:v0.2.3
```

Or use the `latest` tag for automatic updates:

```bash
docker run -p 8080:8080 ghcr.io/unitvectory-labs/gologhttpbinary:latest
```

### Configuration

The service listens on port 8080 by default. To change the port, set the `PORT` environment variable:

```bash
docker run -p 9090:9090 -e PORT=9090 ghcr.io/unitvectory-labs/gologhttpbinary:v0.2.3
```

### Upgrade Notes

Upgrading from v0.2.2 is straightforward—there are no breaking changes or configuration updates required. Simply pull the new Docker image and restart your container.

---

**About gologhttpbinary**: A lightweight HTTP server for debugging binary protocols. Logs request paths, headers, and bodies as base64 strings. Not intended for production use.

---

*Transparency Note: This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 19, 2026. Source repository: [UnitVectorY-Labs/gologhttpbinary](https://github.com/UnitVectorY-Labs/gologhttpbinary), Release: [v0.2.3](https://github.com/UnitVectorY-Labs/gologhttpbinary/releases/tag/v0.2.3). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
