---
layout: post
title: "mcp-tf-provider-docs v0.4.3 Released"
date: 2026-10-06 22:34:43 -0500
tags: ["mcp-tf-provider-docs", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

mcp-tf-provider-docs v0.4.3 was released on 2026-10-06. This is a maintenance and hardening release focused on security and reliability under the hood, with no changes to user-facing functionality. The server continues to index and serve Terraform/Tofu provider documentation from a local Git repository for use by agents, and this update makes it safer to run in production while remaining a drop-in upgrade.

## What's new

This release contains no application code changes. The updates are focused on dependencies and CI:

- Security remediation for an indirect dependency. `golang.org/x/sys` is updated to address GO-2026-5024 / CVE-2026-39824, an integer overflow issue in NewNTUnicodeString.
- Model Context Protocol Go SDK bump to v1.8.0, which adds resource-exhaustion hardening, bounded JSON decoding, SSE event size caps, and improved protocol version control. No new MCP protocol revision is introduced and supported versions remain unchanged.
- New vulnerability scanning in CI. An official govulncheck workflow is added with SARIF upload to GitHub code scanning, running on push/PR to main, weekly, and on demand.
- CI action updates and Dependabot grouping for CodeQL actions, setup-uv, and codecov to keep the build pipeline current.

Pre-compiled binaries for darwin, linux, and windows are published with this release, along with checksums.

## Why it matters

For users, v0.4.3 is a transparent upgrade. Configuration via `TF_CONFIG`, `docs_path`, `match_pattern`, and the existing STDIO or `--http` modes is unchanged, and there are no breaking changes or migration steps.

The dependency updates improve the security posture of the server, particularly around indirect system libraries and the MCP transport layer. The SDK hardening helps maintain stability under load and edge-case inputs without changing normal behavior. The addition of govulncheck to the CI pipeline improves long-term supply-chain visibility for the project.

## Upgrade

You can upgrade by downloading the pre-compiled binary for your platform from the GitHub release assets, or via `go install github.com/UnitVectorY-Labs/mcp-tf-provider-docs@latest`. No configuration changes are required. The release is drop-in compatible with v0.4.2.

Transparency note: This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/mcp-tf-provider-docs v0.4.3 released 2026-10-06. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
