---
layout: post
title: "ghscanscope v0.2.0: PostgreSQL backend and explicit migrations"
date: 2026-10-15 08:56:49 +0000
tags: ["ghscanscope", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

On 2026-10-15, ghscanscope v0.2.0 was released for the local-first workbench that syncs, triages, and finds patterns in GitHub code-scanning alerts. This update moves the workbench from a single-user SQLite cache toward team use by adding an optional PostgreSQL backend and giving users explicit control over schema evolution with a new migrate command. SQLite remains the default with no changes required for existing users.

## What's new

PostgreSQL backend support is now available. The `--db` flag and `GHSCAN_SCOPE_DB` environment variable accept `postgres://` or `postgresql://` connection URLs in addition to SQLite file paths. Selecting a PostgreSQL URL routes sync, findings, web, and migrate commands to a shared server cache via the pgx driver, while SQLite continues to work unchanged as the default.

A new `migrate` command provides explicit schema control: `ghscanscope migrate [--db PATH_OR_URL] up|down|status [VERSION]`. Migrations are managed with Goose and ship inside the binary. `status` shows the current database version, `up` applies pending upgrades, and `down` reverts migrations. Normal application startup still applies upgrades automatically; the command is for planned rollouts and troubleshooting.

Documentation has been expanded with `docs/DATABASE.md` covering backend selection, PostgreSQL configuration, TLS guidance, backups, and operations for both SQLite and PostgreSQL. Help text for `sync`, `findings`, and `web` now shows `--db PATH_OR_URL`, and the README includes a PostgreSQL connection example.

## Why it matters

For individual contributors, nothing changes. Existing SQLite caches are auto-adopted on first run of v0.2.0 and the workbench behaves as before.

For teams, PostgreSQL enables a shared cache that multiple workstations and CI jobs can read from without re-syncing from GitHub. That makes triage faster, allows consistent filtering and exports across a group, and supports server-backed dashboards. Explicit migrations give operators visibility and control over schema changes, which is important when upgrading a shared database or testing changes before rollout.

## Upgrade and installation

Install or update with the usual method: `go install github.com/UnitVectorY-Labs/ghscanscope@latest` or download pre-built binaries from the v0.2.0 release assets for darwin, linux, and windows.

Existing SQLite users do not need to change configuration. The first run of v0.2.0 will apply pending schema upgrades automatically.

To start using PostgreSQL:
1. Provision PostgreSQL 18+ and a role with access to the schema.
2. Set `GHSCAN_SCOPE_DB` to a connection URL, for example `postgresql://scanner@db.example.com/ghscanscope?sslmode=verify-full`, or pass `--db` per command.
3. Run `ghscanscope migrate up` before first use, or let `sync`/`web` apply upgrades automatically.

Back up before downgrading. `migrate down 0` deletes all application tables and cached data, and downgrading loses explicit severity provenance introduced in this release. Moving between SQLite and PostgreSQL does not copy data; selecting a new target starts a separate cache rebuilt via `sync`.

Full details are in the release notes at https://github.com/UnitVectorY-Labs/ghscanscope/releases/tag/v0.2.0 and in `docs/DATABASE.md`.

This post was AI-generated. Model used: unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Repository: UnitVectorY-Labs/ghscanscope, release v0.2.0, date of generation 2026-10-18. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
