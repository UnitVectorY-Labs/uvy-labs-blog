---
layout: post
title: "localmodelproxy v0.9.1 Released: Configurable Model Discovery and Clearer Diagnostics"
date: 2026-08-18 01:18:11 +0000
tags: ["unitvectory-labs-localmodelproxy", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

localmodelproxy v0.9.1 was released on 2026-08-18. This maintenance release focuses on making model discovery predictable for backends that don’t expose an OpenAI-compatible models endpoint, and on improving the clarity of diagnostics in the terminal UI.

The proxy continues to provide a single local OpenAI-compatible endpoint for routing chat completions to local and hosted backends while keeping credentials in YAML and tracking token usage. v0.9.1 adds a per-backend option to control discovery probing and refreshes documentation with a Quick start guide and updated Gemini examples.

## What's new

**Configurable model discovery per backend.** A new optional `model_discovery` field can be set on each backend configuration. It defaults to true for existing setups, so current configurations work unchanged. For providers like GCP Vertex AI that do not support `GET /v1/models`, setting `model_discovery: false` prevents the proxy from probing the endpoint.

When discovery is disabled, the TUI Models tab shows the backend as “model discovery disabled by configuration” in muted style rather than surfacing an error, and reconciliation treats the backend as unknown instead of failing. HTTP errors from upstream requests are now reported with standard status text instead of truncated response bodies, making failures easier to read.

**Documentation updates.** The README now includes an Overview and Quick start with a concrete YAML example showing local, OpenAI, and GCP backends, including the `model_discovery: false` setting. USAGE and EXAMPLES have been updated with guidance on when to disable discovery and the Gemini model examples have been refreshed to 3.6-flash with current cost values.

No breaking changes were introduced. The release includes dependency and CI security updates that are not user-facing.

## Why it matters

Previously, backends without a models endpoint would trigger discovery errors in the UI and log noisy probe failures. With per-backend control, operators can now mix OpenAI-compatible and non-compatible providers in the same configuration without confusion. The clearer error messages and TUI state reduce troubleshooting time and make the Models tab trustworthy for heterogeneous backend setups.

For users running GCP Vertex AI or similar services through localmodelproxy, this means a clean configuration and a calm UI while still routing chat completions through the local endpoint.

## Upgrade and installation

Upgrading is drop-in. Binaries for darwin-amd64/arm64, linux-386/amd64/arm64, and windows-386/amd64 are published with SHA256 and MD5 checksums on the GitHub release page.

If you use a backend without a `/v1/models` endpoint, add `model_discovery: false` to that backend definition to suppress discovery probes:

```yaml
backends:
  - name: vertex
    type: gcp
    model_discovery: false
```

Existing configs require no changes because discovery remains enabled by default. Review the updated README Quick start and EXAMPLES for current model IDs and cost guidance.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/localmodelproxy v0.9.1 released 2026-08-18. Generated on 2026-08-18. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
