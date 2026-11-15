---
layout: post
title: "chromadb-repo-indexer v1.2.2 Released"
date: 2026-11-15 02:58:29 +0000
tags: ["chromadb-repo-indexer", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

chromadb-repo-indexer v1.2.2 was released on 2026-11-15. This is a maintenance update focused on keeping dependencies fresh and the GitHub Action runtime reliable, with no changes to the indexing algorithm or public interface.

The release brings newer Tree-sitter grammars for code-aware chunking and updates the Action's Python runtime setup, alongside routine dependency and workflow maintenance. If you use the Action with a movable tag like v1 or v1.2, you will automatically benefit from these improvements on your next run.

## What's new

The core indexing behavior is unchanged. The notable updates in v1.2.2 are:

* Tree-sitter language pack upgraded from 1.22.1 to 1.25.0, providing newer pinned grammars for the languages supported by code-aware chunking. Parsing remains deterministic, with upstream grammar fixes applied.
* Action runtime refreshed via `astral-sh/setup-uv` 10.3.1 to 10.3.3 in `action.yml`, ensuring reliable Python 3.14 runtime installation for the composite Action.
* Dependency maintenance across the Python package: hatchling, pytest, opentelemetry-api, and oauthlib received patch updates for compatibility and security.
* CI and workflow housekeeping, including self-repository Action syntax fixes and normalized SARIF upload pins, plus retirement of the legacy `add-to-project` workflow in favor of organization routing via `ghook4action`.

No breaking changes were introduced. Public Action inputs, outputs, CLI flags, and configuration schema remain the same.

## Why it matters

Keeping grammars current means code-aware chunking continues to benefit from upstream improvements without requiring configuration changes from you. The setup-uv bump improves the reliability of the Action's Python environment provisioning, which reduces flaky runs in workflows.

For operators, the update is zero-effort: users tracking the `v1` or `v1.2` movable tags will receive the new dependencies automatically. Users pinning to an immutable commit SHA can adopt v1.2.2 when ready.

## Upgrading

To use this release, update your workflow to reference v1.2.2:

```yaml
uses: UnitVectorY-Labs/chromadb-repo-indexer@v1.2.2
```

Or, for the CLI:

```bash
pip install -U chromadb-repo-indexer==1.2.2
```

The project continues to synchronize repository text into a remote ChromaDB collection with deterministic Markdown- and code-aware chunks, without consulting Git for discovery.

---

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/chromadb-repo-indexer v1.2.2 released 2026-11-15. Date of generation: 2026-11-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
