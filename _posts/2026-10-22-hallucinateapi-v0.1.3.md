---
layout: post
title: "hallucinateapi v0.1.3: Security Rebuild"
date: 2026-10-22 02:08:01 +0000
tags: ["hallucinateapi", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On October 22, 2026, hallucinateapi v0.1.3 was released. This update is a security rebuild with no functional changes to the API behavior. The project continues to serve OpenAPI 3.0 GET and POST operations by using operation descriptions as LLM instructions, validating requests and responses against the schema, and returning schema-constrained JSON.

## What's new

v0.1.3 is built with Go 1.27.3 to address GO-2026-6809 / CVE-2026-111943, which concerns compromised eMudhra intermediate certificate authorities. The Go 1.27.3 trust store distrusts those CAs, and the release rebuilds hallucinateapi with that updated toolchain.

The release notes confirm no functional code changes. Dependency updates in go.mod — including jsonschemaprofiles and libopenapi — and CI workflow improvements accompany the rebuild, but they do not alter user-visible behavior.

## Why it matters

hallucinateapi relies on TLS for LLM provider connections and for serving the API itself. Using a Go runtime that distrusts compromised intermediate CAs reduces the risk of TLS connections trusting certificates that should no longer be trusted. Updating to the v0.1.3 build ensures the trust store used by the binary reflects the security advisory, without requiring changes to your OpenAPI spec, configuration, or usage patterns.

Because there are no functional changes, existing deployments continue to work as before once upgraded. The update is especially relevant for users running pre-built binaries or building from source in environments where TLS verification matters.

## Upgrade

hallucinateapi can be installed via:

- `go install github.com/UnitVectorY-Labs/hallucinateapi@latest`
- Building from source at tag v0.1.3 with `go build -o hallucinate`
- Downloading a pre-built binary from the project releases

No migration steps or configuration changes are required. Upgrading to v0.1.3 is recommended to benefit from the security rebuild while keeping the same API behavior.

---

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/hallucinateapi, release v0.1.3, published 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).