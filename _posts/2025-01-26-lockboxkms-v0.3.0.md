---
layout: post
title: LockboxKMS v0.3.0 Release
date: 2025-01-26 13:44:42 -0500
tags: ["lockboxkms", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

LockboxKMS v0.3.0 was released on January 26, 2025. This maintenance release focuses on code hygiene and module path standardization, preparing the project for future improvements while maintaining full compatibility for Docker-deployed users.

## What's New

Version 0.3.0 is a maintenance release that introduces two key changes under the hood:

### Module Path Standardization

The Go module path has been updated to follow industry best practices, now using the full repository path `github.com/UnitVectorY-Labs/lockboxkms`. This change aligns LockboxKMS with standard Go module conventions.

For the vast majority of users deploying via Docker, this change has **no impact** on functionality or usage.

### Dependency Updates

The release includes an update to `google.golang.org/api` (0.217.0 → 0.218.0), along with accompanying indirect dependency updates. These routine maintenance updates ensure the project stays current with Google Cloud libraries, benefiting from security patches and bug fixes in the underlying infrastructure.

## Why It Matters

While v0.3.0 doesn't introduce new user-facing features, it represents important foundation work:

- **Better Go Module Support**: The corrected module path makes LockboxKMS easier to integrate as a library for developers who need programmatic access
- **Security Hygiene**: Keeping dependencies current is a critical practice for maintaining the security posture of any application that handles encryption
- **Preparation Ahead**: This release clears the way for future feature development on a solid, standards-compliant base

### For Docker Users

If you're deploying LockboxKMS via Docker (the recommended method), your experience remains unchanged. The web interface, configuration options, and encryption capabilities work exactly as they did in v0.2.1.

### For Library Users

If you import LockboxKMS as a Go library in your own code, you'll need to update your import statements:

```go
// Update from:
import "lockboxkms/internal/..."

// To:
import "github.com/UnitVectorY-Labs/lockboxkms/internal/..."
```

Then run `go mod tidy` to complete the migration.

## Upgrade Instructions

### Docker Deployment (Recommended)

Pull the latest image:

```bash
docker pull ghcr.io/unitvectory-labs/lockboxkms:v0.3.0
```

All environment variables remain unchanged:
- `GOOGLE_CLOUD_PROJECT` (required)
- `KMS_LOCATION` (default: us)
- `KMS_KEY_RING` (default: lockboxkms)
- `GOOGLE_APPLICATION_CREDENTIALS` (optional)
- `PORT` (default: 8080)

### Quick Start

LockboxKMS provides a simple web interface for encrypting data using Google Cloud KMS. Once deployed, visit your instance to select an encryption key and protect your sensitive information. Remember: LockboxKMS is designed for one-way encryption only—decryption must be handled separately by a process with appropriate decrypter permissions.

---

*This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The original release information is available at [github.com/UnitVectorY-Labs/lockboxkms/releases/tag/v0.3.0](https://github.com/UnitVectorY-Labs/lockboxkms/releases/tag/v0.3.0). Published on January 26, 2025. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
