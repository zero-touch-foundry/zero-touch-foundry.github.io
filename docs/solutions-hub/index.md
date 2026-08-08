---
title: Solutions Hub Reference
sidebar_label: Solutions Hub Reference
sidebar_position: 1
description: Complete Stack Automation Solutions Hub catalog with category counts and full solution listings.
---
# Solutions Hub Catalog

The Solutions Hub is the catalog of ready-to-use blueprints available in Stack Automation, organized by category. Each entry below lists the solution name and a description of what it deploys and automates. Use this page as a quick reference to find the right blueprint before browsing or launching it in Stack Automation.

## Applications (13)

| Solution | Version | Description |
|---|---|---|
| Cisco Cyber Vision 5.4 | — | Cisco Cyber Vision 5.4 Center VM - industrial IoT security and visibility platform. Deploys the Center OVA on VMware vSphere (two NICs: administration + collection) and automates first-boot console wizard configuration via govc keystrokes. Supports three sizing profiles (small / standard / large) per Cisco requirements. |
| Cisco Modeling Labs BMaaS & VMaaS | — | Cisco Modeling Labs (CML) on UCS and VMware. |
| Container Orchestration | — | Deploy K3s (1-node Minikube cluster) or Kubernetes clusters, on Ubuntu Linux running on bare-metal UCS servers or VMs (VMware). |
| Dataiku | — | Deploy Dataiku on Ubuntu 22.04 LTS on vCenter. Provisions a VM from OVA, validates system compatibility (OS version, disk, RAM, and CDN reachability), then installs DSS via the official Dataiku installer. Supports static or DHCP networking, configurable DSS version and port, and optional HTTP proxy for air-gapped environments. |
| Grafana + Prometheus (Ubuntu 24.04) | — | Deploy Grafana + Prometheus on Ubuntu 24.04 LTS from OVA on vCenter. Prometheus scrapes node metrics; Grafana is pre-wired to Prometheus. SSH and Grafana admin credentials are set at launch time. |
| Intersight Assist | — | A virtual appliance in your data center that acts as a bridge between your on-premises infrastructure and Cisco Intersight cloud management platform. Deploy Cisco Intersight Assist with self-contained DNS - includes a dedicated DNS server for proper FQDN resolution without requiring customer DNS changes. This blueprint uses vCenter Input Source for dynamic inventory dropdowns. |
| NetBox Labs | — | Deploy NetBox Community Edition on Ubuntu 24.04 LTS on vCenter. Provisions a VM from OVA, then installs and configures PostgreSQL, Redis, NetBox, Gunicorn, and Nginx with a self-signed SSL certificate. Ready to use out of the box with a fully functional IPAM/DCIM platform. Note: This blueprint deploys the open-source Community Edition of NetBox, intended for lab, development, and evaluation purposes only - not recommended for production use without additional hardening. |
| Nginx instance based on Ubuntu | — | Nginx server running on Ubuntu. host a website, landing page, docs site, or simple app frontend. |
| NVIDIA AI Stack for OpenShift | — | Deploy the OpenShift AI Platform on an existing cluster. Installs NFD, GPU operator, and NVIDIA NIM operators. |
| Panduit Collector | — | Panduit Collector - data aggregation and telemetry gateway for Panduit infrastructure management solutions. |
| Splunk Enterprise 10.2.2 | — | Deploy Splunk Enterprise 10.2.2 on Ubuntu 22.04 LTS using a cloud-image OVA. Supports optional HTTP proxy for both apt package management and outbound web traffic. Splunk is configured to start automatically at boot via systemd. |
| ThousandEyes Enterprise Agent | — | Deploy ThousandEyes Agent On-Premises, supported vCenter 6.7 or superior |
| VMware vCenter Server Appliance 8 | 8.0 | This blueprint is part of the vCenter 8.0 family of blueprints. Install VMware vCenter 8.0 nested on another vCenter or ESXi. |

## Cloud (32)

