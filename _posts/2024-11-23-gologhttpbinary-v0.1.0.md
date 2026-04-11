---
layout: post
title: "Introducing gologhttpbinary: Effortless Binary Payload Logging"
date: 2024-11-23 09:00:00 -0500
tags: ["gologhttpbinary", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on November 23, 2024, we are excited to announce the launch of **gologhttpbinary**. This lightweight utility solves a common headache for developers working with binary protocols: the struggle to reliably log and debug binary payloads, such as Protocol Buffers, without them being corrupted or truncated by text-based logging systems.

### What is gologhttpbinary?

`gologhttpbinary` is a specialized HTTP server designed for debugging. Instead of attempting to print binary data directly to the console—which often leads to messy logs and lost information—it captures every incoming request and automatically encodes the request body into a base64 string. 

The server then outputs the entire request—including the path, headers, and the encoded body—as a single, structured JSON object. This ensures that your logs remain clean, searchable, and, most importantly, that your binary data remains perfectly preserved.

### Why it matters

When debugging binary APIs, you need a tool that doesn't get in the way. `gologhttpbinary` provides:

- **Data Integrity**: By using base64 encoding, you can be certain that the binary payload you see in your logs is exactly what was sent.
- **Structured Debugging**: JSON output makes it easy to pipe logs into other tools or search for specific request patterns.
- **Zero Dependencies**: Built with Go 1.23 using only the standard library, it is incredibly lightweight and has a minimal security footprint.
- **Rapid Deployment**: With native Docker support, you can spin up a logging endpoint in seconds.

### Getting Started

`gologhttpbinary` is designed to be run as a Docker container, making it easy to drop into your development or staging environment.

To get started, simply run:

```bash
docker run -p 8080:8080 ghcr.io/unitvectory-labs/gologhttpbinary:v0.1.0
```

If you need to change the listening port, you can use the `PORT` environment variable:

```bash
docker run -p 9000:9000 -e PORT=9000 ghcr.io/unitvectory-labs/gologhttpbinary:v0.1.0
```

**Important Security Note:** Because `gologhttpbinary` logs all headers and bodies in plain text (base64), it may expose sensitive information. It is intended strictly for debugging and development purposes and **should not be used in production environments**.

---

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Generated on April 11, 2026, based on the [gologhttpbinary](https://github.com/UnitVectorY-Labs/gologhttpbinary) repository and the [v0.1.0](https://github.com/UnitVectorY-Labs/gologhttpbinary/releases/tag/v0.1.0) release. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*