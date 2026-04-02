---
layout: post
title: "gologhttpbinary v0.2.2 Released: Infrastructure Updates and CI/CD Improvements"
date: 2025-05-07 22:55:58 -0500
tags: ["gologhttpbinary", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

On May 7, 2025, we released gologhttpbinary v0.2.2, a maintenance update focused on strengthening the project's infrastructure and automation capabilities. While this release doesn't introduce new application features, it delivers important updates to keep your debugging tool running on the latest Go runtime and improves the development workflow for future releases.

## What's New

### Updated Go Runtime
The v0.2.2 release upgrades the underlying Go runtime from 1.24.0 to 1.24.3, incorporating three incremental patch updates that bring security fixes and performance improvements. This ensures your containerized debugging server runs on a stable, well-tested foundation.

### Improved Development Workflow
Development snapshot builds now use a clearer naming convention. If you've been using the `:dev` tag for testing, you'll notice it now appears as `gologhttpbinary-snapshot:dev` in the GitHub Container Registry. This change helps distinguish between official releases and development builds.

Additionally, the CI pipeline now automatically cleans up old snapshot images, keeping only the 10 most recent versions to manage storage costs while preserving enough history for debugging purposes.

### Enhanced Automation
We've added automation that keeps Go version updates streamlined for maintainers. A new `.repver` configuration file enables a single-command workflow to bump Go versions across all relevant files (Dockerfile, CI workflows, and go.mod) with automatic branch creation and pull request generation.

We also expanded Dependabot's oversight to include Docker base images, ensuring future updates to the container foundation are caught automatically. A new automation now tracks all issues and pull requests on the project board for better visibility.

### Dependency Updates
The release includes a Dependabot-managed update to `astral-sh/setup-uv` from v5 to v6 in our security scanning workflow, keeping our tooling current with the latest capabilities.

## Why It Matters

This release is about reliability and sustainability. By updating to Go 1.24.3, you're running on a runtime that has received three rounds of community testing and bug fixes since the initial 1.24.0 release. For a tool used to debug binary payloads like protobufs—where missing data could hide critical issues—running on a stable foundation matters.

The improved snapshot build naming and cleanup automation may seem like backend improvements, but they reflect our commitment to maintaining a clean, well-organized container registry that serves the community efficiently. The new version management automation ensures that future Go updates can reach users faster with fewer manual steps.

## Upgrade and Installation

Upgrading to v0.2.2 is straightforward with no breaking changes or migration steps required. The application behavior, HTTP response format (still returns HTTP 200 "OK"), and JSON log output remain identical to v0.2.1.

**Docker users** can pull the latest release with:
```bash
docker run -p 8080:8080 ghcr.io/unitvectory-labs/gologhttpbinary:v0.2.2
```

The container listens on port 8080 by default (configurable via the `PORT` environment variable) and logs all incoming request paths, headers, and base64-encoded bodies to stdout in JSON format.

**Important:** As always with gologhttpbinary, remember that this tool is designed for development, testing, and debugging environments only. The project explicitly warns against running it in production, as it could expose sensitive information from request bodies or headers.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It references the [gologhttpbinary v0.2.2 release](https://github.com/UnitVectorY-Labs/gologhttpbinary/releases/tag/v0.2.2) published on May 7, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
