---
layout: post
title: "prompt2json v0.1.1: Validation, Documentation, and Global Support"
date: 2026-01-02 16:08:55 -0500
tags: [prompt2json, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

We're excited to announce the release of prompt2json v0.1.1, available now on GitHub. Released on January 2, 2026, this update brings critical input validation, a complete documentation suite, and fixes for global region support in Vertex AI.

This "foundation release" doesn't introduce new features but instead solidifies the user experience by catching configuration errors earlier, providing comprehensive documentation for all users, and resolving edge cases with global location handling.

## What's New

### Input Validation for GCP Components

v0.1.1 introduces pre-flight validation for all Google Cloud Platform inputs. Before attempting API calls, prompt2json now validates:

- **Project IDs** - Checks that your GCP project ID conforms to Google Cloud requirements
- **Regions/Locations** - Validates region names against valid Google Cloud regions (including special handling for "global")
- **Model Names** - Ensures Vertex AI model identifiers are properly formatted

If your configuration is invalid, you'll see a clear error message like `invalid GCP project ID: {value}` or `invalid GCP region: {value}`. This saves you from cryptic API-level errors by catching issues before they happen.

### Complete Documentation Suite

We've built a comprehensive documentation foundation to help you get the most out of prompt2json. The new docs are available at [https://unitvectory-labs.github.io/prompt2json/](https://unitvectory-labs.github.io/prompt2json/) and include:

- **INSTALL.md** - Installation instructions for binaries, Go packages, and source builds, plus authentication setup
- **USAGE.md** - Complete flag reference with required/optional status, provider-specific options, and environment variable mappings
- **EXAMPLES.md** - Practical examples covering text classification, image processing, PDF documents, file-based workflows, and dry-run modes

### Global Region Bug Fix

Users working with Vertex AI models in the "global" location will find their workflows now function correctly. This release fixes URL construction for global endpoints, ensuring models only available globally are accessible without region prefixes.

## Why It Matters

This release represents a maturation of the prompt2json user experience. By adding validation layers, we've made it easier to spot misconfigurations before they cause problems. The documentation suite transforms the project from README-based guidance to a proper reference site with navigation and examples.

The global region fix may seem minor, but it unlocks access to Vertex AI models that were previously inaccessible due to URL construction issues. These improvements collectively make prompt2json more reliable and user-friendly for both new and experienced users.

## Getting Started

Upgrading to v0.1.1 is straightforward:

**Using Go:**
```bash
go install github.com/UnitVectorY-Labs/prompt2json@latest
```

**Binary Downloads:**
Pre-built binaries are available from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/prompt2json/releases/tag/v0.1.1) for:
- macOS (Darwin): amd64, arm64
- Linux: 386, amd64, arm64
- Windows: 386, amd64

No migration is required—your existing configurations and workflows will continue to work. The only change you might notice is earlier, clearer error messages if your GCP configuration needs adjustment.

For detailed installation instructions, usage guides, and examples, visit the [documentation site](https://unitvectory-labs.github.io/prompt2json/).

---

**Transparency Note:** This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The post was generated on March 17, 2026, based on research from the prompt2json repository (UnitVectorY-Labs/prompt2json) and release v0.1.1 dated January 2, 2026. Authored by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
