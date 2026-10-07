---
layout: post
title: "hallucinateapi v0.1.2 — Maintenance Release"
date: 2026-10-06 21:56:18 +0000
tags: ["hallucinateapi", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

hallucinateapi v0.1.2 was released on 2026-10-06. This is a maintenance release focused on build hygiene and supply-chain security. There are no changes to application code, CLI behavior, or API surface, so users will see the same runtime behavior as v0.1.1. The update is transparent to deploy and helps keep the project’s dependency graph current.

## What's new

This release contains no new user-facing features and no functional changes to hallucinateapi.

Behind the scenes, the project added official Go vulnerability scanning to CI with a new govulncheck workflow that uploads SARIF results to GitHub code scanning. Dependency manifests were updated as well:

- jsonschemaprofiles 0.1.1 → 0.1.2
- pb33f/libopenapi 0.38.7 → 0.40.0
- golang.org/x/oauth2 0.36.0 → 0.37.0
- golang.org/x/sys 0.29.0 → 0.44.0
- Additional transitive updates to jsonpath, jsonschema, golang.org/x/sync and golang.org/x/text

GitHub Actions, Docker build actions, and CodeQL versions were also bumped across workflows, and repository management files were updated to track the new workflow.

No README or documentation files changed in this range, and no release assets were published.

## Why it matters

hallucinateapi implements GET and POST operations from an OpenAPI 3.0 specification using LLM instructions, validates inputs and outputs against the schema, and serves Swagger UI at `/` with the spec at `/openapi.json` or `/openapi.yaml`. Keeping the build pipeline current means faster security signal for maintainers and a more stable foundation for future user-visible work, without requiring any changes from you.

The added govulncheck scanning improves supply-chain visibility for the project maintainers. It does not change runtime behavior for users.

## Upgrade and installation

There are no breaking changes and no new configuration required. Upgrading from v0.1.1 to v0.1.2 is transparent. If you build from source, the updated go.mod will pull newer transitive dependencies while preserving the same application behavior.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/hallucinateapi, release v0.1.2, date of generation 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
