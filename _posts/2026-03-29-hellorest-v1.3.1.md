---
layout: post
title: "hellorest v1.3.1: Streamlining Our Release Pipeline"
date: 2026-03-29 09:00:00 -0500
tags: ["hellorest", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On March 29, 2026, we released hellorest v1.3.1. This is a focused maintenance release dedicated to refining our internal release processes and ensuring the highest standards for our container distribution.

## What's new

This release focuses on the "plumbing" of our project. We have updated our GitHub Actions workflows to properly handle metadata attestations for our Docker images. By refining the permissions within our CI/CD pipeline, we've eliminated build-time warnings and ensured that our release automation is operating exactly as intended.

## Why it matters

While there are no changes to the API's behavior—it still provides that reliable `{"hello": "world"}` response you depend on—these under-the-hood improvements are critical for the long-term health of the project. Correct metadata attestation provides better transparency and security for the images we publish to the GitHub Container Registry, giving users more confidence in the provenance of the tools they integrate into their testing environments.

## Getting Started

Since this release contains no breaking changes or new API features, upgrading is seamless. To get the latest version, simply pull the updated Docker image:

```bash
docker pull ghcr.io/unitvectory-labs/hellorest:v1.3.1
```

We appreciate your continued use of hellorest for your API and network testing!

***

This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`. 
Reference: [UnitVectorY-Labs/hellorest](https://github.com/UnitVectorY-Labs/hellorest), [Release v1.3.1](https://github.com/UnitVectorY-Labs/hellorest/releases/tag/v1.3.1), generated on 2026-04-12.
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)