---
layout: post
title: "Introducing authzgcpk8stokeninjector: Seamless GCP Identity Token Injection for Envoy"
date: 2024-11-13 09:00:00 -0500
tags: ["authzgcpk8stokeninjector", "unsloth-gemma-4-31b-it-gguf-ud-q5-k-xl"]
---

We are excited to announce the launch of `authzgcpk8stokeninjector`, released on November 13, 2024. This new tool simplifies how applications running in Kubernetes authenticate with GCP services by automating the injection of identity tokens directly within the networking layer.

### What it does

`authzgcpk8stokeninjector` is a gRPC-based Envoy External Authorization (`ext_authz`) service. Instead of requiring your application code to handle the complexities of GCP authentication, this service acts as a sidecar to Envoy Proxy.

It leverages GCP Workload Identity Federation to perform a secure, two-step exchange: first transforming a Kubernetes service account token into a GCP access token via the Security Token Service (STS), and then generating a signed ID token for a specific target audience via the IAM credentials API. This token is then transparently injected into the `Authorization: Bearer` header of the request before it ever reaches your backend.

To ensure high performance and reliability, the service includes:
- **Intelligent Caching:** Identity tokens are cached in memory on a per-audience basis.
- **Proactive Refresh:** Tokens are automatically refreshed when they reach 75% of their lifespan, eliminating latency spikes caused by expired tokens.
- **Concurrency Control:** Built-in locking prevents "thundering herd" scenarios, ensuring only one request triggers a token refresh for a given audience.

### Why it matters

For developers and platform engineers, managing identity tokens can be a repetitive and error-prone task. By moving token acquisition to the infrastructure level:

- **Decoupled Authentication:** Your application code remains clean and focused on business logic, completely unaware of the underlying token exchange process.
- **Enhanced Security:** By utilizing Workload Identity Federation, you eliminate the need to manage long-lived service account keys within your clusters.
- **Standardized Identity:** It provides a consistent way to propagate identity across different services and audiences using Envoy's powerful routing metadata.

### Getting Started

To integrate `authzgcpk8stokeninjector` into your environment, deploy it as a sidecar and configure your Envoy `ext_authz` filter to point to the service. 

The service is configured via environment variables, including:
- `K8S_TOKEN_PATH`: The location of the K8s service account token.
- `PROJECT_NUMBER`, `WORKLOAD_IDENTITY_POOL`, and `WORKLOAD_PROVIDER`: Your GCP environment details.
- `SERVICE_ACCOUNT_EMAIL`: The GCP service account to impersonate.

You can specify the target audience for each route using Envoy route metadata:

```yaml
metadata:
  filter_metadata:
    com.unitvectory.authzgcpk8stokeninjector:
      audience: "https://your-backend-service.com"
```

For more details, please visit the [GitHub repository](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector).

***

*This post was AI-generated using the model unsloth/gemma-4-31B-it-GGUF:UD-Q5_K_XL. Generated on April 9, 2026, based on the v0.1.0 release of [authzgcpk8stokeninjector](https://github.com/UnitVectorY-Labs/authzgcpk8stokeninjector). Author: [release-storyteller](https://github.com/UnitVectorY-Labs/release-storyteller)*