---
layout: post
title: "ghorgsync v0.6.4 — Maintenance and Security Hardening"
date: 2026-11-12 01:08:23 +0000
tags: ["ghorgsync", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On November 12, 2026, ghorgsync v0.6.4 was released. This is a maintenance release focused on reliability and security hygiene rather than new user-facing features. The sync behavior, CLI flags, and configuration remain unchanged, making this a safe, drop-in update for anyone keeping local copies of GitHub organizations in sync.

## What's new

v0.6.4 ships with a hardened JSON decoder for GitHub API and GitHub CLI data. The application now uses `encoding/json/v2` for stricter parsing of repository and account metadata. In practice GitHub responses are well-formed, so day-to-day use is unchanged, but duplicate keys and invalid UTF-8 are now rejected early and field matching is case-sensitive, reducing the chance of silent mis-parsing.

Security and CI maintenance are the other focus of this release. Weekly OSV-Scanner vulnerability scans have been added for source dependencies, with results uploaded to code scanning and retained as artifacts. The legacy govulncheck workflow has been removed as it is superseded by OSV-Scanner, and the add-to-project workflow has been retired in favor of ghook4action. Dependabot updates keep GitHub Actions dependencies current, and the Go toolchain is updated to 1.27.4 with binaries rebuilt for darwin, linux, and windows.

No CLI options, configuration schema, or sync behavior changes are included.

## Why it matters

For users, v0.6.4 means the same fast, non-destructive sync you rely on, with a more robust foundation under the hood. Stricter JSON handling makes the tool more resilient to unexpected data, and the expanded vulnerability scanning improves the project's security posture over time without affecting your workflows. The workflow cleanups keep maintenance overhead low and ensure that future improvements can ship reliably.

## Upgrade

Upgrade is straightforward and requires no migration steps.

* Install from source: `go install github.com/UnitVectorY-Labs/ghorgsync@latest`
* Download pre-built binaries for darwin, linux, or windows from the release page: https://github.com/UnitVectorY-Labs/ghorgsync/releases/tag/v0.6.4

Existing `.ghorgsync` files continue to work, and no configuration changes are needed. The binaries are built with Go 1.27.4; users building from source should use Go >=1.27.

---

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository UnitVectorY-Labs/ghorgsync, release v0.6.4, generated 2026-11-12. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).