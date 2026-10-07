---
layout: post
title: "gcpidentitytokenportal v0.5.4 Released"
date: 2026-10-06 21:51:24 +0000
tags: ["gcpidentitytokenportal", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On October 6, 2026, we published gcpidentitytokenportal v0.5.4. This is a maintenance release focused on keeping the project healthy behind the scenes. The application behavior is unchanged, so existing deployments continue to work without any configuration changes, while the build pipeline and dependency set are updated for ongoing security and reliability.

## What's new

v0.5.4 contains no changes to the portal's user-facing code. The Go application, templates, and runtime configuration remain the same as v0.5.3.

Behind the release are routine dependency updates for the Go modules the portal relies on, including `google.golang.org/api`, `golang.org/x/oauth2`, and `cloud.google.com/go/compute/metadata`. These bumps keep the underlying Google Cloud libraries current.

The repository also adopted gitrepoforge standardization, which adds managed repository files and a standardized `.gitignore` to keep the project consistent going forward. The license year was updated as part of that cleanup.

For the build and release process, the Docker image workflow now builds amd64 and arm64 images in parallel and publishes a multi-arch manifest, making pulls more efficient for ARM-based deployments. A new scheduled `govulncheck-go.yml` workflow adds regular Go vulnerability scanning with SARIF upload to Code Scanning, and CodeQL and Dependabot configurations were refreshed with grouped updates and cooldown settings.

No new features, configuration options, or breaking changes were introduced.

## Why it matters

Even when the portal itself doesn't change, keeping dependencies and CI up to date is important for security and supply-chain hygiene. Updating the Google API and OAuth2 libraries ensures compatibility with upstream services and reduces exposure to known issues. The added vulnerability scanning provides earlier visibility into potential issues before they reach users.

The multi-arch Docker build improves the experience for users running on ARM hardware without any action required on their side, and the repository standardization lays groundwork for smoother future maintenance.

## Upgrade

If you are running gcpidentitytokenportal via Docker, you can move to v0.5.4 by pulling the new image:

```
ghcr.io/unitvectory-labs/gcpidentitytokenportal:v0.5.4
```

Existing environment variables, volume mounts, and `/config.yaml` settings remain valid. No migration steps are required.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/gcpidentitytokenportal, release v0.5.4, date of generation 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
