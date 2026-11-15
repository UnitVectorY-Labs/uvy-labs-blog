---
layout: post
title: "chromadb-repo-indexer v1.2.3 released"
date: 2026-11-15 03:16:39 +0000
tags: ["chromadb-repo-indexer", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

chromadb-repo-indexer v1.2.3 was released on November 15, 2026. This is a small maintenance release focused on dependency consistency. The lockfile is now aligned with the project pins so GitHub Action runs and uv-based installs use tree-sitter-language-pack 1.25.0, the version declared since v1.2.2. There are no API, configuration, or CLI changes, and the update is fully backward compatible.

## What's new

- **Lockfile resynchronized with pyproject.toml.** `uv.lock` has been regenerated to match the direct production pin for `tree-sitter-language-pack` at 1.25.0. In v1.2.2 the pyproject pin was updated from 1.23.1 to 1.25.0 but the lockfile was not refreshed, so installs from the lockfile continued to resolve 1.23.1. v1.2.3 corrects that mismatch.
- **Version bump to 1.2.3.** The project version in `pyproject.toml` is updated to 1.2.3 and reflected in the lockfile. No source code changes were made in `src/chromadb_repo_indexer/` between v1.2.2 and v1.2.3.

## Why it matters

chromadb-repo-indexer creates deterministic, Markdown- and code-aware chunks using pinned Tree-sitter grammars and keeps a repository directory synchronized with a remote ChromaDB collection. The chunking pipeline relies on `tree-sitter-language-pack` for grammar support across source files. Aligning the lockfile ensures that Action runs using `uv.lock` and CLI installs from the published package actually use the grammar pack version the project intends, providing consistent chunking behavior across environments. Because there are no interface changes, existing workflows, inputs, and outputs continue to work without modification.

## Upgrade

- **GitHub Action users:** Update your workflow to reference the new release. Using `UnitVectorY-Labs/chromadb-repo-indexer@v1` will follow the latest v1 tag, or pin explicitly to `v1.2.3`. No input changes are required; the usual concurrency group per collection/repository/branch is still recommended.
- **CLI users:** Upgrade with `pip install -U chromadb-repo-indexer`. The dependency change is transparent and no flags need adjustment.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/chromadb-repo-indexer, release v1.2.3, date of generation: 2026-11-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
