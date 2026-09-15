---
layout: post
title: "gcpmetadataexplorer v0.3.2 Released"
date: 2026-09-03 09:52:04 +0000
tags: ["gcpmetadataexplorer", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On September 3, 2026, gcpmetadataexplorer v0.3.2 was published. This is a maintenance release focused on build hygiene and repository upkeep. The application itself is unchanged from v0.3.1, so users will see the same browsing experience for the GCP metadata server, with no new features or configuration changes.

## What's new

v0.3.2 contains no user-facing functional changes. The web interface, templates, and core behavior remain identical to the previous release. The update is centered on toolchain modernization and documentation cleanup.

The build toolchain has been moved to Go 1.27.1, reflected in go.mod, the Dockerfile builder image, and CI workflows. The README was tidied by removing the retired Go Report Card badge. CI and security hygiene were also improved with dependency updates, checkout credential hardening, and the addition of static analysis and repository indexing actions for contributors.

## Why it matters

For users running the explorer in development or testing environments, v0.3.2 offers a safe, drop-in upgrade with no behavior changes. The Go 1.27 upgrade future-proofs builds without affecting the compiled application, and the CI improvements strengthen the project's security posture over time. The badge removal keeps documentation accurate as external services retire.

The release reinforces the project's intent as a lightweight, read-only tool for inspecting metadata on GCP instances, with token access remaining disabled by default and only enabled via ALLOW_TOKENS when explicitly needed.

## Upgrade and installation

No configuration changes are required to move to v0.3.2. Users pulling the Docker image from ghcr.io/unitvectory-labs/gcpmetadataexplorer will receive the updated build. Self-builders should ensure Go 1.27 or newer is available to match the updated go.mod. The explorer continues to be intended for development and testing, not production, and should be protected with access controls such as Identity-Aware Proxy.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/gcpmetadataexplorer v0.3.2 released 2026-09-03. Generated 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).