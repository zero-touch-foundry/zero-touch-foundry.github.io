---
title: Stack Automation Data Sheet
sidebar_label: Data Sheet
sidebar_position: 1
description: Product and platform data sheet for Stack Automation, including supported solutions, requirements, limits, and deployment prerequisites.
---

# Stack Automation Data Sheet 

## Index

- Disclaimer
- Document Revision
- Supported Solutions
- Product Overview
- Management Server - System Requirements
- Software Downloads
- Required Network Ports
- Proxy Configuration Considerations
- Licensing
- Platform Limits and Specifications
- Supported Inventory Providers
- SKUs
- OS and Platform Blueprint - Deployment Prerequisites
- For More Information

## Supported Solutions

Stack Automation ships with a growing, Cisco-validated catalog of self-service blueprints spanning networking, security, storage, compute provisioning, observability, and AI/ML infrastructure. The table below summarizes the catalog by category as of July 30, 2026; the current, authoritative list is always available at stackautomation.cisco.com/help/solutions-hub.

| Category | Representative Solutions |
|---|---|
| Networking and SDN | Nexus Dashboard, Nexus 9300v, Catalyst Center, Catalyst 8000v, Crosswork Network Controller, Cisco Live Protect |
| Security | Secure Firewall Threat Defense (FTDv), Firepower Management Center, Identity Services Engine, Isovalent Hubble / Cilium Enterprise / Tetragon |
| Storage and Data Protection | NetApp ONTAP Select, Cohesity Virtual Edition, Veeam Backup and Replication, Qumulo Core NAS, VAST Data, Portworx by Everpure |
| Compute Provisioning (OS and Platform) | Bare-metal ESXi 7.0/8.0, Rocky Linux, Ubuntu LTS, Windows Server, Proxmox VE, VMware vCenter Server Appliance, RedHat OpenShift on Bare-Metal, K3s/Kubernetes |
| AI, ML and GPU-as-a-Service | AI-Ready RedHat Cluster, RedHat OpenShift AI, NVIDIA and AMD GPU Operators, Cisco Secure AI Factory with NVIDIA, LLM model catalog (Llama, Mistral, and others), vLLM, Ollama, Open WebUI, Jupyter/VSCode Notebooks |
| Observability and IT/OT Operations | Splunk Enterprise, Grafana + Prometheus, ThousandEyes Enterprise Agent, NetBox Labs, Cisco Cyber Vision |
| Management and Ecosystem Integration | Cisco Intersight Assist, Cisco vAPIC |
| Public Cloud (AWS / Azure) | RDS Database, RHEL VM pipelines, and additional NVIDIA NIM-based AI pipelines |

## Product Overview

Stack Automation by Quali, co-engineered with Cisco, is a SaaS-based deployment automation platform that shifts Cisco infrastructure and ecosystem software from manual, component-by-component configuration to a fully automated, cloud-like Day 0-1 deployment model. Delivered exclusively through Cisco and built on Quali's Torque automation engine, the platform lets teams launch Cisco-validated blueprints from a self-service catalog or compose custom blueprints from existing Terraform, Ansible, and Helm assets - with agentic Copilot assistance to generate, optimize, and self-heal configurations.

Stack Automation reaches on-premises infrastructure through a lightweight management server deployed as a virtual appliance, and orchestrates deployments spanning compute, networking, storage, security, observability, and AI software layers across cloud, on-premises, and hybrid environments.

## Management Server - System Requirements

The Stack Automation management server is deployed as a virtual appliance on customer-owned infrastructure and connects the SaaS control plane to on-premises inventory.

| Requirement | Specification |
|---|---|
| Hypervisor platform | VMware vCenter 6.7 or later |
| vCPU | 2 |
| Memory | 16 GB |
| Disk | 200 GB, thick-provisioned (thin provisioning not supported) |

## Software Downloads

The management server and the software it deploys (OS images, blueprint assets, and packages) are downloaded directly from origin at deployment time - they are not cached or proxied through the Stack Automation SaaS control plane.

