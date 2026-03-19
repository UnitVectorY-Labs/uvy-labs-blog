---
layout: post
title: "kuberollouttrigger-action v0.2.0: Multiple Tags and Version Expansion"
date: 2026-02-11 09:00:00 -0500
tags: [kuberollouttrigger-action, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## A More Flexible Way to Trigger Container Rollouts

Today we're excited to announce the release of **kuberollouttrigger-action v0.2.0**, a significant update that brings enhanced flexibility and powerful new capabilities to your container deployment workflows. Released on February 11, 2026, this version adapts to important changes in the upstream kuberollouttrigger API while introducing features that make tag management simpler and more intuitive.

---

## What's New

### Multiple Tags Support

Gone are the days of triggering rollouts one tag at a time. With v0.2.0, you can now specify multiple image tags in a single workflow step using comma-separated values:

```yaml
tags: v1.0.0,v1.0,v1,latest
```

This is especially useful when you want a single deployment trigger to update containers across multiple version identifiers—perfect for release scenarios where your image should be accessible under several tags simultaneously.

### Automatic Version Expansion

Introducing the `expand-versions` feature: a quality-of-life improvement that automatically expands semantic version tags into their component parts. When you enable this option with `expand-versions: true`, specifying `v1.2.3` automatically triggers rollouts for:

- `v1` (major version)
- `v1.2` (major.minor version)  
- `v1.2.3` (full semantic version)

No need to manually list every tag variant. Just provide the full version, and the action handles the rest.

### API Adaptation for Upstream Compatibility

This release includes necessary adaptations to align with a breaking change in the kuberollouttrigger service. The input parameter has been renamed from `tag` to `tags` to reflect that it now accepts an array of tags rather than a single value.

---

## Why It Matters

These updates address real-world deployment needs:

**Flexibility**: Managing multiple tags for a single release is now effortless. Publish your image as both a semantic version and a moving tag like `latest` without extra workflow steps.

**Automation**: The version expansion feature eliminates manual bookkeeping. When you tag a release as `v2.3.4`, the action automatically ensures all version granularity levels are updated in your development environments.

**Future-Proofing**: By adapting to upstream API changes proactively, this release ensures your workflows remain compatible with the latest kuberollouttrigger capabilities.

---

## Getting Started

### Installation

Reference the new version in your workflow files:

```yaml
- uses: unitvectory-labs/kuberollouttrigger-action@v0.2.0
```

### Required Permissions

Ensure your workflow has the necessary OIDC permissions:

```yaml
permissions:
  id-token: write
  contents: read
```

### Example Usage

**Single tag:**
```yaml
- uses: unitvectory-labs/kuberollouttrigger-action@v0.2.0
  with:
    audience: ${{ vars.KRT_AUDIENCE }}
    url: ${{ vars.KRT_URL }}
    image: ghcr.io/myorg/myapp
    tags: v1.0.0
```

**Multiple tags:**
```yaml
- uses: unitvectory-labs/kuberollouttrigger-action@v0.2.0
  with:
    audience: ${{ vars.KRT_AUDIENCE }}
    url: ${{ vars.KRT_URL }}
    image: ghcr.io/myorg/myapp
    tags: v1.0.0,v1.0,v1,latest
```

**With version expansion:**
```yaml
- uses: unitvectory-labs/kuberollouttrigger-action@v0.2.0
  with:
    audience: ${{ vars.KRT_AUDIENCE }}
    url: ${{ vars.KRT_URL }}
    image: ghcr.io/myorg/myapp
    tags: v1.2.3,latest
    expand-versions: true
```

### Upgrading from v0.1.0

If you're upgrading from v0.1.0, you'll need to:

1. Change your action reference from `@v0.1.0` to `@v0.2.0`
2. Rename the input parameter from `tag:` to `tags:` in all workflow files

This is a breaking change required for compatibility with the updated kuberollouttrigger API.

---

## Try It Out

Head over to the [GitHub repository](https://github.com/UnitVectorY-Labs/kuberollouttrigger-action) to explore the full documentation and see v0.2.0 in action. We'd love to hear your feedback on how these new features improve your deployment workflows!

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was generated for release v0.2.0 of the kuberollouttrigger-action repository, published on February 11, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
