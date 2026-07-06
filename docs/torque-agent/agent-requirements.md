---
sidebar_position: 2
title: Management Server Requirements
---

# Management Server Requirements

The Stack Automation Management Server is a lightweight, Docker-based execution component that handles deployment provisioning and lifecycle management. This page outlines the infrastructure requirements and specifications needed to run the Stack Automation management server.

## Overview

The Stack Automation management server can be deployed on two types of infrastructure:
- **Docker Host** - A standalone virtual machine or server running Docker
- **Kubernetes Cluster** - A managed or self-hosted Kubernetes cluster

Both deployment models are lightweight and require minimal resources to operate efficiently.

## Minimum Resource Requirements

### Per Management Server Instance

The management server requires minimal compute and memory resources:

| Resource | Minimum | Recommended |
|----------|---------|-------------|
| CPU | 100m (0.1 vCPU) | 200m (0.2 vCPU) |
| Memory | 200Mi | 512Mi |
| Storage | 1GB | 5GB |

:::info
These requirements are for the management server container itself. Additional resources may be needed for workload execution depending on your blueprint complexity and concurrent deployments.
:::

## Infrastructure Requirements

### Docker Host Deployment

For running the management server on a Docker host, you'll need:

**Minimum VM Specifications:**
- **vCPUs**: 2 cores
- **Memory**: 4GB RAM
- **Storage**: 20GB disk space
- **Operating System**: Linux (Ubuntu 20.04+, RHEL 8+, CentOS 8+, Amazon Linux 2)
- **Docker Version**: 20.10 or later

**Network Requirements:**
- Outbound HTTPS (port 443) access to Stack Automation SaaS
- Internet connectivity for pulling Docker images
- See [Stack Automation Outbound Ports](/torque-agent/torque-outbound-ports.md) for detailed network requirements

**Example VM Configuration:**
```yaml
Instance Type Examples:
  AWS: t3.medium (2 vCPU, 4GB RAM)
  Azure: Standard_B2s (2 vCPU, 4GB RAM)
  GCP: e2-medium (2 vCPU, 4GB RAM)
```

### Kubernetes Cluster Deployment

For running the management server on Kubernetes, you'll need:

**Cluster Requirements:**
- **Kubernetes Version**: 1.20 or later
- **Node Resources**: At least one node with 2 vCPUs and 4GB RAM available
- **Storage Class**: Default storage class configured for persistent volumes
- **RBAC**: Enabled (required for management server permissions)

**Supported Kubernetes Platforms:**
- Amazon EKS
- Azure Kubernetes Service (AKS)
- Google Kubernetes Engine (GKE)
- Oracle Container Engine for Kubernetes (OKE)
- Self-managed Kubernetes clusters
- OpenShift
- Rancher

**Network Requirements:**
- Outbound HTTPS (port 443) access to Stack Automation SaaS
- Internet connectivity for pulling container images
- See [Stack Automation Outbound Ports](/torque-agent/torque-outbound-ports.md) for detailed network requirements

## Kubernetes Management Server Manifest

When deploying to Kubernetes, the management server is installed using a manifest that includes the following components:

### Core Components

1. **Namespace** - Dedicated namespace for management server isolation
2. **ServiceAccount** - Identity for the management server pods
3. **ClusterRoles** - Permissions for cluster-level and namespace-level operations
4. **ClusterRoleBindings** - Binding service account to required roles
5. **Secret** - Stores cluster token and logging configuration
6. **Deployment** - Manages management server replicas (default: 2 replicas for high availability)

### Management Server Permissions

The management server requires two sets of permissions:

**Cluster-Level Read Permissions:**
- List storage classes
- List namespaces
- List service accounts

**Namespace-Level Permissions:**
- Full control over deployments, replicasets, and pods
- Manage services, configmaps, secrets
- Create and manage persistent volume claims
- Manage ingresses and network policies
- Access pod logs and events
- Execute jobs