| Solution | Version | Description |
|---|---|---|
| AWS App Runner | — | Creates an AWS App Runner service from a Docker container image. App Runner is a fully managed service for running containerized web apps and APIs — no infrastructure to manage. Supports auto-scaling, HTTPS, and observability out of the box. |
| AWS CloudWatch Logs | — | Creates an AWS CloudWatch Logs log group with configurable retention. Use for application logs, Lambda logs, EKS control-plane logs, etc. |
| AWS EC2 Instance | — | This Blueprints creates an EC2 instance on AWS. |
| AWS ECR | — | Creates a private Amazon ECR repository for storing Docker container images. Immutable tags and scan-on-push enabled by default for production-style security defaults. |
| AWS EKS Cluster | — | Creates an Amazon EKS cluster control plane on AWS with KMS-encrypted secrets, OIDC for IRSA, and recommended logging. Worker compute is provisioned separately via the AWS-EKS-Managed-Node-Group-Module or AWS-Karpenter-for-EKS blueprints. |
| AWS EKS Managed Node Group | — | Creates an EKS Managed Node Group attached to an existing EKS cluster. Uses an AWS-managed AMI (AL2023 by default) so AWS handles node bootstrap — no need to supply cluster endpoint/CA data. |
| AWS IAM Account Alias | — | Sets the AWS account alias (the human-readable name shown on the sign-in page) and applies a hardened IAM password policy to the account. |
| AWS IAM Assumable Role with OIDC | — | Creates an IAM role that can be assumed via an OIDC identity provider (e.g. GitHub Actions OIDC, an EKS cluster OIDC issuer). |
| AWS IAM Assumable Role with SAML | — | Creates an IAM role that can be assumed via a SAML 2.0 identity provider (e.g. Okta, Azure AD, Google Workspace SSO into AWS). |
| AWS IAM EKS Role | — | Creates an IAM role assumable by a Kubernetes ServiceAccount on an EKS cluster (IRSA). Pass the resulting role ARN as the eks.amazonaws.com/role-arn annotation on the SA. |
| AWS IAM Policy | — | Creates an AWS IAM managed policy from a JSON document. |
| AWS Karpenter for EKS | — | Creates the AWS IAM roles, instance profile, EventBridge rules, and SQS queue required to run Karpenter on an existing EKS cluster. Deploy the Karpenter Helm chart separately and point it at the outputs of this blueprint. |
| AWS Lambda Alias | — | Creates or refreshes a Lambda alias that points at a function version and (optionally) splits traffic between two versions for canary deployments. |
| AWS Lambda Docker Build | — | Builds a Docker image locally and pushes it to ECR for use as a Lambda container image. |
| AWS Lambda with CodeDeploy | — | Sets up AWS CodeDeploy to perform blue/green deployments of a Lambda function alias. Pick a deployment strategy (all-at-once, canary, linear) and CodeDeploy manages the traffic shift between function versions. |
| AWS RDS Database Instance | — | Creates an Amazon RDS database instance. Choose a database engine and the master credentials are auto-managed by AWS Secrets Manager — the secret ARN is exposed as an output. |
| AWS RDS DB Subnet Group | — | Creates an RDS DB subnet group, which determines which VPC subnets RDS / Aurora instances can be placed in. |
| AWS Secrets Manager | — | Creates an AWS Secrets Manager secret with KMS encryption. Use for storing API keys, DB passwords, OAuth tokens, etc. |
| AWS Security Group | — | Creates an AWS VPC security group. Define inbound and outbound rules as JSON arrays. Egress defaults to allow-all (0.0.0.0/0). Uses the modern aws_vpc_security_group_*_rule resources, sidestepping the eventual-consistency bug in the older aws_security_group_rule. |
| AWS VPC | — | Creates set of VPC resources which may be sufficient for staging or production environment. There are public, private, database, ElastiCache, intra (private w/o Internet access) subnets, and NAT Gateways created in each availability zone. |
| AWS VPC Endpoint | — | Creates VPC endpoints to AWS services so internal traffic stays on the AWS backbone instead of going out via the Internet Gateway. Pick a preset for common bundles (S3, EKS, Lambda) or use Custom to define endpoints inline. |
| Azure AKS with Multiple Node Pools | — | Deploy a multiple node pools Kubernetes cluster on AKS with monitoring support through Azure Log Analytics. Includes 3 worker node pools with configurable Kubernetes version. |
| Azure Named AKS Cluster | — | Deploy a named Kubernetes cluster on AKS with monitoring support through Azure Log Analytics, Azure AD RBAC, KMS etcd encryption, disk encryption set, and a choice of public or private API server access. |
| Azure SQL Database | — | Deploy an Azure SQL Database with Azure AD authentication, firewall rules, and auto-generated admin credentials. |
| Azure Virtual Network | — | Deploy a Virtual Network in Azure with 3 subnets, NSG, route table, service endpoints, subnet delegation, and private link policies. |
| Azure VM in Availability Set | — | Deploy Virtual Machines in an availability set on Azure, including a Linux (Ubuntu) and Windows VM with disk encryption, VNet, NSG, boot diagnostics, and a choice of public or private network access. |
| Azure VM Scale Set | — | Deploy a Linux Virtual Machine Scale Set (VMSS) on Azure with VNet, NSG, SSH key authentication, and a choice of public or private instance IPs. |
| Catalyst C8000v Transit VPC on AWS | — | Cisco Catalyst C8000v Transit VPC on AWS — deploys two C8000v cloud routers in a self-contained Transit VPC using CloudFormation. Includes automated EC2 key pair generation, Lambda-based VPN poller, KMS-encrypted S3 VPN config bucket, and BGP-ready spoke VPC tagging. |
| Cisco vAPIC 6.0 on AWS | — | Deploy a 3-node Cisco Virtual APIC 6.0(2h) cluster on AWS using the official Marketplace AMI. Includes pre-flight validation of credentials, VPC, subnets, EIP quota, and Marketplace subscription before provisioning. |
| Linux EC2 | — | This blueprint deploys an EC2 instance and a QualiX VM for easy SSH over HTTP in AWS. It sets up the necessary network infrastructure and security groups to allow communication between the EC2 instance and the QualiX VM. The blueprint also outputs the private IP address of the EC2 instance and an SSH link for easy access. |
| Nexus Dashboard 4.1 on AWS | — | Nexus Dashboard 4.1 on AWS — dynamic dropdowns for VPC, Subnets, AZs. Gateway, security group, and static IPs auto-calculated. |
| S3 Bucket | — | Create and manage an Amazon Simple Storage Service (S3) bucket. |

