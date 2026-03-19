---
layout: post
title: "Introducing gologhttpbinary v0.1.1 - A Maintenance Release with Security Enhancements"
date: 2025-01-19 09:00:00 -0500
tags: [gologhttpbinary, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introduction

On January 19, 2025, UnitVectorY-Labs released gologhttpbinary v0.1.1, a maintenance release that builds upon the foundation laid by the initial v0.1.0 launch in November 2024. While this update doesn't introduce new application features, it delivers important security hardening, dependency updates, and documentation improvements that make the project more robust and easier to use.

gologhttpbinary is a lightweight HTTP server designed for debugging and testing scenarios. It captures incoming HTTP requests and logs the path, headers, and body (encoded as base64) - making it particularly useful for inspecting binary payloads like protobufs in container environments.

---

## What's New

### Security Enhancements

The most significant improvements in v0.1.1 focus on security hardening of the project's CI/CD pipeline:

- **GitHub Actions Credential Protection**: All workflow files now use `persist-credentials: false` when checking out code, reducing the risk of credential leakage in GitHub Actions environments
- **New Security Scanning**: Added zizmor security analysis workflow to continuously monitor GitHub Actions for security issues
- **Provenance Attestation**: Updated build attestation workflows to version 2 for improved supply chain security

### Dependency Updates

- **Go Runtime 1.23.5**: Upgraded from Go 1.23 to 1.23.5, incorporating important patch fixes and security updates
- **GitHub Action Versions**: Bumped `astral-sh/setup-uv` from v4 to v5 and `actions/attest-build-provenance` from v1 to v2

### Improved Developer Experience

- **New Build & Test Workflow**: Added comprehensive build-and-test pipeline with Codecov integration for test coverage reporting
- **Better Documentation**: README received visual badges and reorganized sections including a dedicated Usage section with clear Docker run examples
- **Workflow Organization**: Renamed workflow files for clarity (`codeql.yml` → `codeql-go.yml`, `docker-release.yml` → `release-docker-ghcr.yml`)

---

## Why It Matters

This maintenance release demonstrates the project's commitment to security and maintainability. While the core HTTP logging functionality remains unchanged (ensuring backward compatibility), users benefit from:

- **Safer Build Pipeline**: Security-focused CI/CD configurations reduce risks in the software supply chain
- **Up-to-Date Runtime**: The Go 1.23.5 runtime includes critical security patches that protect against known vulnerabilities
- **Easier Onboarding**: Improved documentation makes it faster for new users to understand and deploy gologhttpbinary
- **Continuous Verification**: New testing infrastructure ensures future changes maintain quality standards

For existing users, this is a straightforward upgrade with no breaking changes. The application behaves identically to v0.1.0 - you're simply getting a more secure, well-maintained version of the same reliable tool.

---

## Getting Started

### Docker Deployment

To deploy gologhttpbinary v0.1.1 using Docker:

```bash
docker run -p 8080:8080 ghcr.io/unitvectory-labs/gologhttpbinary:v0.1.1
```

The server will listen on port 8080 (configurable via the `PORT` environment variable) and respond with HTTP 200 "OK" to all requests while logging request details to stdout.

### Upgrade from v0.1.0

If you're already running v0.1.0, upgrading is as simple as updating your Docker tag:

```bash
# Stop your existing container
docker stop gologhttpbinary

# Run the new version
docker run -p 8080:8080 --name gologhttpbinary ghcr.io/unitvectory-labs/gologhttpbinary:v0.1.1
```

No configuration changes are required, and your existing deployments will continue to work without modification.

### GitHub Container Registry

All Docker images are published to GitHub Container Registry (GHCR):
- **Registry**: `ghcr.io/unitvectory-labs/gologhttpbinary`
- **Available Tags**: `v0.1.1`, `v0.1.0`, and `latest`

---

## A Note on Production Use

Remember that gologhttpbinary is designed for development, testing, and debugging scenarios. **It is not recommended for production use**, as it logs all request bodies (including potentially sensitive data) to stdout. Use appropriate network isolation and access controls when deploying this tool.

---

## Transparency Note

This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 19, 2026. The content is based on the official v0.1.1 release at https://github.com/UnitVectorY-Labs/gologhttpbinary/releases/tag/v0.1.1.

**Author**: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
