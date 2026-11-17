---
layout: post
title: "bulkfilepr v0.3.0: A CLI That Explains Itself"
date: 2026-11-17 02:43:40 +0000
tags: ["bulkfilepr", "unsloth-qwen3-8-flash-next-gguf-iq4-xs"]
---

UnitVectorY-Labs has released **bulkfilepr v0.3.0** on November 17, 2026 — the eighth
release of the tool and its first since September. bulkfilepr is a small, focused command-line
utility that keeps standardized files — CI workflows, `CODEOWNERS`, Dockerfiles, lint
configs, templates — in sync across many local GitHub repositories: for each repo it applies
a file update, commits to a deterministic branch, pushes, and opens a pull request via the
GitHub CLI. This release doesn't add new engine capabilities; instead, it's the polish
release. The CLI now explains itself far better, fails cleanly when you misuse it, reports
errors more compactly, and fixes a silent bug that could bite anyone using `match` mode
against multiple known file versions.

## What's new

**A `--help` that actually teaches the tool.** Running `bulkfilepr --help` (or
`bulkfilepr apply --help`) now prints a complete mini-guide: a usage synopsis, prerequisites
(Git, an authenticated `gh`, a clean checkout, push/PR permissions), worked examples, an
explanation of the three modes (`upsert`, `exists`, and `match`), what the `Action` and
`Reason` fields in the output mean, and the exit codes the tool uses. Flag documentation now
includes defaults that were previously undocumented — the generated branch name, commit
message, and PR title/body. If a teammate has ever asked "what does bulkfilepr do if the
branch already exists?", the answer is now right in the help text.

**One-line usage errors with a clear exit code.** Typos and missing flags used to dump the
entire usage block every time. Now every usage mistake — a missing `--mode`, an unknown flag,
a stray subcommand — prints a single concise line to stderr and exits with code `2`, pointing
you to `--help`. Speaking of exit codes, they're now formally documented: `0` for success
(including intentional no-ops and dry runs), `1` for operational failures, and `2` for
invalid usage — a practical detail if you script bulkfilepr across a fleet of repos.

**A real bug fix: repeatable `--expect-sha256`.** In `match` mode, `--expect-sha256` tells
bulkfilepr which existing file hashes are acceptable to update. Previously, passing the flag
more than once silently overwrote earlier values — only the last hash counted, so a run
intended to match several known old versions would quietly skip the others. In v0.3.0,
repeated `--expect-sha256` flags accumulate as you'd always expect, and the existing
comma-separated form keeps working. The docs also gained guidance on computing those old
hashes with `sha256sum` / `shasum -a 256`.

**Stricter argument handling.** Leftover positional arguments are now rejected instead of
silently ignored. This is the one behavior change to be aware of when upgrading: a script
that passed extra junk arguments and relied on them being ignored will now get an error
telling it to put all options up front. For correct invocations, nothing changes.

**Calmer failure diagnostics.** When a `git` or `gh` command fails under the hood, bulkfilepr
no longer echoes the entire command output into the error. You get a single, bounded line
naming the failing command, its exit status, and a trimmed diagnostic (capped at 500
characters) — far easier to scan when you're running this across dozens of repositories, and
less likely to flood your CI logs.

**Documentation corrections.** The usage docs now accurately describe long-standing
`--dry-run` behavior: a dry run still creates no branches, writes no files, and opens no
PRs, but it *may* switch a clean checkout to the repository's default branch while
evaluating the update. This is a docs fix, not a behavior change — but it's worth knowing.

The rest of the release is behind-the-scenes maintenance: dependency bumps for the project's
own CI actions, expanded security scanning, and build toolchain updates. There are no changes
to runtime dependencies, no new permissions or configuration, and nothing new to set up.
Notably, the project also flipped its own status badge from "Work In Progress" to
**Active** — bulkfilepr is open for business.

## Why it matters

bulkfilepr's core workflow — validate a checkout, apply a standardized file, open a PR — has
been solid since the v0.2.x line. What v0.3.0 improves is the experience of *operating* it,
which is exactly what matters for a tool designed to be scripted across many repositories.

Rich, example-driven help lowers the barrier for a new user (or a future you, six months
later, mid-incident) to use the tool correctly on the first try. Clean usage errors and
documented exit codes make bulkfilepr friendlier to wrap in CI pipelines and fleet scripts,
where you need to distinguish "nothing to do" from "used it wrong" from "something broke."

And the `--expect-sha256` fix matters in the quiet way correctness fixes do: if you were
using `match` mode to migrate files only from a known set of older versions, the tool may
have been skipping matches it should have applied — with no warning. After upgrading,
re-run any scripted `match` workflows that passed the flag multiple times; they may now
find repositories they previously passed over.

## Upgrading and getting started

Upgrading is a drop-in swap — same flags, same requirements, no config migrations. If you
installed from source, just re-run:

```bash
go install github.com/UnitVectorY-Labs/bulkfilepr@latest
```

Prebuilt binaries for Linux, macOS, and Windows (with md5/sha256 checksums) are available on
the [v0.3.0 releases page](https://github.com/UnitVectorY-Labs/bulkfilepr/releases/tag/v0.3.0).
Verify the upgrade with `bulkfilepr --version`, and confirm your GitHub CLI is authenticated
with `gh auth status`.

If you're new to bulkfilepr, the quickest taste is a dry run against one of your repos:

```bash
bulkfilepr apply \
  --repo-path .github/workflows/ci.yml \
  --new-file ~/standards/ci.yml \
  --mode upsert \
  --dry-run
```

From there, the rewritten `--help` output and the docs in the repository
(`docs/INSTALL.md`, `docs/USAGE.md`, `docs/EXAMPLES.md`) will walk you through the rest —
including how to script repeated invocations across your whole repository fleet.

---

*Transparency note: this post was AI-generated by
[release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller) using the
model `unsloth/Qwen3.8-Flash-Next-GGUF:IQ4_XS`, based on the
[bulkfilepr repository](https://github.com/UnitVectorY-Labs/bulkfilepr) and its
[v0.3.0 release](https://github.com/UnitVectorY-Labs/bulkfilepr/releases/tag/v0.3.0).
Date of generation: November 17, 2026.*
