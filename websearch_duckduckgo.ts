import { tool } from "@opencode-ai/plugin";
import fetch from "node-fetch";
import * as cheerio from "cheerio";

export default tool({
  description: "Search the web using DuckDuckGo (HTML scrape)",
  args: {
    query: tool.schema.string().describe("Search query"),
    maxResults: tool.schema.number().optional().describe("Max results to return (default 5)")
  },
  async execute(args) {
    const q = encodeURIComponent(args.query);
    const url = `https://html.duckduckgo.com/html/?q=${q}`;

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; OpenCode WebSearch/1.0; +https://opencode.ai)"
      }
    });

    const text = await response.text();
    const $ = cheerio.load(text);

    const results: { title: string; url: string; snippet: string }[] = [];

    $("div.result__body").each((i, el) => {
      if (args.maxResults && results.length >= args.maxResults) return;
      const title = $(el).find("a.result__a").text().trim();
      const link = $(el).find("a.result__a").attr("href") || "";
      const snippet = $(el).find("a.result__snippet").text().trim();

      if (title && link) {
        results.push({ title, url: link, snippet });
      }
    });

    return results;
  }
});
