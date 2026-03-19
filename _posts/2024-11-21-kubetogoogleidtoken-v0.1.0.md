---
layout: post
title: Introducing kubetogoogleidtoken v0.1.0 - Simplify Kubernetes-to-Google Cloud Authentication
date: 2024-11-21 09:00:00 -0500
tags: [kubetogoogleidtoken, unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M]
---

## Introducing kubetogoogleidtoken v0.1.0

Released on November 21, 2024, the first public version of kubetogoogleidtoken is now available. This Java library bridges a critical gap for organizations running Kubernetes workloads that need to authenticate with Google Cloud services—providing a clean, developer-friendly API for obtaining Google ID tokens through GCP Workload Identity Federation.

For teams operating multi-cloud infrastructure or migrating workloads between clouds, authenticating from Kubernetes to Google APIs has often involved complex token exchange workflows. kubetogoogleidtoken abstracts these complexities into a simple, reliable client library.

## What's New

### Streamlined Client API
The initial release introduces the `KubeToGoogleIdTokenClient`, built with an intuitive builder pattern that makes configuration straightforward:

```java
KubeToGoogleIdTokenClient client = KubeToGoogleIdTokenClient.builder()
    .k8sTokenPath("/var/run/secrets/kubernetes.io/serviceaccount/token")
    .projectNumber("123456789")
    .workloadIdentityPool("my-pool")
    .workloadProvider("my-provider")
    .serviceAccountEmail("my-sa@my-project.iam.gserviceaccount.com")
    .build();

String idToken = client.getIdToken(new KubeToGoogleIdTokenRequest("https://www.googleapis.com/auth/cloud-platform"));
```

### Automatic Configuration Detection
For users following Google Cloud's standard credential practices, the library automatically detects configuration from `GOOGLE_APPLICATION_CREDENTIALS` environment variables. When properly configured, initialization reduces to a single line:

```java
KubeToGoogleIdTokenClient client = KubeToGoogleIdTokenClient.builder().build();
```

### Complete Token Exchange Orchestration
The library handles the entire three-phase authentication flow behind a single method call:
1. Retrieving the Kubernetes service account token from the pod's filesystem
2. Exchanging it for a Google Cloud access token via Security Token Service (STS)
3. Generating the final ID token using GCP IAM Credentials API

Developers no longer need to orchestrate these steps manually or manage the intricate details of each API interaction.

### Production-Ready Foundation
Built with enterprise needs in mind, v0.1.0 includes:
- Comprehensive error handling through a custom exception hierarchy
- Extensive test coverage using Mockito and JUnit Jupiter
- Apache 2.0 licensing for permissive open-source usage
- Full Java documentation via javadoc

## Why It Matters

Modern applications increasingly span multiple cloud environments. When your Kubernetes workloads—whether running on AWS EKS, Azure AKS, or self-managed clusters—need to access Google Cloud services like Cloud Storage, BigQuery, or Cloud Run, authentication becomes a significant implementation challenge.

GCP Workload Identity Federation provides the solution, but the token exchange process involves multiple API calls and careful handling of JWT tokens at each stage. This library eliminates that burden.

By encapsulating the complex OAuth/OIDC flows into a single client method, kubetogoogleidtoken allows developers to focus on application logic rather than authentication plumbing. The library's clean architecture makes it easy to integrate into existing Java applications while maintaining clear separation of concerns.

The automatic configuration detection feature particularly shines in production environments where Google Cloud SDK credentials are already configured—reducing deployment complexity and configuration management overhead.

## Getting Started

### Installation
Add the dependency to your Maven `pom.xml`:

```xml
<dependency>
    <groupId>com.unitvectory</groupId>
    <artifactId>kubetogoogleidtoken</artifactId>
    <version>0.1.0</version>
</dependency>
```

### Requirements
- Java 17 or higher
- Properly configured GCP Workload Identity Federation in your Google Cloud project
- Kubernetes Service Account with appropriate annotations for workload identity

### Next Steps
Explore the full documentation on [GitHub](https://github.com/UnitVectorY-Labs/kubetogoogleidtoken), where you'll find detailed setup instructions, configuration examples, and API references. The source code JAR is also available from the release page for those who want to dive deeper into the implementation.

## Looking Forward

As version 0.1.0, this initial release establishes the foundation for kubetogoogleidtoken. Future versions will build upon this core functionality while maintaining backward compatibility with the simple API developers have come to rely on.

We welcome feedback from the community as we continue to refine and expand the library's capabilities.

---

**Transparency Note**: This release announcement was generated with AI assistance using the unsloth/Qwen3.5-122B-A10B-GGUF:Q4_K_M model. The announcement references the kubetogoogleidtoken v0.1.0 release published on November 21, 2024 at https://github.com/UnitVectorY-Labs/kubetogoogleidtoken/releases/tag/v0.1.0. Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller).
