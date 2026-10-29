---
sidebar_position: 1
title: Using Self-Managed source control providers
---
Stack Automation can integrate with any source control provider, whether it's a public SaaS platform (e.g., github.com) or a self-managed instance running on your premises. When using a self-managed source control provider, the communication between Stack Automation and the source control server is fully contained within your site, happening between the Stack Automation management server installed on your cluster and the source control server installed on your premises.

> ![Self-Hosted Repositories](/img/self-hosted-repos.png)

There are three steps when configuring Stack Automation to read from a self-hosted source control provider:

1. **Install a management server** that can reach your source control server. See [Install a Management Server on your Kubernetes Cluster](/agent/Install-and-connect-self-hosted-agent).
2. **Generate a personal access token** on your source control server with read access to the repositories you want to connect.
3. **Add your repositories to Stack Automation** from the **Add Repository** wizard (**Automation > Repositories**), with the **Self Managed Repository** option selected. This can also be done through the Stack Automation API or the Stack Automation Terraform provider.

## The Self Managed Repository option

When you select **Self Managed Repository** in the **Connection** step of the **Add Repository** wizard, Stack Automation adds the following to the **Integrations** panel:

* **Available Management Server** - select the space management server (or servers) that can reach your source control server, or turn on **All Management Servers**. Stack Automation uses these management servers, rather than the Stack Automation SaaS, to clone and sync the repository.
* **Test Connection** - verifies that the selected management server can reach the repository with the provided credentials before you click **Connect**.

See the following sections for the details of each self-managed source control provider:

1. [GitHub Enterprise (on-premise)](/admin-guide/source-control/Self%20Hosted%20Repositories/self-managed-github)
2. [GitLab on-premise](/admin-guide/source-control/Self%20Hosted%20Repositories/self-managed-gitlab)
3. [BitBucket Enterprise (on-premise)](/admin-guide/source-control/Self%20Hosted%20Repositories/self-managed-bitbucket)
4. Azure Repositories on-premise - Supported, Please contact support for detailed instructions

With a self-managed source control provider configured in Stack Automation, you can securely manage and version control your assets stored in your on-premises source control system, while keeping all communication within your network boundaries.
