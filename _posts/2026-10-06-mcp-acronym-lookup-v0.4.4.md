---
layout: post
title: "mcp-acronym-lookup v0.4.4 Released"
date: 2026-10-06 22:25:00 -0500
tags: ["mcp-acronym-lookup", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

mcp-acronym-lookup v0.4.4 was released on 2026-10-06. This is a maintenance release focused on security and dependency health with no functional changes to the acronym lookup server itself. The update keeps the project current with its Go ecosystem dependencies and adds additional security scanning to the CI pipeline, while remaining a drop-in replacement for v0.4.3.

## What's new

v0.4.4 contains no new user-facing features and no changes to the server's Go source code. The release is composed of dependency updates and CI improvements:

* Security remediation for the indirect dependency golang.org/x/sys, bumped from v0.41.0 to v0.44.0 to address GO-2026-5024 / CVE-2026-39824, an integer overflow in NewNTUnicodeString.
* Go module update for github.com/modelcontextprotocol/go-sdk from v1.7.0 to v1.8.0.
* CI hardening with the addition of official govulncheck SARIF scanning, and updates to CodeQL actions, upload-sarif, astral-sh/setup-uv, and codecov-action workflows.
* Repository metadata updates via gitrepoforge desired-state management.

No configuration changes, API changes, or documentation updates are included in this release.

## Why it matters

For users running mcp-acronym-lookup, v0.4.4 provides a security improvement without any operational change. The golang.org/x/sys bump remediates a known vulnerability in the dependency tree, reducing risk while preserving existing behavior. The dependency and CI updates signal continued maintenance and a stronger security posture for the project, even though the lookup tool's interface and CSV-driven configuration remain unchanged.

Because no source code was modified, the upgrade is fully backward compatible.

Upgrading and installation

v0.4.4 is a drop-in replacement for v0.4.3. Download the pre-compiled binaries for macOS, Linux, and Windows from the GitHub release page for v0.4.4, or pull the latest container if you use one. No changes to ACRONYM_FILE configuration or the --http flag are required. As always, verify checksums provided with the release assets.

Transparency note: This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository UnitVectorY-Labs/mcp-acronym-lookup, release v0.4.4, date of generation 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
