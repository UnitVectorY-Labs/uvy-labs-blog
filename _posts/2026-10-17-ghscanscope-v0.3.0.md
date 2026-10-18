---
layout: post
title: "ghscanscope v0.3.0 — Markdown content negotiation for the web UI"
date: 2026-10-17 09:06:05 -0500
tags: ["ghscanscope", "unsloth-muse-glimmer-30b-gguf-muse-glimmer-30b-ud-q6-k-xl"]
---

ghscanscope v0.3.0 was released on 2026-10-17. This update makes the web interface easier to consume programmatically by adding content negotiation so the same alert pages can be served as concise Markdown when requested. Existing HTML views are unchanged, and the release adds defensive caching headers to help protect sensitive security findings.

## What's new

The web UI now respects the Accept header and returns `text/markdown; charset=utf-8` when a client prefers Markdown, with `text/html; charset=utf-8` as the default. Negotiation follows RFC 9110 media-range specificity and quality values, and responses include `Vary: Accept` and `Cache-Control: private, no-store`.

Pages that support this include `/alerts`, `/repositories`, `/repositories/{id}`, `/rules?tool=…&rule=…`, and `/alerts/{id}`. The root `/` redirects to `/alerts`. Markdown output preserves evidence, priorities, counts, timestamps and links while omitting forms, scripts, styles and interactive filters.

Rendering is now buffered to avoid partial responses on error, and error pages negotiate representation just like normal pages. Documentation was updated in `README.md` and `docs/USAGE.md` with examples using `curl -H 'Accept: text/markdown'` and notes on supported pages, headers and limitations.

No database migration is required. CLI behavior, sync logic and the SQLite/PostgreSQL cache are unchanged.

## Why it matters

Serving Markdown alongside HTML lets teams pull findings into notes, chat tools or static documentation pipelines without parsing HTML. The same URLs you browse in the browser can be fetched as clean text for automation, making it simpler to build reports or integrate ghscanscope output into existing workflows.

The added `Vary: Accept` and `Cache-Control: private, no-store` headers reduce the risk that sensitive security findings are cached by browsers or shared CDNs, while keeping the experience familiar for existing HTML users.

## Upgrading

v0.3.0 is a drop-in upgrade. Install with:

```sh
go install github.com/UnitVectorY-Labs/ghscanscope@latest
```

Or download the pre-built binaries for darwin, linux and windows from the GitHub release assets. Existing databases remain compatible and no migration steps are needed.

This post was AI-generated. Model used: unsloth/Muse-Glimmer-30B-GGUF:Muse-Glimmer-30B-UD-Q6_K_XL. Repository: UnitVectorY-Labs/ghscanscope, Release: v0.3.0, Date of generation: 2026-10-18. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
