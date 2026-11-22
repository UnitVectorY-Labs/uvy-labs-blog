---
layout: post
title: "delete-package-versions v5.0.1-uvy.2 — A Healthier, Safer Dependency Baseline for Your Cleanup Workflows"
date: 2026-11-18 01:08:05 +0000
tags: ["delete-package-versions", "unsloth-qwen3-8-flash-next-gguf-iq4-xs"]
---

**delete-package-versions v5.0.1-uvy.2 is out — released November 18, 2026.** If you rely on this GitHub Action to keep GitHub Packages tidy, this is a maintenance release built for one thing: keeping your cleanup pipelines secure and up to date without asking you to change a single line of your workflow. The retention rules you already configured — and the container-reference protection that safeguards your tagged images — carry over untouched.

For context, this is the second release in the UnitVectorY-Labs maintenance line of `delete-package-versions`, the downstream fork of `actions/delete-package-versions`. The Action itself deletes old versions of packages stored in GitHub Packages across the ecosystems most teams publish to: container images in GHCR, npm, Maven, NuGet, and RubyGems. Its job is quiet, scheduled housekeeping — the kind of workflow you want to run reliably in the background for years. This release is about exactly that longevity.

## What's new

This release is deliberately behavior-preserving: there are no new inputs, no changed outputs, and no changes to how deletions are decided. What's new is everything *under the hood* that keeps the Action trustworthy over time.

- **A blocked security-update chain is finally cleared.** The biggest change is also the most important: the Action's core runtime dependencies — the GitHub Actions toolkit (`@actions/core` and `@actions/github`) and Octokit's REST client — were upgraded to current, security-friendly releases. This removes a vulnerable `undici` / `@fastify/busboy` dependency chain that was previously *blocking* pending security updates from landing. With it gone, future security fixes can flow through cleanly instead of getting stuck.
- **Dependabot maintenance landed.** Several transitive dependencies (`@xmldom/xmldom`, `js-yaml`, `brace-expansion`, and `browserslist`) were refreshed through Dependabot, tightening the overall dependency surface.
- **Automated vulnerability scanning is now part of the pipeline.** On every pull request and on a weekly schedule, the project runs OSV-Scanner to surface any newly disclosed advisories in its dependencies, keeping the maintainers (and you) informed.
- **A modern, reliable toolchain.** The project migrated to ESLint 9 with flat configuration, standardized continuous integration on Node.js 24 with clean, reproducible installs, refreshed its license records, and rebuilt the compiled action bundle that actually runs in your workflows.

Along the way, the package metadata was corrected to accurately describe the project and its UnitVectorY-Labs home, replacing values inherited from an old template.

## Why it matters

Most of the time, the best release is the one you don't notice — and that's the point here. Your existing cleanup jobs keep behaving exactly as before, so there is no risk of surprising deletions or changed retention semantics. What changes is the foundation they run on.

Two things make this release worth picking up. First, security hygiene for a tool that runs with write access to your packages matters. By unblocking the dependency chain that was holding back security updates, this release puts the Action back on a path where patches reach you promptly rather than stalling. Second, a well-maintained dependency pipeline is what makes the fork sustainable: it is the groundwork that lets the container-reference protection delivered in the previous release — which carefully shields any image or attestation still reachable from a tagged container during GHCR untagged-cleanup — continue to be maintained and improved.

In short: nothing you depend on changed, but the plumbing that keeps it secure and maintainable got a thorough tune-up.

## Upgrading

Upgrading from `v5.0.1-uvy.1` is a drop-in change — bump the version reference and nothing else. No inputs, permissions, token scopes, or runtime settings need to change.

```yaml
- uses: UnitVectorY-Labs/delete-package-versions@aa34e27dab37754c094e007926a5fa0a9ead6def # v5.0.1-uvy.2
  with:
    package-name: 'my-package'
    package-type: 'container'
    delete-only-untagged-versions: true
    min-versions-to-keep: '5'
```

One important note on pinning: this fork intentionally keeps the inherited upstream tags (like `@v5`) pointing at the original upstream code, which does **not** include the fork's container-reference protection. If you want that protection, pin the fork's release explicitly — `@v5.0.1-uvy.2` or the full commit SHA shown above — rather than a generic major-version tag.

A quick note on the version number: `5.0.1` is the upstream base this fork builds on, and the `-uvy.N` suffix marks this project's maintenance revisions. Despite the prerelease-like syntax, `v5.0.1-uvy.2` is published as a stable GitHub release, and this release was validated end to end — tests, formatting, lint, TypeScript compilation, reproducible packaging, and license checks all passing before the tag was cut.

Keeping your container registry and package repositories lean shouldn't mean taking on risk. With v5.0.1-uvy.2, the housekeeping you already trust keeps running exactly as you configured it — now on a dependency baseline that's ready for whatever comes next.

---

*Transparency note: this post was AI-generated using the model `unsloth/Qwen3.8-Flash-Next-GGUF:IQ4_XS`. It describes the release of [`delete-package-versions` v5.0.1-uvy.2](https://github.com/UnitVectorY-Labs/delete-package-versions/releases/tag/v5.0.1-uvy.2) in the [UnitVectorY-Labs/delete-package-versions](https://github.com/UnitVectorY-Labs/delete-package-versions) repository, and was generated on November 22, 2026. Authored by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
