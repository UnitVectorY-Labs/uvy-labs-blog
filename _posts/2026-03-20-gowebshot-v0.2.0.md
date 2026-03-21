---
layout: post
title: "gowebshot v0.2.0: Precision Crop Control for Web Screenshots"
date: 2026-03-20 19:32:00 -0400
tags: [gowebshot, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

gowebshot v0.2.0 is now available, bringing powerful new screenshot manipulation capabilities that give you precise control over what gets captured—and what gets left out. Released on March 20, 2026, this update addresses a common pain point for developers, testers, and content creators who regularly capture webpages: removing unwanted elements while maintaining consistent output dimensions.

## What's New

### Edge Cropping

The headline feature in v0.2.0 is comprehensive edge cropping. You can now remove pixels from any edge of your screenshots—top, bottom, left, or right—using the new `--crop` flag:

```bash
gowebshot --url https://example.com --width 1200 --height 800 --crop 100,0,0,0
```

The crop argument follows a simple `top,bottom,left,right` format (values in pixels). This makes it easy to strip away sticky headers, footers, sidebars, or any unwanted page chrome that clutters your screenshots.

### Shift Mode

Introducing **shift mode** (`--shift`), a companion feature that solves a natural follow-up question: *"If I crop pixels, won't my output be smaller?"*

Normally, cropping reduces the final image size. With shift mode enabled, gowebshot captures a larger viewport initially, then applies the crop so your final PNG matches exactly the dimensions you requested. This is perfect when you need consistent output sizes—like when batch-processing screenshots for a documentation site or creating uniform assets for a presentation.

```bash
# Capture with 100px header removed, but keep 1200×800 output
gowebshot --url https://example.com --width 1200 --height 800 --crop 100,0,0,0 --shift
```

### TUI Support

Both features are fully integrated into gowebshot's interactive Terminal User Interface (TUI). The Settings tab now includes four editable crop fields and a shift toggle, letting you fine-tune your capture without memorizing command-line flags.

## Why It Matters

Screenshot tools often force you to choose between capturing what's on-screen or getting the exact dimensions you need. v0.2.0 removes that compromise.

**For developers and QA teams**: Remove navigation bars, cookie banners, or dynamic headers that vary across pages but always occupy the same space.

**For content creators**: Produce clean, focused screenshots without manual post-processing in image editors.

**For automation workflows**: Maintain consistent output dimensions across a batch of captures, even when different pages have different amounts of unwanted chrome.

The best part? These features are entirely optional. If you don't specify `--crop` or `--shift`, gowebshot behaves exactly as it did before—no breaking changes, no disruption to existing workflows.

## Getting Started

### Installation

If you're upgrading from v0.1.0, simply install the new binary:

```bash
# Download from GitHub Releases
https://github.com/UnitVectorY-Labs/gowebshot/releases/tag/v0.2.0

# Or build from source
git clone https://github.com/UnitVectorY-Labs/gowebshot.git
cd gowebshot
go install
```

### Try the New Features

Here are some common scenarios to get you started:

| Use Case | Command |
|----------|---------|
| Remove a 120px sticky header | `gowebshot --url https://example.com --crop 120,0,0,0` |
| Keep output size after cropping | `gowebshot --url https://example.com --width 1920 --height 1080 --crop 100,0,0,0 --shift` |
| Trim all edges (remove borders) | `gowebshot --url https://example.com --crop 10,10,5,5` |
| Remove header and footer | `gowebshot --url https://example.com --crop 80,20,0,0` |

For more examples and detailed documentation, check out [docs/USAGE.md](https://github.com/UnitVectorY-Labs/gowebshot/blob/main/docs/USAGE.md) in the repository.

---

### About This Post

This release announcement was AI-generated using the `unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M` model. It was created on March 21, 2026 by [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller) based on the gowebshot v0.2.0 release published on March 20, 2026. See the [original release](https://github.com/UnitVectorY-Labs/gowebshot/releases/tag/v0.2.0) for full details.