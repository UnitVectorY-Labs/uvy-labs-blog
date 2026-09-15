---
layout: post
title: "ghrepocfg v0.2.0 Expands Declarative Management to Environments, Pages, Labels and Custom Properties"
date: 2026-09-12 00:11:42 +0000
tags: ["ghrepocfg", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-09-12, ghrepocfg v0.2.0 was released. This update significantly broadens the scope of repository settings that can be managed declaratively with a single YAML file. The release adds first-class support for GitHub custom properties and introduces new managed sections for environments, Pages, labels, autolinks, and deploy keys, alongside extended repository, security, and GitHub Actions controls.

## What's new

v0.2.0 builds on the v0.1.2 foundation with two major additions:

**Custom properties support**
A new top-level `custom_properties` map lets you define organization or enterprise-defined property values per repository. Values can be strings, arrays of strings for multi-select properties, or null to unset. The map is authoritative: omitted properties are unset, and export and reconcile handle multi-select comparison without ordering drift.

**Additional repository settings**
- **Environments**: Authoritative management of deployment environments with wait timers, self-review prevention, reviewers, deployment branch and tag policies, and variables. Case-insensitive names are supported and an empty map deletes all environments.
- **Pages**: Control site enablement, build type, source branch and path, custom CNAME, and HTTPS enforcement. Setting `enabled: false` removes the site.
- **Labels, autolinks, deploy keys**: Authoritative maps for labels with color and description, autolinks with URL templates, and deploy keys with key material and read-only flag. These resources use replace semantics where GitHub lacks an update API.
- **Extended repository**: `repository.immutable_releases` for release immutability.
- **Security extensions**: `security.private_vulnerability_reporting` and `security.code_scanning_default_setup` with state, languages, query suite, threat model, and runner configuration.
- **Actions extensions**: SHA pinning requirements, artifact and log retention, fork PR contributor approval, access level, private fork workflow controls, OIDC claims and immutable subject, cache retention and size limits, and an authoritative `actions.variables` map.
- **Export and reconcile improvements**: A new `full` export scope reads every managed setting, and `replace` reconcile is used for resources without update APIs. Public repositories automatically skip private-only Actions policies to avoid errors.

Documentation was updated across CONFIGURATION, EXAMPLES, GITHUB_FEATURES, HOW_IT_WORKS, TROUBLESHOOTING, and README to cover the new sections and behavior. No breaking changes are introduced; new sections are optional and existing `.ghrepocfg.yaml` files remain valid.

## Why it matters

Managing GitHub repository configuration manually leads to drift and inconsistent policies across teams. v0.2.0 brings more of the settings teams care about under declarative control, letting you preview changes with `apply --dry-run` and reconcile with confidence. Custom properties enable consistent metadata enforcement from organizations down to repositories, while environments, Pages, labels, autolinks, and deploy keys reduce the need for manual UI edits or separate scripts.

The expanded Actions and security controls help standardize CI/CD guardrails, retention, and vulnerability reporting without per-repo exceptions. Together, these changes make ghrepocfg a more complete source of truth for repository configuration.

## Upgrade and install

Binaries for darwin, linux, and windows are published for this release with checksums, and installation via `go install github.com/UnitVectorY-Labs/ghrepocfg@latest` is supported. Existing configurations continue to work; new sections are optional.

Running `ghrepocfg export --full` will now include custom properties, environments, Pages, labels, autolinks, deploy keys, and the extended Actions and security settings when accessible. Some new settings require admin permission, and deleting an environment also deletes its associated secrets, which ghrepocfg cannot export. Review the plan output before applying changes.

Transparency note: this post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository UnitVectorY-Labs/ghrepocfg, release v0.2.0, date of generation 2026-09-15. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
