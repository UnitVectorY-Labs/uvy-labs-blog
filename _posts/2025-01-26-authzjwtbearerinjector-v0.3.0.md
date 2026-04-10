---
layout: post
title: "Aligning with the Community: authzjwtbearerinjector v0.3.0"
date: 2025-01-26 09:00:00 -0500
tags: ["authzjwtbearerinjector", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on January 26, 2025, authzjwtbearerinjector v0.3.0 is a focused maintenance release. While it doesn't introduce new functional features, it brings the project into better alignment with modern Go standards and its home on GitHub.

## What's new

The primary update in this release is the official renaming of the Go module path. The module has been moved from `authzjwtbearerinjector` to `github.com/UnitVectorY-Labs/authzjwtbearerinjector`. This change propagates through all internal import paths across the project.

## Why it matters

For a growing open-source project, alignment between the source code's module definition and its hosting location is critical. By adopting the full GitHub repository path as the module name, we ensure that the project follows standard Go ecosystem conventions. This makes the project easier to discover, import, and maintain as it continues to evolve within the UnitVectorY-Labs organization.

## Upgrade and Installation

For the vast majority of our users who deploy authzjwtbearerinjector as a Docker container sidecar to Envoy Proxy, this release is transparent and requires no changes to your operational configuration.

However, if you are utilizing authzjwtbearerinjector as a Go library in your own projects, please be aware that this is a breaking change. You will need to update your import statements to reference the new path: `github.com/UnitVectorY-Labs/authzjwtbearerinjector`.

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It is based on the v0.3.0 release of the [authzjwtbearerinjector](https://github.com/UnitVectorY-Labs/authzjwtbearerinjector) repository on 2025-04-10. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*