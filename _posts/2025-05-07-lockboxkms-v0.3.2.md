---
layout: post
title: "LockboxKMS v0.3.2: Stability and Security Maintenance"
date: 2025-05-07 09:00:00 -0500
tags: ["lockboxkms", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On May 7, 2025, we released lockboxkms v0.3.2. This maintenance release focuses on keeping our foundation secure and stable by updating the application's core runtime and dependencies.

## What's new

This release is dedicated to infrastructure and dependency health. We have updated the Go runtime to version 1.24.3 and bumped several critical Google Cloud libraries, including the KMS and API client libraries. These updates ensure we are leveraging the latest performance improvements and security patches from the Go ecosystem and Google Cloud.

## Why it matters

While v0.3.2 doesn't introduce new features, maintenance releases like this are vital for the longevity and security of the project. By staying current with the Go runtime and official cloud libraries, we minimize potential vulnerabilities and ensure that lockboxkms remains compatible with the latest cloud environment standards.

## Upgrade and Installation

Upgrading to v0.3.2 is seamless. Simply pull the latest Docker image from the GitHub Container Registry:

`docker pull ghcr.io/unitvectory-labs/lockboxkms:v0.3.2`

***

This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL.
Repository: UnitVectorY-Labs/lockboxkms
Release: v0.3.2
Date: 2026-04-13
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
