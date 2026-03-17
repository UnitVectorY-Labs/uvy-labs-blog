---
layout: post
title: "ghprmerge v0.3.0: Introducing Report Mode for Organization-Wide PR Discovery"
date: 2026-03-15 00:43:51 -0500
tags: [ghprmerge, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## A New Way to Discover and Analyze Pull Requests Across Your Organization

Today we're excited to announce the release of **ghprmerge v0.3.0**, a significant update that expands the tool's capabilities from automated PR management into the realm of discovery and reporting. Released on March 15, 2026, this version introduces a powerful new "report mode" that gives teams unprecedented visibility into pull requests spanning their entire GitHub organization.

If you've ever wanted to see at a glance which repositories have open PRs for the same Dependabot update, or needed to audit your organization's pending changes before taking action, this release is for you.

## What's New

### Report Mode: See the Big Picture

The headline feature in v0.3.0 is **report mode**, a read-only analysis capability that groups open pull requests by their source branch across all repositories in your organization. This transforms ghprmerge from a purely action-oriented tool into a dual-purpose solution for both discovery and automation.

**Key capabilities:**

- **Group PRs by source branch**: See all repositories with PRs from the same branch (e.g., `dependabot/go_modules/foo-1.2.3`)
- **Filter by prefix**: Focus on specific types of PRs using `--source-branch-prefix` (perfect for targeting only Dependabot or custom automation branches)
- **Customize grouping threshold**: Use `--min-group-size` to show only branches with multiple PRs, filtering out noise
- **Multiple output formats**: Choose from three verbosity levels (`brief`, `standard`, `verbose`) or export structured JSON data

**Quick examples:**

```bash
# Get an overview of all grouped PRs across your organization
ghprmerge --org myorg --report

# Focus only on Dependabot updates
ghprmerge --org myorg --report --source-branch-prefix dependabot/

# Only show branches with 3+ repositories affected
ghprmerge --org myorg --report --min-group-size 3

# Export to JSON for integration with other tooling
ghprmerge --org myorg --report --json
```

The JSON output is particularly powerful for teams building custom dashboards or integrating PR discovery into their CI/CD pipelines:

```json
{
  "groups": [
    {
      "sourceBranch": "dependabot/go_modules/foo-1.2.3",
      "count": 3,
      "pullRequests": [
        {
          "repository": "repo-a",
          "number": 123,
          "status": "passing",
          "title": "Bump foo",
          "url": "https://github.com/..."
        }
      ]
    }
  ]
}
```

### Smarter Status Evaluation

Report mode doesn't just list PRs—it evaluates each one using the same sophisticated status assessment logic as ghprmerge's normal operation. You'll see whether each PR is `passing`, `needs-rebase`, has `conflict`, or if checks are `failing` or `pending`. This means you're not just seeing what exists—you're getting actionable intelligence about what's ready to move forward.

## Why It Matters

The addition of report mode addresses a real pain point for teams managing multiple repositories: **visibility before action**.

Before v0.3.0, ghprmerge excelled at automating the mechanical work of merging or rebasing PRs across repositories—but you had to know which branches to target. Now, you can first run a report to understand the landscape:

- Identify duplicate dependency updates across your organization before committing to merges
- Plan bulk operations with confidence, knowing exactly what you're about to change
- Audit pending changes during release planning or code freeze periods
- Build custom workflows by consuming structured JSON data

This is especially valuable for teams using Dependabot or similar automation tools, where the same library update might spawn PRs in dozens of repositories. Report mode lets you spot patterns and make informed decisions about which updates to prioritize.

The feature maintains complete backward compatibility—all existing flags and modes continue to work exactly as before. Report mode is opt-in via the new `--report` flag, and the tool includes smart validation to prevent incompatible flag combinations.

## Get Started

### Upgrading

If you're upgrading from v0.2.1 or earlier, the process is straightforward:

1. Download the appropriate binary for your platform from the [v0.3.0 releases page](https://github.com/UnitVectorY-Labs/ghprmerge/releases/tag/v0.3.0)
2. Replace your existing `ghprmerge` binary
3. Try out report mode with `ghprmerge --org your-org --report`

Pre-built binaries are available for Linux (amd64, 386, arm64), macOS (amd64, arm64), and Windows (amd64, 386). Each release includes MD5 and SHA256 checksums for verification.

No configuration changes or migration steps are required—your existing workflows continue to work unchanged.

### Where to Learn More

For complete documentation on the new report mode flags and output formats, check out the updated [USAGE](https://github.com/UnitVectorY-Labs/ghprmerge/blob/main/docs/USAGE.md) and [EXAMPLES](https://github.com/UnitVectorY-Labs/ghprmerge/blob/main/docs/EXAMPLES.md) documentation in the repository.

---

*Transparency note: This release announcement was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model on March 15, 2026. The post is based on official release information from [UnitVectorY-Labs/ghprmerge v0.3.0](https://github.com/UnitVectorY-Labs/ghprmerge/releases/tag/v0.3.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).*
