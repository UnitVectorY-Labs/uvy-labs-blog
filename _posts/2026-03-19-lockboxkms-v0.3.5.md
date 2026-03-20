---
layout: post
title: "LockboxKMS v0.3.5: Streamlined Deployment and Better Visibility"
date: 2026-03-19 22:46:29 -0500
tags: [lockboxkms, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introduction

On March 19, 2026, we released LockboxKMS v0.3.5, a significant update that brings important architectural improvements to streamline deployment and enhance operational visibility. This release embeds templates directly into the binary for simplified deployments and adds version tracking to help users identify which version they're running.

v0.3.5 represents 49 commits of focused development, introducing features that make LockboxKMS more self-contained and easier to operate in production environments. Notably, this release marks GitHub Copilot's first contribution to the project as an automated coding agent.

## What's New

### Templates Now Embedded in Binary

The biggest architectural change in v0.3.5 is that HTML templates are now embedded directly into the Go binary at compile time. Previously, the Docker image needed to include separate template files that the application read at runtime.

**Why this matters for you:**
- Simplified deployment - the container now contains everything it needs in a single layer
- Reduced potential points of failure - no missing template file errors
- More robust Docker images with fewer filesystem dependencies

### Version Display in Footer

Every page in LockboxKMS now displays the application version in its footer. This simple but valuable addition helps users and operators quickly identify which version is running.

Version information appears in different formats depending on how it was built:
- Release builds show the tag (e.g., `v0.3.5`)
- Development builds show branch and commit SHA (e.g., `dev/main@abc123def`)

This visibility makes debugging and support requests significantly easier by immediately answering "what version is this?"

### Base Image Upgrade to Debian 13

The Docker base image has been upgraded from Debian 12 to Debian 13, bringing the latest security patches and updates from the distroless container ecosystem.

## Why It Matters

These changes may seem internal, but they deliver real value:

**For Operations Teams:**
- Version information at a glance helps with incident response and audit trails
- Single-binary deployment reduces container complexity and attack surface
- Updated base image means better security posture without any configuration changes

**For Developers:**
- Embedding templates follows Go idioms and simplifies build pipelines
- Build-time version injection works cleanly with standard CI/CD workflows
- The change aligns LockboxKMS with modern container-native deployment practices

**For Security Teams:**
- Smaller, self-contained images have reduced attack surfaces
- Debian 13 brings current security patches
- Version transparency supports vulnerability management and compliance

## Breaking Change: Environment Variable Renamed

⚠️ **Important:** If you're upgrading from v0.3.4 or earlier, there is one breaking change you must address.

The `GCP_PROJECT` environment variable has been renamed to `GOOGLE_CLOUD_PROJECT` to align with standard Google Cloud Platform naming conventions.

**Before (v0.3.4 and earlier):**
```bash
export GCP_PROJECT="my-gcp-project"
```

**After (v0.3.5+):**
```bash
export GOOGLE_CLOUD_PROJECT="my-gcp-project"
```

This change affects the application startup - it will fail to start if `GOOGLE_CLOUD_PROJECT` is not set. All other configuration options (`KMS_LOCATION`, `KMS_KEY_RING`, `PORT`) remain unchanged.

If you're using Docker, update your environment variable configuration before deploying:

```bash
docker run -e GOOGLE_CLOUD_PROJECT="my-project" unitvectory/lockboxkms:v0.3.5
```

## Installation and Upgrade

### Docker (Recommended)

Pull the latest release:
```bash
docker pull ghcr.io/unitvectory-labs/lockboxkms:v0.3.5
```

Run with required environment variables:
```bash
docker run -p 8080:8080 \
  -e GOOGLE_CLOUD_PROJECT="your-project-id" \
  -e KMS_LOCATION="us" \
  -e KMS_KEY_RING="my-keyring" \
  ghcr.io/unitvectory-labs/lockboxkms:v0.3.5
```

### From Source

Build from source with version injection:
```bash
VERSION=v0.3.5 go build -ldflags "-X 'main.Version=${VERSION}'" -o lockboxkms
```

Then run:
```bash
export GOOGLE_CLOUD_PROJECT="your-project-id"
./lockboxkms
```

## Get Started

LockboxKMS provides a simple web interface for encrypting text using Google Cloud KMS. Once running, visit `http://localhost:8080` to start encrypting your data. The application intentionally supports encryption only (no decryption in the UI) to maintain a clear security boundary.

For complete documentation on setup, authentication with IAP, and configuration options, see the [README](https://github.com/UnitVectorY-Labs/lockboxkms).

---

**Transparency Note:** This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 20, 2026. The content is based on the v0.3.5 release of [lockboxkms](https://github.com/UnitVectorY-Labs/lockboxkms) published on March 19, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
