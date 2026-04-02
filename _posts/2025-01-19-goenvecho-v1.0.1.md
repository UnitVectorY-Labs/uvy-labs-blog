---
layout: post
title: "goenvecho v1.0.1 Released"
date: 2025-01-19 15:10:00 -0500
tags: ["goenvecho", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Intro

We're pleased to announce the release of goenvecho v1.0.1, published on January 19, 2025. This update focuses on infrastructure improvements and documentation enhancements that make the tool easier to use and more secure behind the scenes.

For those unfamiliar, goenvecho is a simple debugging tool that responds to HTTP requests with a JSON payload listing all environment variables in your container. It's designed for development and testing environments to help you quickly inspect and debug your containerized deployments.

## What's New

### Enhanced Configuration Documentation

The most visible change in v1.0.1 is improved documentation around configuration options. We've added a dedicated Configuration section to the README that clearly explains how to customize the container's listening port using the `PORT` environment variable (default: 8080). This should make deployment scenarios where you need non-standard ports much clearer.

### Under-the-Hood Improvements

While this release doesn't introduce new features, there are several important improvements working behind the scenes:

- **Updated Go Runtime**: The base Go version has been updated to 1.23.5, bringing the latest bug fixes and security patches
- **Optimized Docker Builds**: Improved layer caching in our Docker builds means faster CI/CD pipelines and more reliable deployments
- **Security Hardening**: We've implemented additional security best practices in our build workflows, including credential handling improvements and new static analysis scanning with zizmor

## Why It Matters

This release represents our commitment to maintaining goenvecho as a reliable, secure tool for your development workflow. While there are no new features, the infrastructure improvements ensure that:

- Your deployments benefit from the latest Go security patches
- The build pipeline is more efficient and follows current security best practices
- Documentation gaps have been addressed based on real-world usage patterns

For existing users, this is a straightforward drop-in upgrade with no breaking changes. Your existing configurations will continue to work exactly as before.

## Upgrade Instructions

Upgrading to v1.0.1 is simple:

```bash
docker pull ghcr.io/unitvectory-labs/goenvecho:v1.0.1
```

No configuration changes are required. If you're using the `PORT` environment variable, it will continue to work as expected.

As always, goenvecho is available on GitHub Packages: [goenvecho Container Registry](https://github.com/UnitVectorY-Labs/goenvecho/pkgs/container/goenvecho)

## A Note on Production Use

Remember that goenvecho is designed for development and testing purposes only. Since it exposes all environment variables in its responses, it should never be run in production environments where sensitive credentials could be exposed.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It references the goenvecho v1.0.1 release published on January 19, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
