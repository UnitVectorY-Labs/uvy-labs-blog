---
layout: post
title: "Introducing gologhttpjson: A Simple JSON Request Logger for Local Development"
date: 2025-08-31 09:00:00 -0500
tags: ["gologhttpjson", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

We are excited to announce the launch of **gologhttpjson**, released on August 31, 2025. This lightweight HTTP server is designed to simplify the way developers debug and test incoming webhooks and API requests by providing a dead-simple way to capture and inspect JSON payloads in real-time.

### What is gologhttpjson?

For developers working with third-party APIs or webhooks, seeing exactly what your server receives is critical. `gologhttpjson` eliminates the need to write boilerplate logging code or set up complex request bins. It is a specialized tool that listens for HTTP POST requests and streams their JSON bodies, paths, and metadata directly to your console.

Key capabilities include:
- **Instant JSON Logging**: Automatically captures and prints the JSON payload of any incoming POST request.
- **Contextual Insights**: Logs the request path and provides an opt-in mechanism to log full HTTP headers for deeper inspection.
- **Custom Metadata**: Using `METADATA_` environment variables, you can inject custom context into your logs, making it easier to distinguish between different test environments or sessions.
- **Zero-Config Deployment**: Fully Dockerized for instant startup on any machine.

### Why it Matters

Debugging asynchronous callbacks or webhook integrations often feels like a "black box" experience. By deploying `gologhttpjson` as a temporary endpoint, you can verify payload structures, validate header requirements, and troubleshoot integration issues without modifying your actual application code. It transforms the "send and pray" workflow into a transparent, observable process.

### Getting Started

The easiest way to get `gologhttpjson` up and running is via Docker. You can start capturing requests with a single command:

```bash
docker run -p 8080:8080 ghcr.io/unitvectory-labs/gologhttpjson:latest
```

You can customize the server using environment variables:
- Use `PORT` to change the listening port.
- Set `LOG_HEADERS` to enable header logging.
- Add any `METADATA_` variables to include extra information in your logs.

We believe `gologhttpjson` will be a valuable addition to any developer's local toolkit, reducing the friction of API development.

***

*This post was AI-generated on 2026-04-11. The model used was unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Reference: [UnitVectorY-Labs/gologhttpjson](https://github.com/UnitVectorY-Labs/gologhttpjson), [Release v0.1.0](https://github.com/UnitVectorY-Labs/gologhttpjson/releases/tag/v0.1.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*