## Full Stack (6)

| Solution | Version | Description |
|---|---|---|
| AI Defense PODs | — | AI-powered protection access network, cloud and endpoints. Blends telemetry and automates defense |
| AI POD | — | From 0 to AI-ready in minutes. Deploys a full-stack Cisco AI Pod including UCS compute, Nexus switches, Red Hat OpenShift, Nvidia GPU licensing, NetApp storage, and Nexus Dashboard integration — fully orchestrated end-to-end. |
| Cisco Secure AI Factory with NVIDIA | — | A validated, modular end-to-end architecture that combines Cisco's high-performance networking, compute, and security with NVIDIA’s accelerated computing. |
| FlashStack | — | Cisco and Everpure FlashStack - a modern converged infrastructure combining Cisco UCS compute, Cisco MDS/Nexus networking, and Pure Storage FlashArray all-flash. FlashStack delivers sub-millisecond latency, always-on data availability, and simplified operations through Pure Storage Evergreen subscriptions and Cisco Validated Designs. |
| FlexPod | — | Cisco and NetApp FlexPod - a validated converged infrastructure combining Cisco UCS compute, Cisco Nexus networking, and NetApp AFF/FAS storage. FlexPod delivers a pre-validated, enterprise-grade platform for virtualization, databases, and cloud-native workloads with Cisco Validated Design (CVD) backing. |
| Splunk POD | — | An Automated Splunk Deployment Blueprint is a codified framework that streamlines the end-to-end installation, configuration, and scaling of Splunk environments. It automates the provisioning of indexers, search heads, forwarders, and data inputs using infrastructure-as-code and CI/CD pipelines. This blueprint ensures consistent deployment across environments, accelerates time-to-insight, enforces best practices for data ingestion and security, and reduces manual overhead in managing observability and analytics at scale. |

