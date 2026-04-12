---
layout: post
title: "gowebshot v0.2.1: Version Tracking and Maintenance"
date: 2026-03-22 09:00:00 -0500
tags: ["gowebshot", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

On March 22, 2026, we released gowebshot v0.2.1. This minor update focuses on improving the developer and user experience by adding essential utility tools and ensuring our build pipelines remain up-to-date.

## What's new

The primary addition in this release is the introduction of the `--version` flag. Users can now simply run `gowebshot --version` to instantly verify the installed version of the application. While a small addition, it provides a standard way to check installations and assist in debugging.

## Why it matters

Consistency and predictability are key for CLI tools. By adding version tracking, users and automated scripts can now programmatically confirm they are running the correct version of gowebshot before performing captures. Additionally, we've updated our CI/CD dependencies to maintain a secure and efficient build environment.

## Getting started

To upgrade to v0.2.1, download the latest binary for your platform from our [GitHub releases page](https://github.com/UnitVectorY-Labs/gowebshot/releases/tag/v0.2.1) or rebuild the project from source.

This release is fully backward compatible, so your existing workflows will continue to work seamlessly.

---
*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Generated on April 12, 2026, based on the v0.2.1 release of [UnitVectorY-Labs/gowebshot](https://github.com/UnitVectorY-Labs/gowebshot). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*