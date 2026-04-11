---
layout: post
title: "goenvecho v1.3.0: Enhancing Visibility with Pretty Printing"
date: 2026-01-03 09:00:00 -0500
tags: ["goenvecho", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

Released on January 3, 2026, goenvecho v1.3.0 brings a welcome quality-of-life improvement to your container diagnostics. This release focuses on making the tool's output more accessible and readable, simplifying the way you verify environment configurations in your development and testing environments.

## What's new

The headline feature of v1.3.0 is the introduction of **JSON Pretty Printing**. 

Previously, goenvecho returned environment variables in a compact JSON format—efficient for machines, but often a wall of text for humans. Now, you can simply set the `PRETTY_PRINT` environment variable to `true` in your container deployment. When enabled, goenvecho will return a beautifully indented JSON payload, making it instantly readable in your browser or terminal.

## Why it matters

When debugging containerized applications, the ability to quickly scan environment variables to verify a key or a value can save significant time. By removing the need for external formatting tools or cumbersome command-line pipes, `PRETTY_PRINT` streamlines the diagnostic process, allowing you to spot configuration errors at a glance.

## Getting started with v1.3.0

Upgrading is seamless. Simply pull the latest container image from GitHub Packages to get the latest version. To enable the new formatting, add the following variable to your environment:

`PRETTY_PRINT=true`

As always, a reminder that goenvecho is designed exclusively for diagnostic and testing purposes. Because it exposes all environment variables, it should never be deployed in a production environment where sensitive secrets are present.

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Generated on April 11, 2026, based on the [goenvecho](https://github.com/UnitVectorY-Labs/goenvecho) repository and the [v1.3.0 release](https://github.com/UnitVectorY-Labs/goenvecho/releases/tag/v1.3.0). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*