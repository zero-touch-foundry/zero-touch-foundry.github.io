---
sidebar_position: 15
title: Notifications
---

Stack Automation Notifications enable space admins to define notifications for deployment lifecycle events and deployment owner/collaborator changes. The notifications will be sent to your email address, Teams or Slack chats, or the automation tool of your choice. You can define multiple notifications for different communication tools and for different channels in the same communication tool. 

Supported events:

**Deployment Events:**
* Deployment Launch Scheduled
* Deployment Launch Cancelled
* Deployment Launched
* Deployment Deployed
* Deployment Active With Error
* Deployment Ended
* Deployment Ending Failed
* Deployment Force Ended
* Deployment Launch Approved
* Deployment Launch Denied
* Deployment Idle
* Deployment Extended
* Deployment Rescheduled
* Workflow Started
* Workflow Failed
* Drift Detected
* Updates Detected
* Collaborator Added
* Action Failed

**Blueprint Events:**
* Blueprint Published
* Blueprint Unpublished

**Space Events:**
* Agent Disconnected
* Repository Disconnected

__To configure Stack Automation notifications:__
1. In Stack Automation, access the suitable space.
2. Click __Settings > Notifications__.
3. Click __+ Add Notification__.
4. Select the suitable communication tool (Slack, Teams, Webex, Mail, or generic webhook).
    > ![Locale Dropdown](/img/notifications.png)
5. Provide a __Name__ for the notification.
6. Enter the webhook address, as explained in the desired tool’s official documentation.
   * For Slack, see https://api.slack.com/messaging/webhooks.
   * For Teams, see https://learn.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/add-incoming-webhook.
   * For Webex, see https://developer.webex.com/messaging/docs/api/guides/webhooks.
   * For your preferred automation tool, see the tool’s documentation.
   * This step is not needed for Email, as we'll configure the notifications to be sent to the logged-in user's email address. 
7. For generic webhooks, optionally provide a token from the tool to send with the notification, and select the desired event to test.
8. Test the configuration.
9. Click __Send Test Message__ and make sure you receive a Stack Automation notification message in the chat or generic tool.
10. Click __Events__ to select the notifications to send.
11. Click __Apply__.

---

## Webhook Notification Schema

For the Generic Webhook payload envelope, headers, and `EventData` schemas by event type, see [Webhook Notifications Payload Schema](./notifications/webhook-payload-schema).
