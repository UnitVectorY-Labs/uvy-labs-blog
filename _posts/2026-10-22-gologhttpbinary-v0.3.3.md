---
layout: post
title: "gologhttpbinary v0.3.3 Released: Security Rebuild"
date: 2026-10-22 01:53:09 -0500
tags: ["gologhttpbinary", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

gologhttpbinary v0.3.3 was released on 2026-10-22. This release is a security-focused rebuild with no functional changes to the HTTP logging server. The Docker image is rebuilt with Go 1.27.3 to incorporate distrust of compromised eMudhra intermediate CAs, addressing GO-2026-6809 / CVE-2026-111943. Users get the same logging behavior with an updated build toolchain and no migration steps required.

## What's new

v0.3.3 contains no new features, bug fixes, or API changes. The application code in `main.go` is unchanged, so request handling, log format, and environment configuration remain identical to v0.3.2.

The release delivers:
* A security rebuild of the Docker image using Go 1.27.3 as the builder, which includes Go's updated root certificate store that distrusts the compromised eMudhra intermediate CAs.
* No changes to user-visible behavior. The server continues to log incoming HTTP requests as a single-line JSON object with `bodyBase64`, `headers`, and `path`, responding with HTTP 200 `OK`.
* Internal CI improvements, including the addition of official govulncheck SARIF scanning and routine dependency updates, do not affect end users.

## Why it matters

gologhttpbinary is used for debugging and testing binary payloads in container environments. Because it logs full request bodies, users typically run it in controlled, short-lived contexts. Keeping the build toolchain current is important for supply-chain security, especially when the language runtime updates its trust store to remove compromised CAs. Pulling v0.3.3 ensures the image you run is built against a Go release that no longer trusts the affected eMudhra certificates, reducing risk in environments that perform TLS validation during the build or at runtime.

The rebuild maintains full compatibility while closing a security gap introduced upstream. No feature work was needed to address the issue, which is why the release focuses entirely on the build environment.

## Upgrading

Upgrade is straightforward. The Docker image is published to `ghcr.io/unitvectory-labs/gologhttpbinary`. Pull the new tag or use `:latest`:

```bash
docker run -p 8080:8080 ghcr.io/unitvectory-labs/gologhttpbinary:v0.3.3
```

The `PORT` environment variable still controls the listening port, defaulting to 8080. No configuration changes, log format changes, or migration steps are required. If you are already tracking `:latest`, the security rebuild will be picked up on the next pull.

---

*This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. It references repository UnitVectorY-Labs/gologhttpbinary, release v0.3.3, and was generated on 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
