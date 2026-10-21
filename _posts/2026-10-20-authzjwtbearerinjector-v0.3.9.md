---
layout: post
title: "authzjwtbearerinjector v0.3.9 released"
date: 2026-10-20 22:31:12 +0000
tags: ["authzjwtbearerinjector", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-10-20, authzjwtbearerinjector v0.3.9 was published. This is a maintenance and security release focused on keeping the service safe to run in production behind Envoy Proxy. No application source code was changed; the update delivers important dependency fixes and CI reliability improvements with no configuration changes required.

## What's new

The headline change is a security hardening update to the Go standard library transport. The indirect dependency `golang.org/x/net` is upgraded to v0.61.0, patching multiple HTTP/2 vulnerabilities in the gRPC/HTTP2 stack used by the external authorization service. The fixed issues include a critical HTTP/2 server flow-control double refund, memory exhaustion via Trailer headers, malformed framing response smuggling, excessive CPU via SETTINGS_INITIAL_WINDOW_SIZE flood, and an HPACK encoder race that could crash the server.

The build environment is also refreshed. The Dockerfile builder image and GitHub Actions workflows are updated to Go 1.27.2, while the `go.mod` toolchain directive remains at go 1.27.0. Several indirect dependencies are bumped for consistency, including `github.com/envoyproxy/go-control-plane/envoy` to v1.40.0, `golang.org/x/sys` to v0.49.0, `golang.org/x/text` to v0.43.0, and `google.golang.org/protobuf` to v1.36.12.

CI reliability improves with a fix for govulncheck SARIF uploads. The workflow now deduplicates stacks before uploading results to GitHub Code Scanning, resolving failures caused by duplicate stack entries.

## Why it matters

authzjwtbearerinjector handles JWT-bearer token exchange between Envoy and backend services. Because it runs as a gRPC service, it is exposed to HTTP/2 traffic from Envoy. The `golang.org/x/net` update directly reduces the attack surface for those connections, addressing CVEs that could lead to denial of service or crashes under malicious traffic. The upgrade is drop-in; existing deployments benefit immediately without changing configuration, environment variables, or Envoy metadata.

The toolchain and dependency refreshes ensure the image is built with a supported Go release and up-to-date transitive libraries, improving supply-chain hygiene without changing runtime behavior.

## Upgrading

v0.3.9 is a drop-in replacement for v0.3.8. Pull the updated container image for the tag and redeploy your sidecar. No configuration changes are needed. All users are encouraged to upgrade promptly to receive the HTTP/2 security fixes.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository UnitVectorY-Labs/authzjwtbearerinjector, release v0.3.9 published 2026-10-20. Article generated 2026-10-21. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).