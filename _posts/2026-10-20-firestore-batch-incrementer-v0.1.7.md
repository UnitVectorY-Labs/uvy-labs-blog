---
layout: post
title: "firestore-batch-incrementer v0.1.7 – Security and Dependency Maintenance Release"
date: 2026-10-20 22:32:03 +0000
tags: ["firestore-batch-incrementer", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-10-20, firestore-batch-incrementer v0.1.7 was published. This is a maintenance and security release with no changes to application logic. It updates the dependency stack used by the Firestore client and the build toolchain to address HTTP/2 security vulnerabilities and bring upstream libraries current. For users running the batch incrementer as a Cloud Run Job, the update is a drop-in replacement that reduces transport-layer exposure with no configuration changes required.

## What's new

**Security updates to the HTTP/2 transport stack**
The release upgrades `golang.org/x/net` to v0.61.0, which resolves five HTTP/2 advisories that are reachable through the gRPC/HTTP2 transport used by the Cloud Firestore client:
- CVE-2026-78663 – HTTP/2 server flow-control double refund
- CVE-2026-78659 – memory exhaustion via Trailer headers
- CVE-2026-78660 – malformed framing headers and response smuggling
- CVE-2026-78669 – excessive CPU from SETTINGS_INITIAL_WINDOW_SIZE flood
- CVE-2026-97032 – HPACK encoder race crash

Companion updates to `golang.org/x/crypto`, `golang.org/x/sync`, `golang.org/x/sys`, and `golang.org/x/text` are included to support the net upgrade.

**Upstream client and toolchain refresh**
- `cloud.google.com/go/firestore` 1.25.0 → 1.26.0
- `google.golang.org/api` 0.299.0 → 0.303.0
- Dockerfile builder image updated from `golang:1.27.1` to `golang:1.27.2`, with CI workflows referencing Go v1.27.2

No source code in the application was changed between v0.1.6 and v0.1.7. Environment variables and behavior remain unchanged: `PROJECT_ID`, `COLLECTION`, `FIELD_KEY`, `DATABASE_ID`, `BATCH_SIZE`, `RATE_LIMIT`, `ATOMIC_UPDATES`, `UPDATE_TYPE`, and `GOOGLE_APPLICATION_CREDENTIALS` continue to work as documented.

CI improvements such as govulncheck SARIF deduplication and Dependabot action updates were also included, with no runtime impact.

## Why it matters

firestore-batch-incrementer iterates a Firestore collection in batches and atomically increments a root-level numeric field to trigger downstream Eventarc processing. The tool relies on the Firestore gRPC/HTTP2 client for all writes. The `golang.org/x/net` vulnerabilities affect the HTTP/2 stack that underpins those connections, exposing deployments to remote denial-of-service, crash, and response-smuggling vectors.

v0.1.7 closes those exposure points without requiring any changes to your job configuration, rate limiting, or batch size. The dependency refresh also brings the Firestore and Google API clients to their latest patch releases, ensuring continued compatibility and support.

## Upgrade and installation

The upgrade is drop-in:
- Pull the updated container image for v0.1.7 and redeploy your Cloud Run Job.
- No environment variable changes, no migration steps, and no breaking changes.
- If you build from source, update `go.mod` dependencies and rebuild with Go v1.27.2 as used in CI.

We recommend upgrading to take advantage of the security patches.

---

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/firestore-batch-incrementer, release v0.1.7, date of generation 2026-10-21. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
