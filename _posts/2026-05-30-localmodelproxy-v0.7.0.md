---
layout: post
title: "Enhancing Interactivity: localmodelproxy v0.7.0"
date: 2026-05-30 09:00:00 -0500
tags: ["localmodelproxy", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on May 30, 2026, localmodelproxy v0.7.0 focuses on refining the user experience of its real-time TUI dashboard. By introducing mouse interaction support, this release transforms the dashboard from a keyboard-driven utility into a more fluid and interactive monitoring tool.

## What's new

The highlight of this release is the comprehensive addition of mouse support to the TUI. Users can now interact with the dashboard using a pointer, bringing a level of convenience previously reserved for graphical interfaces.

**Interactive Mouse Support**
- **Hover Highlights:** Navigating the dashboard is now more intuitive with visual hover effects. Tabs and model entries now highlight as you move your mouse over them, providing immediate feedback on what is selectable.
- **Click-to-Switch:** While the Tab key remains available, you can now switch between the "Stats" and "Test" tabs with a simple click.
- **Effortless Model Selection:** Selecting a model for monitoring or testing is now as easy as clicking its name in the list.
- **Instant Testing:** In the Test tab, you no longer need to press Enter to trigger a request; clicking a model now automatically starts a test request.

**Cleaner UI**
Beyond interactivity, v0.7.0 introduces subtle but impactful readability improvements. Token usage and cost displays now utilize dashes instead of zeros or empty spaces for null values, significantly reducing visual clutter and allowing the most important data to stand out.

## Why it matters

For users who rely on localmodelproxy to route requests across multiple backends, the TUI dashboard is the primary window into their system's performance. By adding mouse support, the barrier to testing new models and auditing token usage is lowered. 

The ability to quickly click through models and trigger tests without switching focus to the keyboard streamlines the development and debugging loop. Combined with a cleaner visual presentation, these changes make the proxy not just a powerful routing tool, but a more pleasant environment for managing local and cloud-hosted LLMs.

## Upgrade and Installation

Upgrading to v0.7.0 is straightforward. You can download the latest binary for your platform from the [GitHub releases page](https://github.com/UnitVectorY-Labs/localmodelproxy/releases/tag/v0.7.0), or update via Go:

```bash
go install github.com/UnitVectorY-Labs/localmodelproxy@latest
```

Alternatively, you can build from source:

```bash
go build -o localmodelproxy .
```

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It was generated on May 30, 2026, based on the v0.7.0 release of the [UnitVectorY-Labs/localmodelproxy](https://github.com/UnitVectorY-Labs/localmodelproxy) repository. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
