---
layout: post
title: iapheaders v0.3.1 Release - Infrastructure Improvements
date: 2025-01-19 10:09:00 -0500
tags: ["iapheaders", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introduction

On January 19, 2025, we released **iapheaders v0.3.1**, a maintenance-focused update that strengthens the project's build infrastructure and ensures the application runs on the latest patched version of Go. While this release doesn't introduce new features, it represents our ongoing commitment to project health, testing coverage, and security best practices.

## What's New

### Enhanced CI/CD Pipeline

The highlight of v0.3.1 is the addition of a comprehensive Go build and test workflow. This new automated pipeline:

- Builds and tests the application on every push and pull request
- Runs tests with race detection enabled to catch concurrency issues early
- Generates code coverage reports uploaded to Codecov for visibility into test quality
- Includes dependency caching for faster build times

This infrastructure improvement means higher confidence in code quality and earlier detection of potential issues.

### Go Runtime Update

The application now runs on **Go 1.23.5**, updated from 1.23.4. This patch version includes important security patches and bug fixes from the Go team, ensuring your deployment benefits from the latest runtime improvements.

### GitHub Actions Update

We've updated the `setup-uv` GitHub Action to v5 in our security scanning workflow, keeping our development toolchain current.

## Why It Matters

Infrastructure releases might not make headlines, but they're essential for maintaining a healthy, reliable project:

**Reliability**: The new test workflow with race detection helps catch subtle bugs before they reach users, reducing the likelihood of runtime issues in production.

**Security**: Running on Go 1.23.5 means you benefit from upstream security fixes without any action required on your part.

**Transparency**: Code coverage reporting provides visibility into test quality, helping us maintain high standards as the project evolves.

## Upgrade Information

Upgrading to v0.3.1 is straightforward—no configuration changes are required:

```bash
docker pull ghcr.io/unitvectory-labs/iapheaders:v0.3.1
```

All existing environment variables remain compatible:
- `HIDE_SIGNATURE` — Controls signature display
- `PORT` — Defaults to 8080 if not specified

The application functions identically to v0.3.0; these changes are under the hood.

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Source repository: [UnitVectorY-Labs/iapheaders](https://github.com/UnitVectorY-Labs/iapheaders). Release date: January 19, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