## GPUaaS (4)

| Solution | Version | Description |
|---|---|---|
| Baremetal GPU (Reserved) - AWS | — | GPU-as-a-Service - reserved (Capacity Block) NVIDIA training hosts on AWS EC2: A100 (`p4d`/`p4de`), H100 (`p5`), H200 (`p5e`/`p5en`), and B300 Blackwell Ultra (`p6-b300`). These are full 8-GPU instances that AWS almost never has available on demand - you must hold a reservation (an EC2 Capacity Block for ML, or an On-Demand Capacity Reservation) and launch into it. Same dedicated host as the on-demand blueprint (per-env SSH key, Deep Learning Base AMI, optional IDE) - just capacity-gated. For T4/A10G/L4/L40S/RTX-PRO-6000 use the on-demand "Baremetal GPU - AWS" blueprint instead. |
| Baremetal GPU - AWS | — | GPU-as-a-Service - on-demand NVIDIA GPU host on AWS EC2. One blueprint for the whole on-demand GPU range: T4 (`g4dn`), A10G (`g5`), L4 (`g6`), L40S (`g6e`), and RTX PRO 6000 Blackwell (`g7e`), plus legacy V100 (`p3`) - and a bare-metal `g4dn.metal` option for a full physical host. Provisions a dedicated GPU instance with a per-environment SSH key, running an AWS Deep Learning Base GPU AMI (NVIDIA driver + CUDA + Docker preinstalled). Pick a GPU/size, OS, on-demand or spot, optional data volume, and optionally auto-launch JupyterLab or VS Code (code-server). Deploys into an existing subnet or a dedicated VPC. These all launch on-demand (no reservation) - for H100/H200/B300/A100 use the "Baremetal GPU (Reserved)" blueprint. |
| Baremetal GPU - Azure | — | GPU-as-a-Service - on-demand NVIDIA GPU host on Azure (N-series). One blueprint for the GPU range: T4 (`NCasT4_v3`), V100 (`NCSv3`), A10 (`NVadsA10_v5`), A100 (`NCadsA100_v4` / `NDASv4`), and H100 (`NCadsH100_v5` / `NDSH100v5`), including 8-GPU ND training clusters with InfiniBand. Provisions a dedicated GPU VM with a per-environment SSH key, running Ubuntu with the NVIDIA driver installed via the Azure GPU driver extension. Pick a GPU/size, OS, on-demand or spot, optional data disk, and optionally auto-launch JupyterLab or VS Code (code-server). Deploys into a dedicated VNet or an existing subnet. QUOTA REQUIRED: Azure GPU (N-series) quota defaults to 0 and is granted per GPU-family, per-region, per-subscription via a support/quota request. You must have approved vCPU quota for the chosen size's family in the chosen region on the target subscription, or the deploy will fail at the VM step. Check/request in the Azure Portal: Subscription -> Usage + quotas -> filter the family (e.g. `Standard NCASv3_T4 Family`) -> the chosen region -> Request increase. Request at least as many vCPUs as the size uses (e.g. `Standard_NC4as_T4_v3` = 4 vCPUs). Each GPU family and region needs its own quota request. |
| SageMaker - AWS | — | Managed Amazon SageMaker dev environment on AWS. Pick the type: a single SageMaker Notebook Instance (simplest - browser JupyterLab, CPU or T4/A10G/L4 GPU), or full SageMaker Studio (JupyterLab + Code Editor / VS Code on a space, supports newer GPUs incl. L40S/g6e). From either, drive the rest of SageMaker (training, endpoints, JumpStart) via the SDK. SageMaker-managed networking by default, or place it in a subnet. |

## LLM (22)

