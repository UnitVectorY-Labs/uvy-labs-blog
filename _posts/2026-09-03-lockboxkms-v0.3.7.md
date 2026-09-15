---
layout: post
title: "LockboxKMS v0.3.7 Released"
date: 2026-09-03 09:52:38 +0000
tags: ["lockboxkms", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On September 3, 2026, lockboxkms v0.3.7 was published. This is a maintenance release for the simple web UI that encrypts text using Google Cloud Key Management Service. The application remains focused on one-way encryption with no decryption capability, and this version introduces no changes to the user interface, configuration, or runtime behavior.

The release is a dependency and toolchain hygiene update. The container image is rebuilt with Go 1.27.1 and refreshed Google Cloud client libraries, including the KMS and API libraries used by the service. No functional changes were made to main.go, internal packages, or templates, and the environment variable interface is unchanged.

## What's new

- The Docker image is now built with Go 1.27.1 and updated Google Cloud client dependencies, including cloud.google.com/go/kms and google.golang.org/api.
- Project maintenance updates were applied, including CI workflow refreshes, CodeQL and Semgrep action updates, and repository tooling configuration.
- No new features, UI changes, configuration options, or bug fixes for the application were introduced in this release.

## Why it matters

lockboxkms is intended to run behind a reverse proxy with existing IAM controls, using environment variables such as GOOGLE_CLOUD_PROJECT, KMS_LOCATION, KMS_KEY_RING, and GOOGLE_APPLICATION_CREDENTIALS to connect to KMS. Keeping the underlying toolchain and dependencies current helps maintain security posture without requiring any changes from users. Because the application code itself is unchanged, v0.3.7 provides the same experience as v0.3.6 with an updated build stack.

Upgrade is straightforward. Pull the new tag from ghcr.io/unitvectory-labs/lockboxkms:v0.3.7 and redeploy with your existing configuration. No migration steps, permission changes, or configuration updates are required. As always, the service should be deployed behind authentication, and it respects the KMS 64 KiB per-encryption limit.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/lockboxkms, release v0.3.7, date of generation 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