## Required Network Ports

The management server requires outbound connectivity to the Stack Automation SaaS control plane:

| Source | Destination | Port | Protocol |
|---|---|---|---|
| Management Server | stackautomation.cisco.com | 443 | TCP (HTTPS) |

DNS resolution for stackautomation.cisco.com must succeed from the management server. Firewalls, DNS servers, and any upstream proxy in the path must permit both the outbound connection and name resolution for this domain.

## Proxy Configuration Considerations

If an HTTP/HTTPS proxy is required for outbound access, configure the proxy allow-list with the explicit hostname stackautomation.cisco.com.

- Do not use a wildcard entry such as *.cisco.com - wildcard allow-listing is not supported and may cause connectivity or security-policy issues.

## Licensing

Stack Automation is offered in two license tiers:

- **Essentials** - consumption-based access to the full solutions catalog, for up to 100 concurrent compute units (CCUs).
- **Advantage** - includes everything in Essentials, plus blueprint customization, custom repository integration, and agentic Copilot capabilities.

## Platform Limits and Specifications

The following limits characterize the Stack Automation SaaS platform and its management server component. Values are finalized separately and will be published ahead of general availability.

| Segment | Topic | Value |
|---|---|---|
| Management Server | Maximum concurrent simultaneous blueprint deploys (2 vCPUs / 16GB RAM) | 10 |
| Management Server | Storage space allocated for ISO caching | 200GB |
| Account | Maximum spaces per account | 200 |
| Blueprint | Maximum grains per blueprint | 200 |
| Repository | Maximum attached repositories | 300 repositories |
| Repository | Maximum assets imported per repository | 10,000 |
| Space | Maximum blueprints per space | 500 |
| Copilot supported tier | Maximum requests per minute (RPM) | 10,000 |
| Copilot supported tier | Tokens per minute (TPM) | 4,000,000 |
| Blueprint Execution | Simultaneous server support - OS and Platform blueprints | 4 servers where multiple selection is supported |

## Supported Inventory Providers

Stack Automation discovers and provisions against the following inventory sources:

- Cisco Intersight
- Cisco Nexus Dashboard 4.1 or later
- VMware vCenter 6.7 or later
- Amazon Web Services (AWS)
- Microsoft Azure

Additional inventory provider integrations are on the platform roadmap; see Disclaimer.

## SKUs

Ordering information for Stack Automation license tiers:

| Billing PID | Description | Unit of Quantity | Pricing quantity | Initial term (months) |
|---|---|---|---|---|
| STKAUTO-SAAS-ESS | Stack Automation SaaS Essentials Support (optional) | Yearly support | 1 (for up to 100 CCUs) | 12-60 |
| STKAUTO-SAAS-AD | Stack Automation SaaS Subscription Advantage | CCUs | 100-999,999 | 12-60 |

Note: Ordering optional support for the Stack Automation Essentials tier. For more information, review **cisco-stack-automation-quali-ordering-guide**.

## OS and Platform Blueprint - Deployment Prerequisites

Bare-metal OS and Platform blueprints (Category: "OS and Platform" in the Stack Automation catalog) provision Cisco UCS servers directly through Intersight. Prerequisites differ by server form factor:

### UCS B-Series and X-Series (Intersight-managed, Fabric Interconnect-attached)

- Boot storage: M.2 (MSTOR-RAID mirrored) or SD/SAS (SDA / FMEZZ1-SAS) RAID controller, selectable at launch.
- Networking: the blueprint provisions dual vNICs across the A and B fabric paths.
- Virtual volumes created by the boot/RAID policy: to be confirmed against the install-script output.
- Supported from Cisco UCS M6-generation servers and later.

### UCS C-Series (standalone, non-Fabric-Interconnect)

- All physical network ports must be cabled and connected for server discovery and provisioning to complete successfully.
- Disk/RAID and OS install prerequisites follow the same M6-and-later support boundary as B-Series/X-Series.

## For More Information

For the latest documentation, blueprint catalog, and how-tos, visit stackautomation.cisco.com/help.