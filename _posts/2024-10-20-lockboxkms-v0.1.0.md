---
layout: post
title: "Announcing LockboxKMS v0.1.0: Secure Encryption Made Simple"
date: 2024-10-20 09:00:00 -0500
tags: [lockboxkms, unsloth-Qwen3.5-122B-A10B-GGUF-Q4_K_M]
---

We're thrilled to announce the launch of **LockboxKMS v0.1.0**, the initial release of a simple yet powerful web application that brings Google Cloud KMS encryption within easy reach of any development team.

Released on October 20, 2024, LockboxKMS fills a practical gap in cloud security workflows: a clean, accessible interface for encrypting data without the complexity of building custom KMS integrations. Whether you're protecting sensitive configuration values, securing user data before storage, or implementing encryption-at-rest patterns, LockboxKMS handles the heavy lifting so you can focus on your application's core functionality.

## What's New

### A Complete Web Interface for GCP KMS Encryption

LockboxKMS v0.1.0 launches with a fully-featured web interface that makes encryption straightforward:

- **Key Selection Made Easy**: Automatically discovers and lists all available encryption keys from your configured GCP key ring, displayed by friendly short names for quick selection
- **Simple Text Encryption**: Paste your plaintext into the provided text area (supports up to 64 KiB as per GCP KMS limits) and get base64-encoded encrypted output instantly
- **Copy-Ready Output**: One-click copy-to-clipboard functionality so you can immediately use the encrypted data in your workflows

### Production-Ready Deployment

From day one, LockboxKMS is built for real-world deployment:

- **Docker Support**: Multi-stage builds with a minimal distroless runtime image
- **Container Registry Integration**: Automated publishing to GitHub Container Registry on release
- **Flexible Configuration**: Environment-based configuration supports diverse deployment scenarios

### Built with Modern Tools

The application leverages a carefully chosen technology stack:

- Go 1.23.2 for a fast, reliable backend
- HTMX 2.0.3 for dynamic, responsive frontend interactions without heavy JavaScript frameworks
- Official Google Cloud KMS client libraries for trusted encryption operations

## Why It Matters

### Security Without Compromise

LockboxKMS embraces security best practices through deliberate design choices:

**Encryption-Only Focus**: The application intentionally provides encryption without decryption capabilities. This separation of concerns ensures that encryption workflows remain distinct from decryption processes, reducing the attack surface and encouraging secure architectural patterns in your applications.

**Minimal Permissions Required**: LockboxKMS operates with least-privilege access, requiring only two IAM roles at the key ring level:
- `roles/cloudkms.cryptoKeyEncrypter` - for performing encryption
- `roles/cloudkms.viewer` - for listing available keys

**No Secrets in Code**: All configuration flows through environment variables. There are no hardcoded credentials or API keys in the application itself.

### Developer Experience First

We built LockboxKMS because we needed it ourselves. The barriers to using GCP KMS effectively are often not technical—they're about convenience and workflow integration. LockboxKMS removes those barriers:

- **No Coding Required**: Teams can encrypt data immediately without writing Go, Python, or any other language to call the KMS API
- **Configuration Scales From Simple to Complex**: A basic deployment needs just two environment variables (`GCP_PROJECT` and `KMS_KEY_RING`). Advanced users can customize location, credentials path, and port settings
- **Clean Error Messaging**: Validation errors for invalid key names, oversized input, and missing configuration are presented clearly

### Ready for Your Infrastructure

The v0.1.0 release includes everything you need to deploy:

- Official Docker images tagged with semantic versions
- Comprehensive documentation covering setup, permissions, and troubleshooting
- CodeQL security scanning in the CI pipeline
- Automated dependency updates via Dependabot

## Getting Started

### Pull the Container

```bash
docker pull ghcr.io/unitvectory-labs/lockboxkms:v0.1.0
```

### Set Your Environment

At minimum, you'll need:

```bash
export GCP_PROJECT=your-gcp-project-id
export KMS_KEY_RING=your-keyring-name
```

Optional configuration includes `KMS_LOCATION` (defaults to `us`), `GOOGLE_APPLICATION_CREDENTIALS` for service account authentication, and `PORT` (defaults to `8080`).

### Configure GCP Permissions

Ensure your application's service account has these roles on the key ring:
- Cloud KMS CryptoKey Encrypter
- Cloud KMS Viewer

If you haven't created a key ring yet, do that first in the GCP Console or via `gcloud kms keyrings create`.

### Run It

```bash
docker run -p 8080:8080 \
  -e GCP_PROJECT=your-project-id \
  -e KMS_KEY_RING=your-keyring-name \
  ghcr.io/unitvectory-labs/lockboxkms:v0.1.0
```

Then navigate to `http://localhost:8080` in your browser.

## A Note on Deployment Security

LockboxKMS does not implement built-in authentication by design—it's meant to sit behind your existing identity infrastructure. We recommend deploying it behind a reverse proxy with authentication, such as Google Cloud Identity-Aware Proxy (IAP) or your organization's preferred solution. This keeps the application focused on its single responsibility while leveraging your existing security posture.

## Looking Ahead

This is version 0.1.0—the first release of LockboxKMS. We're excited to see how teams use it to simplify their encryption workflows, and we're already thinking about what comes next based on real-world usage patterns.

Check out the full project on GitHub at [github.com/UnitVectorY-Labs/lockboxkms](https://github.com/UnitVectorY-Labs/lockboxkms), where you'll find the complete README, source code, and release notes. If you run into issues or have ideas for improvements, open an issue and join the conversation.

---

*This release announcement was generated with AI assistance using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. For transparency, this post documents the v0.1.0 release published on October 20, 2024. Learn more about the tool that created this announcement at [github.com/UnitVectorY-Labs/release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
