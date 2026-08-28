---
layout: post
title: "ghorgsync v0.4.3 Released"
date: 2026-08-28 21:20:00 -0500
tags: ["ghorgsync", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

ghorgsync v0.4.3 is now available as of August 28, 2026. This is a focused bug-fix release that improves the accuracy of user-mode repository discovery so syncs match what users actually own.

ghorgsync is a CLI for non-destructively cloning and keeping local copies of GitHub organization or user repositories in sync. v0.4.3 tightens the user-mode behavior to prevent unintended processing of repositories the authenticated user can access but does not own.

## What's new

User repository owner scoping is now correct. Previously, user-mode syncs called GitHub's `/user/repos` endpoint without an affiliation filter, which returned repositories where the user is an owner, collaborator, or organization member. ghorgsync now calls `GET /user/repos?affiliation=owner`, so only repositories owned by the authenticated user are included in user-mode syncs.

The documentation in `docs/USAGE.md` has been updated to reflect the new query and the clarified behavior, and tests have been updated to assert the `affiliation=owner` parameter is used.

This release also includes a maintenance update to CI security scanning: CodeQL action versions are bumped to 4.37.8 in the GitHub Actions workflows. There is no runtime impact for users.

## Why it matters

For users running ghorgsync in user mode, repository lists now match the intended semantics. Sync runs will no longer attempt to process collaborator or organization-member repositories that are not owned by the user, which reduces noise from warnings and stray content checks and aligns the tool's behavior with the documented purpose of user-mode operation.

The change is transparent to upgrade. No configuration changes are required, and the sync remains non-destructive.

## Upgrade and installation

If you already use ghorgsync, update to v0.4.3 using your preferred package manager or download the latest release assets from the GitHub releases page for UnitVectorY-Labs/ghorgsync. Existing `.ghorgsync` configuration files continue to work without modification.

If you were seeing unexpected repositories appear in user-mode runs, v0.4.3 corrects the discovery so only owned repositories are managed.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/ghorgsync v0.4.3 released 2026-08-28. Generation date: 2026-08-28. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
