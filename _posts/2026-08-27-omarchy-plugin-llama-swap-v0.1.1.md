---
layout: post
title: "omarchy-plugin-llama-swap v0.1.1 – Security Remediation Release"
date: 2026-08-27 08:40:00 -0500
tags: ["omarchy-plugin-llama-swap", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-08-27, omarchy-plugin-llama-swap v0.1.1 was released as a security remediation update for the Omarchy Quattro bar plugin that monitors and controls a Llama Swap server. The release tightens how authentication tokens are handled and how remote data enters the shell, making day-to-day use safer without changing the plugin’s visible behavior or configuration.

This is a drop-in upgrade from v0.1.0. Existing `url` and `apiToken` settings continue to work, and no migration steps are required.

## What's new

**Tokens stay out of process arguments.** Authentication is now delivered to the request helper over stdin instead of being embedded in command-line arguments. The helper reads the token from stdin and passes it to curl via a header, so a manual `ps` listing no longer exposes the API token.

**Bounded ingestion from Llama Swap.** Snapshot and action responses and the Server-Sent Events stream are now capped before data reaches Quickshell. The new request helper enforces byte limits for responses and events, limits the number of event records processed, and caps line lengths. In the UI, model and request state are capped and validated, with id, name and other fields limited to sensible maximums.

**Plain-text rendering.** Server-controlled strings for model names and request details are rendered as plain text in the bar widget, preventing accidental rich-text interpretation of data returned by the server.

**Documentation and test coverage.** The README now documents trust boundaries, the coreutils dependency, and the fact that tokens are passed over stdin. A new regression test suite for the request helper verifies header delivery, byte caps, token absence from the process tree, and event stream limits.

## Why it matters

For users running the plugin against a local Llama Swap instance, the previous approach of passing the API token on the command line meant the secret was visible to anyone who could inspect running processes. v0.1.1 removes that exposure while keeping the workflow identical.

Bounding remote ingestion also protects the shell from unexpected server responses. Large model snapshots or noisy event streams can no longer exhaust Quickshell resources or cause the bar to become unresponsive. The caps are designed to be generous for normal use while providing defense in depth against malformed payloads.

Rendering strings as plain text is a small UI hardening change that reduces the risk of unexpected formatting coming from the server reaching the display layer.

## Upgrade

Upgrade is standard for Omarchy plugins:

```sh
omarchy plugin add https://github.com/UnitVectorY-Labs/omarchy-plugin-llama-swap.git --enable
```

Or, if you already have the plugin checked out, rescan plugins:

```sh
omarchy-shell shell rescanPlugins
omarchy plugin enable io.github.unitvectory-labs.llama-swap
```

No new settings were introduced. The plugin still stores the API token as plain text in `~/.config/omarchy/shell.json` by design; use a suitably scoped token for your instance.

*Transparency note: this post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. It references the repository UnitVectorY-Labs/omarchy-plugin-llama-swap, release v0.1.1 published 2026-08-27, and was generated on 2026-08-29. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
