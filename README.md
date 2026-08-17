# Frend

Repositorio inicial para el proyecto Frend.

Descripción breve.

## Figma MCP Integration

This repository is configured to give the GitHub Copilot cloud agent access to Figma designs via the [Figma Developer MCP server](https://github.com/GLips/Figma-Context-MCP).

### Setup

1. Generate a **Figma personal access token**:  
   Figma → Account Settings → Security → **Personal access tokens** → Create new token.

2. Store the token as a secret in the repository's `copilot` environment:  
   Repository → Settings → Environments → click **New environment**, name it `copilot` (if it doesn't exist yet), then **Add environment secret**.  
   Name: `FIGMA_API_KEY`, Value: `<your token>`.

Once the secret is in place, Copilot will automatically connect to Figma MCP when it starts a session, giving it read access to your Figma files and components.
