---
layout: post
title: "prompt2json v0.6.3 Released"
date: 2026-10-06 22:01:21 +0000
tags: ["prompt2json", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

prompt2json v0.6.3 was released on October 6, 2026. This is a maintenance update focused on dependency hygiene and CI security hardening. The release keeps the CLI up to date with the latest upstream libraries and adds automated Go vulnerability scanning to the build pipeline, with no breaking changes or new user-facing features.

## What's new

v0.6.3 updates internal Go dependencies used by the project, including gcpvalidate, jsonschemaprofiles, and golang.org/x/oauth2, along with transitive updates to jsonschema and golang.org/x/text. These bumps inherit upstream fixes and keep the toolchain current.

The release also adds a new CI workflow for official govulncheck SARIF scanning and updates CodeQL, semgrep, and zizmor action versions across the repository. Dependabot grouping for CodeQL actions and gitrepoforge desired-state updates to repository metadata complete the maintenance work.

No Go source files were changed in this range. CLI flags, providers, and schema handling remain unchanged from v0.6.2.

## Why it matters

Dependency updates reduce the risk of known issues in third-party libraries and help maintain compatibility with the Go ecosystem. Adding automated vulnerability scanning with govulncheck improves ongoing security visibility for the project, supporting continued reliability for users who run prompt2json in automation and data pipelines.

Because there are no functional changes, existing workflows continue to work without configuration adjustments. Upgrading is a safe way to stay on the latest supported build.

## Upgrade

Upgrade with the usual command:

```
go install github.com/UnitVectorY-Labs/prompt2json@latest
```

Prebuilt binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64 are available from the GitHub release page, along with checksums. No configuration changes are required.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/prompt2json, release v0.6.3, date of generation 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
