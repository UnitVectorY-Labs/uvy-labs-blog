---
layout: post
title: "Introducing ghscanscope v0.1.0 — Local-first workbench for GitHub code-scanning alerts"
date: 2026-10-11 20:14:33 +0000
tags: ["ghscanscope", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On October 11, 2026, UnitVectorY Labs released v0.1.0 of ghscanscope, the initial public release of a local-first workbench for syncing, triaging, and finding patterns in GitHub code-scanning alerts across repositories. The tool downloads repository metadata and open code-scanning alerts into a local SQLite database and serves a local web UI for exploration, giving teams a private, offline-friendly way to understand security findings without repeatedly querying GitHub.

## What's new

v0.1.0 is the project launch, so this release represents the complete initial feature set.

Core workflow includes organization-wide or single-repository sync of open code-scanning alerts, checkout detection via `git remote get-url origin` that works in subdirectories and worktrees, and directory configuration via a `.ghscanscope` file. Findings are stored in a shared local database at `~/.local/share/ghscanscope/ghscanscope.db` by default, with sync progress displayed via live progress bars and color output that respects `NO_COLOR`.

The local web dashboard runs at http://127.0.0.1:8080 and starts with Critical & high findings grouped by scanner and rule, ordered by priority and affected repository count. The UI supports combined filters for scanner, repository, and priority, searchable findings, bookmarkable filter and sort URLs, and finding pages with scanner messages, locations, reported revisions, and links back to GitHub. Aggregate counts show matching versus total before filters with priority breakdowns, and a light/dark theme toggle persists browser preference.

The CLI provides cached findings export without contacting GitHub. `ghscanscope findings` accepts `--org`, `--repo`, `--db`, `--level`, `--scanner`, `--ref`, `--verbose`, and `--json`, with canonical priority normalization mapping scanner severities to critical, high, medium, low, and unknown. `ghscanscope sync`, `ghscanscope web`, and `ghscanscope version` round out the commands.

Authentication uses `GITHUB_TOKEN`, `GH_TOKEN`, or active GitHub CLI credentials. The release ships pre-built binaries for darwin-amd64/arm64, linux-386/amd64/arm64, and windows-386/amd64, plus Go install support.

## Why it matters

By keeping alerts locally, ghscanscope reduces API noise and lets teams explore patterns across repositories privately. Grouping by scanner and rule with repository-level counts makes it easier to spot systemic issues, while persistent filters and search support triage and reporting workflows that are hard to do in the GitHub UI alone. The local database means findings can be reviewed offline and shared across working directories without re-fetching.

## Getting started

Install from GitHub Releases by downloading the binary for your platform and adding it to PATH, or with Go 1.27+ via `go install github.com/UnitVectorY-Labs/ghscanscope@latest`. Build from source with `git clone` and `go build -o ghscanscope .`.

Prerequisites are Git for checkout detection and GitHub authentication via `GITHUB_TOKEN`, `GH_TOKEN`, or `gh auth login`. Start with `ghscanscope sync` for an organization or repository, then open `ghscanscope web` to explore findings locally.

This is the initial release, so there is no upgrade path. The documentation notes the database default moved from an earlier development default of `.ghscanscope.db` in the working directory to the shared `~/.local/share/ghscanscope/ghscanscope.db`. Existing databases can be continued with `--db .ghscanscope.db` or moved manually.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/ghscanscope v0.1.0 released 2026-10-11. Generated 2026-10-12. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
