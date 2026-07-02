# Connect Claude Cowork

**Claude Cowork** is Anthropic's desktop AI agent for knowledge work. Connecting it to
Stack Automation lets you manage spaces, launch blueprints, and inspect environments in
plain language from the Cowork desktop experience — no terminal or editor required.

Stack Automation ships a ready-made **plugin** (bundled MCP server + skills) that you add
through a Cowork marketplace, so there's nothing to configure by hand.

## Prerequisites

- The Claude desktop app with **Cowork** enabled.
- A Stack Automation **API token**

## Install

1. In the **Cowork** tab, go to **Customize**, click **Add a Plugin**, then choose
   **Create Plugin → Add Marketplace**.
2. Paste the Stack Automation marketplace GitHub URL when prompted:

   ```
   https://github.com/zero-touch-foundry/quali-zero-touch
   ```

   > Copy the full URL from the **Claude Cowork** panel in Stack Automation — it is the
   > source of truth if the marketplace location changes.

3. Once the marketplace loads, find the **Stack Automation** plugin and click its **Add**
   button.
4. Go back to the **Cowork** tab and **start a new task**. The plugin's tools are now
   available to the agent.

When you're done, tick **"I've completed the setup — mark as connected"** in the panel.

## Operate

With the plugin added, just describe what you want in a Cowork task. The agent selects the
right Stack Automation tools automatically.

**Verify the connection:**

> List my Stack Automation deployments.

**Everyday examples:**

- "Show me all spaces I have access to in Stack Automation."
- "Launch the `aws-eks-sandbox` blueprint in the `dev` space and tell me when it's ready."
- "Which of my environments are still running, and how long have they been up?"
- "My last deployment failed — pull the error and summarize the likely cause."

Because the agent acts through your API token, every action respects your Stack Automation
roles and policies.

## Troubleshooting

- **The plugin doesn't appear after adding the marketplace.** Re-open **Customize** and
  confirm the marketplace URL matches the one in the panel exactly, then reload.
- **The agent can't see your data.** Make sure you generated and are using a valid API
  token. If in doubt, **Regenerate** the token in Stack Automation and re-run the task.
- **Actions are denied.** The token inherits your permissions — confirm your Stack
  Automation user has access to the space or blueprint you're targeting.

## Related

- [AI Integrations overview](index.md)
- [MCP Server Config](mcp-server-config.md) — connect other MCP clients
- [Skills Pack](skills-pack.md) — add blueprint & IaC skills
