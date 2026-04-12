---
layout: post
title: "kuberollouttrigger-action v0.2.0: Multi-Tag Support and Semantic Version Expansion"
date: 2026-02-11 09:00:00 -0500
tags: ["kuberollouttrigger-action", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on February 11, 2026, kuberollouttrigger-action v0.2.0 brings a significant upgrade to how image tags are handled during deployments. This release moves beyond single-tag triggers, introducing multi-tag support and an intelligent version expansion feature to streamline your continuous deployment workflows.

## What's new

The headline feature of v0.2.0 is the transition from a single `tag` input to a flexible `tags` input. Users can now specify a comma-separated list of tags (e.g., `v1.0.0,v1.0,v1,latest`), allowing a single action to trigger rollouts across multiple version aliases simultaneously.

Complementing this is the new **Automatic Version Expansion**. By enabling the `expand-versions` input, the action can automatically detect semantic version tags (following the `vX.Y.Z` pattern) and expand them into their corresponding major and minor aliases. For example, providing `v1.2.3` will automatically trigger rollouts for `v1`, `v1.2`, and `v1.2.3`.

## Why it matters

Managing multiple tags for a single image—such as keeping `latest`, `v1`, and `v1.2` in sync—often requires repetitive configuration or multiple workflow steps. By supporting multiple tags and automating semver expansion, v0.2.0 reduces manual overhead and minimizes the risk of version mismatch across your environments. This ensures that your development and staging environments stay consistent with a single, simplified trigger.

## Upgrade and Installation

Please note that v0.2.0 introduces breaking changes to ensure a more scalable architecture:

1. **Workflow Update:** You must update the input key in your GitHub Action workflow from `tag:` to `tags:`.
2. **Server Compatibility:** Ensure your `kuberollouttrigger` endpoint is updated to handle the new request payload, which now sends tags as an array rather than a single string.

Update your workflow as follows:

```yaml
with:
  tags: ${{ github.sha }} # Changed from 'tag' to 'tags'
  expand-versions: true    # Optional: enable automatic semver expansion
```

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Generated on April 12, 2026, based on the [kuberollouttrigger-action](https://github.com/UnitVectorY-Labs/kuberollouttrigger-action) repository and the [v0.2.0 release](https://github.com/UnitVectorY-Labs/kuberollouttrigger-action/releases/tag/v0.2.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*