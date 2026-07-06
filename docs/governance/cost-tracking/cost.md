---
sidebar_position: 9
title: Cost
---

Stack Automation's __Cost__ dashboard provides you with actionable insights into the costs of your deployments. Cost data is collected using the __torque-environment-id__ and __torque-account-id__ tags which are assigned (with a unique value) to every new deployment's resources. To learn more about Stack Automation tagging, see [Tags](/governance/tags).

> ![Locale Dropdown](/img/cost-dashboard1.png)

With the cost dashboard, you can understand your business activities cost:
* Understand the total monthly cost
* Group by cloud account
* Group by application (blueprint) , Space (team), manual/automation, and by specific deployment.


[Read more about Stack Automation reports](/reports/reports-overview)


## Supported cloud providers
* [AWS](/governance/cost-tracking/configuring-cost-aws)
* [Azure](/governance/cost-tracking/configuring-cost-azure)
* [GCP](/governance/cost-tracking/configuring-cost-gcp)
* [Kubernetes](/governance/cost-tracking/configuring-cost-k8s)


:::note __Note__
Stack Automation calls your cloud provider's API to query the cost. This operation might incur additional charges from your cloud provider.
:::
