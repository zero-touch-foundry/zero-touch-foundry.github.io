---
sidebar_position: 1
title: GitHub Source Control
---

Stack Automation supports connecting asset/blueprint repositories on GitHub out of the box. However, to connect a repository, you must have access to the repository and grant Stack Automation permission to the repository using a PAT (Personal Access Token), as explained below. For details about adding your assets to Stack Automation, see [Discover Your Assets](/getting-started/asset-discovery). You should be able to sign in with an account on any one of these online services and immediately get going by connecting asset repositories and launching deployments.

**In this article:**
- [Ensure your account is added to the GitHub organization you're connecting](#ensure-your-account-is-added-to-the-github-organization-youre-connecting)
- [What is a Personal Access Token?](#what-is-a-personal-access-token)
- [Connect a repository using a Personal Access Token](#connect-a-repository-using-a-personal-access-token)
- [Token expiration and revocation](#token-expiration-and-revocation)
<!-- - [Ensure your organization has granted access to Stack Automation](#ensure-your-organization-has-granted-access-to-stack-automation) -->

**This article refers to the SAAS version of GitHub (github.com). If you're using self hosted GitHub Enterprise, check [here](/admin-guide/source-control/Self%20Hosted%20Repositories/overview)**.


## Ensure your account is added to the GitHub organization you're connecting

1. Go to [https://github.com/orgs/\{YOUR_ORG\}/people](https://github.com/orgs/\{YOUR_ORG\}/people).
2. Make sure your user is listed in the organization. If not, make sure the user is added as a member with global read access.

## What is a Personal Access Token?

A Personal Access Token (PAT) is a credential you generate on GitHub that Stack Automation uses in place of a password to authenticate and access your repositories. GitHub offers two types of PAT:

- __Classic tokens__ — grant access based on broad, predefined scopes (e.g., `repo`, `read:org`).
- __Fine-grained tokens__ — grant access to specific repositories with more granular permissions, offering tighter control over what Stack Automation can access.

Either type works with Stack Automation. For instructions on generating one, see GitHub's [Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) documentation.

## Connect a repository using a Personal Access Token

Stack Automation connects to GitHub using a Personal Access Token (PAT). Both classic and fine-grained tokens are supported.

1. In Stack Automation, go to __Automation > Repositories__ and click __Add Repository__.
   > ![Add Repository](/img/stack-automation-repository.png)
2. In __Select a Repository Provider__, choose __GitHub__ and click __Next__.
   > ![Select a repository provider](/img/stack-automation-pat-github-provider.png)
3. On the __Connection__ step, fill in the __Repository URL__, __Repository Name__, and optionally a __Branch__ under __Details__.
4. Under __Integrations__, click __Create new Credentials Set__ (or __Select from Existing Credentials__ to reuse a saved one).
   > ![Connection details and integrations](/img/stack-automation-pat-github-connection.png)
5. Give the new set an __Integrations Name__, then enter your __Personal Access Token__.
   > ![Enter your Personal Access Token](/img/stack-automation-pat-github-token.png)
   :::info 
   Click the __Auto-Track Deployment Files__ option if you want to automatically discover and track Deployment Files from this repository.
   :::
6. Leave __Self Managed Repository__ unchecked — that option is only for self-hosted GitHub Enterprise. See [Self-Managed GitHub](/admin-guide/source-control/Self%20Hosted%20Repositories/self-managed-github) for that flow.
7. Click __Connect__.

<!-- :::info TODO
Document the required token scopes/permissions for classic vs. fine-grained PAT once confirmed.
::: -->

<!-- Hidden until this features is added back to Stack Automation

## Ensure your organization has granted access to Stack Automation

When connecting a repository, Stack Automation installs an OAuth app called __Stack Automation Control Plane__ on the organization. This app provides Stack Automation with the necessary permissions to the organization's repositories. If Stack Automation doesn't have access, you will be prompted to grant the proper authorizations when connecting the asset repository. The approved applications are listed in the [GitHub Applications](https://github.com/settings/applications) page. 

  1. Go to [GitHub Applications](https://github.com/settings/applications).
  2. Revoke any existing access to the __Quali Stack Automation__ app.
      > ![Locale Dropdown](/img/revoke-access.png)
  3. In Stack Automation, go to the space's __Settings > Repositories__ area and connect the repository.
  4. Authorize the organization. 
      > ![Locale Dropdown](/img/torque-access.png)
  
  At this point, the Stack Automation app is installed in the organization without permissions.

  5. Enter your account's password and confirm the action. 
     * If you're not an administrator in the organization, ask the administrator to grant access to the app in the [GitHub Applications](https://github.com/settings/applications) page. 
     * If you already authorized the __Stack Automation Control Plane__ app without also granting access to an organization with repositories you want to connect, click the app's name in the GitHub Applications page, and in the __Organization access__ section, click the organization's __Request__ button.
     > ![Locale Dropdown](/img/request-org-access.png)
  
  The Stack Automation app is granted the necessary permissions and the repository is connected.
  6. Return to Stack Automation and continue setting up the connection. -->

## Token expiration and revocation

GitHub imposes a limit on the number of tokens an application can create for the same user, and will revoke the oldest one once this limit is passed. For details, see [GitHub token expiration and revocation policy](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/token-expiration-and-revocation#token-revoked-due-to-excess-of-tokens-for-an-oauth-app-with-the-same-scope).
