---
layout: post
title: "Introducing ghorgsync v0.1.0: Non-Destructive Organization Repository Synchronization"
date: 2026-02-23 02:40:31 -0500
tags: ["ghorgsync", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

## A New Tool for GitHub Organization Management

On February 23, 2026, we're excited to announce the launch of **ghorgsync** (v0.1.0) — a CLI tool designed to simplify how developers and teams manage multiple repositories from a single GitHub organization.

For teams working with dozens or even hundreds of repos across an organization, keeping everything synchronized locally is a chore. ghorgsync automates this process while maintaining a critical safety principle: it's completely non-destructive. Your local work stays protected.

## What's New

As the initial release, v0.1.0 delivers the full suite of core features:

### One-Command Synchronization
Sync your entire organization with a single command. ghorgsync will:
- Clone repositories you don't have locally
- Pull updates for existing repositories  
- Report any issues it finds along the way

### Safety-First Design
The tool makes three hard guarantees:
1. **Never deletes directories** — Unknown folders and excluded repos are reported but left untouched
2. **Never discards local changes** — Dirty repositories skip checkout/pull operations to preserve your work
3. **Never runs destructive git commands** — No force checkouts, resets, or clean operations

### Audit Capabilities
ghorgsync doesn't just sync — it helps you understand the state of your organization's codebase:
- **Dirty repo detection**: Identifies repositories with staged or unstaged changes, showing you exactly which files have been modified
- **Branch drift auditing**: Detects when a repository is on a non-default branch and can automatically correct clean repos
- **Stray content warnings**: Flags unknown folders, excluded-but-present repos, and naming collisions

### Smart Git Support
Recent bug fixes in v0.1.0 address common edge cases:
- Repositories with dot-prefixes (like `.github`) are now handled correctly without redundant clone attempts
- Git submodules are properly initialized to prevent false dirty state detection

## Why It Matters

Managing multiple repositories manually is time-consuming and error-prone. ghorgsync solves this by providing a reliable, automated solution that respects your local work.

Unlike tools that prioritize speed over safety, ghorgsync takes a conservative approach. If you have uncommitted changes in a repository, it won't touch them — it will tell you about them and move on. This makes it safe to run regularly without fear of losing work or introducing conflicts.

The audit features add additional value by surfacing issues that might otherwise go unnoticed:
- Are your team's repos drifting from their default branches?
- Do you have orphaned folders from deleted repositories cluttering your workspace?
- Which repositories currently have uncommitted changes that might cause sync issues later?

## Getting Started

### Installation

Choose the method that works best for you:

**Binary Download (Recommended)**  
Download pre-built binaries from the [GitHub Releases page](https://github.com/UnitVectorY-Labs/ghorgsync/releases) for macOS, Linux, or Windows. Each release includes checksums for verification.

**Go Install**  
```bash
go install github.com/UnitVectorY-Labs/ghorgsync@latest
```

**Build from Source**  
```bash
git clone https://github.com/UnitVectorY-Labs/ghorgsync.git
cd ghorgsync
go build -o ghorgsync
```

### First-Time Setup

1. **Create a configuration file** named `.ghorgsync` in the directory where you want your repos to live:

   ```yaml
   organization: your-org-name
   include_public: true
   include_private: true
   exclude_repos:
     - legacy-repo
     - "^sandbox-"
   ```

2. **Authenticate with GitHub** using one of these methods:
   - Set `GITHUB_TOKEN` environment variable
   - Use the GitHub CLI (`gh auth login`)

3. **Run the sync**:
   ```bash
   cd ~/your-repos-directory
   ghorgsync
   ```

That's it. The tool is quiet by default — you'll only see output when repos are cloned, updated, or when issues are detected.

## Looking Ahead

This initial release establishes the core foundation for ghorgsync. Future versions will expand on these capabilities and address feedback from early users.

We're particularly interested in hearing about:
- Performance with large organizations (100+ repositories)
- Edge cases not yet encountered in testing
- Feature requests that would make your workflow more efficient

## Try It Out

Head over to the [GitHub repository](https://github.com/UnitVectorY-Labs/ghorgsync) to download v0.1.0, read the full documentation, and explore the source code. If you find bugs or have suggestions, we welcome issues and pull requests.

---

*Transparency note: This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. It was generated on March 17, 2026, based on information from the ghorgsync v0.1.0 release (https://github.com/UnitVectorY-Labs/ghorgsync/releases/tag/v0.1.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
