---
layout: post
title: "gowebshot v0.2.3 — Toolchain and CI Maintenance Release"
date: 2026-09-03 09:52:00 +0000
tags: ["gowebshot", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

gowebshot v0.2.3 is available as of September 3, 2026. This release is a maintenance and tooling update focused on keeping the project current and secure. There are no new user-facing features or functional changes, and the upgrade is safe for existing workflows.

## What's new

The main updates in v0.2.3 are under the hood. The Go toolchain requirement moves from 1.26 to 1.27, with CI workflows updated to Go 1.27.1. The codebase was modernized with an automated `go fix` pass, which updates the TUI and capture test code to use built-in language conveniences such as the `max` function and range-over-int loops. Behavior is unchanged.

Documentation and CI hygiene were also improved. The Go Report Card badge was removed from the README, the docs mermaid version was bumped, and several workflow files received dependency updates. A new Semgrep static analysis workflow was added alongside existing CodeQL scanning, increasing automated security coverage. Other CI dependencies were refreshed for consistency.

Pre-built binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64 are provided with checksums.

## Why it matters

This release keeps gowebshot aligned with current Go releases and modernizes the codebase without changing how it works. Users can upgrade without migration steps and without expecting changes in CLI or TUI behavior. For contributors building from source, the Go 1.27 requirement is the only adjustment needed.

The expanded security scanning and refreshed CI dependencies help maintain reliability and reduce maintenance burden over time, supporting a smoother experience for users relying on gowebshot for non-interactive and interactive screenshot capture.

## Upgrade

You can download the latest binaries from the GitHub release page for gowebshot v0.2.3, or build from source with Go 1.27 or later. No configuration changes are required.

---

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/gowebshot, release v0.2.3, date of generation 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).