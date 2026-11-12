---
layout: post
title: "ghscanscope v0.4.0 Adds CISA Known Exploited Vulnerabilities Integration"
date: 2026-11-12 01:06:36 +0000
tags: ["ghscanscope", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

ghscanscope v0.4.0 was released on 2026-11-12. This release adds first-class support for CISA Known Exploited Vulnerabilities and modernizes JSON handling for more reliable findings output.

ghscanscope remains a local-first workbench for syncing, triaging, and finding patterns in GitHub code-scanning alerts. With v0.4.0 the tool now connects your code-scanning findings to the official CISA KEV catalog, making it easier to surface alerts for vulnerabilities that are actively exploited in the wild.

## What's new

**CISA KEV catalog integration**

A new `ghscanscope kev` command ingests the official CISA KEV catalog into your local database. The database schema is migrated to version 3 with a new `kev` table, and the migration runs automatically when the database is opened.

Findings are annotated against CVE identifiers found in rule ID, rule name, rule description, message, and tags. Matching alerts receive KEV metadata.

In the CLI, `ghscanscope findings` gains a `--kev` flag to show only findings matching CISA KEV. Verbose output prints CISA KEV lines for matching findings, and JSON output now includes a `kevs` array in each Finding object.

The web UI adds a KEV filter checkbox in the filter bar. Issue groups, repository rows, and individual alerts display a red KEV badge when a match exists. The alert detail page shows a KEV callout panel with CVE, name, CISA description, affected product, required action, date added, due date, ransomware campaign use, notes, and a link to the CISA catalog. Group and repository views flag KEV true when any contained alert matches.

**JSON handling modernization**

The application migrates to Go's `encoding/json/v2` and `encoding/json/jsontext` for strict parsing and deterministic output. GitHub client decoding now errors on duplicate keys, invalid UTF-8, and trailing values. Findings JSON output uses deterministic 2-space indentation with a trailing newline.

**Toolchain updates**

Go is updated to 1.27.4 and dependencies are bumped, including `github.com/jackc/pgx/v5` and `modernc.org/sqlite`. CI workflows add weekly OSV-Scanner scans; the govulncheck workflow and add-to-project workflow are retired.

## Why it matters

Connecting code-scanning alerts to CISA KEV helps teams prioritize remediation for vulnerabilities that are actively exploited rather than treating all findings equally. The new filter, badges, and detailed callouts make exploited issues visible at a glance in both CLI and web UI, supporting risk-based triage and compliance reporting.

Deterministic JSON output improves reliability for automation and downstream tooling that consumes findings exports. Strict parsing reduces silent data issues when syncing from GitHub.

## Upgrade and installation

Existing databases auto-migrate to schema version 3 on open. Downgrading to v0.3.x after migration is unsupported.

Install v0.4.0 via `go install github.com/UnitVectorY-Labs/ghscanscope@latest` or download pre-built binaries from the release assets. Authenticate with a GitHub token or `gh auth login`, then sync and start the web UI:

```
ghscanscope sync --org <org>
ghscanscope web
```

Ingest the KEV catalog:

```
ghscanscope kev
```

You can repeat this periodically to keep the catalog current. Explore exploited findings with:

```
ghscanscope findings --kev
```

Full release notes and binaries are available at https://github.com/UnitVectorY-Labs/ghscanscope/releases/tag/v0.4.0.

*This post was AI-generated. The model used was unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Reference: repository UnitVectorY-Labs/ghscanscope, release v0.4.0, date of generation 2026-11-12. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
