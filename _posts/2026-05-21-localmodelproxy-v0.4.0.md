---
layout: post
title: "localmodelproxy v0.4.0: Bringing Cost Transparency to Your Local Proxy"
date: 2026-05-21 09:00:00 -0500
tags: ["localmodelproxy", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on May 21, 2026, localmodelproxy v0.4.0 is all about visibility. This update transforms the proxy from a routing tool into a financial dashboard, introducing comprehensive cost tracking and more precise token accounting to help you manage your LLM spend across multiple backends.

## What's new

### Model Cost Tracking
You can now associate monetary costs directly with your models in the configuration file. By defining costs per million tokens for input, output, and cached data, the proxy calculates the exact USD cost of every request in real-time. These costs are aggregated per model and summed into a global total, giving you a clear picture of your spending.

### Enhanced Dashboard (TUI)
The Terminal User Interface has been upgraded to make this new data immediately useful. New "Cost" columns have been added to both the model statistics table and the recent requests list. Along with improved styling and better responsiveness, the dashboard now provides an at-a-glance view of your operational expenses.

### Precise Token Accounting
To ensure your metrics are accurate, v0.4.0 introduces improved usage normalization. The proxy now explicitly tracks "Thinking Tokens" (for reasoning models) and "Cached Tokens." Crucially, it now prevents the double-counting of cached input, automatically subtracting cached tokens from the total input count for both metrics and cost calculations.

## Why it matters

Managing multiple LLM providers often means juggling different billing consoles and pricing tiers. Model Cost Tracking brings that data into a single pane of glass. You no longer have to guess the cost of a complex prompt or a long-running session; you see the USD value the moment the response arrives.

Furthermore, as models introduce more complex token types like reasoning/thinking tokens and sophisticated caching mechanisms, accurate accounting becomes critical. By normalizing this data, localmodelproxy ensures that your usage stats reflect reality, not just the raw (and often inconsistent) metadata returned by various backends.

## Getting Started

This is a non-breaking release, meaning your existing setup will continue to work perfectly. To start tracking costs, simply update to v0.4.0 and add an optional `cost` block to your models in the YAML configuration:

```yaml
models:
  - id: my-model
    cost:
      input_per_million: 0.30
      output_per_million: 2.50
      cache_per_million: 0.075
```

***

*This post was AI-generated using the model `unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL` on 2026-05-21 for the [UnitVectorY-Labs/localmodelproxy](https://github.com/UnitVectorY-Labs/localmodelproxy) v0.4.0 release. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
