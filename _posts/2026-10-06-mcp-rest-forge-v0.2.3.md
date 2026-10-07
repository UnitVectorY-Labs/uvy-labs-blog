---
layout: post
title: "mcp-rest-forge v0.2.3 — Security and Stability Maintenance Release"
date: 2026-10-06 22:32:52 +0000
tags: ["mcp-rest-forge", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

mcp-rest-forge v0.2.3 was released on October 6, 2026. This is a maintenance release focused on security and stability with no functional changes to the server or configuration. Users can upgrade with zero configuration changes and benefit from improved resource safety and dependency hardening under the hood.

## What's new

This release updates core dependencies and the CI security pipeline while keeping the application behavior identical to v0.2.2.

- Updated Model Context Protocol Go SDK to 1.8.0 for transport hardening and resource safety improvements. The SDK adds bounded JSON decoding, capped SSE event buffering, bounded stdio frame size, and protections against OAuth discovery issues, along with fixes for session leaks, deadlocks and teardown hangs at scale.
- Remediated an indirect dependency vulnerability by bumping golang.org/x/sys to 0.44.0 to address integer overflow in NewNTUnicodeString.
- Added official govulncheck SARIF scanning to the CI workflow. Vulnerability findings are now surfaced in GitHub code scanning on pull requests, main pushes, and weekly runs.
- Routine CI and tooling dependency bumps for build reproducibility and security scanning accuracy.

No new tools, configuration schema changes, CLI flags, or breaking changes were introduced.

## Why it matters

mcp-rest-forge lets teams expose curated REST APIs as modular MCP tools via YAML configuration, with no code changes required. Reliability under load and a strong security posture are essential for that workflow.

The SDK 1.8.0 hardening reduces the risk of resource exhaustion when the server is under sustained load, improving stability for long-running agent sessions. The golang.org/x/sys security bump closes a low-level vulnerability in an indirect dependency without changing behavior. The new govulncheck workflow strengthens the project's ongoing security practices, which benefits users by maintaining a higher quality baseline for releases.

Because there are no functional changes, existing forge.yaml and per-tool YAML files continue to work unchanged.

## Upgrade

v0.2.3 is a drop-in upgrade. Download pre-compiled binaries for macOS, Linux, and Windows from the GitHub Releases page for v0.2.3, or install with:

```
go install github.com/UnitVectorY-Labs/mcp-rest-forge@latest
```

No configuration changes are needed. If you are running v0.2.2, updating now applies the SDK stability improvements and security dependency remediation immediately.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/mcp-rest-forge, release v0.2.3, date of generation 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
