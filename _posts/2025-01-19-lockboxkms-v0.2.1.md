---
layout: post
title: "LockboxKMS v0.2.1 Released: Security Hardening and Dependency Updates"
date: 2025-01-19 09:00:00 -0500
tags: [lockboxkms, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

LockboxKMS v0.2.1 is now available! Released on January 19, 2025, this update brings important security improvements and keeps your encryption service running on the latest patched dependencies.

## What's New

### Improved HTTP Error Handling

The application now properly returns 404 errors for undefined URL paths instead of showing the main page. This change enhances both usability and security:

- **Better user experience:** Users who mistype URLs will see a clear "Not Found" response
- **Reduced attack surface:** Security scanners probing for exposed paths receive accurate HTTP status codes
- **Cleaner logs:** Distinguish between valid requests and undefined endpoints more easily

### Dependency Updates

This release updates several critical dependencies to their latest patched versions:

- **Go runtime:** Updated to 1.23.5 with security patches
- **Google Cloud KMS client:** v1.20.5 with improvements to the encryption API
- **Cryptographic libraries:** `golang.org/x/crypto` updated to v0.32.0
- **Network and OAuth2 libraries:** Security patches applied

These updates ensure your LockboxKMS deployment benefits from upstream security fixes and stability improvements.

### Enhanced CI/CD Pipeline

A new automated build and test workflow has been added, featuring:

- Automated verification on every push and pull request
- Code coverage reporting via Codecov
- Race detector enabled for thread-safety validation
- Faster builds through Go module caching

This infrastructure improvement helps maintain the reliability and quality of future releases.

## Why It Matters

Security is foundational to LockboxKMS's purpose. While this release doesn't introduce new features, it demonstrates our commitment to maintaining a secure, well-maintained encryption service:

- **Proactive maintenance:** Regular dependency updates reduce exposure to known vulnerabilities
- **Defense in depth:** Proper HTTP handling adds another layer of protection against reconnaissance
- **Quality assurance:** Enhanced CI/CD catches issues before they reach production

Remember, LockboxKMS is designed as a one-way encryption tool. It provides encryption through Google Cloud KMS but intentionally omits decryption capabilities—a security-first design that keeps sensitive data operations separate.

## Upgrade Instructions

### Docker Users

Pull the latest image:

```bash
docker pull ghcr.io/unitvectory-labs/lockboxkms:v0.2.1
```

### Configuration Compatibility

No configuration changes are required. All environment variables remain the same:

- `GCP_PROJECT` (required)
- `KMS_LOCATION` (default: us)
- `KMS_KEY_RING` (default: lockboxkms)
- `GOOGLE_APPLICATION_CREDENTIALS` (optional)
- `PORT` (default: 8080)

### Service Account Permissions

No changes to IAM permissions. Your service account still needs:

- `roles/cloudkms.cryptoKeyEncrypter`
- `roles/cloudkms.viewer`

---

This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Reference: [UnitVectorY-Labs/lockboxkms](https://github.com/UnitVectorY-Labs/lockboxkms), Release v0.2.1, Published January 19, 2025. By [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
