---
layout: post
title: "iapheaders v0.4.4: Strengthening the Foundation"
date: 2025-10-15 09:00:00 -0500
tags: ["iapheaders", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on October 15, 2025, iapheaders v0.4.4 is a maintenance release dedicated to the long-term stability and security of the project. While this version doesn't introduce new functional features, it ensures that the tool remains modern, secure, and efficient by updating its core runtime and build infrastructure.

## What's new

This release focuses on the "under the hood" improvements that keep the application running smoothly:

- **Latest Go Runtime**: We have updated the project to Go 1.25.2, ensuring we benefit from the latest performance improvements and security patches provided by the Go team.
- **Modernized Build Pipeline**: Our GitHub Actions workflows have been upgraded to their latest versions (including checkout, setup-go, and codeql). This results in faster, more secure, and more reliable builds.
- **Improved Visibility**: We've added a Go Report Card badge to the README, giving users and contributors a transparent look at the project's code quality and static analysis health.

## Why it matters

For most users, iapheaders just works—decoding GCP IAP headers and verifying JWTs effortlessly. However, maintaining a modern toolchain is critical for security. By staying current with Go versions and CI/CD standards, we reduce the risk of vulnerabilities and ensure that the tool remains compatible with modern deployment environments. The addition of the Go Report Card is part of our commitment to maintaining high engineering standards for the community.

## Getting started

Since v0.4.4 contains no breaking changes, upgrading is seamless. 

If you are using Docker, simply pull the latest image to get the updated version:
`docker pull ghcr.io/unitvectory-labs/iapheaders`

We appreciate your continued use of iapheaders for your GCP identity testing and inspection needs.

***

This post was AI-generated.
Model used: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL
Repository: UnitVectorY-Labs/iapheaders
Release: v0.4.4
Generated on: 2026-04-12
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)