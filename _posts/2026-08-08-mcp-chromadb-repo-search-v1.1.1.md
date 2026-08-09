---
layout: post
title: "Scaling Remote MCP: Introducing mcp-chromadb-repo-search v1.1.1"
date: 2026-08-08 09:00:00 -0500
tags: ["mcp-chromadb-repo-search", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on August 8, 2026, version 1.1.1 of `mcp-chromadb-repo-search` is a focused update designed to enhance the scalability of remote deployments and harden the project's security infrastructure. This release ensures that as more users deploy their semantic search capabilities to the cloud, the infrastructure remains robust, secure, and highly available.

## What's new

The headline feature of this release is the enablement of **Stateless Mode for the Streamable HTTP handler**. 

For those deploying the MCP server remotely, the server can now operate without maintaining session state on the server side. Additionally, this release brings several critical under-the-hood improvements:
- **Security Hardening**: We've integrated Semgrep for static analysis and updated CodeQL to ensure the highest code quality. We also implemented a security fix in our indexing workflows to prevent credential persistence during checkout, significantly reducing the risk of token leakage.
- **Indexer Update**: The companion `chromadb-repo-indexer` Action has been bumped to v1.1.0, ensuring the latest indexing logic is used across all repository workflows.

## Why it matters

The transition to a stateless HTTP handler is a game-changer for cloud-native deployments. By removing the requirement for session affinity (sticky sessions), `mcp-chromadb-repo-search` can now be seamlessly deployed in serverless environments or behind modern load balancers. This means better scalability, improved reliability, and easier management for teams running remote MCP installations.

Coupled with the security enhancements, this release ensures that your repository search infrastructure is not only more scalable but also more resilient against common vulnerabilities.

## Getting started with v1.1.1

Upgrading to v1.1.1 is straightforward. Users can download the latest binary release from the GitHub releases page or update their MCP client configuration to point to the new version. 

Since no breaking changes were introduced to configuration flags or environment variables, the upgrade is transparent. Local users utilizing the `stdio` transport will continue to experience the same seamless performance, while remote users will immediately benefit from the increased scalability of the stateless HTTP mode.

***

This post was AI-generated.
Model used: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL
Reference: [UnitVectorY-Labs/mcp-chromadb-repo-search](https://github.com/UnitVectorY-Labs/mcp-chromadb-repo-search), [v1.1.1](https://github.com/UnitVectorY-Labs/mcp-chromadb-repo-search/releases/tag/v1.1.1), generated on 2026-08-09.
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
