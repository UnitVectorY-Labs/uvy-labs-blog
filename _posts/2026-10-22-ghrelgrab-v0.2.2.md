---
layout: post
title: "ghrelgrab v0.2.2 — Security Rebuild"
date: 2026-10-22 00:20:55 +0000
tags: ["ghrelgrab", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On October 22, 2026, ghrelgrab v0.2.2 was released. This is a security-focused rebuild with no functional changes to the CLI. The release updates the build toolchain to distrust compromised eMudhra intermediate CAs referenced by GO-2026-6809 / CVE-2026-111943, ensuring binaries are produced with an updated trust store. For users, the experience remains identical to v0.2.1, but upgrading is recommended for security posture.

## What's new

- Security rebuild with Go 1.27.3 to distrust the compromised eMudhra intermediate CAs (GO-2026-6809 / CVE-2026-111943). The release notes explicitly state no functional code changes.
- No new features, bug fixes, or breaking changes. The CLI behavior, flags, and supported archive formats are unchanged from v0.2.1.
- Infrastructure maintenance in the repository between v0.2.1 and v0.2.2 includes Dependabot updates to GitHub Actions and an update of the CI/Dockerfile Go version to 1.27.2. These changes are build-only and do not affect end users.

## Why it matters

ghrelgrab is used to fetch and extract specific GitHub release assets for the current or mapped system architecture, including support for private assets via tokens and automatic extraction of .tar.gz, .tgz, and .zip archives. Because it runs in CI pipelines and Docker layers, the trustworthiness of the build toolchain directly impacts the integrity of the artifacts you depend on.

Rebuilding with a Go toolchain that distrusts the compromised eMudhra CAs removes a supply-chain risk without requiring any workflow changes. You get the same download and extraction behavior you rely on, with an updated security baseline under the hood.

## Upgrade and installation

v0.2.2 is a drop-in replacement for v0.2.1. No configuration changes are needed.

Assets are published for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64 with accompanying .md5 and .sha256 checksums. If you pin to v0.2.1 or earlier, you are using binaries built with a toolchain that trusts the compromised CAs. Updating to v0.2.2 is recommended.

See the release on GitHub for download links and checksums: https://github.com/UnitVectorY-Labs/ghrelgrab/releases/tag/v0.2.2

*Transparency note: This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. It references repository UnitVectorY-Labs/ghrelgrab, release v0.2.2, and was generated on 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
