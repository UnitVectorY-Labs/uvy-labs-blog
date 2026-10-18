---
layout: post
title: "ghprmerge v0.9.0 Released"
date: 2026-10-18 13:23:56 +0000
tags: ["ghprmerge", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On October 18, 2026, ghprmerge v0.9.0 was released. This update focuses on making rebase and report output more accurate and easier to interpret for teams automating pull request workflows across an organization. If you use ghprmerge to evaluate and merge Dependabot or other batch PRs sharing a source branch, the changes in v0.9.0 reduce misleading ready-to-merge signals and give clearer visibility into checks and branch freshness.

## What's new

Rebase readiness and reporting have been refined to reflect real PR state more faithfully. Up-to-date pull requests are now reported as `no rebase needed` with the observed check state, and are counted as already up to date instead of being mis-reported as ready to merge. Rebase submissions now report `rebase requested` and summary output shows `rebase requests submitted`; completion is not verified, matching the actual API interaction.

Report mode now exposes check status and branch freshness independently. Console output shows combined conditions such as `checks failing; 6 commits behind`, and the JSON report adds per-PR fields `checks`, `branchStatus`, and `behindBy` while keeping the primary `status` field for backward compatibility. The JSON action value for a successful rebase request changed from `rebased` to `rebase requested`, with the legacy `rebased_success` field retained, and a new summary field `already_up_to_date` tracks PRs needing no rebase.

Rebase now processes all eligible matches across multiple source patterns in the same repository, while merge and close retain one pattern per repository with explicit reporting of excluded matches. Confirmation scans also display repositories needing no action, making it easier to see the full scope of a run.

Documentation has been updated to reflect the new terminology and behavior, including README guidance on reading rebase results and waiting for branch updates and passing checks before merge.

## Why it matters

For teams running ghprmerge on Dependabot PRs or other automated updates, false positives around rebase readiness can lead to premature merges or unnecessary manual checks. By separating check health from branch freshness and correctly identifying PRs that are already up to date, v0.9.0 reduces noise and builds trust in automated reporting. The richer JSON fields make it simpler to integrate ghprmerge output into dashboards or automation without losing detail.

## Upgrade and installation

v0.9.0 is a drop-in update. Prebuilt binaries for darwin-amd64, darwin-arm64, linux-386, linux-amd64, linux-arm64, and windows-386/ windows-amd64 are available from the release assets with checksums. Building from source requires Go v1.27.2 or newer. Authentication via `GITHUB_TOKEN` or `gh auth` is unchanged.

This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: UnitVectorY-Labs/ghprmerge v0.9.0 released 2026-10-18. Article generated 2026-10-18. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)
