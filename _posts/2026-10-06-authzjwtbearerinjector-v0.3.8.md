---
layout: post
title: "authzjwtbearerinjector v0.3.8 Released"
date: 2026-10-06 09:00:00 -0500
tags: ["authzjwtbearerinjector", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

authzjwtbearerinjector v0.3.8 is now available as of October 6, 2026. This is a maintenance release focused on repository hygiene, dependency freshness, and CI reliability with no user-facing behavior changes. The service continues to provide the same gRPC ExtAuthz jwt-bearer flow for Envoy Proxy, and upgrades are drop-in.

## What's new

v0.3.8 contains no application code changes. The release standardizes repository files through gitrepoforge, updates the Go module dependency `google.golang.org/grpc` to 1.84.0, and refreshes CI and security tooling.

Repository standardization applies shared Go and Docker templates, updates managed files and ignores, and aligns documentation metadata. CI improvements include a new Go vulnerability scanning workflow with govulncheck and SARIF upload, updated release Docker workflow for multi-arch builds and attestations, and dependabot grouping for CodeQL and GitHub Actions. Supporting action and tool versions were bumped across the workflow files.

## Why it matters

While there are no new features or configuration changes, the updates strengthen the project's maintenance posture. Keeping dependencies current and adding automated vulnerability scanning helps ensure the images you run remain secure and build reliably. The standardized repository layout also reduces friction for contributors and supports consistent release practices going forward.

## Upgrade

Upgrading is straightforward. Pull the new image from `ghcr.io/unitvectory-labs/authzjwtbearerinjector:v0.3.8` and redeploy. No configuration migration is required; existing YAML, environment variable, or Envoy metadata configuration continues to work as before. The service exposes port 50051 and behaves identically to v0.3.7.

For details, see the release on GitHub: https://github.com/UnitVectorY-Labs/authzjwtbearerinjector/releases/tag/v0.3.8

---

*This post was AI-generated. Model used: unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Repository: UnitVectorY-Labs/authzjwtbearerinjector, release v0.3.8, generated 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
