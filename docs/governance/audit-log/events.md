---
sidebar_position: 7
title: Audit Log Events
---

These events are captured by Audit Log. All events are of type "string".

## Account

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|-------------------------|-----------------------------------|--------------------------------------------|
|Login|Login to account|Account||
|Deleted|Account was deleted.|Account|planId|

## Approval

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|---------------------------|-----------------------------------|--------------------------------------------|
|Add approval channel    | New approval channel was added to Stack Automation's __Approval Channels__ administration page.. |  |- Name<br />- Type|
|Delete approval channel | Approval channel was deleted from Stack Automation's __Approval Channels__ administration page.   | |- Name<br />- Type|
|Policy auto approved    | Policy was approved automatically by OPA. |  Account/Space  |- Name<br />- Type|
|Update approval channel | Approval channel's settings were updated, like description or approvers list. |                   |- Approval type (auto/manual)<br />- Approval status (approved/denied)<br />- Entity type<br />- Entity name<br />- Action (Launch/Extend)<br />- Policy path + name<br />- Approver Email (if approval type is manual)<br />- Notes (if exist)|




## Blueprint

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|---------------------------|-----------------------------------|--------------------------------------------|
|Content Modified|Blueprint YAML was modified.|Account/Space/Blueprint||
|Published|Blueprint was published|Account/Space/Blueprint.|- Repository name|
|Removed|User removed blueprint. This applies to blueprints that were discovered from assets, not for blueprints who are defined in the repository.||
|Unpublished|Blueprint was unpublished.|Account/Space/Blueprint|- Repository name|

## Cloud Account (cost target)

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|--------------------------|-----------------------------------|--------------------------------------------|
|Created|Cloud account was created.|Account|- Name<br />- Cloud|
|Deleted|Cloud account was deleted.|Account|- Name<br />- Cloud|

## Cost

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|----------------------------------|-----------------------------------|--------------------------------------------|
|Exported|Cost data was exported using the __Cost__ page's __Export to CSV__ button.|Account||

## Credential

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|----------------------------------|-----------------------------------|--------------------------------------------|
|Created|New credential was created in the __Credentials__ store.|Account|- Name<br />- Cloud Type<br />- Credential Type|
|Deleted|A credential was deleted.|Account|- Name|
|Modified|A credential was modified.|Account|- Name|

## Environment

|Event                   |Description|Scopes                             |Data (parameters)  |
|------------------------|---------------------------------|-----------------------------------|--------------------------------------------|
|Collaborators Added|Collaborators were added to a deployment.|Account/Space/Environment|- list of new collaborators|
|Collaborators Removed|Deployment's collaborators were removed.|Account/Space/Environment|- list of removed collaborators|
|Drift Detected|Deployment's resources were modified externally.|Account/Space/Environment|- Grain|
|Drift Reconcile Started|Deployment's __Reconcile__ operation was initiated to reset the deployment to its original state.|Account/Space/Environment|- Grain|
|Drift Reconcile Completed|Deployment's Reconcile operation completed.|Account/Space/Environment|- Grain|
|Environment Extended|Deployment's duration was extended.|Account/Space/Environment|- Extension Duration|
|Environment Launch Started|Deployment was launched.|Account/Space/Environment|- is_sample: "true" indicates that the deployment was created from a sample blueprint|
|Environment Launch Completed|Deployment's launch completed and the deployment's state changed to Active.|Account/Space/Environment|- is_sample: "true" indicates that the deployment was created from a sample blueprint<br />- Duration|
|Termination Started|Deployment's termination was initiated.|Account/Space/Environment||
|Termination Completed|Deployment's termination completed.|Account/Space/Environment||
|Force Terminate|Deployment was force terminated immediately.|Account/Space/Environment||
|Owner changed|Deployment's owner was changed.|Account/Space/Environment|- New owner|
|Updates Detected|Stack Automation detected a change in the asset files in the repository.|Account/Space/Environment|- Grain|
|Update Started|Deployment's update was initiated by the user to update the deployment with the latest changes to the asset files.|Account/Space/Environment|- Grain|
|Update Complete|Deployment was updated.|Account/Space/Environment|- Grain|
|Update Dismissed|User dismissed updates to the asset files, choosing to leave their deployment as is.|Account/Space/Environment|- Grain|

## Host/Management Server

|Event                   |Description||Scopes                             |Data (parameters)                                 |
|------------------------|-------------------------------|-----------------------------------|--------------------------------------------|
|Added to Space|Added a management server to a space.|Account/Space|- Host name<br />- Cloud<br />- Type (Docker, K8s), Space|
|Created|Created a new management server.|Account|- Host name<br />- Cloud<br />- Type (Docker, K8s)|
|Connected|Management server was successfully connected to the cluster.|Account|- host_name<br />- Type (Docker, K8s)|
|Deleted|Management server was deleted from Stack Automation.|Account|- Host name<br />- Cloud<br />- Type (Docker, K8s)|
|Removed From Space|Management server was removed from a space.|Account/Space|- Host name<br />- Cloud<br />- Type (Docker, K8s), Space|
|Renamed| Management server's name was changed.|Account|-old_host_name<br />- new_host_name<br />- type|

