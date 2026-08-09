---
layout: post
title: "Scaling Up: mcp-graphql-forge v0.11.1 Brings Stateless HTTP Mode"
date: 2026-08-08 09:00:00 -0500
tags: ["mcp-graphql-forge", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on August 8, 2026, mcp-graphql-forge v0.11.1 is a targeted update designed to enhance the server's reliability and scalability in hosted environments. By optimizing how the server handles HTTP traffic and staying current with the Model Context Protocol (MCP) ecosystem, this release makes it easier than ever to deploy curated GraphQL tools at scale.

### What's new

The headline feature of this release is the enablement of **Stateless HTTP Mode**. When running the server with the `--http` flag, the `StreamableHTTPHandler` now operates without maintaining session state between requests. 

Additionally, this version includes:
- **MCP SDK Update**: The core `go-sdk` has been bumped to v1.7.0, ensuring compatibility with the latest protocol improvements.
- **Enhanced Security Tooling**: Behind the scenes, we've integrated Semgrep and updated CodeQL in our CI/CD pipeline to ensure a more secure and robust codebase.

### Why it matters

For most local users, these changes will be transparent. However, for those deploying `mcp-graphql-forge` as a web service, statelessness is a game-changer. Removing session dependency allows the server to be deployed across multiple instances behind a load balancer without requiring complex session affinity (sticky sessions). This architecture is essential for cloud-native environments, enabling seamless horizontal scaling and improved fault tolerance.

The SDK update ensures that the forge remains a first-class citizen in the evolving MCP landscape, providing a stable foundation for AI agents to interact with your GraphQL APIs.

### Getting started with v0.11.1

Upgrading to the latest version is straightforward. You can install the update directly using Go:

```bash
go install github.com/UnitVectorY-Labs/mcp-graphql-forge@latest
```

Alternatively, pre-compiled binaries for macOS, Linux, and Windows are available on our [GitHub releases page](https://github.com/UnitVectorY-Labs/mcp-graphql-forge/releases/tag/v0.11.1).

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL on 2026-08-09, based on the [v0.11.1 release](https://github.com/UnitVectorY-Labs/mcp-graphql-forge/releases/tag/v0.11.1) of the [mcp-graphql-forge](https://github.com/UnitVectorY-Labs/mcp-graphql-forge) repository. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
