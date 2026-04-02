---
layout: post
title: "bulkfilepr v0.2.0: Multi-Hash Matching for Flexible Standard Updates"
date: 2026-02-08 22:34:19 -0500
tags: ["bulkfilepr", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

On February 8, 2026, bulkfilepr released version 0.2.0, introducing a powerful enhancement to the `--expect-sha256` option that makes it significantly easier to update standardized files across repositories running different baseline versions.

## What's New

The headline feature in v0.2.0 is **multi-hash support** for the `--mode match` operation. Previously, you could only specify a single SHA-256 hash when using `--expect-sha256`. Now, you can provide multiple comma-separated hashes to match against:

```bash
bulkfilepr apply \
  --mode match \
  --repo-path .github/workflows/ci.yml \
  --new-file ~/standards/ci-v3.yml \
  --expect-sha256 "$V1_HASH,$V2_HASH"
```

This change enables a common real-world scenario: you have repositories scattered across your organization at different versions of a standard file. With v0.2.0, you can update all of them in a single pass, regardless of which baseline version they're currently on.

### Practical Example

Imagine managing CI workflows across 50 repositories, where some are on version 1 of `ci.yml` and others on version 2. Previously, you'd need to run bulkfilepr twice—once for each hash. Now one command handles both:

```bash
CI_V1_HASH="a1b2c3d4..."
CI_V2_HASH="e5f6g7h8..."

bulkfilepr apply \
  --mode match \
  --repo-path .github/workflows/ci.yml \
  --new-file ~/standards/ci-v3.yml \
  --expect-sha256 "$CI_V1_HASH,$CI_V2_HASH"
```

### Documentation Improvements

Alongside the feature enhancement, v0.2.0 includes a comprehensive rewrite of the documentation:
- **EXAMPLES.md** has been streamlined with clearer, copy-paste-ready examples
- **USAGE.md** now accurately reflects multi-hash syntax and behavior
- Overall verbosity reduced by ~35% while improving clarity

## Why It Matters

Standardization at scale requires flexibility. As organizations roll out file updates incrementally—whether due to staggered adoption, testing phases, or simply the reality of managing many repositories—the inability to match multiple baseline versions created a friction point. 

Multi-hash support removes that friction. It acknowledges that your fleet isn't always homogeneous and gives you the tools to work with that reality instead of fighting against it.

This release is also **fully backward compatible**. If you're currently using single hashes with `--expect-sha256`, nothing changes. Your existing commands continue to work exactly as before:

```bash
# Still works perfectly
bulkfilepr apply --mode match --expect-sha256 "abc123..." ...
```

## Getting Started

### Installation

Upgrade to v0.2.0 using your preferred method:

```bash
# Using go install
go install github.com/UnitVectorY-Labs/bulkfilepr@v0.2.0

# Download binary from releases
curl -LO https://github.com/UnitVectorY-Labs/bulkfilepr/releases/download/v0.2.0/bulkfilepr-v0.2.0-linux-amd64.tar.gz
```

Binary assets are available for macOS (Intel and Apple Silicon), Linux (386, AMD64, ARM64), and Windows (386, AMD64). All releases include `.md5` and `.sha256` checksums for verification.

### Calculating Hashes

To use the multi-hash feature, first calculate SHA-256 hashes of your baseline files:

```bash
# Linux
sha256sum .github/workflows/ci.yml

# macOS
shasum -a 256 .github/workflows/ci.yml
```

Then combine them with commas. Whitespace is automatically trimmed, so all these are valid:
- `--expect-sha256 "hash1,hash2"`
- `--expect-sha256 "hash1 , hash2"`
- `--expect-sha256 "hash1, hash2 "`

### Learn More

Check out the updated [EXAMPLES.md](https://github.com/UnitVectorY-Labs/bulkfilepr/blob/main/docs/EXAMPLES.md) for more copy-paste-ready patterns and workflows.

---

**Transparency Note:** This release announcement was AI-generated using the `unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M` model. It references the bulkfilepr v0.2.0 release published on February 8, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
