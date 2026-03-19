---
layout: post
title: "Announcing goenvecho v1.0.0: A Simple Tool for Container Environment Debugging"
date: 2024-11-07 23:40:47 -0500
tags: [goenvecho, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

We're excited to announce the initial release of **goenvecho**, a lightweight Go web application designed to help developers debug environment variable configuration in containerized environments. Released on November 7, 2024, this first version establishes the foundation for a simple yet powerful tool that responds to HTTP requests with a JSON payload containing all runtime environment variables.

## What's New

As an initial release, v1.0.0 introduces goenvecho's core functionality:

- **Environment Variable Echo Service**: A single HTTP endpoint (`GET /`) that returns all environment variables as a JSON object
- **Zero External Dependencies**: Built entirely with Go's standard library for maximum reliability and minimal build complexity
- **Docker-First Distribution**: Multi-architecture container images (linux/amd64, linux/arm64) published to GitHub Container Registry
- **Configurable Port**: Server listens on port 8080 by default, configurable via the `PORT` environment variable
- **Security-Conscious Design**: Uses distroless base images and includes automated CodeQL security scanning

## Why It Matters

Containerized applications often make it difficult to inspect what environment variables are actually available at runtime. Environment misconfiguration can cause subtle bugs that are hard to trace. goenvecho solves this problem by providing an immediate, visual way to see exactly what your container's environment looks like.

This tool is particularly useful for:
- Debugging Docker and Kubernetes deployment issues
- Verifying environment variable propagation across container layers
- Testing CI/CD pipeline environment configurations
- Validating secrets and configuration management setups

**Important**: goenvecho is explicitly not intended for production use. Because it exposes all environment variables (which may include secrets, tokens, and credentials), the README includes clear warnings against deploying it outside of development and testing environments.

## Getting Started

Getting up and running with goenvecho takes just seconds. Pull the Docker image from GitHub Container Registry:

```bash
docker pull ghcr.io/unitvectory-labs/goenvecho:latest
docker run -p 8080:8080 ghcr.io/unitvectory-labs/goenvecho:latest
```

Then visit `http://localhost:8080` in your browser or curl the endpoint to see your environment variables returned as JSON.

The project is open source under the MIT License and includes comprehensive CI/CD infrastructure for automated builds, testing, and security scanning. Future releases will build on this foundation while maintaining the zero-dependency philosophy that makes goenvecho reliable and easy to deploy.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For more information, see the [goenvecho repository](https://github.com/UnitVectorY-Labs/goenvecho) and the [v1.0.0 release](https://github.com/UnitVectorY-Labs/goenvecho/releases/tag/v1.0.0). Generated on March 19, 2026 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
