---
layout: post
title: "authzjwtbearerinjector v0.1.1 Release: Improved Token Management and Documentation"
date: 2024-10-11 09:00:00 -0500
tags: ["authzjwtbearerinjector", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introduction

We're excited to announce the release of **authzjwtbearerinjector v0.1.1**, available now on [GitHub](https://github.com/UnitVectorY-Labs/authzjwtbearerinjector/releases/tag/v0.1.1). Released on October 11, 2024, this maintenance release delivers a critical fix to the token caching system and significant documentation improvements that make deployment and configuration more straightforward than ever.

For teams running Envoy Proxy with external authorization needs, authzjwtbearerinjector serves as a gRPC-based ExtAuthz sidecar that handles JWT-bearer flow authentication (RFC 7523). This release ensures that your token management works exactly as intended while providing clearer guidance on how to deploy and configure the service.

## What's New

### Critical Bug Fix: Token Soft Expiration Now Works Correctly

The headline fix in v0.1.1 addresses an issue from the initial v0.1.0 release where the `SoftTokenLifetime` configuration parameter wasn't being initialized with a default value. This meant that token caching's soft expiration feature—a key component for efficient token refresh—wasn't functioning properly.

**What this means for you:**
- Tokens now automatically refresh at 50% of their validity period by default
- For a typical 1-hour access token, the system will proactively refresh it after 30 minutes when a request is made
- This prevents sudden authentication failures while avoiding unnecessary refresh overhead
- The fix is backward compatible—no configuration changes required

If you need to customize this behavior, you can still override the default using the `SOFT_TOKEN_LIFETIME` environment variable or the `soft_token_lifetime` configuration parameter. Valid values range from 0.0 to 1.0, representing the percentage of token lifetime before refresh should occur.

### Enhanced Documentation

We've significantly improved the project documentation based on early user feedback:

- **Docker deployment instructions** now appear prominently in a new Usage section
- **Configuration reference** provides clear guidance on optional parameters like token soft lifetime and custom config file paths
- **External links** to Envoy Proxy's ExtAuthz documentation and the RFC 7523 JWT-bearer flow specification help contextualize the project
- **Typo and formatting fixes** throughout for a more professional presentation

## Why It Matters

This release may be small in scope, but it addresses two fundamental aspects of running production software: reliability and usability.

The token soft expiration fix ensures that your authentication layer behaves predictably. Token caching with smart refresh timing is essential for maintaining seamless service-to-service communication without introducing latency spikes from last-second token renewals or risking authentication failures from expired tokens.

The documentation improvements reflect our commitment to making authzjwtbearerinjector accessible to teams adopting it for the first time. Clear deployment instructions and a comprehensive configuration reference reduce the friction of integrating an additional sidecar into your Envoy Proxy setup.

## Getting Started and Upgrading

### For New Users

The Docker image is available at `ghcr.io/unitvectory-labs/authzjwtbearerinjector`. To get started:

```bash
docker pull ghcr.io/unitvectory-labs/authzjwtbearerinjector:v0.1.1
```

You'll need to provide:
- A private key (PEM format) for signing JWT assertions via the `PRIVATE_KEY` environment variable
- Your OAuth 2.0 server URL via `OAUTH2_TOKEN_URL`
- The response field name containing the Bearer token via `OAUTH2_RESPONSE_FIELD`

Check the [full documentation](https://github.com/UnitVectorY-Labs/authzjwtbearerinjector) for detailed configuration options and example deployments.

### For Users Upgrading from v0.1.0

Upgrading is straightforward:

```bash
docker pull ghcr.io/unitvectory-labs/authzjwtbearerinjector:v0.1.1
# Restart your container with the new image
```

There are **no breaking changes** in this release. If you were already configuring `soft_token_lifetime` explicitly, no action is needed. If you weren't, you'll immediately benefit from the sensible 50% default for token refresh timing.

---

*This release announcement was generated using AI (model: unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M). For questions or issues, please visit the [authzjwtbearerinjector repository](https://github.com/UnitVectorY-Labs/authzjwtbearerinjector) or check the [v0.1.1 release page](https://github.com/UnitVectorY-Labs/authzjwtbearerinjector/releases/tag/v0.1.1). Generated on March 17, 2026 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
