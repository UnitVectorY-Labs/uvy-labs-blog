---
layout: post
title: "jsonschemaprofiles v0.1.2 Released"
date: 2026-09-03 09:52:33 +0000
tags: ["jsonschemaprofiles", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

jsonschemaprofiles v0.1.2 was released on September 3, 2026. This is a maintenance update that keeps the library and CLI current with the Go ecosystem and improves repository security hygiene. No library source code changed between v0.1.1 and v0.1.2, so existing workflows continue to work while users gain updated binaries built with a newer toolchain and refreshed transitive dependencies.

## What's new

The release updates the build toolchain and dependencies without changing public API or profiles.

* Go toolchain modernization: the module now requires Go 1.27. The go.mod requirement is updated to go 1.27.0 and CI is running Go 1.27.1. Pre-built binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, and windows-386, windows-amd64 are published for the release.
* Dependency refreshes: transitive dependencies were bumped, including github.com/santhosh-tekuri/jsonschema/v6 from 6.0.2 to 6.0.3 and golang.org/x/text from 0.38.0 to 0.41.0, with matching go.sum updates.
* Repository maintenance: the README Go Report Card badge was removed for clarity, and documentation tooling was updated, including mermaid to 11.16.1.
* Security and CI improvements: checkout steps now use persist-credentials: false, a semgrep static analysis workflow was added, and CodeQL and other action versions were updated throughout the workflows. These changes improve the security posture of the project without affecting end users.

## Why it matters

For users, v0.1.2 is a low-risk upgrade that ensures compatibility with the current Go release line and delivers binaries built with a modern toolchain. The dependency updates bring the smallest possible improvements from upstream libraries, and the CI hardening reduces the risk of credential exposure during builds. Because no source code changed, validation, coercion, and CLI behavior remain identical to v0.1.1, while the project is positioned for future development.

## Upgrading

If you use jsonschemaprofiles as a Go library, run:

```
go get -u github.com/UnitVectorY-Labs/jsonschemaprofiles
```

If you build from source, ensure Go 1.27 or newer is installed. Binary users can download the latest assets from the v0.1.2 release page on GitHub. The CLI usage is unchanged.

This post was AI-generated. Model used: unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Repository: UnitVectorY-Labs/jsonschemaprofiles, release v0.1.2, published 2026-09-03. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
