---
layout: post
title: "localmodelproxy v0.9.3: A Maintenance Refresh With Built-In Vulnerability Scanning"
date: 2026-10-06 18:03:12 -0400
tags: ["localmodelproxy", "unsloth-qwen3-8-flash-next-gguf-qwen3-8-flash-next-ud-iq4-xs"]
---

On **October 6, 2026**, we released **localmodelproxy v0.9.3**. This is a small, deliberate maintenance release: no new endpoints, no new flags, and no changes to how you configure or talk to the proxy. What it does deliver is a refreshed set of Go dependencies in the shipped binary and a meaningful step forward in how the project watches its own security posture over time.

If you already run localmodelproxy — one local OpenAI-compatible endpoint at `http://127.0.0.1:8080/v1` fanning requests out to your mix of local and hosted model backends — nothing about your day-to-day workflow changes in this version. Upgrading is a drop-in binary swap, and it is worth doing.

## What's new

**Refreshed dependencies in the binary.** v0.9.3 picks up routine minor bumps to the Go libraries that localmodelproxy is built on, including `golang.org/x/oauth2` (which powers the OAuth client-credentials backend auth) and `golang.org/x/term` (which drives the interactive terminal UI). These are steady, low-risk updates that keep the shipped binary current with upstream Go packages. They are not responses to any known vulnerability in the proxy, and you should not expect any change in behavior from them.

**Official Go vulnerability scanning, now automated.** The most user-relevant addition this cycle is not a feature of the proxy itself but a commitment around it: localmodelproxy now runs Go's official `govulncheck` scanner automatically on every push and pull request, plus a recurring weekly scan, with results published to the repository's security tab. That sits alongside the existing CodeQL and Semgrep checks. The practical upshot for you is transparency — if a vulnerability ever lands in code that ships in localmodelproxy, it gets flagged publicly and quickly rather than quietly.

**CI and tooling housekeeping.** The remainder of the release is infrastructure: refreshed CodeQL actions and assorted continuous-integration tweaks. These improve how the project is built and checked, and have no impact on the proxy you run.

To be direct about scope: **v0.9.3 contains no new features, no new configuration options, and no bug fixes to proxy behavior.** It is a maintenance release, and it is presented as one.

## Why it matters

For a tool that sits between your AI clients and your API keys, "nothing changed, and here is proof" is a legitimate kind of progress.

A few things make this release worth the short upgrade:

- **Your binary stays current.** Even when the application logic is untouched, the libraries underneath it keep moving. Shipping those updates on a regular cadence means the version you install today is built on current, maintained dependencies rather than something that drifted months ago.
- **Security becomes ongoing, not occasional.** The new automated `govulncheck` scanning turns dependency vigilance from something that happens when someone remembers to look into a scheduled, public process. Combined with CodeQL and Semgrep, it means the released code is continuously examined for known issues — a small but real trust signal for a tool that handles upstream credentials on your behalf.
- **Upgrade friction stays at zero.** Because nothing in the config schema, the API surface (`/healthz`, `/v1/models`, `/v1/chat/completions`), or the CLI flags changed, moving from v0.9.2 to v0.9.3 is purely mechanical. There is no migration, no reconfiguration, and no new decision to make.

This is what a healthy pre-1.0 project looks like between feature releases: keeping the foundations tidy and the guardrails on, so the next round of user-facing work lands on solid ground.

## Getting v0.9.3

If you are already on v0.9.2, stop the proxy, swap in the new binary, and start it again — your existing YAML config works unchanged. If you are new to localmodelproxy, this is a fine, stable place to start.

**Install or upgrade with Go:**

```
go install github.com/UnitVectorY-Labs/localmodelproxy@latest
```

**Or download a prebuilt binary** for your platform from the [v0.9.3 release page](https://github.com/UnitVectorY-Labs/localmodelproxy/releases/tag/v0.9.3). Each archive is published with `.md5` and `.sha256` checksum sidecars so you can verify the download:

| Platform | Asset |
|---|---|
| Linux | `localmodelproxy-v0.9.3-linux-386.tar.gz`, `localmodelproxy-v0.9.3-linux-amd64.tar.gz`, `localmodelproxy-v0.9.3-linux-arm64.tar.gz` |
| macOS | `localmodelproxy-v0.9.3-darwin-amd64.tar.gz`, `localmodelproxy-v0.9.3-darwin-arm64.tar.gz` |
| Windows | `localmodelproxy-v0.9.3-windows-386.zip`, `localmodelproxy-v0.9.3-windows-amd64.zip` |

Point your OpenAI-compatible clients at `http://127.0.0.1:8080/v1`, run `localmodelproxy --headless` with your config (or launch the terminal UI with no flags), and you are routing to all of your backends through one loopback-only endpoint with credentials kept in one place.

localmodelproxy is MIT-licensed and free to use. For the full list of changes in this version, see the [release notes](https://github.com/UnitVectorY-Labs/localmodelproxy/releases/tag/v0.9.3) and the [v0.9.2...v0.9.3 comparison](https://github.com/UnitVectorY-Labs/localmodelproxy/compare/v0.9.2...v0.9.3).

---

*Transparency note: this post was AI-generated using the model `unsloth/Qwen3.8-Flash-Next-GGUF:Qwen3.8-Flash-Next-UD-IQ4_XS`, based on the [localmodelproxy repository](https://github.com/UnitVectorY-Labs/localmodelproxy), its [v0.9.3 release](https://github.com/UnitVectorY-Labs/localmodelproxy/releases/tag/v0.9.3), and generated on October 6, 2026. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
