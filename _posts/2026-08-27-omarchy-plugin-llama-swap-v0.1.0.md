---
layout: post
title: "Introducing omarchy-plugin-llama-swap v0.1.0"
date: 2026-08-27 01:33:06 +0000
tags: ["omarchy-plugin-llama-swap", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

omarchy-plugin-llama-swap v0.1.0 was released on August 27, 2026 as the initial public launch of a new Omarchy Quattro bar plugin for Llama Swap. The plugin brings model management and live inference monitoring directly into the Omarchy panel, giving users a quick view of loaded models and active requests without leaving the desktop.

This first release establishes the core experience: a llama icon in the bar that opens a panel to list models, toggle them on and off, and watch active inference streams from a Llama Swap server.

## What's new

The v0.1.0 release introduces the complete initial codebase for the plugin.

The bar widget appears in the right section by default and opens a panel when clicked. Inside the panel, models from the configured Llama Swap server are listed in a stable, paginated view with five models per page and Previous/Next navigation. Toggles provide optimistic load and unload actions with a busy state while the request runs.

While the panel is open, the plugin connects to the server's event stream and shows up to three active inference requests with model name, elapsed time, and request path, with a +N more indicator for additional requests. The connection is active only while the panel is visible.

Configuration is handled through Omarchy bar settings. Users set the Llama Swap base URL and an optional API token with `omarchy bar set`, and the plugin shows clear status messages for not configured, unavailable, or connected states.

## Why it matters

For Omarchy users running a Llama Swap server, v0.1.0 removes the need to switch to a browser or separate client to check model status. Model switching and live request visibility are now accessible from the bar, keeping workflow inside the desktop environment. The panel-only connection lifecycle also keeps background activity minimal.

## Getting started

Install the plugin with the standard Omarchy command and enable it for your setup:

```
omarchy plugin add https://github.com/UnitVectorY-Labs/omarchy-plugin-llama-swap.git --enable
omarchy bar move io.github.unitvectory-labs.llama-swap --section right
```

Configure your server:

```
omarchy bar set io.github.unitvectory-labs.llama-swap url https://llama-swap.example.com
omarchy bar set io.github.unitvectory-labs.llama-swap apiToken YOUR_TOKEN
```

The plugin requires `curl` and a reachable Llama Swap server. It runs with user permissions and does not require sudo. Removal is done with `omarchy plugin remove io.github.unitvectory-labs.llama-swap`.

This is the first release, so there is no upgrade path from a prior version. Future updates will build on this foundation.

Transparency note: this post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/omarchy-plugin-llama-swap, release v0.1.0, date of generation 2026-08-29. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
