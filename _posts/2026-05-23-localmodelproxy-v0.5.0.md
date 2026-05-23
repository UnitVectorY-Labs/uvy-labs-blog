---
layout: post
title: "LocalModelProxy v0.5.0: Enhanced Control and Streamlined Debugging"
date: 2026-05-23 09:00:00 -0500
tags: ["localmodelproxy", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on May 23, 2026, localmodelproxy v0.5.0 focuses on giving users more granular control over their backend connections and providing powerful new tools for debugging request traffic, all while simplifying the way you launch the proxy.

## What's new

### Granular TLS Control
You can now disable TLS certificate verification for specific backends using `insecure_skip_verify: true` in your configuration. This is a game-changer for those working with self-signed certificates in local development environments.

### Powerful Payload Logging
We've replaced the simple `--verbose` flag with a robust `--log PATH` option. This allows you to capture complete request and response payloads—including streaming chunks—into a timestamped, formatted JSON file. Best of all, this logging happens in the background, so it doesn't clutter your TUI.

### A Leaner CLI
To reduce redundancy, we've moved server settings like host and port entirely into the configuration file. The `--ui` flag is also gone; the proxy now automatically detects if it's running in an interactive terminal to launch the TUI.

### Snappier Shutdowns
We've trimmed the server shutdown timeout from 5 seconds down to 500ms, making the proxy feel more responsive.

## Why it matters

Whether you are a developer debugging a complex model chain or an operator managing multiple local backends, v0.5.0 removes the friction from your workflow. The ability to selectively ignore TLS errors means less time fighting certificates and more time testing models. Meanwhile, the new structured logging provides the transparency needed to diagnose issues without sacrificing the real-time visibility of the TUI.

## Upgrade and Installation

Upgrading to v0.5.0 requires a quick update to your startup scripts. Since `--host`, `--port`, `--ui`, and `--verbose` have been removed, please move these settings to your YAML config file or use the new `--log` flag for debugging. 

Check out the latest release on GitHub to get started.

---

*This post was AI-generated using unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL.*
*Repository: UnitVectorY-Labs/localmodelproxy*
*Release: v0.5.0*
*Generated on: May 23, 2026*
*Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
