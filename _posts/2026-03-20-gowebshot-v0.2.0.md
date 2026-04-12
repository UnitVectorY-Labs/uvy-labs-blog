---
layout: post
title: "Precision Captures: Introducing Cropping and Shifting in gowebshot v0.2.0"
date: 2026-03-20 09:00:00 -0500
tags: ["gowebshot", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on March 20, 2026, gowebshot v0.2.0 brings a new level of precision to webpage screenshots. This update focuses on giving users surgical control over their output images, ensuring that only the content you want makes it into the final shot, without sacrificing your desired dimensions.

## What's new

The headline features of v0.2.0 are all about control and convenience:

**Pixel-Perfect Cropping**
You can now trim unwanted edges from your screenshots using the new `--crop` flag. Whether it's a sticky header, a footer, or sidebars, you can specify exactly how many pixels to remove from the top, bottom, left, and right edges.

**Smart Shifting**
To solve the problem of cropping shrinking your final image, we've introduced "shifting." When enabled via `--shift`, gowebshot automatically expands the initial capture area to account for the crop. This ensures that if you requested a 1920x1080 image, you get exactly that, even after trimming the edges.

**A Brand New TUI**
For those who prefer an interactive experience, the Terminal User Interface (TUI) has been completely reimagined. We've moved to a tabbed layout, making it intuitive to jump between URL input, output settings, and the advanced capture configurations like zoom, scroll, and the new cropping tools.

**Improved Documentation**
To help you get the most out of these features, we've added a comprehensive `USAGE.md` guide and updated the TUI documentation.

## Why it matters

Capturing the perfect screenshot often requires more than just a viewport size. Real-world websites have dynamic elements—headers that follow you, banners that clutter the view—that can ruin a clean capture. 

By combining cropping and shifting, gowebshot now allows you to define a precise "window" of content. You no longer have to choose between a clean image and the correct resolution; you can have both. The overhauled TUI further lowers the barrier to entry, allowing users to experiment with these powerful settings without memorizing complex CLI flags.

## Getting started

Upgrading to v0.2.0 is simple. You can download the latest binaries for your platform directly from the [GitHub releases page](https://github.com/UnitVectorY-Labs/gowebshot/releases/tag/v0.2.0). 

Since these features are additive, your existing workflows will remain intact, but you now have a powerful new toolkit for high-precision captures.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. It was generated on April 12, 2026, based on the [gowebshot](https://github.com/UnitVectorY-Labs/gowebshot) repository and the [v0.2.0 release](https://github.com/UnitVectorY-Labs/gowebshot/releases/tag/v0.2.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*