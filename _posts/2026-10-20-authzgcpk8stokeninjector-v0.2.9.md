---
layout: post
title: "authzgcpk8stokeninjector v0.2.9 Released"
date: 2026-10-20 22:30:00 +0000
tags: ["authzgcpk8stokeninjector", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

authzgcpk8stokeninjector v0.2.9 was released on 2026-10-20. This is a maintenance and security release focused on hardening the service for production Kubernetes deployments. No new features or API changes were introduced; the update delivers important dependency fixes that improve security and build reliability while keeping configuration and behavior identical to v0.2.8.

## What's new

The headline change is a security update to the Go networking stack. The release bumps `golang.org/x/net` to v0.61.0, which patches five HTTP/2 vulnerabilities that are reachable via the gRPC/HTTP2 transport used by the service:

- CVE-2026-78663 — HTTP/2 server flow-control double refund
- CVE-2026-78659 — HTTP/2 server memory exhaustion via Trailer headers
- CVE-2026-78660 — HTTP/2 malformed framing headers / response smuggling
- CVE-2026-78669 — HTTP/2 excessive CPU from SETTINGS_INITIAL_WINDOW_SIZE flood
- CVE-2026-97032 — HTTP/2 server crash from HPACK encoder race

The build toolchain is also updated to Go v1.27.2. The Dockerfile builder image moves from `golang:1.27.1` to `golang:1.27.2`, and CI workflows for build and govulncheck are updated to use the same patch release. This does not change runtime behavior, but ensures the container image is built with the latest patch Go release.

Dependency maintenance includes an update of the transitive Envoy gRPC definition package `github.com/envoyproxy/go-control-plane/envoy` from v1.39.0 to v1.40.0, plus routine CI action bumps for code scanning and dependency tooling. No Go source files were modified in this release.

A CI reliability improvement fixes govulncheck SARIF upload failures by deduplicating duplicate call stacks before upload. This is an internal workflow change and does not affect the running service.

## Why it matters

authzgcpk8stokeninjector runs as a sidecar to Envoy Proxy to inject GCP identity tokens via Workload Identity Federation. Because the service communicates over gRPC/HTTP2, the HTTP/2 vulnerabilities patched in `golang.org/x/net` v0.61.0 are directly relevant to its attack surface. Updating to v0.2.9 reduces exposure to flow-control, memory exhaustion, CPU flood, and crash scenarios without requiring any configuration changes.

The release also improves supply-chain hygiene by keeping the Go toolchain and transitive dependencies current, which helps maintain compatibility with Kubernetes environments and CI pipelines. With no API, config, or behavior changes, upgrading is low risk and recommended for security posture.

## Upgrading

The service configuration remains the same as v0.2.8. To upgrade, pull the new v0.2.9 container image and redeploy the sidecar. Environment variables such as `K8S_TOKEN_PATH`, `PROJECT_NUMBER`, `WORKLOAD_IDENTITY_POOL`, `WORKLOAD_PROVIDER`, `SERVICE_ACCOUNT_EMAIL`, `PORT`, and `DEBUG` continue to work unchanged. Token caching and Envoy integration behavior are identical.

For full details, see the release notes on GitHub: https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector/releases/tag/v0.2.9

Transparency note: This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Repository: UnitVectorY-Labs/authzgcpk8stokeninjector, release v0.2.9, date of generation 2026-10-21. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
