---
layout: post
title: "kube-oidc-gateway v1.1.0: Better Control Over Client Caching"
date: 2026-03-02 09:00:00 -0500
tags: ["kube-oidc-gateway", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on March 2, 2026, kube-oidc-gateway v1.1.0 brings improved flexibility to how your cluster exposes OIDC discovery and JWKS endpoints. This release focuses on giving operators more granular control over how external clients cache identity information, ensuring a better balance between performance and freshness.

## What's new

The headline feature of v1.1.0 is the introduction of **configurable client cache response headers**. Previously, the gateway's internal caching logic was tightly coupled with the headers sent to the client. Now, you can independently manage these two behaviors.

By introducing the `CLIENT_CACHE_TTL_SECONDS` environment variable (defaulting to 3600 seconds), you can now explicitly tell external clients—such as cloud providers or Vault—how long they should trust the cached OIDC documents. The gateway now includes both a `public` directive in the `Cache-Control` header and a calculated `Expires` header, adhering to web standards and improving compatibility with various HTTP clients.

Additionally, this release includes several under-the-hood maintenance updates, including an upgrade to the Go 1.26.0 toolchain and updated CI/CD workflows to ensure the project remains secure and performant.

## Why it matters

For organizations utilizing workload identity federation, the reliability and availability of OIDC endpoints are critical. When the Kubernetes API server is hardened with `--anonymous-auth=false`, `kube-oidc-gateway` becomes the essential bridge for external systems to validate cluster tokens.

The ability to decouple internal caching from client-side caching is a significant win for stability. Operators can now maintain a long-lived internal cache to protect the API server from excessive requests while instructing clients to refresh their data more frequently, or vice versa. This flexibility reduces the risk of identity outages caused by stale cache entries on the client side.

## Getting started with v1.1.0

Upgrading to v1.1.0 is straightforward. Simply update your deployment image tag to `v1.1.0` or `latest`.

If you want to customize the client cache duration, add the following environment variable to your deployment manifest:

```yaml
env:
  - name: CLIENT_CACHE_TTL_SECONDS
    value: "3600" # Set your desired TTL in seconds
```

This release is fully backward compatible, so no other changes to your configuration are required.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It was generated on April 12, 2026, based on the [kube-oidc-gateway](https://github.com/UnitVectorY-Labs/kube-oidc-gateway) [v1.1.0 release](https://github.com/UnitVectorY-Labs/kube-oidc-gateway/releases/tag/v1.1.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*