| Solution | Version | Description |
|---|---|---|
| Amazon Bedrock - AWS | — | Amazon Bedrock on AWS. Chat with foundation models (Claude, Llama, Nova/Titan, Mistral) serverless and pay-per-token - no GPU host, and no AWS credentials needed to use it. The blueprint deploys a tiny serverless chat endpoint (API Gateway + Lambda) wired to Bedrock: open the chat_url output in a browser, enter the password, and chat - or switch to Compare mode to run one prompt across several models side by side (picked from the live list of currently-available models). To compare across providers (Claude vs Llama vs Nova), set model_provider = All. Note: a model must be enabled once at the account level (Bedrock console -> Model access); the blueprint grants invoke permission but cannot enable account-level model access. |
| Azure AI Chat & Compare - Azure | — | Azure AI chat & multi-provider compare. Deploy one or more managed models from the Azure AI Foundry catalog - across providers (OpenAI GPT-5, Meta Llama, Mistral, DeepSeek, Cohere, Microsoft Phi, xAI Grok) - serverless and pay-per-token, no GPU host, no VM, and no Azure credentials needed to use it. The blueprint deploys an Azure AI Services account plus your chosen model deployments and a password-gated chat endpoint (Azure Function): open the chat_url, enter the chat_password, and chat - or use the Compare tab to run one prompt across every deployed model side by side. Pure serverless PaaS, so it deploys where the GPU tiers are blocked by VM-SKU policy or GPU quota. |
| Azure AI Foundry (Classic) - Azure | — | Azure AI Foundry (Classic) on Azure. A ready dev platform (hub + project) for building AI: deploy models, create agents, run evaluations, and attach compute - the Azure analog of SageMaker/Studio. The blueprint provisions an AI Foundry hub + project (plus the storage account and key vault the hub requires) and outputs a studio deep-link. Open it (Azure AD login) to start building. Note: this is the hub-based "Foundry Classic" architecture - the Azure Portal's default "New Foundry" view will show "Hub project is not supported in new Foundry" and prompt you to "Open in Foundry Classic," which works fine. Pure PaaS, so it deploys even where the GPU tiers are blocked; model deployments or managed compute created inside the project may need their own quota. |
| Azure AI Foundry - Azure | — | Microsoft Foundry on Azure (new architecture). A ready dev platform for building AI: deploy models, create agents, run evaluations, and attach compute - the Azure analog of SageMaker/Studio. The blueprint provisions a Foundry account + project (no separate ML-workspace hub, storage account, or key vault needed - this is the current, hub-free architecture) and outputs the portal URL. Open it (Azure AD login), make sure the "New Foundry" toggle is ON, and find the project by its display name to start building. Pure PaaS, so it deploys even where the GPU tiers are blocked; model deployments or managed compute created inside the project may need their own quota. For the older hub-based architecture, see "Azure AI Foundry (Classic) - Azure." |
| Bedrock Knowledge Base (RAG) - AWS | — | Amazon Bedrock Knowledge Base (RAG) on AWS. Chat grounded on your documents, serverless and credential-less. The blueprint deploys an S3 Vectors store (pay-as-you-go - no always-on cluster), a Bedrock Knowledge Base, an S3 documents bucket, and a password-gated chat endpoint (API Gateway + Lambda). Open the chat_url, upload documents, and ask questions answered from them with citations. Note: Bedrock serverless models auto-enable on first use - no manual model-access step. Only Anthropic (Claude) first-time use may need a short use-case form; Amazon (Nova) and Titan embeddings need nothing. |
| CodeLlama 13B | — | Deploy Meta CodeLlama 13B Instruct — a 13-billion parameter code generation model. Requires 1 GPU (~26GB VRAM, needs A10/L40). |
| Custom Model | — | Deploy an AI model agent on an existing NVIDIA AI Platform. Each environment = one running model with its own query and lifecycle workflows. |
| DeepSeek R1 8B | — | Deploy DeepSeek R1 Distill Llama 8B — a reasoning-optimized 8B model distilled from DeepSeek R1. Requires 1 GPU (~16GB VRAM). |
| DeepSeek R1 Qwen 7B | — | Deploy DeepSeek R1 Distill Qwen 7B — a reasoning-optimized 7B model distilled from DeepSeek R1. Requires 1 GPU (~14GB VRAM). |
| Gemma 2 9B | — | Deploy Google Gemma 2 9B IT — a 9-billion parameter instruction-tuned model from Google. Requires 1 GPU (~18GB VRAM). |
| Gemma 3 1B | — | Deploy Google Gemma 3 1B IT — a lightweight current-generation Gemma model for fast inference. Requires 1 GPU (~3GB VRAM). |
| Granite 3.3 8B | — | Deploy IBM Granite 3.3 8B Instruct — an Apache-2.0 licensed enterprise LLM from IBM. Requires 1 GPU (~16GB VRAM). |
| Llama 3.1 8B | — | Deploy Meta Llama 3.1 8B Instruct — a general-purpose 8-billion parameter LLM. Requires 1 GPU (~16GB VRAM). |
| Llama 3.1 Nemotron Nano 8B | — | Deploy NVIDIA Llama 3.1 Nemotron Nano 8B — a reasoning-tuned 8B model from NVIDIA’s Nemotron family. Requires 1 GPU (~16GB VRAM). |
| Llama 3.2 1B | — | Deploy Meta Llama 3.2 1B Instruct — a lightweight 1-billion parameter LLM for fast inference. Requires 1 GPU (~3GB VRAM). |
| Llama 3.2 3B | — | Deploy Meta Llama 3.2 3B Instruct — a compact 3-billion parameter LLM balancing quality and speed. Requires 1 GPU (~6GB VRAM). |
| Mistral 7B | — | Deploy Mistral 7B Instruct v0.3 — a high-quality 7B parameter model with strong instruction following. Requires 1 GPU (~14GB VRAM). |
| Mistral NeMo Minitron 8B | — | Deploy Mistral NeMo Minitron 8B Instruct — a distilled NVIDIA–Mistral model with an 8K context window. Requires 1 GPU (~16GB VRAM). |
| Nemotron Nano 9B v2 | — | Deploy NVIDIA Nemotron Nano 9B v2 — NVIDIA’s compact general-purpose model with reasoning capabilities. Requires 1 GPU (~18GB VRAM). |
| NVIDIA NIM | — | Deploy an AI model agent on your NVIDIA AI Platform. Each model runs as an independent environment with its own query workflows and lifecycle. Terminate the environment to free GPUs. |
| Phi-4 Mini | — | Deploy Microsoft Phi-4 Mini Instruct — a lightweight ~4B model from the Phi-4 family for fast inference. Requires 1 GPU (~8GB VRAM). |
| Qwen 2.5 7B | — | Deploy Qwen 2.5 7B Instruct — a multilingual 7B model with strong coding and math performance. Requires 1 GPU (~14GB VRAM). |

