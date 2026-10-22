---
layout: post
title: "mcp-filter-proxy v0.2.4 – Security Rebuild for CA Distrust"
date: 2026-10-22 00:41:17 +0000
tags: ["mcp-filter-proxy", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

mcp-filter-proxy v0.2.4 was released on 2026-10-22. This release is a security-focused rebuild with no functional changes to the proxy itself. The binaries are rebuilt with Go 1.27.3 to distrust compromised eMudhra intermediate CAs referenced as GO-2026-6809 / CVE-2026-111943. For users, the upgrade is drop-in and requires no configuration changes.

## What's new

v0.2.4 contains no new user-facing features and no changes to application code. The proxy behavior, CLI flags, configuration, and API remain identical to v0.2.3.

The release delivers prebuilt binaries rebuilt with the patched Go toolchain. The repository changes in this tag are limited to CI and workflow updates: Go toolchain bumps in CI workflows, Dependabot updates for actions/upload-artifact, astral-sh/setup-uv, and CodeQL actions, and a fix for govulncheck SARIF upload failures by deduplicating duplicate stacks. These changes do not affect runtime behavior.

## Why it matters

mcp-filter-proxy provides a controlled path for local MCP clients using stdio to reach remote streamable-HTTP MCP servers with tool filtering and authentication header injection. Because the proxy handles connections to remote services, the trustworthiness of the TLS toolchain matters to users.

Rebuilding with Go 1.27.3 ensures the bundled CA trust store distrusts the compromised eMudhra intermediate certificates. Upgrading protects users from potential TLS validation issues stemming from the CA compromise without requiring any changes to how the proxy is run or configured.

There are no breaking changes and no new dependencies.

## Upgrade

Upgrade is recommended to obtain the CA-patched binaries. v0.2.4 is a drop-in replacement for v0.2.3. Download the prebuilt asset for your platform from the GitHub release page and replace your existing binary, or pull the updated container image if you use one. No configuration migration is needed.

Release: https://github.com/UnitVectorY-Labs/mcp-filter-proxy/releases/tag/v0.2.4
Repository: https://github.com/UnitVectorY-Labs/mcp-filter-proxy

*This post was AI-generated. Model used: unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository UnitVectorY-Labs/mcp-filter-proxy release v0.2.4 published 2026-10-22. Date of generation: 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
