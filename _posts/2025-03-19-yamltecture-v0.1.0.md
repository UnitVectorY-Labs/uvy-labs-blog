---
layout: post
title: "Introducing YAMLtecture v0.1.0: Define Your Architecture in YAML, Visualize with Mermaid"
date: 2025-03-19 09:00:00 -0500
tags: [YAMLtecture, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

We're excited to announce the initial release of **YAMLtecture** (v0.1.0), a lightweight CLI tool that transforms how architects define and visualize system architectures.

Released on March 19, 2025, YAMLtecture introduces a novel approach: define your entire system architecture in version-controlled YAML files, then generate multiple visual views on demand using powerful queries. No more outdated diagrams—your architecture documentation stays in sync with your codebase.

## What's New

YAMLtecture v0.1.0 launches with complete core functionality:

### YAML-Defined Architecture

Define your system components and their relationships in clean, modular YAML files. Each node represents a component (microservice, database, infrastructure) with unique IDs, types, and custom attributes. Links establish relationships between components, forming a hierarchical structure that mirrors your actual system.

### Powerful Query System

The standout feature: **one configuration, multiple views**. YAMLtecture includes a comprehensive query language with 8 operators that let you filter your architecture down to specific subsystems or perspectives:

- **Field matching**: `equals` and `notEquals` for any attribute
- **Attribute checking**: `exists` to find nodes with specific attributes
- **Hierarchy navigation**: `ancestorOf`, `descendantOf`, `childOf`, `parentOf` for traversing your architecture tree
- **Logic operators**: `and` / `or` for combining conditions

Need a diagram showing only the data layer? Query for it. Want to visualize just the components communicating with your authentication service? That's a query away.

### Mermaid Diagram Generation

Transform your YAML definitions into beautiful Mermaid flowcharts with full customization:

- Choose graph direction (top-to-bottom, left-to-right, and more)
- Use any attribute as node labels
- Organize nodes into subgraphs by type or custom filters
- Apply custom styling to nodes and links (colors, stroke widths, fonts, padding, corner radii)

### Validation at Every Step

YAMLtecture validates your work before you generate outputs:

- **Config validation**: Ensures unique node IDs, valid parent relationships, and required fields
- **Query validation**: Checks operator syntax and field existence before execution
- **Mermaid settings validation**: Verifies direction, labels, subgraphs, and style definitions

### Config Merging

Build architecture modularly by combining multiple YAML files from a folder. Perfect for teams contributing different domains or maintaining version-controlled, composable architecture definitions.

## Why It Matters

Architecture diagrams are notoriously difficult to keep current. YAMLtecture solves this by treating architecture as code:

**Version-controllable**: Store your architecture definitions in Git alongside your application code. Track changes, review modifications, and maintain history.

**Single source of truth**: Maintain one comprehensive architecture definition and generate different views for different audiences—executives get the high-level overview, developers get detailed service interactions, security teams see the data flow.

**Automated consistency**: No more manually drawing boxes and arrows that drift from reality. Your diagrams are generated from definitions, guaranteeing they reflect your actual architecture structure.

**Modular by design**: Break large architectures into smaller, manageable YAML files and merge them as needed. Teams can work independently on their domains while maintaining a unified view.

## Getting Started

### Installation

Download the appropriate pre-built binary for your platform from the [v0.1.0 release](https://github.com/UnitVectorY-Labs/YAMLtecture/releases/tag/v0.1.0):

- **Linux**: x86_64, ARM64, or x86 (32-bit)
- **macOS**: x86_64 or ARM64 (Apple Silicon)
- **Windows**: x86_64 or x86

All binaries are distributed as `.tar.gz` (Unix) or `.zip` (Windows) archives with MD5 and SHA256 checksums for verification.

**Or build from source** (requires Go 1.24.1+):

```bash
git clone https://github.com/UnitVectorY-Labs/YAMLtecture.git
cd YAMLtecture
go build -o YAMLtecture
```

### Your First Diagram

Define your architecture in `architecture.yaml`:

```yaml
nodes:
  - id: api-gateway
    type: Microservice
    attributes:
      name: "API Gateway"
      language: Go

  - id: user-service
    type: Microservice
    parent: api-gateway
    attributes:
      name: "User Service"

links:
  - source: api-gateway
    target: user-service
    type: calls
```

Generate your diagram:

```bash
YAMLtecture -configIn=./architecture.yaml -generateMermaid
```

### Next Steps

- Read the [QUICKSTART guide](https://github.com/UnitVectorY-Labs/YAMLtecture/blob/main/docs/QUICKSTART.md) for detailed examples
- Explore the [configuration schema](https://github.com/UnitVectorY-Labs/YAMLtecture/blob/main/docs/CONFIGURATION.md)
- Master the [query language](https://github.com/UnitVectorY-Labs/YAMLtecture/blob/main/docs/QUERY.md)
- Learn about [Mermaid customization](https://github.com/UnitVectorY-Labs/YAMLtecture/blob/main/docs/MERMAID.md)

## Join the Journey

YAMLtecture is released under the MIT license and welcomes contributions from the community. Check out the [development documentation](https://github.com/UnitVectorY-Labs/YAMLtecture/blob/main/docs/DEVELOPMENT.md) to get involved.

We'd love to hear how you're using YAMLtecture in your projects. Share your architecture diagrams, suggest improvements, or report issues on [GitHub](https://github.com/UnitVectorY-Labs/YAMLtecture).

---

*This post was AI-generated by the model unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M on March 19, 2025. The release information is based on the v0.1.0 GitHub release at https://github.com/UnitVectorY-Labs/YAMLtecture/releases/tag/v0.1.0. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*
