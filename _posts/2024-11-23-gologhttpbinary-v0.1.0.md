---
layout: post
title: "Introducing gologhttpbinary: Debug Binary HTTP Payloads with Confidence"
date: 2024-11-23 20:44:15 -0500
tags: ["gologhttpbinary", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## A New Tool for HTTP Binary Debugging

Today we're excited to announce the initial release of **gologhttpbinary**, a lightweight HTTP server designed specifically for developers who need to debug and inspect binary HTTP payloads. Released on November 23, 2024, this tool solves a common pain point in API development: properly capturing and logging binary request bodies like protobufs that traditional tools often mishandle.

## What's New

As the first public release of gologhttpbinary, version 0.1.0 introduces a purpose-built debugging solution with the following capabilities:

- **Binary Payload Preservation**: Request bodies are captured and logged as base64-encoded strings, ensuring binary data like protobufs remains intact and inspectable
- **Complete Request Inspection**: Logs the full HTTP request including the URL path, all headers, and the complete body
- **Structured JSON Output**: Each request generates a structured JSON log entry, making it easy to integrate with modern logging pipelines and analysis tools
- **Docker-Native Deployment**: Runs effortlessly in any container environment with a simple `docker run` command
- **Zero External Dependencies**: Built entirely with Go's standard library for maximum reliability and minimal attack surface

## Why It Matters

Binary HTTP payloads present a unique challenge for developers. When debugging API integrations or inspecting protobuf requests, text-based logging tools either corrupt the data or fail to capture it entirely. gologhttpbinary was created specifically to fill this gap.

The tool captures every request that hits the server and outputs structured logs showing exactly what came in—path, headers, and the complete body base64-encoded for safe preservation. This means you can finally see the full picture when debugging binary protocols without needing specialized equipment or complex setups.

This is particularly valuable for:
- Debugging gRPC and protobuf-based APIs
- Testing custom binary serialization formats
- Inspecting request payloads in development environments
- Validating that clients are sending data correctly

**Important**: This tool is designed exclusively for development and testing. The documentation explicitly warns against production use, as logging raw request bodies could expose sensitive information.

## Getting Started

gologhttpbinary is distributed as a Docker container and takes seconds to deploy:

```bash
# Pull and run with default port (8080)
docker pull ghcr.io/unitvector-y-labs/gologhttpbinary:latest
docker run -p 8080:8080 ghcr.io/unitvector-y-labs/gologhttpbinary:latest

# Or use a custom port
docker run -p 9090:9090 -e PORT=9090 ghcr.io/unitvector-y-labs/gologhttpbinary:latest
```

Once running, any HTTP request sent to the server will generate a JSON log entry like this:

```json
{
  "bodyBase64": "QklOQVJZIFJFUVVFU1QgR09FUyBIRVJF",
  "headers": {
    "Accept": "*/*",
    "Content-Type": "application/proto"
  },
  "path": "/api/v1/data"
}
```

The project is open source under the MIT License, and you can explore the code, report issues, or contribute on [GitHub](https://github.com/UnitVectorY-Labs/gologhttpbinary).

---

*Transparency note: This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It references release v0.1.0 of [gologhttpbinary](https://github.com/UnitVectorY-Labs/gologhttpbinary/releases/tag/v0.1.0), released on November 23, 2024. Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
