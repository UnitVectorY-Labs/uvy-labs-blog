---
layout: post
title: "iapheaders v0.5.0: Streamlining Deployment and Enhancing Security"
date: 2026-05-22 09:00:00 -0500
tags: ["iapheaders", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on May 22, 2026, iapheaders v0.5.0 is a maintenance and optimization release focused on improving the application's security posture and simplifying how it is deployed and distributed. While the core functionality of inspecting IAP headers and JWTs remains unchanged, this update makes the tool more robust and easier to manage in production environments.

## What's new

This release introduces several key improvements to the distribution and deployment of iapheaders:

- **Single-Binary Distribution**: Using Go's `embed` package, all HTML templates and static assets (CSS, JS, images) are now baked directly into the compiled binary.
- **Enhanced Docker Security**: The official Docker container now runs as a non-root user, following security best practices to minimize the potential attack surface.
- **Updated Infrastructure**: We've upgraded the Go build version to 1.26.3 and transitioned the runtime base image to Debian 13 (distroless).
- **Version Visibility**: You can now easily see the current version of the application directly in the web interface footer.

## Why it matters

These changes significantly improve the developer and operator experience:

- **Simplified Operations**: By embedding assets into the binary, we've eliminated the need to manage separate folders for templates and static files. Whether you are running the binary directly or deploying via Docker, you no longer have to worry about missing asset directories.
- **Hardened Security**: Moving to a non-root user in Docker and updating base images ensures that the application remains secure and benefits from the latest stability and security patches.
- **Better Traceability**: The addition of the version display in the UI removes guesswork, making it clear which version of the tool is currently active.

## Getting started with v0.5.0

Upgrading to the latest version is straightforward:

- **Docker Users**: Simply pull the latest image from the GitHub Container Registry: `ghcr.io/unitvectory-labs/iapheaders`.
- **Source Build Users**: Build the project from source. You will notice that the resulting binary is now self-contained and does not require the `templates` or `static` folders to be present at runtime.

There are no breaking changes in this release, ensuring a smooth transition for all users.

***

*This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`. It was created on May 22, 2026, based on the [iapheaders](https://github.com/UnitVectorY-Labs/iapheaders) [v0.5.0 release](https://github.com/UnitVectorY-Labs/iapheaders/releases/tag/v0.5.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
