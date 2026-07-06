# Connect OpenAI Codex

**OpenAI Codex** is a terminal-based coding agent (available as a CLI and an IDE
extension). Connecting it to Stack Automation registers the Stack Automation MCP server as
a tool Codex can call, so you can query and drive your deployments from the same terminal
where you write code.

Setup is a short install script plus one environment variable for your token.

## Prerequisites

- The **Codex CLI** installed and working (`codex --version`).
- A Stack Automation **API token**
- A POSIX shell (`zsh` or `bash`).

## Install

1. In the **OpenAI Codex** panel, click **Download `stack-automation-mcp-codex.sh`**.

2. Make it executable and run it from the download location:

   ```bash
   chmod +x stack-automation-mcp-codex.sh && ./stack-automation-mcp-codex.sh
   ```

   The script registers the `stack-automation` MCP server with your Codex configuration.

3. Add your token to your shell profile (`~/.zshrc` or `~/.bashrc`) so Codex can
   authenticate:

   ```bash
   export SA_TOKEN="<YOUR_STACK_AUTOMATION_TOKEN>"
   ```

   Reload your shell (`source ~/.zshrc`) or open a new terminal so the variable takes
   effect.

4. Verify the connection — you should see `stack-automation` in the list:

   ```bash
   codex mcp list
   ```

When you're done, tick **"I've completed the setup — mark as connected"** in the panel.

## Operate

Start a Codex session and ask for Stack Automation actions in natural language; Codex
routes them to the `stack-automation` MCP server.

**Verify the connection:**

> List my Stack Automation spaces.

**Everyday examples:**

- "Launch the `terraform-vpc` blueprint in the `staging` space."
- "Show the outputs of my most recent deployment."
- "Tear down the deployment named `pr-1423-preview`."
- "Generate a Terraform module and then deploy it as a blueprint in Stack Automation."

Combining Codex's code generation with Stack Automation deployment lets you go from
Infrastructure-as-Code to a running deployment in a single conversation.

## Troubleshooting

- **`stack-automation` not shown in `codex mcp list`.** Re-run the install script and
  confirm it completed without errors, then restart your terminal.
- **Auth errors / empty results.** Confirm `SA_TOKEN` is exported in the current shell
  (`echo $SA_TOKEN`) and that the value matches a valid, non-regenerated token.
- **Command not found.** Ensure the Codex CLI is on your `PATH`.

## Related

- [AI Integrations overview](index.md)
- [VS Code + Copilot](vscode-copilot.md) — agent mode inside your editor
- [MCP Server Config](mcp-server-config.md) — generic MCP client setup
