---
layout: post
title: "goenvecho v1.1.0 Release"
date: 2025-01-26 12:47:08 -0500
tags: [goenvecho, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

On January 26, 2025, we released goenvecho v1.1.0, a streamlined update that aligns the project with Go module best practices while maintaining full backward compatibility for container and API users.

This minimal release focuses on improving the project's long-term maintainability by updating the Go module path to include its full GitHub repository location. For the vast majority of users—those running goenvecho as a Docker container or consuming its HTTP API—this release requires no action and delivers the same reliable functionality you've come to expect.

## What's New

### Go Module Path Update
The primary change in v1.1.0 is the update to the Go module path:

```go
// Old import path (v1.0.1 and earlier)
import "goenvecho"

// New import path (v1.1.0+)
import "github.com/UnitVectorY-Labs/goenvecho"
```

This change follows Go community best practices by using the full repository path as the module identifier, making dependency management clearer and more consistent for library consumers.

### What Stayed the Same
The core functionality of goenvecho remains completely unchanged:

- **Docker containers** continue to work identically—no action required
- **HTTP API behavior** is unchanged: `GET /` still returns all environment variables as JSON
- **Configuration options** including the `PORT` environment variable work exactly as before
- **No new features or bug fixes**—this is purely a module structure update

## Why It Matters

For Go developers using goenvecho as a library dependency, this change provides:

- **Better dependency resolution**: Using the full repository path eliminates ambiguity in module resolution
- **Long-term stability**: This naming convention aligns with Go's official recommendations for module paths
- **Clearer provenance**: The import path now clearly identifies the source repository

For Docker users and API consumers, this release means nothing has changed—your deployments continue to work exactly as before.

## Upgrade Guide

### Docker Users (No Action Required)
If you're running goenvecho as a container, you don't need to do anything:

```bash
# Continue using your existing setup
docker pull ghcr.io/unitvectory-labs/goenvecho:v1.1.0
docker run -p 8080:8080 ghcr.io/unitvectory-labs/goenvecho:v1.1.0
```

### Go Module Users (Action Required)
If you import goenvecho as a Go library dependency, update your imports:

```bash
# Get the new version
go get github.com/UnitVectorY-Labs/goenvecho@v1.1.0

# Update your import statements in code
# FROM: import "goenvecho"
# TO:   import "github.com/UnitVectorY-Labs/goenvecho"
```

## Security Reminder

As always, remember that goenvecho is designed as a development and debugging tool. The application explicitly exposes all environment variables in its response—**do not run this in production environments** where sensitive credentials or secrets might be present in your environment.

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For reference, see the [UnitVectorY-Labs/goenvecho](https://github.com/UnitVectorY-Labs/goenvecho) repository and the [v1.1.0 release](https://github.com/UnitVectorY-Labs/goenvecho/releases/tag/v1.1.0) published on January 26, 2025. Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
