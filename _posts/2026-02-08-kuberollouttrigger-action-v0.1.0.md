---
layout: post
title: Introducing kuberollouttrigger-action v0.1.0
date: 2026-02-08 02:53:36 -0500
tags: ["kuberollouttrigger-action", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Launching kuberollouttrigger-action v0.1.0

Today we're thrilled to announce the initial release of **kuberollouttrigger-action** (v0.1.0), a secure GitHub Action designed to streamline container deployment workflows by bridging CI/CD pipelines with rollout trigger systems.

Released on February 8, 2026, this action eliminates the need for long-lived credentials in your deployment automation while providing powerful features like semantic version expansion and configurable HTTP timeouts.

---

## What's New

As an inaugural release, v0.1.0 introduces the complete first version of kuberollouttrigger-action with these core capabilities:

### Secure OIDC Authentication
The action leverages GitHub's native OpenID Connect (OIDC) support to fetch short-lived authentication tokens. This means no more storing or managing API keys for your deployment triggers—the security is built in automatically.

### Flexible Tag Support
Deploy with confidence using our flexible tag system:
- **Single or multiple tags**: Specify comma-separated image tags for one-shot or multi-tag deployments
- **Semantic version expansion**: Enable `expand-versions: true` to automatically expand versions like `v1.2.3` into `v1`, `v1.2`, and `v1.2.3`—perfect for deployment strategies that rely on tag hierarchies

### Production-Ready Configuration
- Configurable HTTP timeouts (default: 10 seconds)
- Automatic retry logic (up to 2 retries on failure)
- Minimal permission requirements (`id-token: write` and `contents: read`)

### Security First Design
Built from the ground up with security in mind:
- Zizmor security scanning integrated into CI
- CodeQL analysis for JavaScript/TypeScript code
- Dependabot automation for dependency updates
- No credential storage—OIDC tokens are ephemeral by design

---

## Why It Matters

Container deployment automation often requires complex authentication setups and careful handling of credentials. kuberollouttrigger-action solves this by providing a secure, reusable bridge between your GitHub Actions workflows and your deployment infrastructure.

When you build and push container images to a registry, this action automatically notifies your rollout trigger system that new images are available—enabling fully automated deployments without manual intervention or security compromises.

The inclusion of semantic version expansion addresses a common deployment pattern where teams use multiple tag references (major, minor, patch, and latest) simultaneously. Instead of manually specifying all tag variations, the action handles this for you automatically.

---

## Getting Started

To use kuberollouttrigger-action in your workflow, reference v0.1.0:

```yaml
- uses: unitvectory-labs/kuberollouttrigger-action@v0.1.0
  with:
    audience: ${{ vars.KRT_AUDIENCE }}
    url: ${{ vars.KRT_URL }}
    image: ghcr.io/myorg/myapp
    tags: v1.0.0,v1.0,v1,latest
```

### Quick Example with Version Expansion

For semantic versioning workflows:

```yaml
- uses: unitvectory-labs/kuberollouttrigger-action@v0.1.0
  with:
    audience: ${{ vars.KRT_AUDIENCE }}
    url: ${{ vars.KRT_URL }}
    image: ghcr.io/myorg/myapp
    tags: v1.2.3,latest
    expand-versions: true
```

### Prerequisites

Before using this action, ensure your repository is configured for GitHub OIDC and that you have a rollout trigger endpoint ready to receive webhook notifications. The workflow must request `id-token: write` permission to fetch the authentication token.

Full documentation with additional examples is available in the [README](https://github.com/UnitVectorY-Labs/kuberollouttrigger-action/blob/main/README.md).

---

## Transparency Note

This blog post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was generated for release v0.1.0 of kuberollouttrigger-action (released February 8, 2026). For more information about automated content generation, see the [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller) project.
