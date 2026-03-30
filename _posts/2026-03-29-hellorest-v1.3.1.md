---
layout: post
title: "hellorest v1.3.1 Released"
date: 2026-03-29 17:23:19 -0500
tags: [hellorest, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introduction

On March 29, 2026, we're pleased to announce the release of hellorest v1.3.1. This lightweight patch release refines the CI/CD infrastructure behind your favorite minimal REST API test utility.

hellorest continues to serve developers worldwide as a simple, reliable tool for validating deployments, testing networking configurations, and verifying microservice setups. With Docker images available for both AMD64 and ARM64 architectures, hellorest runs anywhere you need a predictable HTTP response.

## What's New

### CI/CD Pipeline Refinements

v1.3.1 focuses on improving the quality of our release process. This update ensures that GitHub Actions build attestations complete without warnings by adding the necessary metadata permissions to our Docker release workflow.

For users consuming hellorest Docker images, this means:
- Complete supply chain security metadata with every release
- Proper build provenance records for compliance requirements
- Clean, warning-free release artifacts

## Why It Matters

While v1.3.1 doesn't introduce new application features, it represents our commitment to maintaining high standards in software delivery. Build attestations are increasingly important for organizations requiring supply chain security documentation. With this fix, every hellorest Docker image now carries complete attestation metadata that can be verified and audited.

The rapid turnaround of this release—deployed within minutes of identifying the issue—demonstrates our responsive approach to maintaining infrastructure quality. Your deployment pipeline deserves reliable tooling with properly documented builds.

## Getting Started

### Installation

Pull the latest version via Docker:

```bash
docker pull ghcr.io/unitvectory-labs/hellorest:v1.3.1
docker run -p 8080:8080 ghcr.io/unitvectory-labs/hellorest:v1.3.1
```

Or use the latest tag for automatic updates:

```bash
docker pull ghcr.io/unitvectory-labs/hellorest:latest
docker run -p 8080:8080 ghcr.io/unitvectory-labs/hellorest:latest
```

### Upgrade Notes

Upgrading from v1.3.0 is straightforward—simply update your image tag. There are no breaking changes, API modifications, or configuration adjustments required. This release is fully backward compatible.

### Quick Test

Once running, verify the service responds correctly:

```bash
curl http://localhost:8080/
```

Expected response: `{"hello": "world"}`

## Transparency

This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 29, 2026. The content is based on official information from the [hellorest repository](https://github.com/UnitVectorY-Labs/hellorest) and the [v1.3.1 release](https://github.com/UnitVectorY-Labs/hellorest/releases/tag/v1.3.1).

Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
