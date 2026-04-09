---
layout: post
title: "adk-docker-base v1.10.0: Bringing the Latest Google ADK Enhancements to Your Docker Environment"
date: 2025-08-09 09:00:00 -0500
tags: ["adk-docker-base", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on August 9, 2025, v1.10.0 of `adk-docker-base` provides a seamless update to the core foundations of your AI agent development. By bumping the pre-installed Google Agent Development Kit (ADK) to version 1.10.0, we're bringing a suite of new capabilities and critical stability fixes directly to your Docker environment.

## What's new

- **Enhanced Agent Continuity:** With the implementation of Live Session Resumption, your agents can now maintain better continuity in interactions, providing a more natural and reliable user experience.
- **Increased Efficiency with Parallelism:** The support for parallel function calls allows your agents to execute multiple tools simultaneously, significantly reducing latency when complex tasks require several different tools.
- **Expanded Tooling:** The `enterprise_web_search_tool` is now available as a tool instance, enabling agents to leverage powerful enterprise-grade search capabilities.
- **Finer Control for Claude Models:** Developers using Claude models can now customize the `max tokens` setting, allowing for better optimization of response lengths and costs.
- **Reliable Deployments:** A critical fix has been applied to the `adk deploy cloud_run` CLI command, ensuring that deploying your agents to Cloud Run is smooth and error-free.

## Why it matters

For developers, this release means less time spent managing dependencies and more time building. By integrating these ADK updates into the base image, you get immediate access to professional-grade features like parallel tool execution and session resumption without the friction of manual updates. Whether you are optimizing for performance with parallel calls or improving user retention through session continuity, v1.10.0 provides the tools to make your agents more capable and robust.

## Upgrade and Installation

Upgrading to the latest version is simple. Just pull the newest tag to your local environment:

```bash
docker pull UnitVectorY-Labs/adk-docker-base:v1.10.0
```

***

This post was AI-generated.
Model: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL
Repository: [UnitVectorY-Labs/adk-docker-base](https://github.com/UnitVectorY-Labs/adk-docker-base)
Release: [v1.10.0](https://github.com/UnitVectorY-Labs/adk-docker-base/releases/tag/v1.10.0)
Date: 2025-04-09
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)