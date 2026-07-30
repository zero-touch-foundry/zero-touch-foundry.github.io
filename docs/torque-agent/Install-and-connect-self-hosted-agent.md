---
sidebar_position: 2
title: Install a Management Server on your Kubernetes Cluster
---

## Prerequisites

- Kuberentes cluster - can be any cluster, including on your on-premise network. Please note that Stack Automation __does not support__ cluster nodes on ARM architecture.
- [Outbound Ports for Kubernetes Cluster Nodes](/torque-agent/torque-outbound-ports) must be open to allow Stack Automation to access and communicate with the cluster.
- Command-line with [kubectl installed](https://kubernetes.io/docs/tasks/tools/#kubectl) connected to your cluster.
  To connect to the cluster use: 
  
  ```bash
  kubectl config use-context <your-cluster>
  ```

  For further reading on connecting to clusters hosted on your cloud, check these links: [EKS](https://docs.aws.amazon.com/eks/latest/userguide/create-kubeconfig.html), [AKS](https://docs.microsoft.com/en-us/cli/azure/aks?view=azure-cli-latest#az-aks-get-credentials), [GKE](https://cloud.google.com/sdk/gcloud/reference/container/clusters/get-credentials).
    
- One or more target namespaces on the cluster where the Stack Automation management server will create resources.
   
- Authentication and permissions - The management server will need sufficient permissions to create the deployment's cloud resources. There are a couple of ways to provide the permissions, depending on where the deployment resources will be created. 
  - To create K8s resources (Pods, services, secrets... etc.) using K8s manifests or helm charts, create a service account with sufficient permissions to create the K8s resources. 
    For Example:

    Let's say that you would like to run your deployments in a namespace called "my-ns". 
    Use the below commands (change to your real namespace name) to create the appropriate service-account:

    ```bash
    kubectl create serviceaccount my-ns-edit-sa --namespace=my-ns
    ```
    ```bash
    kubectl create rolebinding my-sa-edit-rb --clusterrole=edit --serviceaccount=my-ns:my-ns-edit-sa --namespace=my-ns
    ```

  - To create resources on your cloud using Terraform:
      - If your cluster is an __EKS__ (resources will be created on AWS):
        - (Recommended) Create a designated __service account__ annotated with an AWS role. See [Terraform Authentication on EKS](/torque-agent/service-accounts-for-aws) for details. Or,
        - Ensure that the Cluster service role has sufficient permissions to create the deployment.
      - If your cluster is an __AKS__ (resources will be created on Azure): Provide the account's authentication credentials when creating the management server in Stack Automation. For details, see [Terraform Authentication on AKS](/torque-agent/service-accounts-for-azure).
      - If your cluster is a __GKE__ (resources will be created on GCP), see [Terraform GKE Authentication](/torque-agent/service-accounts-for-gcp).
      - For other types of clusters, or if you want to connect to your AWS/Azure with your basic credentials, there is no built-in authentication with Stack Automation so there are no pre-requisites related to authentication and permissions. You can store your cloud credentials in the Stack Automation secret store and use them for your TF deployment.

## Setup

1. Navigate to **Resources → Management Servers**.
2. Click **New Management Server** in the top-right corner to open the **Connect a Management Server** wizard.
3. In the **Setup** step, choose **Cloud**, then **Public Cloud**, and select the tile for your Kubernetes provider — **Azure**, **AWS**, **GCP**, **Oracle**, or the generic **Kubernetes** tile for a self-managed or other cluster.
   > ![Setup step: choose a cloud provider or Kubernetes](/img/add-k8s-wizard.png)
4. Click __Next__.
5. In the **Generate Agent** step, give the management server a name (and, for Azure, optionally a tenant ID), then click __Next__.
6. On the **Installation Instructions** step, copy the generated command.
7. Paste the command in a command-line window connected to your cluster to deploy the management server. For example:     
    ```jsx title=
    kubectl apply -f https://stackautomation.cisco.com/api/settings/executionhosts/deployment/k***roi/deployment.yaml
    ```
8. A __Connected__ status is displayed in Stack Automation, indicating that the management server was successfully installed and can communicate with Stack Automation. 
    > ![Locale Dropdown](/img/agent-connected-status.png)
9. Click __Associate to Space__ to connect the management server to a space, and provide the details you obtained in the prerequisites section.


## Troubleshooting

If the management server fails to connect with Stack Automation, you can try the following to identify the problem.

Replace the "agent-namespace" with your management server's namespace. You can find it in: 

_Resources → Management Servers → Identify your management server → Click on the 3-dot menu → Edit Management Server → Advanced K8s settings:_

1. Make sure the management server pod is running and healthy. You can run the following command on your cluster: 
     ```bash
     kubectl get pods -n <agent-namespace> -l app=torque-agent
     ```
2. Make sure outbound http connection to Stack Automation is open:  
     ```bash
     kubectl exec -it $(kubectl get pods -n <agent-namespace> | grep torque-agent | awk '/'$2'/ {print $1;exit}') -n <agent-namespace> -- /bin/sh -c "curl -v https://stackautomation.cisco.com/hub/agent";
     ```
     and also 
     ```bash
     kubectl exec -it $(kubectl get pods -n <agent-namespace> | grep torque-agent | awk '/'$2'/ {print $1;exit}') -n <agent-namespace> -- /bin/sh -c "nmap -p 5671 acrobatic-lime-gerbil.rmq3.cloudamqp.com";
     ```
3. Check the management server pod logs. You can run the following command:
     ```bash
     kubectl logs $(kubectl get pods -n <agent-namespace> | grep torque-agent | awk '/'$2'/ {print $1;exit}') -n <agent-namespace>
     ```

:::note
The `torque-agent` pod label, container name, and internal hub path shown above are the literal Kubernetes/API identifiers and are unaffected by the Stack Automation rebrand — only the product-facing name changed to "management server."
:::
