---
layout: post
title: "hellorest v1.1.0 Release: Module Namespace Update"
date: 2025-01-26 00:00:00 -0500
tags: [hellorest, qwen35-122b-a10b]
---

## Introduction

On January 26, 2025, we released hellorest v1.1.0, a focused maintenance update that aligns the project with Go module best practices. While the change is minimal—just one line in the module configuration—it establishes the proper foundation for future development and ensures seamless integration with Go's ecosystem.

## What's New

### Module Path Renamed

The v1.1.0 release renames the Go module path from `hellorest` to `github.com/UnitVectorY-Labs/hellorest`. This single-line change in `go.mod` brings the project in line with its GitHub repository location, following established conventions for Go modules.

### What Changed
- **go.mod**: Module path updated to reflect the full GitHub repository URL

### What Stayed the Same
- All HTTP API endpoints function identically
- Docker container behavior remains unchanged
- Response format (`{"hello": "world"}`) is unchanged
- No breaking changes for primary users of the Docker image

## Why It Matters

This update may seem small, but it's an important step toward long-term maintainability:

**For Go Library Consumers:** If your project imports hellorest as a Go library, you'll need to update your import path from `hellorest` to `github.com/UnitVectorY-Labs/hellorest`. This change enables proper semantic versioning and Go proxy support for future releases.

**For Docker Users:** No action needed. The container continues to work exactly as before—pull the new tag when convenient, and you'll get the same reliable testing placeholder you expect.

**For the Project:** Proper module naming is essential for a healthy open-source project. This update positions hellorest for future growth while maintaining its core purpose as a dependable testing utility for deployment validation, CI/CD pipelines, and microservice environments.

## Getting Started

### Using Docker (Recommended)

```bash
docker pull ghcr.io/unitvectory-labs/hellorest:v1.1.0
docker run -p 8080:8080 ghcr.io/unitvectory-labs/hellorest:v1.1.0
```

### Building from Source

```bash
git clone https://github.com/UnitVectorY-Labs/hellorest.git
cd hellorest
git checkout v1.1.0
go build -o server .
./server
```

### For Go Library Importers

Update your import statements:

```go
// Before (v1.0.1 and earlier)
import "hellorest"

// After (v1.1.0+)
import "github.com/UnitVectorY-Labs/hellorest"
```

## Acknowledgments

This release marks the first contribution from [Jared Hatfield](https://github.com/JaredHatfield), who joined as a contributor and helped ensure hellorest follows Go best practices. Welcome to the team!

---

*Transparency note: This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Release: v1.1.0, Published: January 26, 2025. Repository: [UnitVectorY-Labs/hellorest](https://github.com/UnitVectorY-Labs/hellorest/releases/tag/v1.1.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
