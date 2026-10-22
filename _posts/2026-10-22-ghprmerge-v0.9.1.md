---
layout: post
title: "ghprmerge v0.9.1 Released"
date: 2026-10-22 00:00:00 -0500
tags: ["ghprmerge", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-10-22, ghprmerge v0.9.1 was published for the UnitVectorY-Labs/ghprmerge project. This release is a security-focused rebuild that updates the Go toolchain trust store to address compromised eMudhra intermediate CAs, with accompanying improvements to how rebase readiness and PR status are reported to users.

ghprmerge automates bulk evaluation and merging of GitHub pull requests across an organization, a core workflow for teams running automated dependency updates. v0.9.1 keeps the tool safe to use while making its reporting clearer when PRs are up-to-date or awaiting rebase requests.

## What's new

**Security rebuild with updated Go toolchain**

Binaries for v0.9.1 are built with Go 1.27.3 to distrust the compromised eMudhra intermediate CAs referenced in GO-2026-6809 / CVE-2026-111943. The change applies to the build environment and ensures the toolchain's trust store reflects the revocation. No CLI flags or workflows are changed.

**Clearer rebase readiness reporting**

Rebase reporting now distinguishes between PRs that need no action and PRs that have had a rebase request submitted. Up-to-date pull requests report `no rebase needed` while preserving the observed check state, rather than being mis-classified as ready to merge. Successful Dependabot comment or API submissions are reported as `rebase requested` with a summary of actions submitted.

The `report` output and JSON include independent fields for check status and branch freshness, such as `checks`, `branchStatus`, `behindBy`, and `already_up_to_date`. This makes it easier to scan an organization and understand why a PR is not actionable. Merge and close operations continue to select one pattern per repository and explicitly surface excluded matches.

Assets are provided for darwin-amd64/arm64, linux-386/amd64/arm64, and windows-386/amd64 with checksums for verification.

## Why it matters

The security rebuild protects the supply chain for users who download prebuilt binaries, ensuring the Go toolchain no longer trusts the compromised CAs. For teams running ghprmerge in CI or locally, upgrading is a straightforward way to maintain trust in the build.

The reporting improvements reduce confusion during bulk operations. Operators can now trust that an up-to-date PR with failing checks is surfaced correctly, and that a rebase request has been issued without waiting for completion verification. JSON consumers should note that the successful action value for rebase operations is now `rebase requested` and that `already_up_to_date` is available for filtering.

## Upgrade

To upgrade, download the appropriate asset from the v0.9.1 release page, verify the checksums, and replace your existing binary in PATH. Confirm the install with:

```
ghprmerge --version
```

Environment variables `GITHUB_TOKEN`, `GITHUB_ORG`, `GHPRMERGE_WORKERS`, and `GHPRMERGE_MIN_MERGE_DELAY` remain unchanged. No breaking CLI changes are introduced.

---

Transparency note: this post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference repository: UnitVectorY-Labs/ghprmerge, release v0.9.1, date of generation 2026-10-22. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
