---
layout: post
title: "chromadb-repo-indexer v1.2.0: Standalone Chunk Report for Local Inspection"
date: 2026-08-16 15:47:15 +0000
tags: ["chromadb-repo-indexer", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-08-16, chromadb-repo-indexer v1.2.0 was released. This version adds a standalone `chunk-report` subcommand that lets you inspect how a local repository will be chunked without requiring ChromaDB connectivity or identity configuration. The new mode runs the discovery and chunking pipeline locally and outputs human-readable or JSON statistics, making it easier to validate include/exclude rules, chunk sizes, and per-extension token distributions before indexing.

## What's new

v1.2.0 introduces the `chromadb-repo-indexer chunk-report` subcommand. It replaces an earlier flag design with a dedicated command that produces reports without connecting to a server or writing to a collection.

The command accepts the same file and chunking options used by `index`, such as `--include-path`, `--exclude-path`, `--include-extension`, `--exclude-extension`, `--chunk-size`, and `--chunk-overlap`. Output can be rendered as default human-readable text, `--json` for machine-readable reports, or `--verbose` to include per-file breakdowns.

Reports include `report_version: 3`, chunking version, root path, file counts, total chunks, token and character statistics with percentiles, within-budget percentages, histograms, and a `by_extension` summary sorted by total tokens. Configuration validation now skips server and collection checks when running in report mode, so no ChromaDB settings are required.

Documentation was updated with usage examples for the chunk report, and dependencies were bumped for maintenance. Semgrep static analysis was added to CI and the workflow was corrected.

## Why it matters

Inspecting chunking behavior has previously required a full index run against ChromaDB. With a local, read-only report you can quickly test how different paths, extensions, and chunk parameters affect output, and share consistent statistics across teams. This is useful for tuning Markdown and code-aware chunking, verifying that exclusions work as intended, and estimating token usage before syncing to a collection.

No breaking changes are introduced for existing `index` runs. The upgrade is opt-in and does not require configuration changes.

## Upgrade and installation

Upgrade the Python CLI with:

```
pip install chromadb-repo-indexer==1.2.0
```

For GitHub Actions, use the tag `v1` or pin to `v1.2.0`:

```
uses: UnitVectorY-Labs/chromadb-repo-indexer@v1
```

Existing index workflows continue to work unchanged. Try the new inspection mode with:

```
chromadb-repo-indexer chunk-report ~/github/example --include-extension md --json
```

Full details are in the release notes: https://github.com/UnitVectorY-Labs/chromadb-repo-indexer/releases/tag/v1.2.0

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: https://github.com/UnitVectorY-Labs/chromadb-repo-indexer, release v1.2.0, date of generation 2026-08-18. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
