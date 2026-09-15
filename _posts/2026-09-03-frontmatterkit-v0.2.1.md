---
layout: post
title: "frontmatterkit v0.2.1 Released"
date: 2026-09-03 09:52:00 +0000
tags: ["frontmatterkit", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-09-03, frontmatterkit v0.2.1 was released. This is a maintenance update focused on stability and correctness rather than new features. The CLI interface is unchanged, and there are no breaking changes, making it a safe upgrade for existing users who rely on frontmatterkit for validating, querying, and updating Markdown front matter in CI and local workflows.

## What's new

v0.2.1 delivers a focused set of reliability improvements:

* Improved JSON Schema validation correctness. The underlying `github.com/santhosh-tekuri/jsonschema/v6` dependency was updated from 6.0.2 to 6.0.3, bringing upstream bugfixes for edge cases in property names, items validation, float handling, email checks, and equals validation. For users running `validate --schema`, this means more accurate results with fewer false positives.
* Toolchain modernization. The project now builds with Go 1.27.1 and the release artifacts are built against this toolchain, ensuring compatibility with the latest compiler improvements.
* Repository maintenance updates. CI workflows and dependencies were refreshed, with new automated checks added to the repository to keep the project healthy. These changes do not affect the CLI behavior.

No new commands, flags, or documented features were added in this release. The existing capabilities for validating front matter, getting values, setting and unsetting fields, and asserting conditions remain the same.

## Why it matters

For teams using frontmatterkit in automated pipelines, correctness and stability are the priority. The JSON Schema dependency bump addresses subtle validation edge cases that could otherwise cause unexpected failures or missed errors in schema checks. The Go toolchain update ensures the project continues to build cleanly on current infrastructure and positions future work on a supported base.

Because the release contains no functional changes to the CLI, existing scripts and integrations continue to work without modification. The update is primarily about reducing risk and improving confidence in validation results.

## Upgrade

Upgrading is straightforward:

```
go install github.com/UnitVectorY-Labs/frontmatterkit@latest
```

Pre-built binaries for darwin, linux, and windows are attached to the GitHub release with checksums for verification. The CLI interface is unchanged, so existing invocations of `frontmatterkit validate`, `get`, `set`, `unset`, and `assert` work as before.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/frontmatterkit, release v0.2.1 published 2026-09-03. Article generated 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
