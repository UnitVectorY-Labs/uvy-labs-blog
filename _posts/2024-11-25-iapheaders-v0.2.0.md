---
layout: post
title: "iapheaders v0.2.0: Enhanced Header Verification for GCP IAP"
date: 2024-11-25 23:48:36 -0500
tags: ["iapheaders", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the release of iapheaders v0.2.0, published on November 25, 2024. This update brings a significant improvement to how the tool validates Identity-Aware Proxy headers, making it even more reliable for developers debugging GCP IAP configurations.

## What's New

### Cross-Verification of Unsigned Headers

The standout feature in v0.2.0 is the new ability to verify that unsigned IAP headers match the claims inside the verified JWT assertion. Previously, the tool would mark headers as "good" simply if they were present. Now it goes a step further:

- **Email verification:** The `x-goog-authenticated-user-email` header is checked against the `email` claim in the JWT
- **User ID verification:** The `x-goog-authenticated-user-id` header is checked against the `sub` (subject) claim in the JWT
- **Identity source support:** Verification works for both `GOOGLE` and `GCIP` (Google Cloud Identity Platform) identity sources

### Improved Status Indicators

You'll notice more accurate visual feedback when using the tool. Headers that are present but don't match the verified JWT claims now display with a 🟡 (yellow warning) instead of 🟢 (green good). This change helps you quickly identify potential issues where headers may have been tampered with or simply don't align with the authenticated user's identity.

## Why It Matters

For developers working with GCP's Identity-Aware Proxy, understanding what headers are actually being passed—and whether they're trustworthy—is crucial for debugging authentication flows.

With v0.2.0, you can have greater confidence in the status indicators you see. The tool no longer just checks if headers exist; it cryptographically verifies them against the signed JWT token. This means:

- **More accurate diagnostics:** Spot mismatched headers that could indicate configuration problems
- **Better security awareness:** Identify potential header tampering attempts
- **Faster troubleshooting:** Get clearer signals about what's working and what isn't

The upgrade is completely backward compatible. No configuration changes are required, and your existing deployment setup remains unchanged. Simply pull the updated Docker image from `ghcr.io/unitvectory-labs/iapheaders` and you're ready to go.

This release was contributed by @JaredHatfield through pull request #2, marking their first contribution to the project.

---

**Transparency Note:** This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The original release (v0.2.0) was published on November 25, 2024, for the [iapheaders](https://github.com/UnitVectorY-Labs/iapheaders) repository. Learn more about the [release here](https://github.com/UnitVectorY-Labs/iapheaders/releases/tag/v0.2.0). Written by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
