---
sidebar_position: 7
title: Outbound Ports for Self-hosted Management Servers
hide_table_of_contents: true
---

This table lists the outbound ports that are required for Kubernetes cluster nodes to fully function when hosting a Stack Automation management server.

|Target Name|Target Address/Hostname|Type|Ports|Traffic Purpose|
|:---|:---|:---|:---|:---|
|Stack Automation Back-end Services & APIs|https://stackautomation.cisco.com|HTTPS|443|Communication from the management server to Stack Automation APIs|
|Github|https://github.com|HTTPS|443|Optional. Access to Github.|
|Hashicorp - Official Terraform Releases & Providers registry|https://releases.hashicorp.com https://registry.terraform.io|HTTPS|443|Download and install Terraform on sandbox TF Runner pod|
