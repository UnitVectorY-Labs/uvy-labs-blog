---
layout: post
title: "ghprmerge v0.3.0: Introducing Report Mode for PR Discovery Across Organizations"
date: 2026-03-15 00:43:51 -0000
tags: ["ghprmerge", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## Introducing Report Mode in ghprmerge v0.3.0

Today we're excited to announce the release of **ghprmerge v0.3.0**, featuring a powerful new capability that helps teams get a consolidated view of pull requests across their entire GitHub organization. Released on March 15, 2026, this update adds "Report Mode" - a read-only discovery tool designed for teams managing automated dependency updates at scale.

If you're dealing with dozens or hundreds of repositories each containing similar Dependabot or automated PRs, understanding the landscape before taking action has never been easier.

---

## What's New

### Report Mode (`--report`)

The headline feature in v0.3.0 is **Report Mode** - a new operational mode that scans all open pull requests across your organization and groups them by source branch name. Unlike normal mode which performs merge or rebase operations, report mode is purely for discovery and planning.

#### Key Capabilities

- **Branch-based grouping**: Automatically clusters PRs that share the same source branch (like `dependabot/go_modules/foo-1.2.3`)
- **Flexible filtering**: Filter by branch prefix (e.g., `dependabot/`) to focus on specific types of updates
- **Minimum group size**: Only show groups with a configurable minimum number of PRs, filtering out noise
- **Multiple verbosity levels**: Choose from `brief`, `standard`, or `verbose` output based on your needs
- **JSON export**: Get structured output for scripting, reporting, or integration with other tools

#### Example Usage

```bash
# Get an overview of all open PRs grouped by branch
ghprmerge --org myorg --report

# Focus on Dependabot updates only
ghprmerge --org myorg --report --source-branch-prefix dependabot/

# Only show groups affecting 3+ repositories
ghprmerge --org myorg --report --min-group-size 3

# Export to JSON for custom reporting
ghprmerge --org myorg --report --json

# Minimal output for quick scanning
ghprmerge --org myorg --report --verbosity brief
```

#### Output Preview

Each PR in the report includes its readiness status, helping you understand which ones are merge-ready:

- `passing`: All checks pass, no conflicts, branch is up-to-date
- `needs-rebase`: Branch is behind the default branch
- `conflict`: PR has merge conflicts
- `checks failing`: One or more CI checks failed
- `checks pending`: CI checks are still running
- `no checks configured`: No CI checks are defined

---

## Why It Matters

Managing automated PRs across an organization can feel like looking for needles in haystacks. Before v0.3.0, teams had limited visibility into the scope and distribution of updates spanning multiple repositories.

**Report mode changes that.**

Now you can:
- **Understand the scope** of a dependency update before deciding which repositories to merge it in
- **Prioritize effectively** by seeing which updates affect many repositories versus just one or two
- **Plan your workflow** without making any changes - report mode is read-only by design
- **Generate reports** for stakeholders using JSON output

This is particularly valuable when rolling out new dependency versions, evaluating security patches, or simply getting a pulse on what automated tools are doing across your codebase.

---

## Upgrade and Installation

### No Breaking Changes

v0.3.0 is fully backward-compatible. If you're upgrading from v0.2.1 or earlier, all existing workflows continue to work exactly as before. The default behavior remains unchanged unless you explicitly pass `--report`.

### Installation

Download pre-built binaries from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/ghprmerge/releases/tag/v0.3.0):

**Linux:**
```bash
curl -LO https://github.com/UnitVectorY-Labs/ghprmerge/releases/download/v0.3.0/ghprmerge-v0.3.0-linux-amd64.tar.gz
tar -xzf ghprmerge-v0.3.0-linux-amd64.tar.gz
sudo mv ghprmerge /usr/local/bin/
```

**macOS:**
```bash
curl -LO https://github.com/UnitVectorY-Labs/ghprmerge/releases/download/v0.3.0/ghprmerge-v0.3.0-darwin-amd64.tar.gz
tar -xzf ghprmerge-v0.3.0-darwin-amd64.tar.gz
sudo mv ghprmerge /usr/local/bin/
```

**Windows:**
Download `ghprmerge-v0.3.0-windows-amd64.zip` from the releases page and extract to your PATH.

All assets include checksums for verification (MD5 and SHA256).

### Authentication

Like previous versions, v0.3.0 authenticates using either:
- The `GITHUB_TOKEN` environment variable (for CI/CD environments)
- The `gh` CLI tool's stored credentials (for local development)

---

## What's Next

Report mode represents our commitment to making large-scale PR management more transparent and controllable. We're continuing to iterate based on user feedback, with an eye toward even better discovery and workflow capabilities in future releases.

Head over to the [GitHub repository](https://github.com/UnitVectorY-Labs/ghprmerge) to try v0.3.0, and feel free to open issues or pull requests if you have suggestions or find bugs.

---

**Transparency Note:** This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The original release (v0.3.0) was published on March 15, 2026 from the [ghprmerge](https://github.com/UnitVectorY-Labs/ghprmerge/releases/tag/v0.3.0) repository. This post was authored by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
