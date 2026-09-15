---
layout: post
title: "YAMLtecture v0.3.3 — Maintenance Release"
date: 2026-09-03 09:52:58 +0000
tags: ["yamltecture", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On September 3, 2026, UnitVectorY-Labs published YAMLtecture v0.3.3. This release is a focused maintenance update for the YAML-defined architecture tool. There are no new CLI features or changes to the YAML schema or output formats. The update refreshes the build environment, dependencies, and CI workflows to keep the project secure and buildable, with a small documentation site improvement. For binary users, upgrading is safe and requires no migration.

## What's new

v0.3.3 contains no functional changes to YAMLtecture's CLI capabilities. The source code for the application, internal packages, and tests is unchanged from v0.3.2.

The release updates the build requirements and maintenance tooling:

* Go toolchain and module requirements are updated to Go 1.27. Users building from source now need Go ≥1.27.0, with the release built using Go 1.27.1.
* Go module dependencies are refreshed, including golang.org/x/term, and indirect dependencies are updated.
* GitHub Actions and CodeQL versions are bumped across workflows for security and maintenance.
* New CI workflows are added for repository indexing and static analysis, and existing workflows are corrected.
* The documentation site Mermaid library is updated to 11.16.1.
* The README Go Report Card badge is removed.

Pre-compiled binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, and windows-386/windows-amd64 are published with matching checksums.

## Why it matters

Maintenance releases like v0.3.3 keep the project healthy without changing how you work. Dependency and CI updates reduce the risk of build failures and help surface security issues early. The Go 1.27 requirement ensures future builds use a supported toolchain, while binary users are unaffected.

Because no schema or command behavior changed, existing YAML architecture files and workflows continue to work without modification. This is an ideal time to update to the latest binaries for a clean, up-to-date install.

## Upgrade and install

Binary users can download the latest assets from the GitHub release page for their platform. No migration steps are needed.

Source builders should update to Go 1.27.x before building, as go.mod now requires `go 1.27.0`. The standard install command remains:

```
go install github.com/UnitVectorY-Labs/YAMLtecture@latest
```

For the full list of changes, see the release notes at https://github.com/UnitVectorY-Labs/YAMLtecture/releases/tag/v0.3.3.

---

*This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/YAMLtecture v0.3.3, released 2026-09-03, generated 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
