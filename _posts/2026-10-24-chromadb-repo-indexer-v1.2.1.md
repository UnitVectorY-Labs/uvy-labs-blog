---
layout: post
title: "chromadb-repo-indexer v1.2.1 Released"
date: 2026-10-24 23:45:23 +0000
tags: ["chromadb-repo-indexer", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On October 24, 2026, chromadb-repo-indexer v1.2.1 was released. This is a maintenance update focused on keeping the project healthy and up to date. There are no functional changes to the indexer or CLI, and no breaking changes or new user-facing options. The release brings fresh dependencies, updated CI tooling, and improved internal security monitoring that supports long-term stability for users syncing repository content to ChromaDB.

## What's new

Version 1.2.1 updates core runtime dependencies including `tree-sitter-language-pack`, `llama-index-core`, and `charset-normalizer`, along with build and packaging requirements. The GitHub Action workflow now uses newer versions of `astral-sh/setup-uv` and `actions/setup-python` for the managed Python runtime, and the workflow reference is aligned to v1.2.0.

Repository maintenance improvements accompany the release. Dependabot configuration now groups CodeQL action updates to reduce noise, and new OSV-Scanner workflows run weekly full scans and pull-request scans in report-only mode. SARIF results are uploaded to GitHub code scanning to help maintain the project's own supply chain hygiene.

## Why it matters

For users, v1.2.1 delivers the same indexing behavior as v1.2.0 with a more current dependency set and no migration work required. Keeping `tree-sitter-language-pack` and related libraries up to date helps preserve reliable Markdown and code-aware chunking over time, while updated CI actions ensure builds run on supported tooling.

The addition of internal vulnerability scanning and Dependabot grouping does not change how the Action or CLI is used, but it reflects ongoing attention to project maintenance and security posture. That work helps ensure the tool remains dependable for teams relying on deterministic, namespace-safe synchronization to ChromaDB.

## Upgrade

If you use the GitHub Action, move to tag `v1.2.1` or the `v1.2`/`v1` major tags to pick up the updated dependencies and CI improvements. CLI users can upgrade to 1.2.1 via your normal Python package workflow. No configuration changes are needed and no breaking changes are introduced.

This post was AI-generated. Model used: unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Repository: UnitVectorY-Labs/chromadb-repo-indexer, release v1.2.1, published 2026-10-24. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
