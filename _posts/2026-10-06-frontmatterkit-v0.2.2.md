---
layout: post
title: "frontmatterkit v0.2.2 released"
date: 2026-10-06 22:13:30 +0000
tags: ["frontmatterkit", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 6 October 2026, frontmatterkit v0.2.2 was published. This is a maintenance release that keeps the project’s build and security workflows current. There are no changes to the CLI commands, flags, or front-matter processing behavior compared with v0.2.1, so users can upgrade with confidence and expect the same experience.

## What's new

v0.2.2 contains no user-visible feature additions or bug fixes. The release updates CI dependencies and adds an official govulncheck SARIF scanning workflow for vulnerability detection. It also bumps build actions such as CodeQL and setup-uv to current versions and updates the indirect transitive dependency golang.org/x/text. No source code under the CLI is modified, and the public interface remains unchanged.

## Why it matters

Keeping build and security tooling up to date reduces risk for the project without altering how frontmatterkit works for users. The release ensures that future builds and releases are produced with current scanning and dependency versions, supporting long-term reliability. Because there are no functional changes, existing scripts and CI pipelines that use frontmatterkit continue to work without modification.

## Upgrading

frontmatterkit v0.2.2 is available from the GitHub releases page with pre-built binaries for darwin, linux, and windows. Installation is the same as previous versions and requires no configuration changes. If you are on v0.2.1, upgrading is safe and optional; users who value the latest build hygiene can update at their convenience.

Transparency note: this post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/frontmatterkit v0.2.2 released 2026-10-06. Generated 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
