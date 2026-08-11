---
layout: post
title: "mcp-chromadb-repo-search v1.2.0"
date: 2026-08-11 22:54:24 +0000
tags: ["mcp-chromadb-repo-search", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

mcp-chromadb-repo-search v1.2.0 was released on 2026-08-11. This release focuses on operational visibility and documentation for users running the MCP server over Streamable HTTP, with no breaking changes and a drop-in upgrade path.

## What's new

**Structured JSON request logging for HTTP deployments**
The Streamable HTTP transport now emits newline-delimited JSON logs for each completed MCP request. Each log entry includes timestamp, request ID, tool name, parameters, outcome, error details, response bytes, documents found, HTTP method/path/status, and duration. Debug output is suppressed in HTTP mode to keep stdout valid JSON, making it easier to ingest logs into monitoring and audit pipelines.

**New just-the-docs documentation site**
Documentation has moved out of the monolithic README into a focused just-the-docs site. The README is now a landing page with links to the new docs. The site provides separate guides for installation, usage, tool reference, and examples, and is published under mcp-chromadb-repo-search.unitvectorylabs.com. A `docs-serve` recipe in the justfile supports local development.

**User-Agent identification for backend requests**
All outgoing requests to ChromaDB, embedding, and reranking backends now include a User-Agent header of the form `mcp-chromadb-repo-search/<version>`. This helps backend operators identify traffic from the server for debugging, rate limiting, and analytics. No configuration is required.

## Why it matters

Structured logs give operators running the server remotely a machine-readable record of tool usage and performance without parsing plain text. The new documentation site reduces friction for new users and provides clearer examples for configuration, filters, and the search tool response format. User-Agent identification improves collaboration with backend providers and supports better observability across the stack.

## Upgrade

v1.2.0 is a drop-in upgrade. Replace the binary or run `go install github.com/UnitVectorY-Labs/mcp-chromadb-repo-search@latest`. Configuration is unchanged. If you run Streamable HTTP, ensure your log collectors expect JSON lines on stdout; existing text-based parsers for debug output will no longer see that output in HTTP mode. The search tool signature and all existing settings remain the same.

This post was AI-generated. Model used: unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Repository: UnitVectorY-Labs/mcp-chromadb-repo-search, Release v1.2.0, date of generation 2026-08-11. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
