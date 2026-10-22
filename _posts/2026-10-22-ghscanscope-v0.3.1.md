---
layout: post
title: "ghscanscope v0.3.1 — Security Rebuild"
date: 2026-10-22 00:26:13 +0000
tags: ["ghscanscope", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-10-22, ghscanscope v0.3.1 was released. This update is a security-focused rebuild with no functional changes to the application. The binaries are rebuilt with Go 1.27.3 to distrust the compromised eMudhra intermediate certificate authorities referenced as GO-2026-6809 / CVE-2026-111943. For users, behavior is identical to v0.3.0, but the release improves supply-chain and TLS trust posture for the distributed artifacts.

## What's new

v0.3.1 contains no new features, bug fixes, or breaking changes. The application code, configuration format, database schema, CLI flags, and web UI are unchanged from v0.3.0.

The release is a security rebuild: the published binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64 are compiled with Go 1.27.3, which includes updated root CA trust data that distrusts the compromised eMudhra intermediates. CI workflow dependencies were also updated in the tag range, but these changes affect the build pipeline only and are not visible to end users.

## Why it matters

ghscanscope is a local-first workbench for syncing, triaging, and browsing GitHub code-scanning alerts across repositories. Because the tool runs locally and handles authentication tokens and findings data, maintaining a clean trust store in the binaries is important for the security of the software supply chain.

Rebuilding with Go 1.27.3 ensures the released artifacts inherit the latest CA revocations without requiring any code migration or workflow changes. Users who download or install v0.3.1 receive binaries with hardened TLS trust, while existing configurations, SQLite or PostgreSQL stores, and `.ghscanscope` property files continue to work without modification.

## Upgrade and installation

Upgrading is recommended for security posture and is straightforward. No migration steps are required.

- Download the latest assets from the release page: https://github.com/UnitVectorY-Labs/ghscanscope/releases/tag/v0.3.1
- Or install via Go: `go install github.com/UnitVectorY-Labs/ghscanscope@latest`
- The CLI and web UI at http://127.0.0.1:8080 behave as before, with the same sync, export, and filtering capabilities.

Existing v0.3.0 installations can be replaced in place. Your findings database and configuration remain compatible.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: https://github.com/UnitVectorY-Labs/ghscanscope, release v0.3.1 published 2026-10-22. Date of generation: 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
