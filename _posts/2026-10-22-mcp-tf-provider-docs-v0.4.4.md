---
layout: post
title: "mcp-tf-provider-docs v0.4.4 Released"
date: 2026-10-22 00:46:34 +0000
tags: ["mcp-tf-provider-docs", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

mcp-tf-provider-docs v0.4.4 was released on October 22, 2026. This is a security-focused rebuild with no functional changes to the server itself. The release updates the build toolchain to Go 1.27.3 to distrust compromised eMudhra intermediate CAs referenced as GO-2026-6809 / CVE-2026-111943, and includes CI workflow improvements to keep the release pipeline reliable. For users, the binary behavior is unchanged from v0.4.3, but the updated build provides an improved security posture.

## What's new

This release contains no new user-facing features or functional changes.

- Security rebuild: binaries are built with Go 1.27.3 to address the compromised eMudhra CAs. The application code is identical to v0.4.3.
- CI reliability improvements: the govulncheck SARIF upload workflow now deduplicates stacks to avoid upload failures, and several GitHub Actions dependencies are updated, including actions/upload-artifact, astral-sh/setup-uv, and the CodeQL action group.
- No configuration changes, API changes, or breaking changes are introduced.

Pre-built binaries for macOS, Linux, and Windows are available with accompanying checksums, as in previous releases.

## Why it matters

While users will not see new capabilities, the security rebuild ensures the server is compiled with a toolchain that actively distrusts the compromised certificate authorities. This is a maintenance update that preserves the same documentation indexing and MCP tool behavior users rely on for accurate Terraform provider lookups, while strengthening the supply-chain trust of the release artifacts.

The CI improvements also reduce the risk of noisy or failing security scans, helping maintain a clean, trustworthy release process without impacting runtime functionality.

## Upgrade and installation

Upgrading from v0.4.3 to v0.4.4 requires no migration steps or configuration changes.

- Download the platform-specific tarball or zip from the GitHub Releases page for mcp-tf-provider-docs v0.4.4.
- Or install via Go: `go install github.com/UnitVectorY-Labs/mcp-tf-provider-docs@latest`.

The server continues to run with the same `docs_path`, `match_pattern`, `tool_name`, and `tool_description` settings. If you are already on v0.4.3, updating is recommended to benefit from the updated build toolchain.

---

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/mcp-tf-provider-docs, release v0.4.4, date of generation 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
