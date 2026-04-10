---
layout: post
title: "authzjwtbearerinjector v0.2.1: Maintenance and Stability"
date: 2025-01-02 09:00:00 -0500
tags: ["authzjwtbearerinjector", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On January 2, 2025, we released authzjwtbearerinjector v0.2.1. This maintenance release focuses on keeping the project up-to-date with the latest Go runtime and core dependencies, ensuring long-term stability and security for your Envoy Proxy sidecar.

## What's new

This release is primarily about technical hygiene and clarity:

- **Go 1.23 Runtime**: The project has been updated to Go 1.23, bringing the latest performance improvements and language features to the service.
- **Core Dependency Updates**: We have bumped critical dependencies, including `google.golang.org/grpc` to v1.69.2 and `go-control-plane` to v0.13.2.
- **Clearer Configuration**: We've updated our documentation to explicitly mention that the service listens on port `50051` by default, making it easier for users to configure their Envoy `grpc_service` targets.

## Why it matters

While this is a maintenance release, these changes are vital for production environments. Updating the Go runtime and gRPC libraries ensures that the service remains secure and compatible with the broader ecosystem. Additionally, the documentation update reduces friction during setup, ensuring that developers can get their JWT bearer flow running quickly and correctly.

## Getting started

Upgrading to v0.2.1 is seamless as there are no breaking changes. You can simply pull the latest Docker image from GHCR:

`ghcr.io/unitvectory-labs/authzjwtbearerinjector`

No configuration changes are required to benefit from these updates.

***

This post was AI-generated.
Model used: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL
Repository: UnitVectorY-Labs/authzjwtbearerinjector
Release: v0.2.1
Date of generation: 2026-04-10
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)