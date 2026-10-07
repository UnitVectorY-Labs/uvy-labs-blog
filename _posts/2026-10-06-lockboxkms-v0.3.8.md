---
layout: post
title: "LockboxKMS v0.3.8 Released"
date: 2026-10-06 21:53:53 +0000
tags: ["lockboxkms", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

LockboxKMS v0.3.8 was released on 2026-10-06. This is a maintenance update focused on keeping the project current and secure. The web UI for encrypting text with Google Cloud KMS remains unchanged, and users can upgrade without any configuration changes.

## What's new

v0.3.8 contains no user-facing functional changes. The application code, templates, Dockerfile, and configuration remain identical to v0.3.7. The release updates dependencies and CI workflows:

- Direct dependency bumps for `cloud.google.com/go/kms` 1.33.0 → 1.34.0 and `google.golang.org/api` 0.293.0 → 0.299.0, with corresponding transitive updates.
- Addition of an official govulncheck SARIF scanning workflow for vulnerability detection in CI.
- Updates to GitHub Actions and CodeQL dependencies, Dependabot grouping, and repository maintenance files.

No new features, UI changes, or bug fixes are included.

## Why it matters

LockboxKMS is designed as a simple, one-way encryption interface to Google Cloud KMS. Keeping client libraries up to date ensures compatibility with upstream API changes and incorporates security patches from Google's Go client ecosystem. The new govulncheck workflow improves the project's security posture by continuously scanning for known vulnerabilities in the Go dependency tree, even though it does not change runtime behavior.

For operators, this release is a safe, backward-compatible step that reduces technical debt without requiring changes to environment variables, key rings, or deployment configuration.

## Upgrade and installation

v0.3.8 is fully backward compatible with v0.3.7. Deployments can upgrade by pulling the new image:

```
ghcr.io/unitvectory-labs/lockboxkms:v0.3.8
```

No environment variable changes are required. The application continues to require `GOOGLE_CLOUD_PROJECT`, `KMS_LOCATION`, `KMS_KEY_RING`, `GOOGLE_APPLICATION_CREDENTIALS`, and `PORT` as before, and the service account needs `roles/cloudkms.cryptoKeyEncrypter` and `roles/cloudkms.viewer` on the key ring.

Transparency note: This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. It references the repository UnitVectorY-Labs/lockboxkms, release v0.3.8, and was generated on 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
