---
layout: post
title: "Introducing ghrelgrab v0.1.0: Your Go-To Tool for GitHub Release Assets"
date: 2025-08-15 09:00:00 -0500
tags: ["ghrelgrab", "unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M"]
---

We're excited to announce the first release of **ghrelgrab** (v0.1.0), published on August 15, 2025. This cross-platform command-line utility simplifies one of the most common yet tedious tasks in modern development: downloading and extracting GitHub release assets.

Whether you're automating dependency downloads in CI/CD pipelines or streamlining multi-stage Docker builds, ghrelgrab provides a reliable, scriptable solution that handles platform-specific filename conventions automatically.

## What's New

As the inaugural release, v0.1.0 introduces the full feature set of ghrelgrab:

### Smart Filename Resolution
No more guessing at filename patterns. ghrelgrab supports dynamic token substitution with `{version}`, `{os}`, and `{arch}` placeholders that automatically resolve to match your target platform. Combined with flexible OS/architecture mapping (for example, translating `linux` to `ubuntu` or `amd64` to `x86_64`), the tool adapts to various release naming conventions without manual intervention.

### Automatic Archive Extraction
Downloaded assets are automatically extracted if they're in `.tar.gz`, `.tgz`, or `.zip` format. Files in other formats are preserved as-is, giving you flexibility for different distribution styles.

### Cross-Platform Support
Pre-built binaries are available for:
- **Linux**: AMD64, 386, ARM64
- **macOS**: AMD64, ARM64  
- **Windows**: AMD64, 386

All releases include MD5 and SHA256 checksums for verification.

### Private Repository Access
Need to download assets from private repositories? Simply provide a GitHub token via the `--token` flag or `GH_TOKEN` environment variable.

### Script-Friendly Design
ghrelgrab outputs file paths to stdout, making it easy to integrate with shell scripts and automation pipelines. Debug mode provides detailed visibility into resolution logic when troubleshooting.

## Why It Matters

Managing release assets across multiple platforms has long been a pain point for DevOps engineers and developers alike. Different projects use different naming conventions—some use `linux-amd64`, others `ubuntu-x86_64`, and still others `Linux_x64`. Maintaining manual mappings in build scripts quickly becomes brittle and error-prone.

ghrelgrab solves this by:
- **Eliminating guesswork**: Token substitution handles dynamic version and platform detection automatically
- **Reducing boilerplate**: One tool replaces custom download logic across multiple projects
- **Enabling Docker efficiency**: Use ghrelgrab as a dedicated layer in multi-stage builds to fetch dependencies without bloating your final image
- **Supporting real-world diversity**: OS/architecture mapping bridges the gap between Go's platform identifiers and common naming patterns

For containerized workflows, the included Docker image (`ghcr.io/unitvectory-labs/ghrelgrab:v0.1.0`) provides an immediate drop-in solution for fetching external binaries during build time.

## Getting Started

### Installing from GitHub Releases
Download the pre-built binary for your platform from the [releases page](https://github.com/UnitVectorY-Labs/ghrelgrab/releases/tag/v0.1.0). Verify checksums using the provided `.md5` or `.sha256` files:

```bash
# Linux AMD64 example
wget https://github.com/UnitVectorY-Labs/ghrelgrab/releases/download/v0.1.0/ghrelgrab-v0.1.0-linux-amd64.tar.gz
tar xzf ghrelgrab-v0.1.0-linux-amd64.tar.gz
chmod +x ghrelgrab
```

### Using Docker
Pull the image directly and use it in multi-stage builds:

```bash
docker pull ghcr.io/unitvectory-labs/ghrelgrab:v0.1.0
```

See the repository documentation for complete Dockerfile examples.

### Building from Source
If you prefer to build from source, you'll need Go 1.25.0 or later:

```bash
git clone https://github.com/UnitVectorY-Labs/ghrelgrab.git
cd ghrelgrab
go build -o ghrelgrab .
```

## Next Steps

Head over to the [GitHub repository](https://github.com/UnitVectorY-Labs/ghrelgrab) for full documentation, usage examples, and to explore the code. We'd love to hear your feedback and see how you integrate ghrelgrab into your workflows.

---

**Transparency Note**: This blog post was AI-generated using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The article was generated on behalf of [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller) based on the ghrelgrab v0.1.0 release published on August 15, 2025. For authoritative information about this release, please refer to the official [GitHub release](https://github.com/UnitVectorY-Labs/ghrelgrab/releases/tag/v0.1.0).
