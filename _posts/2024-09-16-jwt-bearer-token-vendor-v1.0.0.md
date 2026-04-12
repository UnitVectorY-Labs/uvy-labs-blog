---
layout: post
title: "Introducing jwt-bearer-token-vendor: Secure, Keyless Authentication for GitHub Actions"
date: 2024-09-16 09:00:00 -0500
tags: ["jwt-bearer-token-vendor", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on September 16, 2024, `jwt-bearer-token-vendor` is a new GitHub Action that simplifies how workflows authenticate with external services. By moving away from static secrets, it enables a more secure, modern approach to identity management in CI/CD pipelines.

## Introducing Keyless Authentication

`jwt-bearer-token-vendor` allows GitHub Actions to exchange a short-lived GitHub OpenID Connect (OIDC) token for an access token from any OAuth 2.0 server supporting the `jwt-bearer` grant type (RFC 7523). Essentially, it turns GitHub's identity into a portable credential that external servers can trust.

## Why It Matters

Storing long-lived client secrets in GitHub Secrets is a common but risky practice. If a secret is leaked, it remains valid until manually rotated. `jwt-bearer-token-vendor` eliminates this risk by using "keyless" authentication. Trust is established between GitHub and the provider via OIDC; the tokens are short-lived and generated on-the-fly, drastically reducing the attack surface of your automation.

## Getting Started

To get started, ensure your workflow has `id-token: write` permissions. Then, add the action to your YAML:

```yaml
- name: Obtain Access Token
  id: get-token
  uses: UnitVectorY-Labs/jwt-bearer-token-vendor@v1
  with:
    github-audience: 'your-client-audience'
    request-token-url: 'https://issuer.example.com/token'
    request-client-id: 'your-client-id'
```

The action provides the `access-token` as a masked output, keeping your logs clean and secure.

***

This post was AI-generated.
Model: unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL
Repository: UnitVectorY-Labs/jwt-bearer-token-vendor
Release: v1.0.0
Date: 2026-04-12
Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)