---
layout: post
title: "firestore-batch-incrementer v0.1.8 — Security Rebuild"
date: 2026-10-22 01:05:34 +0000
tags: ["firestore-batch-incrementer", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

firestore-batch-incrementer v0.1.8 was released on 2026-10-22. This release is a security-only rebuild with no functional changes to how the batch incrementer works. The container image is rebuilt with Go 1.27.3 to address a toolchain trust issue involving compromised eMudhra intermediate CAs, ensuring the build environment reflects current security guidance while keeping the user experience identical to v0.1.7.

What's new

v0.1.8 updates the build toolchain used to produce the container image from Go 1.27.2 to Go 1.27.3. The Go 1.27.3 release includes distrust of the compromised eMudhra intermediate certificate authorities referenced as GO-2026-6809 / CVE-2026-111943. No source code, dependencies, environment variables, or runtime behavior were changed. The Dockerfile base image bump is the only modification in this release, and the application continues to iterate a Firestore collection in batches and atomically increment a specified root-level numeric field with configurable rate limiting as before.

Why it matters

For users running firestore-batch-incrementer as a Cloud Run Job to bulk-update Firestore documents and trigger downstream Eventarc events, this release provides improved build-time security posture without requiring any operational changes. Because there are no functional changes, existing configurations for PROJECT_ID, COLLECTION, FIELD_KEY, BATCH_SIZE, RATE_LIMIT, ATOMIC_UPDATES, and UPDATE_TYPE remain valid. Pulling the v0.1.8 image gives you the updated Go trust store and ensures future builds are not affected by the compromised CAs, while the familiar batch increment behavior is preserved.

Upgrade and installation

Upgrade is transparent. If you deploy the provided container image, pull the new image tagged for v0.1.8 and redeploy your Cloud Run Job. No configuration changes, migration steps, or breaking changes are required. The runtime interface and environment variables are unchanged from v0.1.7.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/firestore-batch-incrementer, release v0.1.8, date of generation 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
