---
sidebar_position: 10
title: Self-Managed Quali CloudShell
---

Stack Automation supports connecting asset, blueprint, and policy repositories hosted on Quali CloudShell. Repositories are connected per space from the **Add Repository** wizard, and the credentials you provide are saved in the Stack Automation [Integrations](/admin-guide/credentials) store so you can reuse them when you connect more repositories from the same provider.


## Prerequisites

Stack Automation supports connecting Quali CloudShell as an asset repository. CloudShell blueprints are treated as assets in Stack Automation and can be referenced using the `CloudShell` grain type.

1. A CloudShell user with at least **External Extended** permissions in the CloudShell domains that you want to use.
2. A self-hosted Stack Automation management server that can reach the Sandbox API of your CloudShell instance.
3. CloudShell version 2021.2 or higher.

## Connect a Quali CloudShell repository

1. Select the space in the space selection dropdown, go to **Automation > Repositories**, and click **Add Repository**.
2. In the **Select a Repository Provider** step, select **CloudShell** and click **Next**.
3. In the **Connection** step, fill in the **Details**:
   * **Repository URL** - the URL of your CloudShell instance.
   * **Repository Name** - the name the repository will have in Stack Automation.
   * **Branch** (optional) - the branch to use. If you leave it empty, Stack Automation uses the repository's default branch.
   * **Auto-Track Deployment Files** (optional) - automatically discover and track deployment files from this repository.
4. Under **Integrations**, provide the access details:
   * If the credentials you need already exist in the Integrations store, choose **Select from Existing Credentials** and pick them.
   * Otherwise, choose **Create New Credentials** (when the option is shown) and enter an **Integrations Name**, the CloudShell **Server Address**, optionally a **Token TTL**, and the **User Name** and **Password** of the CloudShell user from the prerequisites.
5. Click **Connect**.

   Stack Automation connects to the repository, saves the credentials in the Integrations store, and discovers the repository's assets. The confirmation screen lists the number of assets discovered and lets you open them in the **Assets** page.

:::tip
Once connected, the repository appears in **Automation > Repositories** with its default branch, assets, and last sync time. Use the repository's **⋮** (3-dot) menu to view its details, sync from git, or disconnect it.
:::
