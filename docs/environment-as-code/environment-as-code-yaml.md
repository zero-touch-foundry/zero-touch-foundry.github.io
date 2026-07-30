---
sidebar_position: 1
title: The Environment YAML
---

Environment as Code (EaC) allows you to define and manage Stack Automation deployments using YAML files. If you know how to write Stack Automation blueprints, you can write EaC YAML files. The structure of an EaC YAML file is similar to a blueprint, with the addition of an 'environment' section that defines the properties of the specific deployment instance.

## Deployment Discovery

Deployment YAML files must be placed under the 'environments' directory in the repository. Stack Automation periodically scans this directory for deployment YAML files and stores them internally.

:::note
Deployments are written in YAML files that reside in an __/environments__ folder within a source control repository onboarded to Stack Automation (the folder name is case-sensitive and must be "environments"). Deployments kept in the __/environments__ folder must be of type ".yaml" and not ".yml" to be used in Stack Automation.
:::

The directory structure should be as follows:

```bash
environments/
    production.yaml
    staging.yaml
    devbox.yaml
```

When a new deployment YAML file is detected or an existing one is modified, Stack Automation performs validations on the file. If the file is valid, a snapshot is saved, which will be used to create or reconcile the deployment. If the file is invalid, it will not affect the existing snapshot or the deployment.

If a user modifies the deployment YAML file, the changes will be applied to the corresponding deployment.

Possible applicable changes:
- Add/remove grains
- Change commit/tag
- Deployment inputs
- Grain inputs

:::info
All sources must contain a commit hash or tag.
:::

## Usage Example

Here's an example of a Stack Automation deployment YAML file:

```yaml
spec_version: 2

environment:
  environment_name: eac-env-name
  owner_email: me@quali.com
  state: active
  labels:
    label-key: label-value
    label-key2: # for "value only" labels
     
inputs:
  agent:
    type: agent
    default: production-k8s

  tf_input:
    type: string
    default: default_input
    
outputs:
  tf_output: 
    value: '{{ .grains.tf1.outputs.output2 }}'
    quick: true
    
grains:
  tf1:
    kind: terraform
    tf-version: 1.5.5
    spec:
      source:
        store: iac-repo
        path: terraform/complex-references1
        tag: v1.0.1 
      agent:
        name: '{{ .inputs.agent }}'
      inputs:
        - test_input1: '{{ .inputs.tf_input }}'
        - test_input2: "input2"
      outputs:
        - output2

  tf2:
    kind: terraform
    tf-version: 1.5.5
    spec:
      source:
        store: iac-repo
        path: terraform/complex-references2
        tag: v1.0.2
      agent:
        name: '{{ .inputs.agent }}'
      inputs:
        - test_input1: '{{.inputs.tf_input}}'
        - test_input2: "input2"
      outputs:
        - output2
      scripts: 
        pre-tf-init:
          source:
            store: scripts-repo
            path : scripts/user_script.sh
          arguments: "value"
        pre-tf-destroy:
          source:
            store: scripts-repo
            path : scripts/user_script.sh
          arguments: "value"
  
  bp1:
    kind: blueprint
    spec:
      source:
        store: iac-repo
        path: blueprints/building-block.yaml
        tag: official-1.0.1
      inputs:
        - agent: '{{ .inputs.agent }}'
```

In this example, the `environment` section defines the environment name, description, owner email, and state. The `inputs` and `outputs` sections define the environment-level inputs and outputs, respectively.

The `grains` section contains the list of grains that make up the deployment, similar to a blueprint. Each grain specifies its kind (e.g., `terraform`, `blueprint`, etc.), version, and other configuration details specific to that grain type.

By following this structure, users can define and manage their deployments as code, allowing for version control, collaboration, and automated deployments using Stack Automation's Environment as Code (EaC) functionality.

## Environment section

The environment section contains all of the specific data related to the deployment instance. This is the main configuration block that defines how the deployment should be created and managed.

```yaml
environment:
  environment_name: eac-env
  description: eac example
  owner_email: me@quali.com
  state: active # desired state: active/inactive
  collaborators: 
    collaborators_emails:
      - collaborator1@quali.com
      - collaborator2@quali.com
    collaborators_groups:
      - Group1
      - Group2
  spaces:
    - spaceA
    - spaceB
  tags:
    key1: value1
    key2: value2
```

## Environment Spec Reference

### `environment_name`

The unique name identifier for the deployment. This field is required and must be unique within the space.

```yaml
environment:
  environment_name: my-production-env
```

### `description`

An optional description providing additional context about the deployment's purpose or contents.

```yaml
environment:
  description: "Production environment for web application"
```

### `owner_email`

The email address of the deployment owner. This field is required and must be a valid email address of a user in the Stack Automation system.

```yaml
environment:
  owner_email: admin@company.com
```

:::info
Updating the owner email does not update the owner of active deployments. Owner changes only apply to new deployments.
:::

### `state`

The desired state of the deployment. Possible values are:
- `active`: The deployment should be running and available
- `inactive`: The deployment should be stopped/terminated

```yaml
environment:
  state: active
```

### `collaborators`

Defines users and groups that have collaborative access to the deployment. Collaborators can view and potentially modify the deployment based on their permissions.

```yaml
environment:
  collaborators: 
    collaborators_emails:
      - user1@company.com
      - user2@company.com
    collaborators_groups:
      - Developers
      - QA-Team
```

**Sub-fields:**
- `collaborators_emails`: List of email addresses for individual users
- `collaborators_groups`: List of group names that should have collaborative access

