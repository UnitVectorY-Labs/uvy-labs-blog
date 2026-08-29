---
layout: post
title: "omarchy-plugin-llama-swap v0.1.2: Smoother Model Panel Experience"
date: 2026-08-28 23:22:57 +0000
tags: ["omarchy-plugin-llama-swap", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-08-28, omarchy-plugin-llama-swap v0.1.2 was released. This update refines the model panel experience for Omarchy users who manage Llama Swap servers from the Quattro bar. The release focuses on usability improvements — a more compact, scrollable model list, independent per-model controls, and clearer status indicators — while leaving API endpoints, authentication, and credential handling unchanged.

## What's new

The model panel now replaces pagination with a compact, scrollable list that preserves scroll position and panel geometry as model state changes. Row density is increased so more models are visible at once, and the active-request area now shows a clear "No active requests" empty state.

Load and unload actions are now independent per model. Previously a single action locked all switches; now each model has its own pending state, so you can start load or unload operations for different models concurrently without the UI blocking unrelated switches. Optimistic updates make switches feel immediate.

Loaded models are summarized in bounded header pills beneath the panel header. Up to two names are shown as pills with an overflow indicator +N for additional loaded models, and an empty state displays "None loaded". The panel layout stays stable as models change.

Documentation in the README was updated to reflect the scrollable list, independent switches, and header pills.

## Why it matters

These changes reduce friction when managing multiple models. Removing pagination eliminates the need to page through models and keeps your place in the list during updates. Per-model actions mean you can respond to changing workloads without waiting for one operation to finish. Header pills provide an at-a-glance summary of what is running, while the denser rows and clearer empty states make the panel easier to scan at a glance.

No breaking changes were introduced. API endpoints, authentication via stdin token passing, response bounds, and connection lifecycle remain the same.

## Upgrade / installation

v0.1.2 is a standard Omarchy plugin update with no migration required. Configuration keys `url` and `apiToken` are unchanged.

Install or update with:

```sh
omarchy plugin add https://github.com/UnitVectorY-Labs/omarchy-plugin-llama-swap.git --enable
```

After reload or rescan, the new scrollable list and header pills appear immediately.

Transparency note: This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. It references the repository https://github.com/UnitVectorY-Labs/omarchy-plugin-llama-swap, release https://github.com/UnitVectorY-Labs/omarchy-plugin-llama-swap/releases/tag/v0.1.2, and was generated on 2026-08-29. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
