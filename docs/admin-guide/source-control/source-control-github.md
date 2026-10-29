---
sidebar_position: 1
title: GitHub Source Control
---

Stack Automation supports connecting asset, blueprint, and policy repositories hosted on GitHub. Repositories are connected per space from the **Add Repository** wizard, and the credentials you provide are saved in the Stack Automation [Integrations](/admin-guide/credentials) store so you can reuse them when you connect more repositories from the same provider.

**This article refers to the SAAS version of GitHub. If you're using self-hosted GitHub Enterprise, select **Self Managed Repository** in the wizard and check [here](/admin-guide/source-control/Self%20Hosted%20Repositories/overview).**

## Prerequisites

* Read access to the GitHub repository you want to connect.
* A GitHub [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) with read access to the repository's contents.

## Connect a GitHub repository

1. Select the space in the space selection dropdown, go to **Automation > Repositories**, and click **Add Repository**.
2. In the **Select a Repository Provider** step, select **GitHub** and click **Next**.
3. In the **Connection** step, fill in the **Details**:
   * **Repository URL** - the HTTPS URL of the repository, for example `https://github.com/{org}/{repo}`.
   * **Repository Name** - the name the repository will have in Stack Automation.
   * **Branch** (optional) - the branch to use. If you leave it empty, Stack Automation uses the repository's default branch.
   * **Auto-Track Deployment Files** (optional) - automatically discover and track deployment files from this repository.
   * **Self Managed Repository** - select this if your git server is hosted by you and not on the SAAS. For details, see [Self Hosted Repositories](/admin-guide/source-control/Self%20Hosted%20Repositories/overview).
4. Under **Integrations**, provide the access details:
   * If the credentials you need already exist in the Integrations store, choose **Select from Existing Credentials** and pick them.
   * Otherwise, choose **Create New Credentials** (when the option is shown) and enter an **Integrations Name** and the **Personal Access Token** that grants Stack Automation read access to the repository.
5. Click **Connect**.

   Stack Automation connects to the repository, saves the credentials in the Integrations store, and discovers the repository's assets. The confirmation screen lists the number of assets discovered and lets you open them in the **Assets** page.

:::tip
Once connected, the repository appears in **Automation > Repositories** with its default branch, assets, and last sync time. Use the repository's **⋮** (3-dot) menu to view its details, sync from git, or disconnect it.
:::
