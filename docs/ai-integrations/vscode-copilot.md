# Connect VS Code + Copilot

**GitHub Copilot in Visual Studio Code** supports *agent mode*, where Copilot can call MCP
servers. Connecting Stack Automation gives Copilot Chat the ability to manage your spaces,
blueprints, and environments while you stay in your editor.

Setup is: install the Stack Automation VS Code extension, add one MCP server entry to your
`mcp.json`, and start the server.

## Prerequisites

- **Visual Studio Code** with **GitHub Copilot** and **Copilot Chat** (agent mode).
- A Stack Automation **API token**

## Install

1. In the **VS Code + Copilot** panel, click **Download `stack-automation.vsix`**.

2. Install the extension via the Command Palette (**Extensions: Install from VSIX…**) or
   from a terminal:

   ```bash
   code --install-extension stack-automation.vsix
   ```

3. Open the Command Palette and run **MCP: Open User Configuration**, then merge the
   snippet below into your `mcp.json`. Replace the token with your own:

   ```json
   {
     "servers": {
       "stack-automation": {
         "type": "http",
         "url": "https://stackautomation.cisco.com/mcp",
         "headers": {
           "Authorization": "Bearer <YOUR_STACK_AUTOMATION_TOKEN>"
         }
       }
     }
   }
   ```

   > Use the exact `url` shown in your **VS Code + Copilot** panel — the MCP endpoint can
   > differ per deployment.

4. Click **Start** next to the server config in VS Code, open **Copilot Chat in Agent
   mode**, and try: *"List my Stack Automation deployments."*

When you're done, tick **"I've completed the setup — mark as connected"** in the panel.

## Operate

In Copilot Chat (agent mode), ask for Stack Automation actions in plain language. Copilot
will call the `stack-automation` server and may ask you to confirm tool calls.

**Verify the connection:**

> List my Stack Automation deployments.

**Everyday examples:**

- "Launch the `aws-eks-sandbox` blueprint in the `dev` space."
- "Show me the status and endpoints of my running environments."
- "Open the blueprint definition for `terraform-vpc` so I can edit it."
- "Deploy the module in this repo as a Stack Automation blueprint."

## Troubleshooting

- **Server won't start.** Re-check the `mcp.json` snippet for valid JSON and confirm the
  `url` matches your panel. Then click **Start** again.
- **401 / unauthorized.** The `Authorization` header must read `Bearer <token>` with a
  valid, current token. Regenerate in Stack Automation if needed and update `mcp.json`.
- **Copilot doesn't call the tool.** Make sure you're in **Agent mode** (not Ask mode) and
  that the `stack-automation` server shows as *running*.

## Related

- [AI Integrations overview](index.md)
- [OpenAI Codex](openai-codex.md) — terminal agent
- [MCP Server Config](mcp-server-config.md) — Cursor, Windsurf, and other clients
