---
layout: post
title: "Modernizing the Foundation: mcp-tf-provider-docs v0.4.0"
date: 2026-08-02 09:00:00 -0500
tags: ["mcp-tf-provider-docs", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on August 2, 2026, version v0.4.0 of `mcp-tf-provider-docs` marks a significant step forward in the project's stability and flexibility. This release focuses on modernizing the server's core by migrating to the official Model Context Protocol (MCP) Go SDK and introducing new transport capabilities to support a wider range of deployment scenarios.

## What's new

The headline feature of this release is the addition of **HTTP/SSE Transport Support**. While the server continues to support the standard STDIO transport by default, users can now host the server over a network using Server-Sent Events (SSE). 

By adding the `--http` flag (e.g., `--http=:8080`), you can now run the server as a network service, allowing AI agents to connect to your provider documentation index remotely.

## Why it matters

The migration to the official `modelcontextprotocol/go-sdk` ensures that `mcp-tf-provider-docs` is built on the most stable and up-to-date implementation of the protocol. This transition improves input validation through explicit JSON schema definitions and aligns the server with the latest request/response patterns established by the MCP team.

Furthermore, the introduction of HTTP/SSE support breaks the limitation of local-only execution. Whether you are deploying your documentation index in a containerized environment or sharing it across a team, the ability to serve documentation via HTTP makes the tool far more versatile and scalable.

## Upgrade and Installation

To upgrade to the latest version, you can use the following command:

```bash
go install github.com/UnitVectorY-Labs/mcp-tf-provider-docs@latest
```

Alternatively, you can download the pre-compiled binaries directly from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/mcp-tf-provider-docs/releases/tag/v0.4.0).

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It was generated on August 2, 2026, based on the [v0.4.0 release](https://github.com/UnitVectorY-Labs/mcp-tf-provider-docs/releases/tag/v0.4.0) of the [mcp-tf-provider-docs](https://github.com/UnitVectorY-Labs/mcp-tf-provider-docs) repository. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
