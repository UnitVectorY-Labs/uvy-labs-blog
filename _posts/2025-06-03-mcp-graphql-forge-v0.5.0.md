---
layout: post
title: "Flexible Authentication: Introducing Environment Variable Support in mcp-graphql-forge v0.5.0"
date: 2025-06-03 09:00:00 -0500
tags: ["mcp-graphql-forge", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on June 3, 2025, mcp-graphql-forge v0.5.0 brings significant improvements to how the server handles authentication tokens, providing users with far greater control over their environment configurations. This release ensures that your MCP tools remain secure and flexible, regardless of how you manage your secrets.

## What's new

The headline feature of this release is the introduction of **Environment Variable Support for Token Commands**. When using a `token_command` to fetch a Bearer token, you can now explicitly define the environment context in your `forge.yaml` configuration:

- **`env`**: Define a specific map of environment variables that will be passed directly to your token command.
- **`env_passthrough`**: A simple boolean flag. When set to `true`, all environment variables currently available to the `mcp-graphql-forge` process are passed through to the token command.

If both are used, the values defined in the `env` map take precedence, allowing you to override specific variables while still passing through the rest of your environment.

Additionally, we have updated the underlying `mcp-go` library to version `0.31.0`, ensuring compatibility with the latest Model Context Protocol specifications and benefiting from the latest performance and stability improvements.

## Why it matters

Authentication is often the most complex part of integrating GraphQL APIs with AI agents. Many token-fetching scripts rely on specific environment variables—such as API keys, profile paths, or custom configuration flags—to operate correctly.

Previously, managing this environment required external wrappers or system-level configuration. With the new `env` and `env_passthrough` options, you can now manage these dependencies directly within your `forge.yaml`. This makes your MCP server configuration more portable, easier to document, and more secure by allowing you to pass only the necessary secrets to your authentication scripts.

## Getting started with v0.5.0

This is a non-breaking release; your existing configurations will continue to work exactly as they did before. To take advantage of the new features, simply update your `forge.yaml` with the new environment settings.

You can upgrade to v0.5.0 by downloading the latest pre-compiled binary from our [GitHub Releases](https://github.com/UnitVectorY-Labs/mcp-graphql-forge/releases/tag/v0.5.0) page or by running the following command:

```bash
go install github.com/UnitVectorY-Labs/mcp-graphql-forge@latest
```

***

**Transparency Note:** This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`. It was generated on April 13, 2026, based on the [UnitVectorY-Labs/mcp-graphql-forge](https://github.com/UnitVectorY-Labs/mcp-graphql-forge) repository and the [v0.5.0 release](https://github.com/UnitVectorY-Labs/mcp-graphql-forge/releases/tag/v0.5.0).
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
