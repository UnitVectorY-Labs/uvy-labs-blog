---
layout: post
title: "gologhttpjson v0.2.2: Security Rebuild"
date: 2026-10-22 02:01:00 +0000
tags: ["gologhttpjson", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On October 22, 2026, gologhttpjson v0.2.2 was released. This release is a security rebuild with no functional changes to the application. The Docker images and build artifacts have been rebuilt with Go 1.27.3 to address the compromised eMudhra intermediate CA issue referenced as GO-2026-6809 / CVE-2026-111943. Behavior, configuration, and logging remain identical to v0.2.1.

## What's new

v0.2.2 contains no new features or bug fixes to the running service. The Go source code is unchanged from v0.2.1.

The release updates the build environment to Go 1.27.3 in the Dockerfile and aligns CI pipelines to newer Go and action versions. A new GitHub Actions workflow for govulncheck SARIF scanning was added to improve developer security checks, and existing workflows received dependency updates. These changes are in CI and build metadata only and do not affect the container's runtime behavior.

Users will see the same environment variables, `PORT`, `LOG_HEADERS`, and `METADATA_*` support, and the same JSON request logging output.

## Why it matters

The security rebuild ensures that the compiled binary is built with a Go toolchain that distrusts the compromised eMudhra intermediate certificates. Pulling the v0.2.2 image provides that protection without requiring any configuration changes or code updates. For a tool commonly used for local debugging and testing, maintaining a secure build chain is important even when the application itself is unchanged.

There are no breaking changes and no migration steps.

## Upgrade

Upgrading is a drop-in replacement. Update your deployment to use the v0.2.2 image tag or `latest` from the GitHub Container Registry. No environment changes, port mappings, or log format adjustments are needed. If you are already on v0.2.1, pulling v0.2.2 is recommended to obtain the security-rebuilt binaries.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository UnitVectorY-Labs/gologhttpjson, release v0.2.2, date of generation 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
