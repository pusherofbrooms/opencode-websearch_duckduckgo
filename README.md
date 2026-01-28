# DuckDuckGo Web Search Tool for OpenCode

Custom DuckDuckGo web search tool integration for OpenCode. This package exposes a tool that performs HTML scrape-based searches and returns results to the OpenCode runtime.

## Requirements

- Node.js and npm
- OpenCode config with an explicit permission stanza for this tool

## Install

1) Copy these files into `~/.opencode/tools` or `~/.config/opencode/tools`.

2) Install dependencies in the tools directory:

```sh
cd tools
npm install
```

3) Enable the tool in your `opencode.json` by adding a permission stanza. Example:

```json
{
  "permissions": {
    "websearch_duckduckgo": "allow"
  }
}
```

## Usage

Ask OpenCode in chat to run a DuckDuckGo web search. The tool name is `websearch_duckduckgo` and it accepts a search query plus an optional result limit.

## Files

- `websearch_duckduckgo.ts` contains the tool implementation.
- `package.json` defines the package metadata and dependencies.