## Notification

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|---------------------|-----------------------------------|--------------------------------------------|
|Added|New notification target was created.|Account, Space|- Name<br />- Target| 
|Deleted|Notification target was deleted from Stack Automation.|Account/Space|- Old Name<br />- New Name<br />- Old Target type<br />- New Target type|
|Enabled Toggled|Notifications were enabled for a notification target.|Account/Space|- Name<br />- Old enabled <br />- New enabled|
|Modified|Notification target was modified (name, enabled notifications, etc.|Account/Space|- Name|

## Parameter

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|----------------------|-----------------------------------|--------------------------------------------|
|Created|New parameter was created in the __Parameters__ store.|Account or Account/Space|- Name (parameter event)<br />- Sensitive<br />- Value<br />- Description|
|Deleted|Parameter was deleted from the __Parameters__ store.|Account or Account/Space|- Name (parameter event)|
|Modified|Parameter's settings were modified.|Account or Account/Space|- Name (parameter event)<br />- oldIsSensitive<br />- newIsSensitive|

## Policy

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|-------------------------|-----------------------------------|--------------------------------------------|
|Deleted|Policy was deleted from Stack Automation.|Account|- Name<br />- approvalChannel<br />- overridable<br />- manualInitiation|
|Disabled| Policy was disabled.         |Account|- policyName<br />- enabledValue|
|Duplicated | A copy of an existing policy was created. |Account|- policyName<br />- existingPolicyName<br />- isCustom<br />- spaceNames|
|Enabled | Policy was enabled.          |Account|- policyName<br />- enabledValue|
|Imported|  Policy was imported from a connected policy repository.         |Account|- policyName|
|Modified|  Policy's settings were modified.         |Account|- policyName|
|Synchronized| The version of a custom policy in Stack Automation was synced with the policy version in the repository.|Account|- policyName|


## Repository

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|-----------------------------------|--------------------------------------------|--|
|Assets Discovered|Assets were discovered from a space's repository.|Account/Space|Name|
|Connected|A repository was connected to a space.|Account/Space|- Name<br />- Type<br />- Branch<br />- Url|
|Disconnected|A repository was disconnected from a space.|Account/Space|Name|


## Space

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|-----------------------------------|--------------------------------------------|--|
|Create|New space was created in Stack Automation.|Account/Space||
|Modify|Space's settings were modified (name, icon, banner color).|Account/Space|- oldProperties (name, color, icon)<br />- newProperties (name, color, icon)|
|Delete|Space was deleted from Stack Automation.|Account/Space||


## Tag

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|-----------------------------------|--------------------------------------------|--|
|Created|New tag created in the __Tags__ administration page.|Account|- Name<br />- Scope<br />- possibleValues<br />- description|
|Deleted|Tag was deleted.|Account|- Name|
|Modified|Tag was modified.|Account|-Name<br />- Scope<br />- oldProperties<br />- newProperties|
|Overridden|User changed a space-level tag's value in the space's __Tags__ page.|Account| - Name<br />- OldValue<br />- NewValue|

## User

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|-----------------------------------|--------------------------------------------|--|
|Invited|User was invited to join Stack Automation (Stack Automation invitation email).|Account|- User Email|
|Invitation Cancelled|Stack Automation invitation was cancelled by an admin.|Account|- User Email<br />- User Role<br />- Space|
|Sign up|New user signed up to Stack Automation.|Account|- User Email|
|User Account Role Updated|User's account role was changed (or attached - for new users).|Account|- User Email<br />- oldRole<br />- newRole|
|Deleted|User was deleted from Stack Automation.|Account|- User Email|
|Login|User logged into Stack Automation.|Account|- User Email|
|Reset Password|User's password was reset.|Account|- User Email|
|User Added to Space|User was added to a space.|Account/Space|- User Email<br />- reason<br />- space name<br />- given space role|
|User Space Role Updated|User's space role was changed (space admin/dev/member).|Account|- User Email<br />- oldRole<br />- newRole|

## Workflows

|Event                   |Description|Scopes                             |Data (parameters)                                 |
|------------------------|-----------------------------------|--------------------------------------------|--|
|Created| Created a new workflow.|Account |- Name|
|Deleted| Deleted a workflow from Stack Automation.|Account |- Name|
|Disabled| Disabled a workflow.|Account |- Name|
|Enabled| Enabled a workflow.|Account |- Name|
|Ended|Workflow's execution ended at the completion of all its actions. |Account/Environment |- Name<br />- Actor (User/Schedule)<br />-If the actor is User, user details (email) is displayed|
|Invoked|Workflow was triggered, either by the workflow's defined schedule or manually by the deployment end-user. |Account/Environment |- Name<br />- Actor (User/Schedule)<br />- If the actor is User, user details (email) is displayed|