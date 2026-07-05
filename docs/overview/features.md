---
sidebar_position: 9
title: Main Features and Capabilities
---

## Orchestration

* __Blueprint YAML__: Deployment plans are stored in YAML files. Stack Automation can generate a single-asset blueprint YAMLs for each IaC or container technology file in your repository, while multi-asset blueprints can easily be written in YAML files stored in your source control repositories.
* __Policies__: [Limit environment durations](/blueprint-designer-guide/blueprint-consumption-policies) and apply [OPA security policies](/governance/policies) to deployments.
* __Spaces__ and __Role-based Access Control (RBAC)__: Set up a space for different business units, teams, and projects. Assign assets, [users and roles](/governance/roles-and-permissions) to the users, limiting capabilities based on their needs and access only to the blueprints and deployments that apply to that space. 
* Secret management in Stack Automation: Stack Automation manages Secrets in 3 different ways 
    * __Parameter Store__: Stack Automation contains a built-in Parameter Store that allows space admins and account admins to store both sensitive and non-sensitive key-value based information in a centralized location that can be accessed by blueprint designers via the Liquid engine. 
    * __Credential Store__: Stack Automation contains a built-in Credentials Store that allows account admins to safely store cloud account credentials (or Role ARNs for assumable roles) that can later be used for authentication with the provider in an IaC grain (such as Terraform or CloudFormation). 
    * Secret providers in IaC: Stack Automation allows blueprint and asset designers to rely on secret management capabilities of the supported IaC technologies. For example retrieving a KMS decryption key or AWS Secret Store Secret via AWS, an Azure Secret from Azure Vault, or a Secret or Sensitive information stored in Hashicorp Vault.
* __Approval policies__: Define an [approval policy](/governance/policies#approval-policies) for production/high-cost deployments and review pending requests.
* __Auto-shutdown and cleanup__: Automatic cleanup of deployment's cloud resources when a deployment ends, cutting costs and ensuring nothing is left behind.

## Automation
Stack Automation provides out-of-the-box support for Terraform modules, Helm charts, CloudFormation templates, Kubernetes manifests, shell scripts, and Ansible, allowing Stack Automation to discover your assets and create working blueprints, which can be used as single-asset blueprints or integrated into multi-asset blueprints with dependencies and interconnections. 

## Self-service
* __Self-service blueprint catalog__: Publish blueprints to a self-service catalog where your teams can find and deploy the ones needed for their current activities via UI, API or CLI.
* __High scalability__: Stack Automation deployments run on Kubernetes, providing you with the built-in flexibility to scale up or down on a needs basis.


## GitOps
* __Update assets on push/merge__: Stack Automation supports the use of git repositories on GitHub, GitLab, BitBucket and Azure DevOps. When changes are merged into the space's repository, the appropriate blueprints are immediately updated with the changes.
* __[Automatic drift detection](/environment-services/Drift and update)__: See what external changes have occurred to your deployment and its resources, revert the changes to bring your deployment back to its initial state.

## Monitoring and control
* __[Cost management and estimation](/governance/cost-tracking/cost)__: Easily view the cloud costs of your deployment, as well as current/estimated spending by blueprint, deployment or space.
* __[Introspection](/environment-services/Introspection and layouts)__: Drill-down into each deployment's cloud resources, elements and metadata directly from Stack Automation.
* __[CI/CD Integration](/overview/supported-platforms#cicd-tooling)__: Configure deployments to be spun up and tested as part of a CI/CD process using some of the leading tools on the market, including Jenkins, Azure DevOps, CircleCI, Bamboo, and more.
* __[Slack and Teams notifications](/admin-guide/notifications)__: Get notifications for different deployment lifecycle phases to the Webex/Teams/Slack channel of your choice.