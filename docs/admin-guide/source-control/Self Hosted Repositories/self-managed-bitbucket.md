---
sidebar_position: 3
title: Self-Managed BitBucket
---

Stack Automation supports connecting to self-managed BitBucket repositories, allowing you to discover and manage assets stored in your on-premises BitBucket instance. Communication with the server happens through a Stack Automation management server installed on your network, as described in [Using Self-Managed source control providers](/admin-guide/source-control/Self%20Hosted%20Repositories/overview).

## Prerequisites

1. **Management server**: a Stack Automation [management server](/agent/Install-and-connect-self-hosted-agent) connected to the space, with network access to your self-managed BitBucket instance.
2. **Access token**: a BitBucket personal access token with the following permission scopes:
   * `api`
   * `read.api`
   * `read.repository`

## Configuration

1. Select the space in the space selection dropdown, go to **Automation > Repositories**, and click **Add Repository**.
2. In the **Select a Repository Provider** step, select **BitBucket** and click **Next**.
3. In the **Connection** step, fill in the **Details**: the **Repository URL** on your BitBucket server, a **Repository Name**, and optionally a **Branch**.
4. Select **Self Managed Repository**.
5. Under **Integrations**, enter an **Integrations Name** (or pick existing credentials from the store) and the **Personal Access Token**.
6. Under **Available Management Server**, select the management server (or servers) that can reach your BitBucket server, or turn on **All Management Servers**.
7. Click **Test Connection** to verify that the management server can reach the repository, then click **Connect**.
8. Once connected, Stack Automation discovers the assets in the repository. For more information on asset discovery, refer to [Discover Your Assets](/getting-started/asset-discovery).

> ![Add a repository](/img/bitbucket-connect.png)

With a self-managed BitBucket repository configured in Stack Automation, you can seamlessly manage and version control your assets stored in your on-premises BitBucket instance.
