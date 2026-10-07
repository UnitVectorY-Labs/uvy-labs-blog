---
layout: post
title: "authzgcpk8stokeninjector v0.2.8 Released"
date: 2026-10-06 22:18:05 +0000
tags: ["authzgcpk8stokeninjector", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

authzgcpk8stokeninjector v0.2.8 was released on October 6, 2026. This is a maintenance release focused on security posture and dependency freshness. There are no functional changes to the token injector itself, so existing Envoy ExtAuthz configurations continue to work without modification. The update is a drop-in upgrade that brings an updated gRPC dependency and improved CI safeguards.

## What's new

* Updated the gRPC dependency to google.golang.org/grpc 1.84.0, with corresponding genproto updates. No application code was changed; the upgrade inherits upstream bug fixes and security hardening for gRPC clients.
* Added Go vulnerability SARIF scanning via govulncheck in CI, with results uploaded to GitHub code scanning.
* Updated GitHub Actions and tooling dependencies, including CodeQL action updates, Docker build actions, setup-uv, codecov, and kuberollouttrigger-action.
* Applied repository standards updates and minor metadata maintenance, including LICENSE year update and workflow improvements.

No new features, configuration options, or breaking changes were introduced.

## Why it matters

The injector's core behavior — requesting GCP Workload Identity JWTs in Kubernetes and injecting them into Envoy requests — is unchanged. Users benefit from the upstream gRPC security and reliability improvements without any configuration changes. The added vulnerability scanning strengthens the project's security posture and helps catch dependency issues earlier in the development cycle. Because there are no source changes, upgrades carry no risk of behavioral change.

## Upgrade and installation

Installation remains as documented. Pull the image from ghcr.io/unitvectory-labs/authzgcpk8stokeninjector and deploy it as a sidecar to Envoy Proxy with the required environment variables: K8S_TOKEN_PATH, PROJECT_NUMBER, WORKLOAD_IDENTITY_POOL, WORKLOAD_PROVIDER, and SERVICE_ACCOUNT_EMAIL. Configure Envoy's ExtAuthz gRPC filter to point to 127.0.0.1:50051. No migration steps are required; v0.2.8 is a drop-in replacement for v0.2.7.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/authzgcpk8stokeninjector v0.2.8 released 2026-10-06. Generated 2026-10-07. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).