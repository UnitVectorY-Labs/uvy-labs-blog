---
layout: post
title: "ghprmerge v0.9.3 Released"
date: 2026-11-12 01:09:33 +0000
tags: ["ghprmerge", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

ghprmerge v0.9.3 was released on November 12, 2026. This is a maintenance release that improves JSON output consistency and strengthens supply-chain security workflows while keeping the command-line experience unchanged.

## What's new

The most visible change is a refinement to JSON output. The application now encodes output using Go's encoding/json/v2 with jsontext streaming. Optional counters and booleans are emitted only when non-zero, and nil slices are rendered as empty arrays instead of null. The encoder also rejects invalid UTF-8 rather than silently encoding it. For interactive use the output looks the same; for scripts consuming `--json` or `report --json` the field presence and slice representation are more consistent.

Behind the scenes the release updates the Go toolchain to 1.27.4, refreshes dependencies, and modernizes CI security. Weekly OSV-Scanner vulnerability scans are now enabled, and the deprecated govulncheck-go workflow has been removed. Project management workflows have been retired in favor of the current automation system. No new flags, subcommands, or behavioral changes were added to merge, rebase, close, or report.

## Why it matters

Consistent JSON makes automation more reliable. Omitting zero-valued optional fields and normalizing nil slices to `[]` reduces noise in downstream parsers and avoids null checks that were previously required. Stricter UTF-8 handling prevents silent corruption in metadata that flows through CI logs and reports.

The security workflow updates improve visibility into dependencies without affecting day-to-day operations. Users benefit from a more maintainable build pipeline and ongoing vulnerability scanning while the tooling they rely on for bulk PR management continues to work as before.

Upgrading is straightforward. Pre-built binaries for darwin, linux, and windows are available in the release. The upgrade is drop-in for human-readable output. Teams that parse JSON output programmatically should verify their handling of omitted zero values and empty-array slices.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: https://github.com/UnitVectorY-Labs/ghprmerge, release v0.9.3 published 2026-11-12. Date of generation: 2026-11-12. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
