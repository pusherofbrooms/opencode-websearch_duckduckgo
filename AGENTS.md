# Build Guide for Coding Agents

This repo contains a custom DuckDuckGo web search tool for OpenCode. Use this guide to implement or modify the tool safely.

## What You Are Building

- Tool name: `websearch_duckduckgo`
- Purpose: perform DuckDuckGo HTML-scrape searches and return results to OpenCode.
- Entry point: `websearch_duckduckgo.ts`

## Implementation Notes

- Keep the tool interface stable: accept a search query and optional max result limit.
- Favor clear error handling for network failures or empty search results.
- Keep outputs structured for easy consumption by OpenCode.
