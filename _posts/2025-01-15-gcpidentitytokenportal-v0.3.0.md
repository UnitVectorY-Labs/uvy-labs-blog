---
layout: post
title: "gcpidentitytokenportal v0.3.0 - Kubernetes Support with Workload Identity Federation"
date: 2025-01-15 09:00:00 -0500
tags: ["gcpidentitytokenportal", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introducing Kubernetes Support for Multi-Cloud Deployments

On January 15, 2025, we released gcpidentitytokenportal v0.3.0, a significant update that expands where you can deploy this tool beyond Google Cloud Platform. This release introduces native Kubernetes support with Workload Identity Federation and service account impersonation, enabling you to obtain GCP identity tokens from any Kubernetes cluster integrated with Google Cloud.

## What's New

### Kubernetes Deployment Outside GCP

The headline feature in v0.3.0 is the ability to run gcpidentitytokenportal in Kubernetes clusters outside of Google Kubernetes Engine (GKE). Previously, this tool was designed primarily for GCP environments where the metadata service is readily available. Now, organizations can deploy it in:

- Any self-managed Kubernetes cluster
- Multi-cloud Kubernetes deployments
- Hybrid infrastructure setups

This is achieved through Workload Identity Federation and service account impersonation, which allow the application to exchange Kubernetes service account tokens for GCP identity tokens via Google's Security Token Service (STS) and IAM APIs.

### Configuration Flexibility

v0.3.0 adds support for Google's `external_account` credential type through the `GOOGLE_APPLICATION_CREDENTIALS` environment variable. This configuration approach is standardized across Google Cloud client libraries, making it familiar to users who have worked with Google Cloud authentication in other contexts.

The new configuration supports:
- Custom audience selection for generated tokens
- Service account impersonation chains
- Flexible credential sourcing from projected volumes in Kubernetes

### Dependency Updates

This release also includes routine dependency updates that bring security patches and improvements:
- `google.golang.org/api` updated to v0.216.0
- `golang.org/x/oauth2` updated to v0.25.0
- Various OpenTelemetry and gRPC library updates for improved observability

### Community Contribution

We welcome our first-time contributor @JaredHatfield, who implemented the Kubernetes impersonation support feature in PR #12. Their work significantly expands the tool's deployment flexibility.

## Why It Matters

### Break Down Cloud Boundaries

The addition of Kubernetes support removes a key limitation: you're no longer restricted to GCP environments. Teams running multi-cloud or hybrid infrastructure can now use gcpidentitytokenportal consistently across their entire Kubernetes estate, whether workloads run on AWS EKS, Azure AKS, or self-managed clusters.

### Debugging Made Easier

For teams debugging GCP API integrations in non-GCP environments, this release eliminates the need for complex workarounds. You can now spin up a local or remote Kubernetes deployment of gcpidentitytokenportal and obtain tokens with custom audiences just as you would in GKE.

### Zero Breaking Changes

Existing deployments continue to work without modification. If you're already using gcpidentitytokenportal on GCP, upgrading to v0.3.0 is seamless—your current configuration remains valid. The new Kubernetes mode is opt-in, activated only when you configure `GOOGLE_APPLICATION_CREDENTIALS` with an external account JSON file.

## Getting Started

### Docker Installation

For new deployments, pull the latest image:

```bash
docker run --name gcpidentitytokenportal -d -p 8080:8080 \
  ghcr.io/unitvectory-labs/gcpidentitytokenportal:v0.3.0
```

### Kubernetes Deployment

Detailed instructions for deploying in Kubernetes are available in the [README](https://github.com/UnitVectorY-Labs/gcpidentitytokenportal). Key setup steps include:

1. Configure Workload Identity Federation between your Kubernetes cluster and Google Cloud
2. Create a ConfigMap with your external account JSON configuration
3. Deploy using the provided manifest with projected service account tokens
4. Grant the "Workload Identity User" role to your federation principal

### Upgrading Existing Deployments

If you're upgrading from v0.2.0:
- No breaking changes—existing GCP deployments work as before
- The default port (8080) and basic configuration remain unchanged
- Simply update your container image tag to `v0.3.0`

## Learn More

- [Full Release Notes](https://github.com/UnitVectorY-Labs/gcpidentitytokenportal/releases/tag/v0.3.0)
- [Kubernetes Deployment Guide](https://github.com/UnitVectorY-Labs/gcpidentitytokenportal#kubernetes-deployment)
- [Compare v0.2.0 to v0.3.0](https://github.com/UnitVectorY-Labs/gcpidentitytokenportal/compare/v0.2.0...v0.3.0)

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 18, 2026. The original release is available at [github.com/UnitVectorY-Labs/gcpidentitytokenportal/releases/tag/v0.3.0](https://github.com/UnitVectorY-Labs/gcpidentitytokenportal/releases/tag/v0.3.0). Generated by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
