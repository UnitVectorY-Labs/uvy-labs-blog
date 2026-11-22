---
layout: post
title: "gitrepoforge v0.4.0: Targeted Runs, Selective Bulk PRs, and Safer Commits"
date: 2026-11-22 10:09:00 -0500
tags: ["gitrepoforge", "unsloth-qwen3-8-flash-next-gguf-iq4-xs"]
---

gitrepoforge v0.4.0 was released on November 22, 2026, and it is a release about precision. Until now, running gitrepoforge across a workspace meant auditing or applying *all* managed files in every repo at once. With v0.4.0, you can narrow any run to exactly the files you care about, land the results on a branch of your choosing, and trust that the commits gitrepoforge makes contain only the changes it was asked to make. If you manage file consistency — licenses, CI workflows, shared metadata — across a fleet of repositories, these changes unlock a workflow that was previously awkward: the selective bulk PR.

## What's new

### Target any subset of managed files with `--file` and `--exclude-file`

The headline feature of v0.4.0 is file filtering, available on all three core commands — `validate`, `apply`, and `report`:

- **`--file <pattern>`** restricts the run to managed files matching a glob. It can be repeated, and supports the familiar `*`, `?`, `[...]`, and recursive `**` patterns.
- **`--exclude-file <pattern>`** carves exceptions out of the selection. Exclusions always win over includes, so you can say "everything in this directory except these files" without contortions.

A practical example: audit every repository in your workspace for drift in CI workflows only:

```bash
gitrepoforge validate --file '.github/workflows/*.yml'
```

One thoughtful detail: when a filter is active, the generated `.managedfiles` manifest is skipped unless you explicitly include it. That means filtered runs don't churn the manifest, keeping diffs and PRs focused on exactly what you asked for.

### Put the results where you want them with `--branch`

The new `--branch <name>` flag on `apply` overrides the branch name configured in your action, for that run only. Combined with file filtering, this enables the **selective bulk PR** pattern described in the docs — for instance, updating only CI workflows across every repo onto a single shared branch:

```bash
gitrepoforge apply --action pr \
  --file '.github/workflows/*.yml' \
  --exclude-file '.github/workflows/release*.yml' \
  --branch chore/update-ci-workflows
```

Your config repo remains the source of truth for your actions; `--branch` just redirects where this particular run lands. The flag supports the same `{{param}}` placeholders as configured branch names, and requires an action with `create_branch` enabled, so the safety rails of your existing GitOps setup stay intact.

### Commits now contain only what gitrepoforge applied

`apply` with commit enabled used to stage everything in the working tree. Now it stages only the paths of the findings it actually applied. In day-to-day use this means a gitrepoforge commit is exactly what it claims to be: the managed-file changes you asked for, nothing swept in by accident.

### Under the hood (only if you build from source)

JSON output and config-schema generation have moved to Go's next-generation `encoding/json/v2` library, with output behavior deliberately preserved — your reports and schemas look the same as before. One note for anyone compiling from source: this puts the Go 1.27.x toolchain line as the build requirement. Prebuilt binaries are unaffected.

## Why it matters

gitrepoforge has always solved the "consistency at fleet scale" problem: define your licenses, CI files, and shared metadata once, and let the tool detect and repair drift everywhere. But fleets rarely move in lockstep. Sometimes you want to roll out a CI template change without touching license files. Sometimes you want to audit one category of drift before committing to fixing all of it. Sometimes you want the entire fleet's changes to arrive on one reviewable branch instead of a storm of per-repo branches.

Filtering turns gitrepoforge from an all-or-nothing sweep into a surgical instrument. You can:

- **Stage rollouts.** Apply a new license header fleet-wide today, and defer the CI workflow migration to a targeted run next week.
- **Keep reviews small and focused.** A filtered PR that changes only `.github/workflows/*.yml` (minus the release workflows) is far easier for repo owners to approve than a grab-bag of every pending change.
- **Debug with confidence.** A filtered `report` or `validate` shows drift for exactly the files you're investigating, without noise from the rest of the workspace.

And the commit-scoping change quietly strengthens the trust contract of GitOps automation: when a bot opens a PR on your repo, the diff should contain only the bot's intended changes. v0.4.0 guarantees that.

## Upgrading

v0.4.0 is a safe, drop-in upgrade. There are no configuration changes — your `.gitrepoforge`, root config, and config-repo layouts work exactly as before. The new flags are purely additive; run gitrepoforge without them and behavior is identical to v0.3.x.

Grab the prebuilt binary for your platform (macOS, Linux, and Windows on amd64/arm64, with sha256 and md5 checksums) from the [v0.4.0 release page](https://github.com/UnitVectorY-Labs/gitrepoforge/releases/tag/v0.4.0), and point your next fleet run at a subset of files to see the difference. The [project repository](https://github.com/UnitVectorY-Labs/gitrepoforge) includes full command documentation to get you started.

Targeted runs are the kind of capability that changes how you operate a fleet — from "run it all and hope the diffs are reviewable" to "run exactly what I intend, on exactly the branch I chose." That's gitrepoforge v0.4.0.

---

*Transparency note: this post was AI-generated using the model `unsloth/Qwen3.8-Flash-Next-GGUF:IQ4_XS`, based on the [gitrepoforge repository](https://github.com/UnitVectorY-Labs/gitrepoforge) and its [v0.4.0 release](https://github.com/UnitVectorY-Labs/gitrepoforge/releases/tag/v0.4.0), generated on 2026-11-22. Authored by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
