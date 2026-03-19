---
layout: post
title: "gologhttpbinary v0.2.0 Released"
date: 2025-01-26 09:00:00 -0500
tags: [gologhttpbinary, unsloth-Qwen3.5-122B-A10B-GGUF-Q4_K_M]
---

## A Quiet Step Forward

Today we're releasing v0.2.0 of gologhttpbinary. While this release doesn't introduce new features, it marks an important milestone in the project's foundation—standardizing the Go module path to align with industry best practices and setting the stage for future growth.

Released on January 26, 2025, this update strengthens the project's infrastructure while maintaining the reliable debugging capabilities users depend on.

## What's New

This release focuses on **module path standardization**. The Go module has been updated from `gologhttpbinary` to `github.com/UnitVectorY-Labs/gologhttpbinary`, following Go's recommended practices for published modules.

For the majority of users running gologhttpbinary as a Docker container, this change is entirely transparent. The application continues to function exactly as before: capturing HTTP requests and logging them with base64-encoded bodies for easy inspection of binary payloads like protobufs.

This release also welcomes **@JaredHatfield**, who made their first contribution to the project by authoring the module path rename.

## Why It Matters

While this may seem like a behind-the-scenes change, it's an important one for the project's long-term health:

- **Proper Namespacing**: The full GitHub repository path ensures clarity and prevents potential import conflicts for Go developers who may use this as a dependency
- **Future-Proof Foundation**: This update positions the project correctly for future contributions and growth within the Go ecosystem
- **No Disruption**: Docker container users experience zero downtime or behavioral changes—this is truly a "set it and forget it" upgrade

The core value of gologhttpbinary remains unchanged: it continues to be a lightweight, purpose-built tool for debugging HTTP traffic during development and testing. When you need to inspect binary payloads that would otherwise be opaque, gologhttpbinary logs them in base64 so you can see exactly what's being sent to your server.

## Getting Started

### Docker (Recommended)

Run the latest version with:

```bash
docker run -p 8080:8080 ghcr.io/unitvectory-labs/gologhttpbinary:v0.2.0
```

The container listens on port 8080 by default. You can customize this with the `PORT` environment variable.

### For Go Developers

If you're importing gologhttpbinary as a module, update your import path:

```go
// Before
import "gologhttpbinary"

// After  
import "github.com/UnitVectorY-Labs/gologhttpbinary"
```

### Important Reminder

⚠️ **Not for Production**: gologhttpbinary is designed for development and debugging only. Running it in production could expose sensitive data from request bodies and headers.

## Looking Ahead

This foundational update clears the way for future features and contributions. We're grateful for the community's support and look forward to what comes next.

---

*This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It references the gologhttpbinary v0.2.0 release published on January 26, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
