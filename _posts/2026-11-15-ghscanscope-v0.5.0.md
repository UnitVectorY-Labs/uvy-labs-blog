---
layout: post
title: "ghscanscope v0.5.0 — Portable findings commands and rule filters"
date: 2026-11-15 01:20:00 +0000
tags: ["ghscanscope", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On November 15, 2026, ghscanscope v0.5.0 was released. This update makes it easier to share and reproduce investigations across teams by adding portable, copyable `findings` commands to the web dashboard and extending the CLI with new rule and alert-number filters. The release is a focused usability improvement on top of the local-first workbench for syncing and triaging GitHub code-scanning alerts, with no breaking changes.

## What's new

**Copyable findings commands in the web UI**

Drilling into a repository, issue group, or individual alert in the web dashboard now shows a “Run in your terminal” panel with a ready-to-run `ghscanscope findings` command and a copy button. The command is built from repository names, scanner and rule IDs, and GitHub alert numbers rather than local database IDs, so it can be reused on other machines with independently synced caches.

Commands include `--verbose` for detailed output and respect the current view filters such as priority, scanner, rule, and KEV. For search results or rule names containing commas, the command falls back to `--number` with the specific alert numbers currently visible, ensuring exact reproduction. Empty filtered views hide the command block.

**CLI filters for rules and alert numbers**

The `findings` command now accepts:
- `--rule` / `-r` for exact rule ID matching, case-insensitive and repeatable or comma-separated
- `--number` for repository GitHub alert numbers, positive integers, repeatable or comma-separated

Filters combine with existing `--level`, `--scanner`, `--ref`, and `--kev` using AND semantics. Invalid numbers are rejected with validation. Documentation in README.md and docs/USAGE.md has been updated to describe the flags and the copy-command workflow.

**Dependency and documentation updates**

The release includes routine updates to dependencies and documentation rendering, with the Mermaid diagram library bumped and OSV-Scanner action workflows updated. These changes do not affect user workflows.

## Why it matters

ghscanscope is designed for local-first, offline triage of code-scanning alerts across an organization. Previously, reproducing a specific view required manually reconstructing filters or sharing database files. With portable commands, a reviewer can copy a command from the dashboard on one machine and run the same query on another machine with its own synced cache.

This supports collaboration without coupling teams to a single database instance. Using repository names and GitHub alert numbers ensures commands remain valid across independently synced databases, and the new `--rule` and `--number` filters give precise control for sharing exact investigations.

## Upgrade and installation

v0.5.0 is a drop-in upgrade with no breaking changes. Existing `findings` invocations continue to work as before.

Binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, and windows-386/windows-amd64 are published with checksums. To run a copied command on another computer, ensure the target machine has a synced cache and point it with `GHSCAN_SCOPE_DB` or `--db`. Database paths and credentials are not embedded in the copied command.

Search-based commands capture alert numbers at copy time; re-running later may yield different results if alerts change.

---

*This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/ghscanscope release v0.5.0, published 2026-11-15, article generated 2026-11-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
