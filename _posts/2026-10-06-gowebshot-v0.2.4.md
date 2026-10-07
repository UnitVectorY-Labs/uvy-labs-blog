---
layout: post
title: "gowebshot v0.2.4 — Security Maintenance Release"
date: 2026-10-06 22:16:07 +0000
tags: ["gowebshot", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-10-06, gowebshot v0.2.4 was released for the UnitVectorY-Labs/gowebshot project. This is a maintenance release focused on security hardening and CI improvements rather than new user features. The update keeps the screenshot tool reliable across platforms while strengthening the supply chain and vulnerability detection process. No changes were made to the CLI or TUI behavior, screenshot options, or configuration.

## What's new

This release contains no functional changes to the application itself. The work is entirely around dependencies and build security:

- A security update for the indirect dependency golang.org/x/sys from v0.41.0 to v0.44.0 to address GO-2026-5024 / CVE-2026-39824, an integer overflow issue in NewNTUnicodeString. Users building from source will pull the updated module.
- Addition of an official govulncheck SARIF scanning workflow to the repository. The workflow runs on pushes, pull requests, and weekly schedules, scanning the Go codebase for known vulnerabilities and uploading results to GitHub code scanning.
- Routine CI and dependency maintenance, including updates to CodeQL actions, SARIF upload actions, and setup-uv versions used in the build workflows.

Pre-built binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, windows-386, and windows-amd64 are provided with checksums, built from the unchanged application code.

## Why it matters

gowebshot is a command line tool for capturing screenshots of webpages with non-interactive and interactive TUI modes, preset resolutions, viewport editing, zoom, scroll, crop and auto-naming. Keeping the dependency tree up to date is important for security even when the user-facing features stay the same. The govulncheck integration adds proactive vulnerability detection to the project’s CI, helping maintain a clean supply chain over time without affecting how users run the tool.

Because there are no code changes to the screenshot engine, the release is a drop-in replacement. Existing workflows continue to work as before, with the added benefit of a more secure dependency baseline for anyone compiling the project.

## Upgrade and installation

v0.2.4 is a drop-in replacement for v0.2.3. No migration steps are required. Users can download the pre-built binary for their platform from the GitHub release page at https://github.com/UnitVectorY-Labs/gowebshot/releases/tag/v0.2.4 and verify checksums, or build from source with the updated go.mod.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/gowebshot, release v0.2.4, published 2026-10-06. Date of generation: 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
