---
layout: post
title: "authzjwtbearerinjector v0.3.10 Release"
date: 2026-10-22 00:58:57 +0000
tags: ["authzjwtbearerinjector", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-10-22, authzjwtbearerinjector v0.3.10 was released. This is a security-focused rebuild with no functional changes, delivering an updated build environment that improves the project's security posture for users running the Envoy ExtAuthz service in production.

authzjwtbearerinjector is a Go-based service that implements the OAuth 2.0 JWT-bearer flow for Envoy Proxy, signing a local JWT and exchanging it for an access token that is injected into backend requests. Version 0.3.10 keeps the existing behavior intact while ensuring the container image is built with a toolchain that distrusts compromised eMudhra intermediate CAs.

## What's new

v0.3.10 is a security rebuild. The container image is rebuilt using Go 1.27.3 instead of Go 1.27.2. No source code, configuration handling, or runtime behavior has changed.

The change addresses GO-2026-6809 / CVE-2026-111943 by ensuring the build environment no longer trusts the compromised eMudhra intermediate CAs. The release notes explicitly state no functional code changes, and the diff between v0.3.9 and v0.3.10 confirms only the Dockerfile builder version bump.

Users will see the same API, configuration options, and token caching behavior as v0.3.9. The upgrade is fully backward compatible.

## Why it matters

Security of the build toolchain and certificate trust store matters for services that perform TLS verification during build or at runtime. Rebuilding with Go 1.27.3 incorporates the CA distrust for the compromised eMudhra intermediates, reducing risk of trust chain issues in environments where those CAs could be encountered.

Because the service is typically deployed as a sidecar to Envoy, pulling the updated image is a low-effort way to improve security posture without changing configuration or redeploying application code. For teams with compliance or security policies requiring timely adoption of CA distrust updates, v0.3.10 provides the recommended path forward.

## Upgrading

The service is distributed as a container image at `ghcr.io/unitvectory-labs/authzjwtbearerinjector`. Upgrade by pulling the `v0.3.10` tag and redeploying the sidecar. No configuration changes are required.

Existing YAML configuration, environment variables, and Envoy route metadata continue to work unchanged. The default config path remains `/app/config.yaml` and can be overridden via `CONFIG_FILE_PATH`. No migration steps are needed.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/authzjwtbearerinjector, release v0.3.10, date of generation 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
