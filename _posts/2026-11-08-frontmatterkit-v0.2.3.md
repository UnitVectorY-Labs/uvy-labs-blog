---
layout: post
title: "frontmatterkit v0.2.3 released"
date: 2026-11-08 09:00:00 -0500
tags: ["frontmatterkit", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-11-08, frontmatterkit v0.2.3 shipped as a maintenance release for the Unix-style CLI that validates, queries, and minimally updates front matter in Markdown files. There are no new commands or behavioral changes for users in this version; the update focuses on build hygiene, dependency freshness, and improved security scanning in the project's CI pipeline. If you rely on frontmatterkit in CI or pipelines, this release is a safe, drop-in refresh.

## What's new

v0.2.3 does not add features or change how frontmatterkit works. The release rebuilds binaries with Go 1.27.3 and updates an indirect dependency, golang.org/x/text, from v0.39.0 to v0.41.0. Behind the scenes the repository retired the govulncheck-go and add-to-project workflows and added weekly OSV-Scanner scans for vulnerability detection. These changes are internal to the maintainers and do not alter CLI flags, output formats, or exit codes.

## Why it matters

frontmatterkit is designed for reliable, repeatable front matter handling in automation. A maintenance release like v0.2.3 keeps the build toolchain current and the dependency graph tidy without risking changes to your pipelines. The switch to OSV-Scanner and the cleanup of superseded workflows improve the project's security posture and release reliability, which translates to more trustworthy binaries for users downstream. Because no source code was changed, existing scripts that use `validate`, `get`, `set`, `unset`, or `assert` continue to behave exactly as before.

## Upgrading

Upgrading is straightforward and requires no migration steps.

Install or update with:

```
go install github.com/UnitVectorY-Labs/frontmatterkit@latest
```

Prebuilt binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, and windows variants are available from the release page with accompanying checksums. v0.2.3 is a drop-in replacement for v0.2.2.

Transparency note: This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. It references https://github.com/UnitVectorY-Labs/frontmatterkit, release v0.2.3 published 2026-11-08, and was generated on 2026-11-12. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
