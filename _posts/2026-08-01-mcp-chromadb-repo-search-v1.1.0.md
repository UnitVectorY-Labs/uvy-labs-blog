---
layout: post
title: "Precision Search Comes to mcp-chromadb-repo-search v1.1.0"
date: 2026-08-01 09:00:00 -0500
tags: ["mcp-chromadb-repo-search", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on August 1, 2026, mcp-chromadb-repo-search v1.1.0 introduces a significant upgrade to how the server handles semantic search. By adding support for optional reranking, this release transforms the way developers can feed repository context into AI models, moving from simple similarity to true relevance.

## What's new

### Optional Reranking Support
The headline feature of v1.1.0 is the integration of OpenAI-compatible reranking. While standard vector search is fast and effective for finding related content, it can sometimes miss the mark by returning results that are semantically similar but not practically relevant to a specific query.

To solve this, the server now supports a two-stage retrieval process. First, it gathers a broad set of potential candidates from ChromaDB. Then, it employs a specialized reranker model to evaluate these candidates and re-sort them based on their actual relevance to the user's question. This ensures that the top results provided to the LLM are the most precise ones available.

### Refined Result Rendering
Alongside the reranking engine, we've updated the way search results are presented in Markdown. The output is now more structured, clearly separating the repository and branch information from the specific file path. This makes the results easier for human developers to scan and more reliable for LLMs to parse.

## Why it matters

For anyone using this MCP server to power a RAG (Retrieval-Augmented Generation) workflow, the quality of the answer is only as good as the quality of the context. "Noise" in the context—irrelevant code snippets that just happen to use similar terminology—can confuse an AI and lead to hallucinations or imprecise answers.

By implementing reranking, v1.1.0 drastically reduces this noise. The result is a tighter, more accurate context window, which translates directly into higher-quality AI-generated explanations, bug fixes, and architectural analysis of your codebase.

## Getting started with v1.1.0

You can upgrade to the latest version immediately using Go:

```bash
go install github.com/UnitVectorY-Labs/mcp-chromadb-repo-search@latest
```

Reranking is an opt-in feature. To enable it, configure your server with the following environment variables:

- `CHROMA_REPO_SEARCH_RERANK_API_URL`: The URL of your reranking endpoint.
- `CHROMA_REPO_SEARCH_RERANK_MODEL`: The specific reranker model you wish to use.
- `CHROMA_REPO_SEARCH_RERANK_API_KEY`: Your API key for the reranking service.

For those with specialized performance needs, you can also tune the candidate multiplier and max request bytes to optimize for your specific model's constraints.

***

This post was AI-generated.
Model used: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL
Repository: [UnitVectorY-Labs/mcp-chromadb-repo-search](https://github.com/UnitVectorY-Labs/mcp-chromadb-repo-search)
Release: [v1.1.0](https://github.com/UnitVectorY-Labs/mcp-chromadb-repo-search/releases/tag/v1.1.0)
Date of generation: 2026-08-02
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
