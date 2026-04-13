---
layout: post
title: "lockboxkms v0.3.5: Streamlining Deployment and Enhancing Security"
date: 2026-03-19 09:00:00 -0500
tags: ["lockboxkms", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on March 19, 2026, lockboxkms v0.3.5 is a maintenance and refinement update that focuses on simplifying how the application is deployed and improving its security posture. While primarily a technical update, it introduces important configuration changes and UI refinements that make the tool more robust and easier to manage.

## What's new

- **Simplified Deployment**: We've embedded the application templates directly into the Go binary. This means you no longer need to worry about managing a separate `templates/` directory during deployment, reducing the risk of missing files and simplifying your container images.
- **UI Refinements**: The web interface now features a new footer that displays the current version of the application and provides quick links to the project's GitHub repository and license, making it easier to verify your version at a glance.
- **Enhanced Security**: The runtime environment has been hardened. We've updated the Docker base image to Debian 13 (distroless) and configured the container to run as a non-root user, adhering to security best practices.
- **Core Updates**: Under the hood, we've updated to Go 1.26.1 and bumped critical Google Cloud KMS and API dependencies to ensure better performance and stability.

## Why it matters

These changes significantly lower the operational overhead for users. By embedding templates and streamlining the Docker image, deployment becomes a single-binary affair. The security hardening reduces the attack surface of the application, and the configuration standardization aligns the tool with broader Google Cloud environment conventions.

## Getting Started

To upgrade to v0.3.5, simply pull the latest Docker image or rebuild from the latest source.

**Important Notice**: This release includes a breaking configuration change. The environment variable `GCP_PROJECT` has been renamed to `GOOGLE_CLOUD_PROJECT`. Please update your environment settings to ensure a smooth transition.

***

This post was AI-generated.
Model: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL
Repository: UnitVectorY-Labs/lockboxkms
Release: v0.3.5
Date: 2026-04-13
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
