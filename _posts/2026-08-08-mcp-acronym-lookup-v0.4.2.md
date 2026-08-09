---
layout: post
title: "Expanding the Lexicon: mcp-acronym-lookup v0.4.2"
date: 2026-08-08 09:00:00 -0500
tags: ["mcp-acronym-lookup", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on August 8, 2026, mcp-acronym-lookup v0.4.2 is a focused maintenance update that ensures your AI agents can understand a wider range of technical shorthand. By refining how the server handles acronyms, this release improves accuracy for a critical set of industry terms.

## What's new

The headline improvement in v0.4.2 is the shift to alphanumeric sanitization. The server now correctly preserves digits within acronyms, meaning terms like "K8s" (Kubernetes) are no longer stripped of their numbers during the lookup process.

Beyond the matching logic, this release includes:
- **Stateless HTTP Mode**: The HTTP transport has been updated to operate in stateless mode, enhancing the server's scalability and reliability for users relying on HTTP connections.
- **Core SDK Update**: The server has been updated to the latest MCP Go SDK (v1.7.0), ensuring better compatibility and performance.
- **Enhanced Security Scanning**: We've integrated Semgrep into our CI/CD pipeline to ensure the highest standards of code quality and security.

## Why it matters

In the world of software engineering and infrastructure, digits are often integral to the acronyms we use daily. Previously, the server's sanitization process was strictly alphabetic, which meant that alphanumeric terms were incorrectly processed. By expanding support to include digits, we've removed a significant friction point for users managing technical glossaries.

Additionally, the move to stateless HTTP transport means the server is now better equipped to handle requests efficiently without the overhead of maintaining session state, making it more robust for production-like environments.

## Get the update

Upgrading to v0.4.2 is seamless. You can download the latest binaries directly from our GitHub Releases page or upgrade via the Go toolchain:

```bash
go install github.com/UnitVectorY-Labs/mcp-acronym-lookup@latest
```

Whether you're managing a complex internal project lexicon or a public industry glossary, v0.4.2 ensures your AI tools have the most accurate information at their fingertips.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Based on the [mcp-acronym-lookup](https://github.com/UnitVectorY-Labs/mcp-acronym-lookup) repository and release [v0.4.2](https://github.com/UnitVectorY-Labs/mcp-acronym-lookup/releases/tag/v0.4.2) generated on 2026-08-09. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
