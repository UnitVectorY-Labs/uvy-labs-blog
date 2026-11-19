---
layout: post
title: "ghorgsync v0.7.0 — Safer Syncing, Guarded Archived-Clone Cleanup, and a Truly Non-Interactive CLI"
date: 2026-11-19 01:15:00 +0000
tags: ["ghorgsync", "unsloth-qwen3-8-flash-next-gguf-iq4-xs"]
---

ghorgsync v0.7.0 was released on November 19, 2026. If you keep an entire GitHub organization or user account mirrored in a single local folder, this is a release focused on two things you'll feel right away: stronger protection against touching the wrong repository, and a long-requested way to reclaim disk from archived clones — safely. It also sharpens ghorgsync's core promise that the CLI never stops to ask you questions in the middle of a run.

## What's new

### Delete archived clones with `--delete-archived`

Repositories you've archived on GitHub stop syncing by default, but their old local folders hang around forever. The new `--delete-archived` flag cleans them up. Run it with `--dry-run` first to preview exactly which folders would be removed:

```
ghorgsync --delete-archived --dry-run
ghorgsync --delete-archived
```

Because deletion is the one thing a non-destructive-by-default tool should never get wrong, the feature is wrapped in guard rails:

- Only folders that GitHub reports as **archived** are candidates. Folders excluded for other reasons — or that ghorgsync simply doesn't recognize — are never touched.
- A folder is only deleted if it's a standard clone of the exact GitHub repository it claims to be. Linked worktrees, shallow clones, symlinks, and anything with a mismatched remote are retained.
- Unless you pass `--force`, ghorgsync also verifies that everything in the clone — branches, tags, stashes, and even reflog-only commits — already exists on GitHub. If you have unpublished local work, the folder is retained, not deleted. (Git-ignored content like build output doesn't block deletion.)
- The run summary reports what was deleted, planned, or retained.

Note that `--delete-archived --force` can permanently discard local work — it's the one explicitly sanctioned destructive path in the tool, so lean on `--dry-run`.

### `--clean` no longer prompts

`--clean` removes git-ignored content (build artifacts, caches) from your synced repos. It used to stop and ask `remove this ignored content? [y/N]` for every repository unless you passed `--force`. That prompt is gone: the flag itself is the authorization. You'll still see the plan — which files and how many bytes — printed before anything is removed, and `--dry-run` still works. This makes ghorgsync consistently non-interactive across every mode, so it behaves the same in your terminal, a cron job, or CI.

### Your repos won't be synced to the wrong place

Before fetching or syncing any existing clone, ghorgsync now verifies that the folder's `origin` remote actually points to the GitHub repository it's supposed to mirror. If the remote doesn't match — or can't be verified — the repo is left completely untouched and the run reports a new `identity-error`. This closes a subtle gap where a folder that merely shares a name with an org repo could be fetched into or cleaned. As a side effect, repos configured with non-canonical remotes (for example, a mirror on another host or a custom SSH alias) will now stop syncing with `identity-error` until the remote is corrected or the folder excluded.

### Honest exit codes and clearer reporting

A green run now really means a green run:

- Default sync, clone, and status modes exit with code **1** if any repo errored or collided, where previously many of these runs still exited **0**.
- Path collisions and unmanaged local git folders are now reported in **all** modes, not just the default one.
- A local git folder that doesn't belong to your configured org/user is now classified as a collision and flagged as an error, instead of being silently skipped as "unknown."
- The status summary gained `errors` and `empty` counters, exclusion output now tells you *why* a repo was excluded (archived vs. matching `exclude_repos`), positional arguments are rejected, and unknown flags exit with code **2**.

The documentation has been substantially rewritten to match actual behavior — including a clarification that `exclude_repos` entries are always unanchored Go regular expressions, so `^exact-name$` is the way to match one repository precisely.

## Why it matters

ghorgsync's whole value proposition is that you can point it at an organization and walk away: hundreds of clones created or updated in one pass without anything being clobbered. v0.7.0 deepens that trust in three ways. Identity verification means the tool can prove a local folder really is the repo it mirrors before it does any work in it. The exit-code overhaul means automation can finally rely on ghorgsync's results — if a pipeline says it succeeded, every repository actually synced. And `--delete-archived` shows how the project approaches destructive features: opt-in, previewable, and refusing to act unless your local history is already safely on GitHub.

Removing the `--clean` prompt rounds this out with a deliberate design principle: a sync tool should never block waiting on input it can't get. Scripts that relied on answering `N` at that prompt as a safety net should be audited — the flag alone now triggers cleanup.

## Upgrading

Upgrading is a drop-in replacement, and no configuration migration is needed — no config keys were added or removed. Grab the release the way you normally do:

```
go install github.com/UnitVectorY-Labs/ghorgsync@latest
```

or download prebuilt binaries for macOS, Linux, and Windows (amd64/arm64/386) with md5/sha256 checksums from the [v0.7.0 release page](https://github.com/UnitVectorY-Labs/ghorgsync/releases/tag/v0.7.0).

Two small watch-outs for automation: scripts that branch on ghorgsync's exit code may now see `1` (or `2` for unknown flags) in situations that previously exited `0`, and repos with non-canonical GitHub remotes will now surface `identity-error` instead of quietly syncing. A first `--status` run after upgrading is a good way to see where you stand.

With archived clones finally reclaimable and every claim the tool makes now backed by its exit status, v0.7.0 makes ghorgsync the most dependable version yet for keeping a whole organization mirrored on disk.

---

*Transparency note: this post was AI-generated using the model unsloth/Qwen3.8-Flash-Next-GGUF:IQ4_XS, based on the [UnitVectorY-Labs/ghorgsync](https://github.com/UnitVectorY-Labs/ghorgsync) repository and its [v0.7.0 release](https://github.com/UnitVectorY-Labs/ghorgsync/releases/tag/v0.7.0). Generated on 2026-11-19. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
