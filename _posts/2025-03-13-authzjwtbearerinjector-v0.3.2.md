---
layout: post
title: "authzjwtbearerinjector v0.3.2: Maintenance and Dependency Updates"
date: 2025-03-13 09:00:00 -0500
tags: ["authzjwtbearerinjector", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on March 13, 2025, authzjwtbearerinjector v0.3.2 is a focused maintenance release designed to keep the service secure, stable, and up-to-date. This update ensures that the injector continues to operate with the best possible performance and security posture by upgrading its core runtime and libraries.

## What's new

This release focuses on critical infrastructure updates:

* **Go Runtime Upgrade**: The service has been updated to Go v1.24.1, bringing the latest performance optimizations and security patches from the Go team.
* **Dependency Updates**: 
    * **gRPC Go**: Upgraded to v1.71.0, improving the underlying communication framework used for ExtAuthz.
    * **Go Net**: Updated `golang.org/x/net` to v0.36.0 to ensure the most reliable network primitives.

## Why it matters

While there are no changes to the feature set or configuration, these updates are essential for production environments. Upgrading the Go runtime and core dependencies reduces the attack surface and ensures compatibility with modern container environments and network standards. By staying current with these libraries, we ensure that authzjwtbearerinjector remains a robust link in your Envoy Proxy authentication chain.

## Upgrade and Installation

Upgrading to v0.3.2 is seamless, as there are no breaking changes or configuration updates required. To update your deployment, simply pull the latest Docker image:

`ghcr.io/unitvectory-labs/authzjwtbearerinjector`

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Generated on April 10, 2026, based on the [authzjwtbearerinjector](https://github.com/UnitVectorY-Labs/authzjwtbearerinjector) v0.3.2 release.*

Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)