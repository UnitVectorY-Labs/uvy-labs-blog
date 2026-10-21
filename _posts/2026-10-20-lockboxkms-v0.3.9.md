---
layout: post
title: "lockboxkms v0.3.9: Security Maintenance Release"
date: 2026-10-20 17:34:44 -0500
tags: ["lockboxkms", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-10-20, UnitVectorY-Labs published lockboxkms v0.3.9. This is a maintenance and security-focused update with no changes to application functionality. The release hardens the underlying stack by updating the Go toolchain and key dependencies, most notably patching HTTP/2 vulnerabilities that are reachable through the gRPC/HTTP2 transport used by the Cloud KMS client and the application's HTTP server.

## What's new

v0.3.9 contains no user-visible feature changes. The release focuses on dependency and toolchain updates:

- Security hardening via `golang.org/x/net` v0.61.0. The update addresses five HTTP/2 vulnerabilities in the `http2` package, including flow-control double refund, memory exhaustion via trailer headers, malformed framing, excessive CPU via SETTINGS_INITIAL_WINDOW_SIZE flood, and an HPACK encoder race. These issues are reachable through the gRPC/HTTP2 transport used for Cloud KMS connections and the web server.
- Go toolchain bump to 1.27.2. The Docker builder image and CI workflows now use golang:1.27.2, replacing 1.27.1.
- Google Cloud client updates. `cloud.google.com/go/kms` moves to 1.35.0 and `google.golang.org/api` is updated to 0.303.0. No breaking changes are reported.
- CI improvements. A fix for govulncheck SARIF upload deduplication is included, along with routine action and CodeQL updates. No changes were made to `main.go`, templates, assets, or configuration.

## Why it matters

lockboxkms provides a simple web interface for encrypting text with Google Cloud KMS. Because it sits in front of sensitive key material, keeping the transport layer secure is important. The HTTP/2 patches reduce the attack surface for both inbound requests to the web server and outbound calls to Cloud KMS. The update is transparent to users: environment variables, permissions, and behavior remain unchanged, and there are no migration steps.

## Upgrade

To receive the security fixes, pull the new Docker image tagged v0.3.9 from `ghcr.io/unitvectory-labs/lockboxkms`. The existing deployment configuration, environment variables for Google Cloud project ID, KMS location, and key ring name, and service account permissions `roles/cloudkms.cryptoKeyEncrypter` and `roles/cloudkms.viewer` are unchanged. No breaking changes are included.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/lockboxkms, release v0.3.9, date of generation 2026-10-21. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).