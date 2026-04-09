---
layout: post
title: "adk-docker-base 1.17.0: Bringing Enhanced Agent Capabilities to Your Base Image"
date: 2025-10-25 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on October 25, 2025, adk-docker-base 1.17.0 provides a streamlined update to your AI agent development environment. This release centers on a significant dependency bump of the core `google-adk` library to version 1.17.0, unlocking a suite of powerful new capabilities for agent control, tool integration, and developer productivity.

## What's new

This update brings several high-impact features from the Google Agent Development Kit directly into the base image:

### Advanced Agent Control & Observability
*   **Session Rewinding:** You can now rewind an agent's session to a previous state, allowing for more flexible debugging and interaction flow.
*   **Parallel Agent Resumption:** Improved support for managing parallel agents, specifically when multiple branches are paused awaiting tool confirmation.
*   **Granular UI Control:** New per-agent speech configurations in the UI and better observability controls to manage LLM request/response spans.

### Expanded Tooling & Integration
*   **Vertex AI Code Execution:** Integration with the Vertex AI Code Execution Sandbox API allows your agents to execute generated code in a secure, managed environment.
*   **Enhanced MCP Support:** The Model Context Protocol (MCP) integration now supports dynamic per-request headers and optional confirmation requirements for tools.
*   **Search Optimizations:** New options to bypass multi-tool limits for both Google Search and Vertex AI Search tools.

### Developer Experience & Stability
*   **Evaluation Tooling:** The ADK CLI now includes native support for creating and managing evaluation sets.
*   **Critical Fixes:** This release resolves several stability issues, including LangChain 1.0.0 compatibility and MySQL data truncation bugs.
*   **Performance Gains:** Optimized context cache creation to reduce overhead during requests.

## Why it matters

For developers building complex AI agents, these updates translate to higher reliability and greater flexibility. The addition of the Vertex AI Code Execution Sandbox removes a significant hurdle for agents that need to perform real-world computation securely. Meanwhile, session rewinding and parallel agent management provide a more sophisticated way to handle non-linear conversations and complex multi-step tasks.

The inclusion of native evaluation set creation in the CLI also streamlines the "build-test-refine" loop, making it easier to quantify agent performance improvements over time.

## Getting Started

Upgrading to 1.17.0 is straightforward. Simply update the base image reference in your `Dockerfile`:

```dockerfile
# Update from:
FROM ghcr.io/unitvectory-labs/adk-docker-base:1.16.0

# To:
FROM ghcr.io/unitvectory-labs/adk-docker-base:1.17.0
```

We recommend reviewing the `google-adk` v1.17.0 release notes for details on API migrations, such as the shift from `invocation_context` to `callback_context`.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It is based on the release of adk-docker-base 1.17.0 (2025-10-25), generated on 2026-04-09. Created by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*