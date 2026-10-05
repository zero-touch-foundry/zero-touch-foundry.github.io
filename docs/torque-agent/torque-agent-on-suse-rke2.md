---
sidebar_position: 6
title: Install a Management Server on SUSE RKE2
---

The Stack Automation management server can be installed on a [SUSE Rancher Kubernetes Engine 2 (`RKE2`)](https://docs.rke2.io/) cluster, including clusters running in your on-premise network. The management server is deployed to the cluster using the Kubernetes technology, the same way as on any other Kubernetes cluster. The main difference is that on an `RKE2` node, `kubectl` and the kubeconfig file are not on their default paths, so you need to point your shell to them before deploying the management server.

## Prerequisites

- A running `RKE2` cluster. Please note that Stack Automation __does not support__ cluster nodes on ARM architecture.
- [Outbound Ports for Self-hosted Management Servers](/torque-agent/torque-outbound-ports) must be open to allow Stack Automation to access and communicate with the cluster.
- Command-line access to the cluster, using one of the following:
  - __Directly on an `RKE2` server node__ (recommended) - `RKE2` ships its own `kubectl` binary under `/var/lib/rancher/rke2/bin` and writes the admin kubeconfig to `/etc/rancher/rke2/rke2.yaml`. The kubeconfig file is readable by `root` only, so run the commands as root (for example, `sudo -i`).
  - __From a remote machine__ with [kubectl installed](https://kubernetes.io/docs/tasks/tools/#kubectl) - copy `/etc/rancher/rke2/rke2.yaml` from a server node to your machine, replace `127.0.0.1` in the `server` field with the IP address or hostname of the `RKE2` server node, and set it as your kubeconfig. For details, see [Cluster Access](https://docs.rke2.io/cluster_access) in the `RKE2` documentation.
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

  - To create resources on your cloud using Terraform, there is no built-in authentication between `RKE2` and Stack Automation. Store your cloud credentials in the Stack Automation [Credentials](/admin-guide/credentials) store and use them in your Terraform deployment.

:::tip
If your `RKE2` cluster runs with the CIS hardening profile (`profile: cis`), Pod Security Admission is enforced cluster-wide. Make sure the namespaces used by the management server and by your deployments allow the workloads Stack Automation creates in them.
:::

## Setup

1. Navigate to **Resources → Management Servers**.
2. Click **New Management Server** in the top-right corner to open the **Connect a Management Server** wizard.
3. In the **Setup** step, choose **Cloud**, then **Public Cloud**, then select the **RKE2** tile.
   <img src="/img/rke2-setup-tile.png" alt="RKE2 agent connected" width="100%" />

   :::note
   Select **Cloud → Public Cloud → RKE2** even when your cluster runs in your own datacenter. The **On-Premises** option in the Setup step installs the management server as a virtual-machine appliance (VMware, Redhat KVM, or Nutanix) and does not deploy into an existing Kubernetes cluster.
   :::
4. Click __Next__.
5. In the **Generate Agent** step, fill in the **Management Server Details**:
   - **Management Server Name** (required) - a unique, human-readable name, for example `rke2-prod-01`.
   - **Location** - the geographic location of the cluster, for example `Austin, United States`.

   Click __Next__.
   <img src="/img/rke2-generate-agent.png" alt="RKE2 agent connected" width="100%" />
6. The **Installation Instructions** step displays two commands, because Stack Automation knows that on an `RKE2` node `kubectl` and the kubeconfig are not on their default paths.
   <img src="/img/rke2-install-instructions.png" alt="RKE2 agent connected" width="100%" />
7. On the `RKE2` node, copy and run the first command. It adds the `kubectl` binary shipped with `RKE2` to your `PATH` and points `KUBECONFIG` to the `RKE2` kubeconfig file:
    ```bash
    export PATH=$PATH:/var/lib/rancher/rke2/bin KUBECONFIG=/etc/rancher/rke2/rke2.yaml
    ```
    :::note
    Skip this command if you are working from a remote machine that already has `kubectl` installed and a kubeconfig pointing to the `RKE2` cluster.
    :::
8. Copy the second command and run it in the same shell to deploy the management server to your cluster. For example:
    ```bash
    kubectl apply -f https://stackautomation.cisco.com/api/settings/executionhosts/deployment/k***roi/deployment.yaml
    ```
9. Watch the **Connections Status** panel at the bottom of the wizard. It shows _Waiting for the Management Server to connect with Stack Automation_ until the pod starts, and then changes to a __Connected__ status, indicating that the management server was successfully installed and can communicate with Stack Automation.

    :::tip
    You can click **Finish** without waiting. The management server is created in Stack Automation and waits for a valid connection, so you can run the commands on the cluster later and check the status in **Resources → Management Servers**.
    :::
10. Click __Associate to Space__ to connect the management server to a space, and provide the details you obtained in the prerequisites section.

## Troubleshooting

If the management server fails to connect with Stack Automation, you can try the following to identify the problem. Make sure you run the commands in a shell where the `export` command from the setup step was executed.

Replace the "agent-namespace" with your management server's namespace. You can find it in:

_Resources → Management Servers → Identify your management server → Click on the 3-dot menu → Edit Management Server → Advanced Kubernetes Settings:_

1. If you get `kubectl: command not found` or `The connection to the server localhost:8080 was refused`, the `RKE2` paths are not set in your shell. Run the `export` command again, and make sure you are running as root:
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
