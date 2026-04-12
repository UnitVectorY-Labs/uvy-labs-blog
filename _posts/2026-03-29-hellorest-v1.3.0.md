---
layout: post
title: "hellorest v1.3.0: Better Observability and Expanded Portability"
date: 2026-03-29 09:00:00 -0500
tags: ["hellorest", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on March 29, 2026, hellorest v1.3.0 brings key improvements to how you monitor and deploy your minimal REST API. This release focuses on observability and portability, making it easier than ever to verify your deployment version and run hellorest across a wider variety of hardware.

## What's new

- **Version Tracking via HTTP Headers**: The `GET /` endpoint now returns an `X-App-Version` header. You can now instantly verify which version of the application is running in your environment without needing to inspect container metadata.
- **Multi-Architecture Docker Support**: We've expanded our build process to support multiple architectures. Whether you are deploying on traditional x86 servers or ARM-based cloud instances and local hardware, the latest Docker images are ready for you.
- **Modernized Core**: We've updated the underlying engine to Go 1.26.1 and transitioned our base image to Debian 13, ensuring a more secure and performant runtime environment.

## Why it matters

For developers and DevOps engineers, knowing exactly what is running in production is critical. The new version header eliminates guesswork during deployments. Furthermore, the shift to multi-arch support means hellorest is now truly portable, fitting seamlessly into any modern infrastructure stack, from the edge to the cloud.

## Upgrade and Installation

Upgrading is simple. Just pull the latest image tag:

`docker pull unitvectory-labs/hellorest:v1.3.0`

---

*This post was AI-generated.*
*Model used: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL*
*Reference: [UnitVectorY-Labs/hellorest](https://github.com/UnitVectorY-Labs/hellorest), Release v1.3.0, generated on 2026-04-12.*
*Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*