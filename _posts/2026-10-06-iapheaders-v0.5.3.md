---
layout: post
title: "iapheaders v0.5.3 Released"
date: 2026-10-06 22:07:45 +0000
tags: ["unitvectory-labs-iapheaders", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

iapheaders v0.5.3 was released on October 6, 2026. This is a maintenance release focused on repository hygiene and build reliability. The application itself is unchanged, so users will see the same behavior as v0.5.2, with the same configuration and Docker usage. The update delivers fresher dependencies and a more consistent release process without any breaking changes.

## What's new

The release contains no changes to application source code. The Go binary and runtime behavior remain identical to v0.5.2.

The main updates are maintenance and infrastructure:

* Indirect dependency refresh: `golang.org/x/crypto` is updated from v0.53.0 to v0.56.0, with the transitive `golang.org/x/sys` bump to 0.47.0. This brings newer crypto libraries into the build without altering functionality.
* Repository standardization via gitrepoforge onboarding. The repository now uses managed files for `.gitignore`, `.repver`, and related templates, with an updated LICENSE year and minor README formatting.
* Security and CI improvements: a new `govulncheck-go.yml` workflow adds Go vulnerability scanning with SARIF upload to GitHub code scanning. Dependabot grouping and CodeQL action updates keep the CI pipeline current.
* Build process refinement: the Docker release workflow now builds amd64 and arm64 images in separate matrix jobs and creates a multi-arch manifest. The `type=sha` image tag is no longer produced, simplifying the tag set.

No new environment variables or configuration options are introduced. `HIDE_SIGNATURE` and `PORT` continue to work as before.

## Why it matters

For users, v0.5.3 is about stability and upkeep. The application continues to display Google Cloud Identity-Aware Proxy request headers and decode the IAP JWT assertion for inspection exactly as before, with the same Docker image interface at `ghcr.io/unitvectory-labs/iapheaders`.

The dependency refresh means the built image includes more recent crypto libraries, which is a good hygiene practice even though no direct code uses changed. The multi-arch manifest creation improves pull reliability across platforms, and the added vulnerability scanning workflow strengthens the project's ongoing security posture.

Because there are no functional changes, upgrading is low risk and requires no migration steps.

Upgrading is straightforward. Pull the new image and run as before:

```
docker pull ghcr.io/unitvectory-labs/iapheaders:v0.5.3
```

Deploy with the same environment variables you used previously. The image behaves identically to v0.5.2.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/iapheaders, release v0.5.3, date of generation 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
