# Connect via MCP Server Config

Use this option to connect **any MCP-compatible client** to Stack Automation — including
**Claude Code (CLI)**, the **Claude Code config file**, **Cursor**, **Windsurf**, and other
tools that support MCP servers. It's the most flexible path: one server definition that you
either apply with a single command or merge into your client's config.

## Prerequisites

- An MCP-compatible client installed.
- A Stack Automation **API token**

## Install

1. In the **MCP Server Config** panel, click **Download `stack-automation-mcp.json`**. This
   file contains the ready-to-use server definition.

2. **For Claude Code (CLI)** — add the server with one command (replace the token):

   ```bash
   claude mcp add --transport http stack-automation https://stackautomation.cisco.com/mcp \
     -H "Authorization: Bearer <YOUR_STACK_AUTOMATION_TOKEN>"
   ```

   **For the Claude Code config file (`~/.claude.json`), Cursor, Windsurf, or other
   clients** — merge the downloaded JSON into the `mcpServers` section of your client
   config. It looks like this:

   ```json
   {
     "mcpServers": {
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

   > Use the exact `url` from your **MCP Server Config** panel; the MCP endpoint can differ
   > per deployment.

3. Verify the connection in your MCP client by asking: *"List my Stack Automation spaces."*

When you're done, tick **"I've completed the setup — mark as connected"** in the panel.

## Operate

Once the server is registered, your client can call Stack Automation tools from any chat.

**Verify the connection:**

> List my Stack Automation spaces.

**Everyday examples:**

- "Launch the `terraform-vpc` blueprint in the `staging` space."
- "List my running deployments and their costs."
- "Show why deployment `d-8842` failed."
- "Extend the lease on deployment `pr-1423-preview` by 4 hours."

## Client notes

- **Claude Code (CLI):** after `claude mcp add`, run `claude mcp list` to confirm
  `stack-automation` is registered.
- **Cursor / Windsurf:** add the block to the client's MCP settings file, then reload the
  window so the server is picked up.
- **Other clients:** any client that reads an `mcpServers` map and supports the `http`
  transport with bearer auth will work with the same block.

## Troubleshooting

- **Server not listed.** Confirm the JSON was merged into the correct `mcpServers` object
  (not nested elsewhere) and restart the client.
- **Unauthorized.** Check the `Authorization` header is `Bearer <token>` with a valid,
  current token.
- **Endpoint unreachable.** Verify the `url` matches the one shown in your panel and that
  your network allows outbound HTTPS to it.

## Related

- [AI Integrations overview](index.md)
- [Claude Cowork](claude-cowork.md)
- [Skills Pack](skills-pack.md)
