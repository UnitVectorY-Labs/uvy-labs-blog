---
layout: post
title: "goenvecho v1.3.0: Pretty-Printed JSON Output Now Available"
date: 2026-01-03 18:06:29 -0500
tags: ["goenvecho", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

On January 3, 2026, goenvecho v1.3.0 was released with a focused quality-of-life improvement that many developers have been requesting: the ability to get pretty-printed JSON output when debugging environment variables.

goenvecho is a simple yet invaluable tool for containerized development and debugging. It responds to HTTP requests with a JSON payload containing all environment variables in your container, making it easy to inspect what's actually running in your Docker environment. This new release maintains that simplicity while adding a user-requested feature that improves readability during interactive debugging sessions.

## What's New

The v1.3.0 release introduces a single, well-scoped enhancement: **optional pretty-printing for JSON output** via the `PRETTY_PRINT` environment variable.

### Pretty-Printed JSON Output

When you set `PRETTY_PRINT=true`, goenvecho now returns formatted, human-readable JSON with 2-space indentation instead of compact/minified output:

**Before (default behavior):**
```json
{"PATH":"/usr/bin","PORT":"8080"}
```

**After (with PRETTY_PRINT=true):**
```json
{
  "PATH": "/usr/bin",
  "PORT": "8080"
}
```

### Why This Matters

This feature directly addresses a common debugging scenario. When you're inspecting container environments interactively, compact JSON can be hard to read and parse quickly. Pretty-printed output makes it easier to:

- Scan through many environment variables at a glance
- Copy specific values into your terminal or scripts
- Share output in documentation or team communications
- Spot missing or unexpected variables during troubleshooting

At the same time, the default behavior remains unchanged. Automation scripts and CI/CD pipelines that depend on compact JSON output will continue to work without any modifications.

## Why It Matters

This release demonstrates goenvecho's commitment to responsive maintenance and user-driven development. The `PRETTY_PRINT` feature was requested in GitHub issue #30 and delivered within the same day, showing how the project listens to its community.

The implementation is also noteworthy: this release marks the first contribution from GitHub's Copilot coding agent to goenvecho, highlighting how AI-assisted development is becoming part of modern software workflows while still maintaining quality and user value.

Beyond this specific feature, goenvecho continues to be a security-conscious tool. Previous releases introduced running as a non-root user (v1.2.0) and statically linked binaries for better portability. The project maintains its core philosophy: simple, focused, and useful for development while explicitly warning against production use where sensitive environment variables could be exposed.

## Getting Started with v1.3.0

Upgrading is straightforward—there are no breaking changes or migration steps required. Simply pull the new Docker image:

```bash
# Pull the latest version
docker pull ghcr.io/unitvectorylabs/goenvecho:v1.3.0

# Run with default compact output (backward compatible)
docker run -p 8080:8080 ghcr.io/unitvectorylabs/goenvecho:v1.3.0

# Or run with pretty-printed output for easier reading
docker run -e PRETTY_PRINT=true -p 8080:8080 ghcr.io/unitvectorylabs/goenvecho:v1.3.0
```

The application listens on port 8080 by default (configurable via the `PORT` environment variable). Visit `http://localhost:8080/` in your browser or use `curl` to see the JSON response.

### Available Configuration Options

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | The port the application listens on | `8080` |
| `PRETTY_PRINT` | When set to `true`, returns formatted JSON with 2-space indentation | `false` |

### Important Security Reminder

goenvecho is designed for development and debugging only. **Do not run this in production environments.** The entire purpose of the application is to expose all environment variables, which could include sensitive credentials, API keys, and secrets. Always use it in isolated development or testing environments.

---

This post was AI-generated using the `unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M` model on March 19, 2026. For more information about goenvecho v1.3.0, visit the [repository](https://github.com/UnitVectorY-Labs/goenvecho) or the [release page](https://github.com/UnitVectorY-Labs/goenvecho/releases/tag/v1.3.0).

Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
