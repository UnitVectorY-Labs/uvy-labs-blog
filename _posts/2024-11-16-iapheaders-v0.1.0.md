---
layout: post
title: Introducing iapheaders v0.1.0 - A Tool for Debugging GCP IAP Headers
date: 2024-11-16 23:02:25 -0500
tags: [iapheaders, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

**Released:** November 16, 2024

We're excited to announce the launch of **iapheaders**, a new open-source tool designed to help developers inspect, debug, and understand GCP (Google Cloud Platform) Identity-Aware Proxy (IAP) authentication headers. The initial v0.1.0 release is now available on GitHub.

## What's New

This inaugural release brings a fully functional web application that makes working with IAP headers straightforward and visual:

- **Real-time IAP Header Inspection** — View the three critical IAP headers (`x-goog-authenticated-user-email`, `x-goog-authenticated-user-id`, and `x-goog-iap-jwt-assertion`) as they arrive at your application
- **JWT Token Decoding** — Automatically decode and pretty-print JWT assertion tokens for easy examination
- **Signature Validation** — Validate JWT signatures against Google's public keys to verify token authenticity
- **Visual Status Indicators** — Get immediate feedback with color-coded emoji indicators (🟢/🟡/🔴) showing the state of each header
- **Security Controls** — Use the `HIDE_SIGNATURE` environment variable to mask JWT signatures in your display, protecting sensitive information during debugging sessions
- **Docker Deployment** — Launch instantly via the pre-built Docker container available at `ghcr.io/unitvectory-labs/iapheaders`

## Why It Matters

Working with GCP Identity-Aware Proxy can be complex. IAP adds an extra layer of security to your applications by handling authentication before requests reach your code, but this also means developers often struggle to understand what information is being passed and how to verify it.

**iapheaders fills that gap.** It provides a simple way to:

- Debug authentication issues in development and staging environments
- Understand the structure and contents of IAP headers
- Verify that JWT tokens are properly signed and valid
- Test your application's behavior with and without IAP headers

Instead of manually parsing headers or writing custom code to decode JWTs, you now have a dedicated tool that does the heavy lifting for you. The visual interface makes it immediately clear whether your IAP setup is working correctly.

## Getting Started

Since this is the first release of iapheaders, there are no upgrade considerations — you're getting in at the ground floor!

To get started with **iapheaders**:

1. **Deploy via Docker:**
   ```bash
   docker pull ghcr.io/unitvectory-labs/iapheaders
   docker run -p 8080:8080 ghcr.io/unitvectory-labs/iapheaders
   ```

2. **Configure (optional):** Set environment variables like `HIDE_SIGNATURE=true` to mask signatures or `PORT=9000` to change the listening port.

3. **Access the Interface:** Open your browser and navigate to `http://localhost:8080` (or your configured port) to start inspecting headers.

Head over to the [GitHub repository](https://github.com/UnitVectorY-Labs/iapheaders) for full documentation, source code, and release details.

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The post was generated on March 18, 2026, based on the official v0.1.0 release of [iapheaders](https://github.com/UnitVectorY-Labs/iapheaders/releases/tag/v0.1.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
