---
layout: post
title: "ghorgsync v0.6.2 Released"
date: 2026-10-14 23:53:17 +0000
tags: ["ghorgsync", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

ghorgsync v0.6.2 was released on October 14, 2026. This maintenance release improves reliability for GitHub Enterprise organizations by correcting how internal repositories are discovered and filtered.

ghorgsync keeps a local directory in sync with all repositories of a GitHub organization or user account without destructive operations. v0.6.2 ensures that internal repositories are handled consistently with private repositories, giving enterprise users accurate control over what gets synced.

## What's new

Internal repository visibility is now handled explicitly. The tool reads GitHub’s visibility metadata and treats repositories marked as internal the same as private for filtering purposes. Organization discovery now requests all accessible repositories so internal repos are not omitted by default API behavior.

The `include_private` setting now governs both private and internal repositories. When `include_private` is true, both private and internal repositories are included; when false, they are excluded. This aligns the configuration with how GitHub Enterprise classifies repositories.

Documentation has been updated to reflect this behavior. The USAGE guide now describes the Organization Visibility section and clarifies that `include_private` controls private and internal repositories, and the EXAMPLES guide includes updated examples for syncing all accessible repositories and for excluding private and internal repositories from syncing.

The release also adds unit tests that validate visibility classification and filtering across public-only, non-public-only, and mixed configurations.

## Why it matters

For organizations using GitHub Enterprise with internal repositories, previous versions could misclassify internal repos as public because the visibility field was not used. That could lead to unexpected inclusion or exclusion when users set `include_private` or `include_public`.

With v0.6.2, filtering behaves as users expect: internal repositories are correctly recognized and respect the same inclusion rules as private repositories. This reduces surprises during sync runs and makes configuration predictable for enterprise teams.

No breaking configuration changes are introduced. Existing `.ghorgsync` files continue to work. Users who previously saw internal repositories handled inconsistently will now see correct behavior without changing their config.

## Upgrade

Upgrade to v0.6.2 with:

```
go install github.com/UnitVectorY-Labs/ghorgsync@latest
```

Prebuilt binaries for darwin, linux, and windows are available from the release assets at https://github.com/UnitVectorY-Labs/ghorgsync/releases/tag/v0.6.2.

Ensure your authentication token has access to the repositories you want to sync. ghorgsync can only discover repositories that GitHub returns for the current token.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: https://github.com/UnitVectorY-Labs/ghorgsync, release v0.6.2, date of generation 2026-10-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