### `spaces`

Specifies which Stack Automation spaces this deployment belongs to. Deployments can be associated with multiple spaces for organization and access control purposes.

```yaml
environment:
  spaces:
    - development
    - testing
    - staging
```

### `tags`

Key-value pairs for categorizing and organizing deployments. Tags can be used for filtering, reporting, and applying policies.

```yaml
environment:
  tags:
    project: web-app
    team: backend
    cost-center: engineering
    environment-type: production
```

### `labels`

Similar to tags but used specifically for workflow attachment and selection. Labels help determine which workflows are available for this deployment.

```yaml
environment:
  labels:
    application: web-service
    tier: production
    region: us-east-1
```

### `duration`

Specifies the maximum lifetime of the deployment. The deployment will be automatically terminated after this duration expires.

```yaml
environment:
  duration: PT4H  # ISO 8601 duration format (4 hours)
```

**Supported formats:**
- ISO 8601 duration format (e.g., `PT1H30M` for 1 hour 30 minutes)
- Hours format (e.g., `4h` for 4 hours)
- Minutes format (e.g., `120m` for 120 minutes)

### `auto_approve`

Controls whether the deployment should proceed automatically without requiring manual approval, even if approval policies are configured.

```yaml
environment:
  auto_approve: true  # Default: false
```

### `blueprint_commit`

Specifies a specific commit hash or tag for the blueprint source, allowing for precise version control of the deployment definition.

```yaml
environment:
  blueprint_commit: "abc123def456"  # Commit hash
  # OR
  blueprint_commit: "v2.1.0"       # Tag
```

## EaC Management APIs

Stack Automation provides REST APIs for managing Environment as Code (EaC) files and their associated deployments. These APIs allow you to control the lifecycle and behavior of EaC-managed deployments.

### Enable/Disable EaC Record

Control whether the reconcile loop processes a specific EaC file. When disabled, the reconcile loop will skip the EaC file and will not launch or modify deployments based on its contents.

**Endpoint:**
```
PUT /api/spaces/{space_name}/eac/enable
```

**Request Body:**
```json
{
  "eac_path": "environments/production.yaml",
  "enable": true
}
```

**Parameters:**
- `eac_path` (string, required): The full path identifier of the EaC file in the Git repository
- `enable` (boolean, required): Set to `true` to enable processing, `false` to disable

**Behavior:**
- **Enabled (default)**: New EaC files are enabled by default. The reconcile loop will process the file and apply any changes
- **Disabled**: The reconcile loop will skip this EaC file and will not attempt to launch or modify deployments based on its contents

**Example:**
```bash
curl -X PUT "https://stackautomation.cisco.com/api/spaces/my-space/eac/enable" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{
    "eac_path": "environments/staging.yaml",
    "enable": false
  }'
```

### Detach EaC Deployment

Detach an EaC-managed deployment so that it will no longer be subject to changes that occur in the EaC file. The deployment becomes a regular deployment that is managed independently.

**Endpoint:**
```
PUT /api/spaces/{space_name}/environments/{eac_env_id}/eac/detach
```

**Parameters:**
- `space_name` (string, required): The name of the space containing the deployment
- `eac_env_id` (string, required): The ID of the EaC-managed deployment to detach

**What happens when detaching:**
1. The associated EaC file is automatically disabled
2. The deployment ID is removed from the EaC record in the database
3. The EaC path reference is removed from the deployment state
4. The deployment continues to run but is no longer managed by the EaC file

**Example:**
```bash
curl -X PUT "https://stackautomation.cisco.com/api/spaces/my-space/environments/env-123/eac/detach" \
  -H "Authorization: Bearer <token>"
```

### Terminate EaC Deployment

Terminate an EaC-managed deployment, which automatically detaches it first and then terminates the deployment.

**Endpoint:**
```
DELETE /api/spaces/{space_name}/environments/{eac_env_id}/eac
```

**Parameters:**
- `space_name` (string, required): The name of the space containing the deployment
- `eac_env_id` (string, required): The ID of the EaC-managed deployment to terminate

**Query Parameters:**
- `interrupt` (boolean, optional): Set to `true` to force termination, `false` for graceful termination (same as normal deployment termination)

**What happens when terminating:**
1. The deployment is first detached (same process as the detach API)
2. The deployment is then terminated following the normal termination process

**Example:**
```bash
# Graceful termination
curl -X DELETE "https://stackautomation.cisco.com/api/spaces/my-space/environments/env-123/eac" \
  -H "Authorization: Bearer <token>"

# Force termination
curl -X DELETE "https://stackautomation.cisco.com/api/spaces/my-space/environments/env-123/eac?interrupt=true" \
  -H "Authorization: Bearer <token>"
```

### Use Cases

**Development Workflow:**
1. **Disable EaC during maintenance**: Temporarily disable an EaC file while making significant changes to prevent unwanted deployments
2. **Detach for customization**: Detach a deployment when you need to make manual changes that shouldn't be overwritten by the EaC file
3. **Clean termination**: Use the terminate API to properly clean up EaC deployments and their associations

**Production Management:**
- Disable EaC files for deployments that require manual oversight
- Detach deployments before performing manual maintenance or testing
- Use terminate for clean decommissioning of EaC-managed deployments

:::warning
Once a deployment is detached from its EaC file, it cannot be re-attached. The deployment becomes a standard Stack Automation deployment and must be managed manually or through regular APIs.
:::
