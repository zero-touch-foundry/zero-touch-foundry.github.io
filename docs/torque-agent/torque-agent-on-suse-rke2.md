---
sidebar_position: 6
title: Install a Management Server on SUSE RKE2
---

The Stack Automation management server can be installed on a [SUSE Rancher Kubernetes Engine 2 (RKE2)](https://docs.rke2.io/) cluster, including clusters running in your on-premise network. The management server is deployed to the cluster using the Kubernetes technology, the same way as on any other Kubernetes cluster. The main difference is that on an RKE2 node, `kubectl` and the kubeconfig file are not on their default paths, so you need to point your shell to them before deploying the management server.

## Prerequisites

- A running RKE2 cluster. Please note that Stack Automation __does not support__ cluster nodes on ARM architecture.
- [Outbound Ports for Self-hosted Management Servers](/torque-agent/torque-outbound-ports) must be open to allow Stack Automation to access and communicate with the cluster.
- Command-line access to the cluster, using one of the following:
  - __Directly on an RKE2 server node__ (recommended) - RKE2 ships its own `kubectl` binary under `/var/lib/rancher/rke2/bin` and writes the admin kubeconfig to `/etc/rancher/rke2/rke2.yaml`. The kubeconfig file is readable by `root` only, so run the commands as root (for example, `sudo -i`).
  - __From a remote machine__ with [kubectl installed](https://kubernetes.io/docs/tasks/tools/#kubectl) - copy `/etc/rancher/rke2/rke2.yaml` from a server node to your machine, replace `127.0.0.1` in the `server` field with the IP address or hostname of the RKE2 server node, and set it as your kubeconfig. For details, see [Cluster Access](https://docs.rke2.io/cluster_access) in the RKE2 documentation.
- One or more target namespaces on the cluster where the Stack Automation management server will create resources.
- Authentication and permissions - The management server will need sufficient permissions to create the deployment's resources:
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

  - To create resources on your cloud using Terraform, there is no built-in authentication between RKE2 and Stack Automation. Store your cloud credentials in the Stack Automation [Credentials](/admin-guide/credentials) store and use them in your Terraform deployment.

:::tip
If your RKE2 cluster runs with the CIS hardening profile (`profile: cis`), Pod Security Admission is enforced cluster-wide. Make sure the namespaces used by the management server and by your deployments allow the workloads Stack Automation creates in them.
:::

## Setup

1. Navigate to **Resources → Management Servers**.
2. Click **New Management Server** in the top-right corner to open the **Connect a Management Server** wizard.
3. In the **Setup** step, choose **Cloud**, then **Public Cloud**, then select the **Kubernetes** tile. RKE2 is a self-managed Kubernetes distribution, so it is installed through the generic **Kubernetes** tile rather than a provider-specific one.
   > ![Setup step: choose Cloud, Public Cloud and the Kubernetes tile](/img/add-k8s-wizard.png)

   :::note
   Choose **Cloud → Public Cloud → Kubernetes** even when your RKE2 cluster runs in your own datacenter. The **On-Premises** option in the Setup step installs the management server as a virtual-machine appliance (VMware, Redhat KVM, or Nutanix) and does not deploy into an existing Kubernetes cluster.
   :::
4. Click __Next__.
5. In the **Generate Agent** step, give the management server a name, then click __Next__.
   <!-- SCREENSHOT TODO: Generate Agent step with a name filled in for an RKE2 management server. Save as /img/rke2-generate-agent.png and reference it here. -->
6. On the **Installation Instructions** step, click **Generate**. Stack Automation displays a single `kubectl apply` command for your cluster.
   <!-- SCREENSHOT TODO: Installation Instructions step showing the generated kubectl command. Save as /img/rke2-install-step.png and reference it here. -->
7. On the RKE2 node, run the following command first. It adds the RKE2 `kubectl` binary to your `PATH` and points `KUBECONFIG` to the RKE2 kubeconfig file:
    ```bash
    export PATH=$PATH:/var/lib/rancher/rke2/bin KUBECONFIG=/etc/rancher/rke2/rke2.yaml
    ```
    :::note
    Stack Automation generates the `kubectl apply` command only — it does not generate this `export` command for you, because the **Kubernetes** tile is not RKE2-aware. Run it yourself before applying the manifest.

    Skip this step if you are working from a remote machine that already has `kubectl` installed and a kubeconfig pointing to the RKE2 cluster.
    :::
8. Copy the generated command and run it in the same shell to deploy the management server to your cluster. For example:
    ```bash
    kubectl apply -f https://stackautomation.cisco.com/api/settings/executionhosts/deployment/k***roi/deployment.yaml
    ```
9. A __Connected__ status is displayed in Stack Automation, indicating that the management server was successfully installed and can communicate with Stack Automation.
    <!-- SCREENSHOT TODO: Connected status for the RKE2 management server. Save as /img/rke2-connected-status.png and reference it here, or reuse /img/agent-connected-status.png if the view is identical. -->
10. Click __Associate to Space__ to connect the management server to a space, and provide the details you obtained in the prerequisites section.

## Troubleshooting

If the management server fails to connect with Stack Automation, you can try the following to identify the problem. Make sure you run the commands in a shell where the `export` command from the setup step was executed.

Replace the "agent-namespace" with your management server's namespace. You can find it in:

_Resources → Management Servers → Identify your management server → Click on the 3-dot menu → Edit Management Server → Advanced Kubernetes Settings:_

1. If you get `kubectl: command not found` or `The connection to the server localhost:8080 was refused`, the RKE2 paths are not set in your shell. Run the `export` command again, and make sure you are running as root:
     ```bash
     export PATH=$PATH:/var/lib/rancher/rke2/bin KUBECONFIG=/etc/rancher/rke2/rke2.yaml
     ```
2. Make sure the management server pod is running and healthy. You can run the following command on your cluster:
     ```bash
     kubectl get pods -n <agent-namespace> -l app=torque-agent
     ```
3. Make sure outbound http connection to Stack Automation is open:
     ```bash
     kubectl exec -it $(kubectl get pods -n <agent-namespace> | grep torque-agent | awk '/'$2'/ {print $1;exit}') -n <agent-namespace> -- /bin/sh -c "curl -v https://stackautomation.cisco.com/hub/agent";
     ```
     If the cluster nodes sit behind a firewall or proxy, confirm that every target listed in [Outbound Ports for Self-hosted Management Servers](/torque-agent/torque-outbound-ports) is reachable from the node.
4. Check the management server pod logs. You can run the following command:
     ```bash
     kubectl logs $(kubectl get pods -n <agent-namespace> | grep torque-agent | awk '/'$2'/ {print $1;exit}') -n <agent-namespace>
     ```

:::note
The `torque-agent` pod label and the internal hub path shown above are the literal Kubernetes/API identifiers and are unaffected by the Stack Automation rebrand — only the product-facing name changed to "management server."
:::
