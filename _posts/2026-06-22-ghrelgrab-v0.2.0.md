---
layout: post
title: "ghrelgrab v0.2.0: Smarter Asset Fetching and Enhanced Security"
date: 2026-06-22 09:00:00 -0500
tags: ["ghrelgrab", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on June 22, 2026, ghrelgrab v0.2.0 introduces key usability improvements and critical security hardening. This update streamlines how you interact with GitHub releases, making your automation scripts and Dockerfiles cleaner and more robust.

## What's new

This release focuses on giving users more control over how they fetch and name their assets.

**Automatic Latest Release Resolution**
Tired of manually updating version tags in your scripts? The new `--latest` flag allows you to automatically fetch the most recent stable, non-pre-release version of a project. No more hunting for the latest tag—ghrelgrab handles it for you via the GitHub API.

**Custom Output Naming**
The addition of the `--name` flag provides flexibility in how files are saved. Whether you are downloading a standalone binary or an archive, you can now specify exactly what the resulting file should be called. For archives, ghrelgrab intelligently identifies the target executable and renames it to your specification, removing the need for separate `mv` commands in your workflows.

**Improved Visibility**
To help with debugging and environment audits, ghrelgrab now prints its version string upon startup, ensuring you always know exactly which version of the tool is running in your pipeline.

## Why it matters

These changes aren't just about convenience; they are about reliability and security.

For developers and DevOps engineers, the `--latest` and `--name` flags significantly reduce the boilerplate code required in CI/CD pipelines and Dockerfiles. This leads to more maintainable infrastructure-as-code.

Beyond the visible features, v0.2.0 brings essential security updates. We have implemented strict path traversal protection to prevent "ZipSlip" and "TarSlip" vulnerabilities, ensuring that extracted files stay exactly where they belong. Additionally, the official Docker image now runs as a non-root user, adhering to security best practices and reducing the attack surface of your containers.

## Getting started

Upgrading to v0.2.0 is straightforward. You can download the latest binaries directly from the [GitHub releases page](https://github.com/UnitVectorY-Labs/ghrelgrab/releases/tag/v0.2.0) or simply update your Docker image tag to `latest` or `v0.2.0`. 

These additions are fully backward compatible, so your existing workflows will continue to function without modification while you explore these new capabilities.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Reference: [UnitVectorY-Labs/ghrelgrab](https://github.com/UnitVectorY-Labs/ghrelgrab) release v0.2.0, generated on 2026-06-23. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
