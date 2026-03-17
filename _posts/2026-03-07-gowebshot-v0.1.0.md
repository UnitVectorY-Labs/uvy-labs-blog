---
layout: post
title: "Introducing gowebshot v0.1.0: CLI and TUI Screenshot Tool"
date: 2026-03-07 16:44:40 -0500
tags: [gowebshot, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

We're excited to announce the launch of gowebshot v0.1.0, a new command-line tool for capturing webpage screenshots using headless Chrome/Chromium. Released on March 7, 2026, this initial release brings a powerful yet simple solution for automated screenshot capture with both scripting-friendly CLI mode and an interactive terminal UI.

## What's New

gowebshot introduces two distinct ways to capture screenshots:

**Non-Interactive CLI Mode** — Perfect for automation and scripting. A single command captures your screenshot and exits:

```bash
gowebshot --url https://example.com
gowebshot --url https://example.com --preset square
```

**Interactive TUI Mode** — Launch without flags to access a keyboard-driven terminal interface with four tabs for configuring URLs, output settings, resolution presets, and capture options like zoom, scroll, and delay.

### Resolution Presets

Four optimized presets handle common use cases:

- **widescreen** (1920×1080) — Standard desktop captures
- **desktop** (1440×900) — Mac and retina displays
- **square** (1200×1200) — Social media cards and thumbnails
- **portrait** (1080×1350) — Mobile and portrait-oriented content

Custom dimensions are also available via `--width` and `--height` flags.

### Smart Features

- **Auto-naming protection** prevents file overwrites by appending numeric suffixes
- **Chrome auto-discovery** locates your installed Chrome/Chromium on Linux, macOS, or Windows
- **Cross-platform binaries** ready for immediate use without building from source

## Why It Matters

gowebshot fills a gap for developers and operators who need reliable webpage screenshots without the overhead of full browser automation frameworks. The dual-mode design means you can script captures in CI pipelines while still having an interactive tool for ad-hoc exploration.

The release ships with security-conscious defaults: path traversal protection, secure Chrome launch via direct execution, and local CDP communication on ephemeral ports. This makes gowebshot suitable for both local development and automated environments.

## Getting Started

### Download Pre-built Binaries

Head to the [GitHub Releases page](https://github.com/UnitVectorY-Labs/gowebshot/releases/tag/v0.1.0) to download a binary for your platform:

- macOS (Intel): `gowebshot-v0.1.0-darwin-amd64.tar.gz`
- macOS (Apple Silicon): `gowebshot-v0.1.0-darwin-arm64.tar.gz`
- Linux (x86_64): `gowebshot-v0.1.0-linux-amd64.tar.gz`
- Linux (ARM64): `gowebshot-v0.1.0-linux-arm64.tar.gz`
- Windows: `gowebshot-v0.1.0-windows-amd64.zip`

### Install With Go

If you have Go 1.26.0 or later installed:

```bash
go install github.com/UnitVectorY-Labs/gowebshot@v0.1.0
```

### Build From Source

```bash
git clone https://github.com/UnitVectorY-Labs/gowebshot.git
cd gowebshot
git checkout v0.1.0
go build -o gowebshot .
```

### Requirements

You'll need Chrome or Chromium installed on your system. gowebshot will automatically discover it, or you can specify the path with `--chrome /path/to/chrome`.

---

**Transparency Note:** This post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. Reference: [UnitVectorY-Labs/gowebshot](https://github.com/UnitVectorY-Labs/gowebshot), release v0.1.0 (March 7, 2026). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
