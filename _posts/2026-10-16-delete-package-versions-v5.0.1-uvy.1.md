---
layout: post
title: "delete-package-versions v5.0.1-uvy.1: GHCR Cleanup That Protects Your Tagged Images"
date: 2026-10-16 03:00:25 -0500
tags: ["delete-package-versions", "unsloth-qwen3-8-flash-next-gguf-iq4-xs"]
---

On October 16, 2026, we published **v5.0.1-uvy.1**, the first UnitVectorY-Labs maintenance release of `delete-package-versions` — the GitHub Action that prunes old package versions from GitHub Packages. This fork exists to solve a problem that has quietly bitten container teams for years: automated cleanup that deletes images you did not mean to delete. If you run a nightly job with `delete-only-untagged-versions: true` to keep GHCR tidy, this release is for you.

## What's new

The headline change makes untagged container cleanup **reference-aware**. In upstream v5, a container version with no tag of its own was treated as fair game for deletion. But "untagged" does not mean "unused": a manifest can have no tag of its own and still be very much alive because it is *reachable* from a tagged image. That includes the platform-specific child manifests inside a multi-arch image, nested OCI/Docker indexes, and Buildx provenance attestations attached to an image through a manifest `subject` reference. Deleting any of those silently breaks the tagged image that depends on them.

Starting with v5.0.1-uvy.1, before the action considers a single deletion it walks the full manifest graph outward from every tag in the registry and protects every digest it can reach. Only genuinely unreferenced versions are then passed to the normal retention rules, so `min-versions-to-keep` now counts only the versions that are truly orphaned.

The action also **fails closed** when it is not confident. If registry discovery comes back incomplete, a digest does not verify, tags move while the scan is in progress, or the package's tag metadata is partial, the run stops without deleting anything rather than guessing. Failing loudly on an ambiguous state is the intended behavior — it is far better to skip a cleanup cycle than to remove an image that something still depends on.

Alongside the fix, the action now runs on **Node.js 24**. Everything else about the interface stays the same: the input names and defaults match upstream 5.x, so existing workflows keep working as-is.

## Why it matters

If you publish multi-arch container images or attach provenance attestations with Buildx, you have been one cleanup run away from a broken release. The upstream repository has openly stated it is not taking contributions, and the underlying bug (tracked upstream as issues [#162](https://github.com/actions/delete-package-versions/issues/162) and [#90](https://github.com/actions/delete-package-versions/issues/90)) has no fix in the `actions/delete-package-versions@v5` line. This fork carries the full upstream 5.x history and applies the correction on top, so you can keep the cleanup automation you rely on without the risk.

The practical difference is peace of mind. Automatic retention becomes safe to leave switched on: the images your tags point at, and everything those tags transitively need, are protected, and any uncertainty halts the run instead of causing damage. The maintainers validated this against the real `UnitVectorY-Labs/docker-llama.cpp-cuda` package, where cleanup removed six unreferenced versions while leaving 14 live manifests untouched, all four provenance attestations remained accessible, and every image tag pulled cleanly afterward.

A couple of operating notes come with the new behavior. The token the action uses now needs **container read (pull) access** on GHCR in addition to its packages delete scope, so it can inspect the manifest graph. Because the registry offers no atomic "snapshot and delete" transaction, you should **serialize a package's publishers with its cleanup** — a shared workflow-level `concurrency` group is the simplest way to do this. The reference protection applies to automatic untagged container cleanup on GitHub.com's GHCR; explicit version IDs and other deletion modes keep their existing behavior, and GitHub Enterprise Server currently refuses (fails closed on) this mode.

## Upgrading and using it

The input interface is unchanged from upstream 5.x, so updating is a one-line reference swap. The release points at the exact tested commit, and pinning to that full SHA is the recommended, supply-chain-safe form:

```yaml
- uses: UnitVectorY-Labs/delete-package-versions@1ca5e6ebabb7169ddb0e0afc62403eec27832c31 # v5.0.1-uvy.1
  with:
    package-name: my-image
    package-type: container
    delete-only-untagged-versions: true
    min-versions-to-keep: 10   # counts only unreferenced untagged versions
```

The `v5.0.1-uvy.1` tag points to that same commit, so tag pinning works identically if you prefer it. Two versioning details are worth knowing: the `5.0.1` base places the fork one patch above the last upstream tag, and the `-uvy.N` suffix is our fork revision counter, kept deliberately so we never overwrite or collide with upstream tags. Note also that the inherited upstream `v5` tag still points at upstream code **without** this fix — to get reference protection you must reference the fork ref directly. If you use automated dependency tooling, keep in mind that `-uvy.1` parses as a semver prerelease, so adjust any rules that filter those out.

For the full release notes and the validation evidence behind them, see the [release page](https://github.com/UnitVectorY-Labs/delete-package-versions/releases/tag/v5.0.1-uvy.1) and the [implementation in PR #1](https://github.com/UnitVectorY-Labs/delete-package-versions/pull/1). This is the beginning of an actively maintained line for a tool that too many teams had to work around — cleanup automation you can leave running.

---

*Transparency note: this post was AI-generated by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller) using the model `unsloth/Qwen3.8-Flash-Next-GGUF:IQ4_XS`. It is based on the [UnitVectorY-Labs/delete-package-versions](https://github.com/UnitVectorY-Labs/delete-package-versions) repository and its [v5.0.1-uvy.1 release](https://github.com/UnitVectorY-Labs/delete-package-versions/releases/tag/v5.0.1-uvy.1), and was generated on 2026-11-22.*
