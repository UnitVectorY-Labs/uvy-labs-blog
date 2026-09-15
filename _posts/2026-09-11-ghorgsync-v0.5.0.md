---
layout: post
title: "ghorgsync v0.5.0 adds GitHub CLI account selection for multi-account workflows"
date: 2026-09-11 00:06:49 -0500
tags: ["ghorgsync", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

ghorgsync v0.5.0 was released on September 11, 2026. This release adds optional GitHub CLI account selection, making it easier to run syncs against an organization or user with a specific logged-in `gh` account without relying on personal access tokens.

For users who manage multiple GitHub identities from the same workstation, v0.5.0 removes the friction of manually switching accounts before running ghorgsync. The feature is opt-in and leaves existing token-based authentication unchanged.

## What's new

v0.5.0 introduces two new configuration options in `.ghorgsync`:

- `auth_user`: the GitHub CLI username to use for API authentication.
- `auth_switch_back`: when true, ghorgsync restores the previously active CLI account after the run completes, even if the run exits early.

When `auth_user` is set, ghorgsync requires GitHub CLI with support for `gh auth status --json hosts` and `gh auth switch`, and it requires `GH_TOKEN` and `GITHUB_TOKEN` to be unset in the shell. On startup ghorgsync checks that the requested account is logged in and healthy, switches to it if needed, and prints `system auth [switched] USER` to indicate the change. With `auth_switch_back` enabled the original account is restored at the end of the run.

The release also updates documentation with examples for using a specific GitHub login and notes on requirements for multi-account workflows.

## Why it matters

Many teams and contributors work with both personal and organizational GitHub accounts from the same machine. Previously ghorgsync users had to manually switch the active `gh` account or manage separate token environments to ensure the correct identity was used for cloning and syncing.

With account selection built into the config, workflows become reproducible and shareable. A `.ghorgsync` file can now encode which CLI account should drive the sync, making it safe to commit example configs and reducing manual steps before running the tool. The optional restore behavior helps prevent accidental side effects in terminals where the CLI account is shared across tools.

No breaking changes are introduced. Existing configurations without `auth_user` continue to work exactly as before, with token-based authentication unchanged.

## Upgrade and installation

Installation methods are unchanged. The latest release can be installed with:

```
go install github.com/UnitVectorY-Labs/ghorgsync@latest
```

Pre-built binaries for darwin/amd64, darwin/arm64, linux/386, linux/amd64, linux/arm64, windows/386, and windows/amd64 are published with SHA256/MD5 checksums on the release page.

To try the new feature:

1. Ensure GitHub CLI is installed and supports `gh auth status --json hosts` and `gh auth switch`.
2. Log in the desired accounts with `gh auth login --hostname github.com`.
3. Unset `GH_TOKEN` and `GITHUB_TOKEN` for the session.
4. Add `auth_user: <cli-username>` to `.ghorgsync`; optionally set `auth_switch_back: true`.

Full details are in the updated USAGE.md and EXAMPLES.md documentation.

---

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/ghorgsync, release v0.5.0, date of generation 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