### Example Deployment Specification

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: sa-mgmt-srv
  namespace: sa-mgmt-srv
spec:
  replicas: 2
  selector:
    matchLabels:
      app: sa-mgmt-srv
  template:
    metadata:
      labels:
        app: sa-mgmt-srv
    spec:
      containers:
      - name: sa-mgmt-srv-container
        image: quali/kubernetes-agent:latest
        imagePullPolicy: IfNotPresent
        resources:
          limits:
            cpu: 100m
            memory: 200Mi
          requests:
            cpu: 100m
            memory: 200Mi
        env:
        - name: AgentSettings__ClusterToken
          valueFrom:
            secretKeyRef:
              name: sa-mgmt-srv-secret
              key: cluster-token
        - name: AgentSettings__ClusterId
          value: <your-cluster-id>
        - name: AgentSettings__ServerUrl
          value: https://stackautomation.cisco.com/hub/agent
      serviceAccountName: sa-mgmt-srvt-sa
```

## Scaling Considerations

### High Availability

For production deployments, consider:
- **Multiple Replicas**: Deploy 2+ management server replicas for redundancy
- **Node Distribution**: Use pod anti-affinity to distribute replicas across nodes
- **Resource Limits**: Set appropriate limits to prevent resource contention

### Workload Capacity

The management server capacity depends on:
- Number of concurrent deployments
- Complexity of blueprints (number of grains, resources)
- Duration of provisioning operations

**Scaling Guidelines:**
- Single management server: 5-10 concurrent deployments
- Additional replicas: Linear scaling for concurrent capacity
- Heavy workloads: Consider dedicated node pools or larger VM instances

## Scaling Table (Quick Reference)

The table below provides recommended starting points for management server deployment sizing based on the number of concurrent deployments and average workload complexity. Use these as guidelines and adjust based on observed management server CPU/memory usage and provisioning times.

| Concurrent Deployments | Tier | Management Server Replicas | Node Pool / VM Size Recommendation | Notes |
|:------------------------|:-----|:---------------|:-----------------------------------|:------|
| 1 - 10 | Light | 1 - 2 | 1 node, 2 vCPU / 4GB RAM | Light workloads; single replica acceptable for non-critical use.
| 11 - 100 | Medium | 2 - 4 | 2-3 nodes, each 2-4 vCPU / 4-8GB RAM | Medium concurrency; HA recommended and anti-affinity.
| 101 - 200 | Increased parallelism | 4 - 8 | 3-5 nodes, each 4 vCPU / 8GB RAM | Higher parallelism; consider dedicated node pools and tuned resource limits.
| 200+ | High concurrency + Large | 8+ | 4+ nodes, each 8+ vCPU / 16+GB RAM; autoscaling recommended | Very high concurrency; perform load testing and monitor closely.

Notes:
- "Concurrent Deployments" refers to deployments actively provisioning or heavily operating at the same time.
- Management Server replica counts assume default management server resource requests/limits (100m CPU / 200Mi memory). Increase per-server resources for heavy or long-running workloads.
- For Kubernetes, use PodDisruptionBudgets, anti-affinity, and multiple replicas across failure domains to ensure availability.
- Monitor management server pod CPU/memory and adjust cluster autoscaler and node sizes accordingly.

## Getting Started

Once you've prepared your infrastructure, proceed with management server installation:

- **Docker Host**: See [Stack Automation Docker Management Server](/torque-agent/torque-docker-agent.md)
- **Kubernetes Cluster**: See [Install and Connect Self-Hosted Management Server](/torque-agent/Install-and-connect-self-hosted-agent.md)

## Additional Resources

- [What is a Stack Automation Management Server?](/torque-agent/Torque-Agent-Intro.md)
- [Advanced Management Server Settings](/torque-agent/advanced-settings.md)
- [Network Requirements](/torque-agent/torque-outbound-ports.md)
- [Azure VMSS Deployment](/torque-agent/torque-agent-on-azure-vmss.md)
