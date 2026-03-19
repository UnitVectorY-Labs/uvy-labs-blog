---
layout: post
title: "Introducing hellorest v1.0.0: Your Minimal Go REST API for Testing"
date: 2024-10-10 18:30:31 -0400
tags: [hellorest, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

We're excited to announce the first release of **hellorest** (v1.0.0), published on October 10, 2024. This minimal Go-based REST API provides an elegantly simple solution for validating deployment setups and testing networking configurations.

## What's New

As the inaugural release of hellorest, v1.0.0 introduces the project itself with a lean, purpose-built implementation:

- **Core REST API**: A single endpoint at `GET /` that reliably returns `{"hello": "world"}`
- **Docker Deployment**: Multi-platform container images supporting both linux/amd64 and linux/arm64 architectures
- **Zero Dependencies**: The entire application runs with no external Go modules — just 26 lines of code
- **Production-Ready CI/CD**: Automated build pipelines with artifact provenance attestation for both development and release workflows
- **Secure by Design**: Multi-stage Docker builds using distroless base images to minimize the security footprint

## Why It Matters

hellorest fills a practical need that developers encounter regularly: having a reliable, predictable API to validate infrastructure before deploying complex services. Whether you're testing a new Kubernetes cluster, verifying load balancer configuration, or serving as a placeholder for microservice components, hellorest provides instant feedback without the overhead of a full-featured application.

The release combines extreme simplicity with enterprise-grade tooling. While the application itself is intentionally minimal, the CI/CD infrastructure includes sophisticated features like multi-platform builds and automatic dependency updates via Dependabot — ensuring the project maintains high standards from day one.

## Getting Started

Deploying hellorest is straightforward using Docker:

```bash
docker run -d -p 8080:8080 ghcr.io/unitvectory-labs/hellorest:v1.0.0
```

Then verify it's working:

```bash
curl http://localhost:8080/
# Response: {"hello":"world"}
```

You can customize the listening port with the `PORT` environment variable:

```bash
docker run -d -p 9000:9000 -e PORT=9000 ghcr.io/unitvectory-labs/hellorest:v1.0.0
```

All available Docker image tags can be found in the [GitHub Container Registry](https://github.com/UnitVectorY-Labs/hellorest/pkgs/container/hellorest).

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was generated based on the v1.0.0 release of [UnitVectorY-Labs/hellorest](https://github.com/UnitVectorY-Labs/hellorest/releases/tag/v1.0.0), published on October 10, 2024. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
