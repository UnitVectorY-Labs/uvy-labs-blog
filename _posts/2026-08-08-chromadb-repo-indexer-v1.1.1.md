---
layout: post
title: "Expanding the Horizon: chromadb-repo-indexer v1.1.1"
date: 2026-08-08 09:00:00 -0500
tags: ["chromadb-repo-indexer", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on August 8, 2026, chromadb-repo-indexer v1.1.1 is a maintenance and expansion release focused on widening the scope of language support and ensuring consistent indexing across different operating systems. Whether you are using the Python CLI or the GitHub Action, this update brings more robustness and versatility to how your codebase is indexed.

## What's new

### Massive Expansion of Language Support
We have upgraded our underlying language pack, bringing a significant boost to our code-aware chunking capabilities. This release adds 65 new supported grammars, increasing our total coverage to 371 languages. 

From emerging languages like MoonBit, Aiken, and Motoko to specialized tools like Slint and Vala, and a wide array of DSLs and query languages—including PostgreSQL, T-SQL, and FlatBuffers—your repository's structural meaning is now better preserved across an even broader range of technologies.

### Cross-Platform Consistency
One of the subtle but critical improvements in v1.1.1 is the introduction of deterministic chunking across different environments. By implementing a consistent wide-ctype shim for grammar scanners, we've ensured that the resulting chunks are identical whether you run the indexer on macOS or a glibc-based Linux system. This eliminates "drift" in indexed content, making your embeddings more reliable and reproducible regardless of where the indexing happens.

### Security Hardening
We've also tightened security for our internal GitHub Action workflows. By ensuring that credentials are not persisted in the local git configuration during checkout, we've reduced the potential surface area for token exposure in CI/CD environments.

## Why it matters

For users of `chromadb-repo-indexer`, these changes mean your indexing pipeline is now more inclusive and more stable. The expanded language support ensures that as your project evolves or incorporates new languages, the indexer can continue to provide structural, context-aware chunks rather than falling back to generic text splitting.

Furthermore, the cross-platform consistency is a game-changer for teams working in mixed OS environments. Knowing that the same source code produces the same index chunks on every machine ensures that your RAG (Retrieval-Augmented Generation) systems behave predictably across the entire development lifecycle.

## Get started with v1.1.1

Upgrading to v1.1.1 is straightforward and contains no breaking changes.

- **CLI Users**: Simply update your installation via pip:
  ```bash
  pip install --upgrade chromadb-repo-indexer
  ```
- **GitHub Action Users**: Update the version tag in your workflow file to `v1` (to stay on the major version channel) or explicitly to `v1.1.1`.

We are excited to see how these new languages and improved consistency enhance your repository indexing workflows.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Reference: [UnitVectorY-Labs/chromadb-repo-indexer](https://github.com/UnitVectorY-Labs/chromadb-repo-indexer) release v1.1.1, generated on August 9, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
