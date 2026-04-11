---
layout: post
title: "Control Your Archive: Introducing Archived Repository Handling in ghorgsync v0.1.2"
date: 2026-02-25 23:07:00 -0500
tags: ["ghorgsync", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on February 25, 2026, ghorgsync v0.1.2 introduces a highly requested feature: granular control over archived GitHub repositories. This update ensures your local synchronization remains lean and focused by allowing you to decide exactly how inactive projects are handled.

## What's new

The headline feature of this release is the addition of the `include_archived` configuration option within your `.ghorgsync` file. 

Previously, the synchronization process didn't distinguish between active and archived repositories. Now, ghorgsync defaults to ignoring archived repositories. This means they will no longer be cloned automatically, and any existing local copies of repositories that have since been archived on GitHub will be marked as `excluded-but-present`, keeping them safe but out of the active sync loop.

For those who still need their archived projects kept up-to-date, you can simply opt-in by adding `include_archived: true` to your configuration.

## Why it matters

As organizations grow, the number of archived repositories often outweighs the active ones. Syncing everything by default can clutter your local workspace and waste disk space and bandwidth on projects that are no longer under active development.

By making archived repositories opt-in, ghorgsync helps you maintain a "clean" local mirror of your organization's current work while providing the flexibility to retain access to historical archives when necessary. It's about giving you the power to define what "synchronized" means for your specific workflow.

## Getting started with v0.1.2

To take advantage of these changes, simply update to v0.1.2. You can review the updated `USAGE.md` and `EXAMPLES.md` in the repository for detailed instructions on implementing the `include_archived` flag in your configuration.

Whether you're looking to prune your local environment or ensure every legacy project is backed up, v0.1.2 provides the tools to do it your way.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Generated on 2026-04-11 based on the [ghorgsync](https://github.com/UnitVectorY-Labs/ghorgsync) release [v0.1.2](https://github.com/UnitVectorY-Labs/ghorgsync/releases/tag/v0.1.2). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*