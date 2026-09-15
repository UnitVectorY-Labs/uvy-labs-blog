---
layout: post
title: "kuberollouttrigger-action v0.4.0 Released"
date: 2026-09-10 23:33:10 +0000
tags: ["kuberollouttrigger-action", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

kuberollouttrigger-action v0.4.0 was released on September 10, 2026. This is a maintenance and security hardening release for the reusable GitHub Action that fetches a GitHub OIDC token and triggers kuberollouttrigger to update containers in a development environment for continuous deployment.

The release contains no user-facing functional changes. The action interface, inputs, defaults, and runtime behavior remain identical to v0.3.0, making v0.4.0 a safe drop-in upgrade for existing workflows.

## What's new

v0.4.0 focuses on repository maintenance rather than new features for action consumers.

- No changes to `src/index.js`, `action.yml`, or `README.md`. Inputs `audience`, `url`, `image`, `tags`, `timeout-seconds`, and `expand-versions` are unchanged.
- The bundled distribution was rebuilt with an updated dev dependency. The `@vercel/ncc` bundler was updated from ^0.38.4 to ^0.45.0, resulting in rebuilt `dist/index.js` and related artifacts. Source-level behavior is unchanged.
- Internal CI and security workflows were hardened: GitHub Actions used in workflows were pinned to commit SHAs, CodeQL and dependency versions were bumped, and new internal tooling workflows for repository indexing and static analysis were added. These improvements do not affect the action's runtime for users.

There are no new inputs, outputs, or features for users in this release, and no breaking changes.

## Why it matters

For teams using kuberollouttrigger-action in GitHub Actions, v0.4.0 provides an up-to-date artifact built with current tooling without requiring any configuration changes. The maintenance work behind the scenes improves the reliability and security posture of the repository that supplies the action, while the stable interface ensures existing pipelines continue to work as before.

Because the functional code is unchanged, upgrading carries no risk of behavioral differences. It is a straightforward way to stay on the latest maintained version.

## Upgrade

To use the release, update your workflow to reference the new tag:

```yaml
uses: UnitVectorY-Labs/kuberollouttrigger-action@v0.4.0
```

No configuration changes are required. The action continues to accept the same inputs and behaves identically to v0.3.0.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository UnitVectorY-Labs/kuberollouttrigger-action, release v0.4.0, article generated 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
