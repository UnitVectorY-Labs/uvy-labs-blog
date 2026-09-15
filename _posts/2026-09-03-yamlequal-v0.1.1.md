---
layout: post
title: "yamlequal v0.1.1 Released"
date: 2026-09-03 09:00:00 -0500
tags: ["yamlequal", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On September 3, 2026, UnitVectorY-Labs published yamlequal v0.1.1. This is a maintenance and housekeeping release for the lightweight Go library that verifies semantic equality of YAML files using `CompareFiles` and `CompareYAML`. The library code itself is unchanged from v0.1.0, so users get the same API and behavior with updated toolchain requirements and repository maintenance.

What's new

v0.1.1 contains no functional or API changes to the library. The public functions `CompareFiles` and `CompareYAML` remain identical to v0.1.0 and continue to compare YAML content independent of formatting or key order, including multi-document streams.

The release updates the minimum Go toolchain requirement from 1.26.0 to 1.27.0 in `go.mod`. Repository metadata is also refreshed: the LICENSE copyright year is updated to 2026 and the README Go Report Card badge is removed. The bulk of the changes are CI and maintenance updates, including dependency action bumps, GitHub Actions workflow updates, addition of semgrep and ChromaDB repo indexer actions, CodeQL version pinning, and gitrepoforge managed file updates.

Why it matters

For users, the practical impact is minimal. Code that uses yamlequal continues to work without changes, and upgrading is drop-in. The Go version bump ensures the module builds on the current supported toolchain and aligns with upstream CI. The repository maintenance improves security scanning and automation reliability, which supports long-term stability for downstream users without changing how the library is used.

Upgrade and installation

To use the new tag:

```
go get github.com/UnitVectorY-Labs/yamlequal@v0.1.1
```

Ensure your build environment uses Go 1.27 or later. No migration steps are required and there are no breaking changes to function signatures or behavior.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: https://github.com/UnitVectorY-Labs/yamlequal, release v0.1.1 published 2026-09-03. Date of generation: 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