## Networking (6)

| Solution | Version | Description |
|---|---|---|
| Catalyst 8000v 17.18 on VMware | — | On-premises virtual router providing Layer 3 routing services deployed as an OVA on vSphere. |
| Cisco Catalyst Center BMaaS & VMaaS | — | Cisco Catalyst Center (formerly DNA Center) appliance. SEMI-AUTOMATED: after install, day-0 configuration (interface IPs, DNS, NTP, CLI password) is completed on the appliance's interactive Maglev / Install wizard - the on-prem appliance has no unattended config path. See instructions. |
| Cisco Crosswork Network Controller | — | Deploy Cisco Crosswork Network Controller (CNC) 7.2 on VMware vCenter using Terraform and the HashiCorp vSphere provider. The Terraform grain runs on the selected Management Server agent and deploys the CNC VM(s) from OVA using OVF vApp property injection for Day 0 configuration. Supports single-node (SVM) and 3-node cluster topologies. Optionally deploys a Crosswork Data Gateway (CDG) VM alongside the controller. |
| Cisco vAPIC 6.2 | — | Deploy Cisco virtual APIC OVA appliance on vCenter with local file cache |
| Nexus 9300v | — | Deploy Cisco Nexus 9300v (NX-OS 10.X.X) as a virtual appliance on VMware vCenter. |
| Nexus Dashboard | — | This blueprint is part of the Nexus Dashboard family of blueprints. Install Nexus Dashboard 4.1 or 4.2 on VMware. |

