---
layout: post
title: Introducing jwt-bearer-token-vendor v1.0.0 - Secure OAuth 2.0 Authentication for GitHub Actions
date: 2024-09-16 00:32:00 -0500
tags: [jwt-bearer-token-vendor, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Bridging GitHub OIDC and External APIs

We're excited to announce the launch of **jwt-bearer-token-vendor** v1.0.0, a new GitHub Action that simplifies secure authentication between GitHub Actions workflows and external OAuth 2.0 APIs. Released on September 16, 2024, this action eliminates the need to store long-lived credentials in your CI/CD pipelines by leveraging GitHub's native OIDC (OpenID Connect) support.

---

## What's New

jwt-bearer-token-vendor v1.0.0 introduces a fresh, purpose-built tool for developers working with external APIs in their GitHub Actions workflows. This initial release provides:

### Seamless Token Exchange
The action handles the complete OAuth 2.0 JWT Bearer grant flow automatically:
- Retrieves GitHub's OIDC token (a short-lived JWT assertion)
- Exchanges it for an access token from your external API
- Returns the token along with metadata (token type and expiration)

### Simple Configuration
Five intuitive inputs make setup straightforward:
- **`github-audience`**: The intended audience for GitHub's OIDC token
- **`request-token-url`**: Your external API's token endpoint URL
- **`request-client-id`**: Your client identifier
- **`request-audience`** (optional): Audience parameter for the token request
- **`request-scope`** (optional): Scope for the requested token

### Built-In Security
Security comes baked in:
- Access tokens are automatically marked as secrets to prevent accidental logging
- Short-lived GitHub OIDC tokens replace the need for stored credentials
- No long-lived API keys required in workflow files or repository secrets

---

## Why It Matters

### Eliminate Credential Management Overhead

Traditionally, accessing external APIs from GitHub Actions required storing API keys or client secrets as repository secrets. This approach introduces ongoing maintenance burden and potential security risks if credentials are compromised.

jwt-bearer-token-vendor changes the game by using **OIDC federation**. Your workflow proves its identity through GitHub's OIDC token—a short-lived, cryptographically signed assertion that GitHub provides automatically. The external API validates this assertion and issues an access token on demand.

### Enable Modern Zero-Trust Workflows

This action aligns with modern security best practices:
- **No secret rotation**: Since you're not storing long-lived credentials, there's nothing to rotate
- **Principle of least privilege**: Configure your external API to only trust specific GitHub audiences
- **Audit trail**: GitHub OIDC tokens include context about the workflow run, enabling better auditing

### Works With Any JWT Bearer-Compatible API

The action implements the standard OAuth 2.0 JWT Bearer grant type (RFC 7523), making it compatible with any external API server that supports this specification. Whether you're integrating with identity providers, microservices, or custom APIs, if they support JWT Bearer assertions, this action works for you.

---

## Getting Started

### Basic Usage

Add the action to your workflow file:

```yaml
- name: Obtain Access Token
  id: get-token
  uses: UnitVectorY-Labs/jwt-bearer-token-vendor@v1.0.0
  with:
    github-audience: 'your-client-audience'
    request-token-url: 'https://issuer.example.com/token'
    request-client-id: 'your-client-id'
```

### Using the Token

The action outputs the access token along with metadata for subsequent steps:

```yaml
- name: Use Access Token
  run: |
    curl -H "Authorization: Bearer ${{ steps.get-token.outputs.access-token }}" \
      https://api.example.com/protected-resource
```

### Installation Requirements

No special setup required beyond:
1. A GitHub-hosted runner (Ubuntu, Windows, or macOS)
2. An external OAuth 2.0 server configured to accept JWT Bearer assertions from GitHub's OIDC issuer
3. Workflow permissions enabled (default on most runners)

---

## Transparency Note

This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The post was generated on March 19, 2026, based on research from the UnitVectorY-Labs/jwt-bearer-token-vendor repository (v1.0.0 release). For more information about this tooling, see [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
