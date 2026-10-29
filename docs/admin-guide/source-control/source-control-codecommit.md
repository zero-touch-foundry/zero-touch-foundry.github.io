---
sidebar_position: 5
title: CodeCommit Source Control
---

Stack Automation supports connecting asset, blueprint, and policy repositories hosted on AWS CodeCommit. Repositories are connected per space from the **Add Repository** wizard, and the credentials you provide are saved in the Stack Automation [Integrations](/admin-guide/credentials) store so you can reuse them when you connect more repositories from the same provider.


## Prerequisites

Stack Automation accesses the repository (read only) both from the Stack Automation SAAS application on AWS and from the runners on your cluster, by assuming an IAM role in your account.

1. Create a role for Stack Automation to use which has permissions to connect to CodeCommit:
   1. Sign in to the AWS Management Console and open the IAM console at https://console.aws.amazon.com/iam/.
   2. In the navigation pane, choose **Roles**, and then choose **Create Role**.
   3. In **Select trusted entities**, choose **AWS account**, and select **Another AWS account**.
   4. In the account ID text box, type `349148204654` (the Stack Automation AWS account). Check **Require external ID** and enter an ID of your choice. Take note of the external ID.
   5. In **Add permissions**, search for **AWSCodeCommitReadOnly** and select it.
   6. Name your role, optionally add a description, and click **Create Role**.
   7. Open the new role and take note of its **ARN**.
2. Make sure the Stack Automation management server used by the space can reach CodeCommit in the repository's AWS region.

## Connect a AWS CodeCommit repository

1. Select the space in the space selection dropdown, go to **Automation > Repositories**, and click **Add Repository**.
2. In the **Select a Repository Provider** step, select **CodeCommit** and click **Next**.
3. In the **Connection** step, fill in the **Details**:
   * **Repository URL** - the HTTPS clone URL of the repository, for example `https://git-codecommit.us-east-1.amazonaws.com/v1/repos/{repo}`.
   * **Repository Name** - the name the repository will have in Stack Automation.
   * **Branch** (optional) - the branch to use. If you leave it empty, Stack Automation uses the repository's default branch.
   * **Auto-Track Deployment Files** (optional) - automatically discover and track deployment files from this repository.
4. Under **Integrations**, provide the access details:
   * If the credentials you need already exist in the Integrations store, choose **Select from Existing Credentials** and pick them.
   * Otherwise, choose **Create New Credentials** (when the option is shown) and enter an **Integrations Name**, the details of the role you created in the prerequisites (**Role ARN**, **AWS Region**, for example `us-east-1`, and **External ID**), and the **User Name** and **Password** of the IAM user's HTTPS Git credentials for CodeCommit.
5. Click **Connect**.

   Stack Automation connects to the repository, saves the credentials in the Integrations store, and discovers the repository's assets. The confirmation screen lists the number of assets discovered and lets you open them in the **Assets** page.

:::tip
Once connected, the repository appears in **Automation > Repositories** with its default branch, assets, and last sync time. Use the repository's **⋮** (3-dot) menu to view its details, sync from git, or disconnect it.
:::