## NIM (1)

| Solution | Version | Description |
|---|---|---|
| NVIDIA Enterprise RAG | — | NVIDIA Enterprise RAG appliance on an AWS GPU instance. Validates CUDA/Docker GPU runtime, and deploys a local RAG stack with NVIDIA NIMs. |

## OS and Platform (8)

| Solution | Version | Description |
|---|---|---|
| AI-Ready OpenShift (Bare Metal) | — | End-to-end AI-Ready Cluster: provisions bare metal servers, installs OpenShift, and deploys the NVIDIA AI Platform (GPU Operator, NIM Operator) — all in one workflow. |
| Bare Metal ESXi 7.0 Install (Dual vNIC) | 7.0 | Install VMware ESXi 7.0 on a bare-metal UCSX Intersight-managed server with dual vNIC (A/B paths) and selectable storage type. |
| Bare Metal ESXi 8.0 Install (Dual vNIC) | 8.0 | This blueprint is part of the ESXi 8.0 family of blueprints. Install VMware ESXi 8.0 on a bare-metal UCS Intersight-managed server. |
| Bare Metal Proxmox VE Install | — | Install Proxmox VE on a bare-metal Intersight-managed server using Virtual Media and automated answer file |
| Bare Metal Rocky Linux 9.5 Install | — | Deploy Rocky Linux 9.5 on a bare-metal Intersight-managed server. |
| Bare Metal Ubuntu 26.0 LTS | — | Install Ubuntu 26.04 LTS Server on a UCS server managed by Intersight. Allocates a management IP automatically, generates a custom autoinstall ISO with GRUB-embedded kernel cmdline, and monitors the installation to completion via SSH. |
| Bare Metal Windows Server 2025 | — | This blueprint is part of the Windows 2025 family of blueprints. Install Windows Server 2025 Datacenter (Desktop Experience) on a bare-metal UCS Intersight-managed or ISM server with dual vNIC (A/B paths) and selectable storage type. |
| OpenShift on Bare Metal | — | Deploy an OpenShift cluster on Cisco UCS servers from bare metal. |

## Samples (2)

| Solution | Version | Description |
|---|---|---|
| Linux EC2 Demo | — | Samples resources are provisioned in Cisco's AWS account. This blueprint deploys an EC2 instance and a QualiX VM for easy SSH over HTTP in AWS, including network infrastructure and security groups to allow communication between the two instances. |
| S3 Bucket Demo | — | Samples resources are provisioned in Cisco's AWS account. Create and manage an Amazon Simple Storage Service (S3) bucket. |

## Security (6)

| Solution | Version | Description |
|---|---|---|
| Cisco Live Protect | — | Enable or disable Cisco Live Protect on a Nexus Dashboard switch. The operator picks a Nexus Dashboard target, Enable/Disable, the provider and the switch; the API route is derived from the action, and the switch picker lists only switches eligible for that action. |
| Firepower Management Center Virtual (FMCv) 7.6.5 | — | Deploy Cisco Secure Firewall Management Center Virtual 300 (FMCv) 7.6.5 on VMware vCenter from the Cisco multi-file OVF package. Management networking is injected through OVF properties and can be resolved automatically by scanning the target management subnet. |
| Firepower Threat Defense Virtual (FTDv) 10.0 | — | Deploy Cisco Secure Firewall Threat Defense Virtual (FTDv) 10.x on VMware vCenter. Deploys the FTDv OVF package with full network and management bootstrap via OVF environment injection. Supports local management (FDM) or FMC-managed mode. |
| Identity Services Engine (ISE) | — | Centralized security policy management for network access control and compliance. |
| Isovalent Networking for Kubernetes | — | Install Isovalent Cilium Enterprise networking for Kubernetes onto an existing cluster. Supports fresh Cilium installs, existing-CNI chaining, and a controlled existing-CNI-to-Cilium replacement workflow using Cilium's documented dual-overlay migration pattern. |
| Isovalent Runtime Security | — | Distributed networking and security, providing deep visibility into service communication and network behavior in cloud-native environments |

