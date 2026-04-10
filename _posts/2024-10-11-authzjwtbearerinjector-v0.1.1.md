---
layout: post
title: "Improving Reliability and Guidance: authzjwtbearerinjector v0.1.1"
date: 2024-10-11 09:00:00 -0500
tags: ["authzjwtbearerinjector", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On October 11, 2024, we released v0.1.1 of authzjwtbearerinjector. This maintenance update focuses on enhancing the reliability of the token refresh process and providing clearer documentation to help users deploy and configure the service more effectively.

## What's new

- **Reliable Token Refreshing**: We fixed a bug where the `SOFT_TOKEN_LIFETIME` defaulted to 0. It now correctly defaults to 0.5, meaning tokens are refreshed when 50% of their lifetime remains, preventing unexpected authentication failures.
- **Enhanced Documentation**: The README has been significantly expanded. We've added a detailed Usage section, clarified the default configuration file path at `/app/config.yaml`, and provided a comprehensive list of optional configuration parameters.

## Why it matters

For users, these changes mean a more stable authentication experience. By ensuring tokens are proactively refreshed, we reduce the risk of requests failing due to expired tokens. Additionally, the improved documentation lowers the barrier to entry for new users and makes it easier for existing users to optimize their Envoy sidecar setup.

To upgrade to v0.1.1, simply pull the latest Docker image from `ghcr.io/unitvectory-labs/authzjwtbearerinjector`. This is a non-breaking release, so you can upgrade without needing to change your existing configuration.

***

This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL`.
Reference: [UnitVectorY-Labs/authzjwtbearerinjector](https://github.com/UnitVectorY-Labs/authzjwtbearerinjector), release [v0.1.1](https://github.com/UnitVectorY-Labs/authzjwtbearerinjector/releases/tag/v0.1.1), generated on April 09, 2026.
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)