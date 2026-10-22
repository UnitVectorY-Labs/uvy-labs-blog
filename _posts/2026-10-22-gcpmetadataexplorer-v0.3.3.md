---
layout: post
title: "gcpmetadataexplorer v0.3.3 — security rebuild"
date: 2026-10-22 01:19:15 +0000
tags: ["gcpmetadataexplorer", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-10-22, gcpmetadataexplorer v0.3.3 was released. This is a security-focused rebuild with no functional changes to the application. The image is rebuilt with Go 1.27.3 to apply the Go security update that distrusts compromised eMudhra intermediate CAs (GO-2026-6809 / CVE-2026-111943). Users get the same browsing experience for the GCP metadata server, now built on a patched toolchain.

## What's new

v0.3.3 contains no new features, improvements, or bug fixes to the explorer itself. The application code is identical to v0.3.2.

The release updates the build environment:
- Docker builder bumped to golang:1.27.3 for the security rebuild
- go.mod format normalized to go 1.27.0
- CI and repository metadata refreshed, including multi-arch Docker release workflow updates and dependency bumps

The official release notes state: "Security rebuild: built with Go 1.27.3 to distrust the compromised eMudhra intermediate CAs (GO-2026-6809 / CVE-2026-111943). No functional code changes."

## Why it matters

Even though the user interface and behavior are unchanged, the Go toolchain update is important for security hygiene. GO-2026-6809 addresses a compromised certificate authority in the Go root store. Rebuilding with Go 1.27.3 ensures the container's TLS trust store reflects the distrust, reducing risk for any outbound TLS connections the container makes during builds and runtime.

For users running gcpmetadataexplorer in development or testing environments, pulling v0.3.3 gives you the same tool with an up-to-date build chain, without needing to change configuration or workflows.

## Upgrade

There are no breaking changes and no configuration changes required. The image remains at ghcr.io/unitvectory-labs/gcpmetadataexplorer:v0.3.3, with the same environment variables such as ALLOW_TOKENS.

To update:
- Pull the new tag: `ghcr.io/unitvectory-labs/gcpmetadataexplorer:v0.3.3`
- Or use the moving tag `v0.3` to track the latest patch in the series

The explorer continues to be a web-based interface for browsing and inspecting the GCP metadata server for development and testing purposes only. As always, it is not intended for production use and should not be exposed to untrusted networks.

---

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/gcpmetadataexplorer, release v0.3.3, date of generation: 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).