## Storage (7)

| Solution | Version | Description |
|---|---|---|
| Cohesity Virtual Edition 7.4 | 7.4 | Deploy Cohesity Virtual Edition 7.4 on VMware vSphere. Single-node data security and management platform for backup, recovery, and ransomware resilience. |
| ONTAP Select Deploy and ONTAP System Manager 9.18.1 | — | Deploy ONTAP Select Deploy and ONTAP System Manager 9.18.1 VMs on VMware vSphere from OVA. ONTAP Select Deploy is the NetApp management appliance used to install, configure, and manage ONTAP Select single-node clusters on vSphere ESXi hosts. This blueprint deploys the Deploy VM, configures networking and credentials via OVF vApp properties, validates readiness on port 443 (HTTPS Web UI), and outputs the access URL. Single-node ONTAP Select clusters can then be provisioned through the Deploy web interface or REST API. |
| Portworx by Everpure | — | Deploy Portworx Enterprise (by Everpure) onto an existing, already-running Red Hat OpenShift or upstream Kubernetes cluster (bare metal / on-prem). Targets a Kubernetes cluster registered in Stack Automation. Runs pre-flight checks, applies the Portworx Operator + StorageCluster spec generated from `install.portworx.com`, and validates pod, cluster, pool, and provisioning health post-install. Converged deployment (compute and storage on the same nodes) and the `PX-StoreV1` datastore are the defaults; disaggregated deployment and `PX-StoreV2` are available from the dropdowns below. |
| Qumulo Core NAS (Kiosk) | — | Deploy Qumulo Core 7.8.1.1 (Kiosk Edition) as a 4-node virtual cluster on vCenter. Provisions four Qumulo Kiosk OVA instances - the minimum required for cluster formation - and fully automates the first-run wizard: EULA acceptance, node discovery, cluster creation, and admin password assignment via the Qumulo REST API. A lightweight Ubuntu DHCP helper VM is included to bootstrap IP assignment when no existing DHCP server is available on the port group; it serves four sequential IPs starting from the address you specify. After the cluster forms, the primary node is optionally converted to a permanent static IP. Intended for lab, development, and evaluation purposes only. |
| SAN Attach Volume | — | Attach an existing SAN volume to a bare-metal Intersight-managed server. Performs the full cross-team handshake in one launch: SAN-enables the server through Intersight (two vHBAs, per-environment WWPN pools, VSANs discovered from the Fabric Interconnect FC uplinks), then masks the selected volume to the server's initiators on the storage array. Teardown retracts everything: masking is removed, the profile is unassigned, and the WWPN identities are released. The volume itself is never deleted. |
| VAST Data | — | VAST Data platform provides high-performance, scalable persistent storage and data management for. |
| Veeam Software Appliance | — | Deploy Veeam Backup & Replication 13.0.1 Software Appliance on VMware vSphere. Provisions the pre-configured Rocky Linux OVA (DISA STIG-hardened, secure-by-default), configures networking via the Startup Wizard, and validates readiness on port 443 (Web UI) and 10443 (Host Management). Delivers enterprise-grade backup, replication, and recovery for virtual, physical, and cloud environments - no Linux expertise required. |

## VMaaS (3)

| Solution | Version | Description |
|---|---|---|
| Ubuntu VM on VMware | — | Deploy minimal Linux VM from Ubuntu Cloud Image OVA on vCenter with local file cache |
| VM Linux RHEL 10.1 | — | Deploy RHEL 10.1 VM from OVA on vCenter with SSH access (auto) |
| Windows Server 2025 Datacenter | — | Deploy Windows Server 2025 VM from OVA on vCenter with RDP access (auto) |

