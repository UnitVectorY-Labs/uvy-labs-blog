---
layout: post
title: "gcpidentitytokenportal v0.5.0: Production-Ready Observability"
date: 2026-01-18 02:43:00 -0000
tags: [gcpidentitytokenportal, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Production Observability Arrives in v0.5.0

We're excited to announce the release of **gcpidentitytokenportal v0.5.0**, available now on [GitHub](https://github.com/UnitVectorY-Labs/gcpidentitytokenportal/releases/tag/v0.5.0). Released on January 18, 2026, this update transforms the portal from a simple token vending tool into a production-grade service ready for Kubernetes and Cloud Run deployments.

If you've been running gcpidentitytokenportal in staging or development, this is the release that makes it safe to promote to production. We've added enterprise-grade observability features while maintaining full backward compatibility—no configuration changes required for existing deployments.

## What's New

### Structured Logging for Production

The logging system has been completely overhauled to support modern observability stacks. You can now choose between JSON format for centralized logging systems (Cloud Logging, ELK, Datadog) or text format for local debugging:

```bash
# Production: structured JSON logs
LOG_LEVEL=info
LOG_FORMAT=json

# Development: human-readable logs
LOG_LEVEL=debug
LOG_FORMAT=text
```

### Request Correlation with Request IDs

Every HTTP request is now assigned a unique request ID that flows through all log entries. This enables end-to-end tracing across distributed systems:

- Set `X-Request-Id` header in your requests to provide your own ID
- The ID is automatically returned in response headers
- All logs include the request ID for easy filtering
- Error messages now include the request ID prefix for faster troubleshooting

When a user reports an issue with a request ID, operators can instantly trace that request through all system components.

### Health Check Endpoints

Kubernetes and Cloud Run deployments can now use proper liveness and readiness probes:

- **`/healthz`** - Liveness probe; returns "ok" if the service is running
- **`/readyz`** - Readiness probe; confirms the app is ready to serve requests
- **`/debugz`** - Optional diagnostic endpoint (requires `ENABLE_DEBUG_ENDPOINTS=true`)

Configure these in your Kubernetes deployment:

```yaml
livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 10

readinessProbe:
  httpGet:
    path: /readyz
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5
```

### Error Categorization and Security

Errors are now classified into categories (`CONFIG_MISSING`, `TOKEN_FILE_READ_ERROR`, `STS_NON_200`, etc.) enabling support teams to quickly route and triage incidents. Additionally, a new sanitizer automatically redacts tokens and credentials from logs—addressing a common production security concern.

## Why It Matters

These changes may seem like infrastructure details, but they fundamentally change how you can operate gcpidentitytokenportal:

**Before v0.5.0:** Debugging token issues meant grepping through text logs with timestamps. In Kubernetes, pod restarts were blind guesses—you didn't know if a pod was actually ready to serve requests until users started failing.

**With v0.5.0:** You can trace a specific request end-to-end using its ID. Your orchestrator knows exactly when pods are healthy. When an incident occurs, error categories tell you immediately whether it's a configuration problem, a network issue, or an upstream service failure.

This is the difference between "it works on my machine" and "it runs reliably in production."

## Upgrade Guide

### Getting v0.5.0

The release is **backward compatible** with no breaking changes. Existing deployments continue working without modification—new features are opt-in via environment variables.

#### Docker

```bash
docker pull ghcr.io/unitvectory-labs/gcpidentitytokenportal:v0.5.0
```

#### Quick Start

```bash
docker run --name gcpidentitytokenportal -d -p 8080:8080 \
  -v /path/to/service-account-key.json:/creds.json \
  -v /path/to/config.yaml:/config.yaml \
  -e GOOGLE_APPLICATION_CREDENTIALS=/creds.json \
  -e LOG_LEVEL=info \
  -e LOG_FORMAT=json \
  ghcr.io/unitvectory-labs/gcpidentitytokenportal:v0.5.0
```

#### Kubernetes

Apply the health probe configuration to existing deployments as shown above, then update your image tag to `v0.5.0`.

### What Changed Under the Hood

For teams curious about the implementation: the logging system moved from Go's standard `log` package to a structured logger with request context. New internal packages handle error categorization, data sanitization, and health endpoint logic. None of this affects your configuration—existing setups work as-is.

### Next Steps

1. **Upgrade** - Pull the new image and deploy
2. **Enable structured logging** - Set `LOG_FORMAT=json` for production
3. **Add health probes** - Configure `/healthz` and `/readyz` in Kubernetes
4. **Try request tracing** - Add an `X-Request-Id` header to test correlation

---

*This release announcement was AI-generated by unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M on behalf of the gcpidentitytokenportal project. The original release notes can be found at [UnitVectorY-Labs/gcpidentitytokenportal v0.5.0](https://github.com/UnitVectorY-Labs/gcpidentitytokenportal/releases/tag/v0.5.0). Generated by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
