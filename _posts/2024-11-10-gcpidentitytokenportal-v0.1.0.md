---
layout: post
title: "Announcing gcpidentitytokenportal v0.1.0"
date: 2024-11-10 14:32:00 -0000
tags: ["gcpidentitytokenportal", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the launch of **gcpidentitytokenportal**, now available in its initial release (v0.1.0)!

This web portal simplifies obtaining Google Cloud Platform (GCP) identity tokens for developers and administrators who need to test or debug GCP integrations. Released on November 10, 2024, this tool provides a clean, user-friendly interface for vending tokens with flexible audience configuration options.

## What's New

As the first release of gcpidentitytokenportal, v0.1.0 introduces the complete core functionality that makes GCP token generation accessible through a web browser:

### Web-Based Token Generation
- **Clean, responsive UI** built with HTMX for a smooth user experience without page reloads
- **Single-click token generation** - simply select your audience and click "Generate Token"
- **Copy-to-clipboard functionality** for quick access to generated tokens
- **Service account display** shows which identity is being used to generate tokens

### Flexible Audience Configuration
- Optional `config.yaml` support to restrict allowed audiences for production use cases
- When configured, provides a dropdown of pre-approved audience options
- Without configuration, accepts any arbitrary audience value for development flexibility

### Dual Environment Deployment
- **GCP-native**: Runs on GCE, Cloud Run, or any GCP environment with automatic credential detection via the metadata service
- **Local development**: Works with mounted service account credentials using the `GOOGLE_APPLICATION_CREDENTIALS` environment variable

### HTTP API Access
For programmatic access, the portal exposes REST endpoints:
- `/` - Main web interface
- `/token` - POST endpoint for token generation
- `/service-account` - Returns the current service account email

## Why It Matters

GCP identity tokens are essential for authenticating to Google Cloud services, but obtaining them often requires command-line tools or complex programmatic setups. gcpidentitytokenportal fills a practical gap by providing:

- **Rapid debugging**: Generate tokens on-demand without leaving your browser
- **Educational value**: See exactly which service account is being used and understand token generation mechanics
- **Simplified testing**: Share access to the portal for team-based debugging sessions
- **Production-ready security**: Built with a distroless Debian base image to minimize attack surface

The application leverages modern Go 1.23, runs in a secure distroless container, and supports multi-platform Docker builds (linux/amd64 and linux/arm64). A complete CI/CD pipeline ensures reliable automated builds and releases to the GitHub Container Registry (GHCR).

## Getting Started

### Prerequisites
- Docker installed and running
- Access to GitHub Container Registry (`ghcr.io`)
- GCP service account with appropriate permissions for token generation

### Quick Start with Docker

**Running outside GCP:**
```bash
docker run --name gcpidentitytokenportal -d -p 8080:8080 \
  -v /path/to/service-account-key.json:/creds.json \
  -e GOOGLE_APPLICATION_CREDENTIALS=/creds.json \
  ghcr.io/unitvectory-labs/gcpidentitytokenportal:v0.1.0
```

**Running on GCP:**
When deployed to GCP (Cloud Run recommended), credentials are detected automatically via the metadata service—no additional configuration needed!

### Optional Audience Restriction

For production use, create a `config.yaml` to restrict which audiences can be requested:

```yaml
audiences:
  - https://api.example.com
  - https://service.example.com
```

Mount this file at `/config.yaml` inside the container to enforce the restrictions.

### Project Links
- **Repository**: [UnitVectorY-Labs/gcpidentitytokenportal](https://github.com/UnitVectorY-Labs/gcpidentitytokenportal)
- **Release**: [v0.1.0 on GitHub](https://github.com/UnitVectorY-Labs/gcpidentitytokenportal/releases/tag/v0.1.0)
- **License**: MIT

---

**Transparency Note**: This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The release information is based on GitHub Release v0.1.0 of the UnitVectorY-Labs/gcpidentitytokenportal repository, published on November 10, 2024. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
