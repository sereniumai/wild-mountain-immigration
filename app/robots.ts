import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Allow everything, and explicitly welcome AI answer-engine crawlers
// (ChatGPT/Bing, Gemini, Perplexity, Claude, Apple), they power the
// citations we want to win. See PAGE-SEO-MASTER-CHECKLIST.md §2.3.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: [
          "GPTBot", "OAI-SearchBot", "ChatGPT-User",
          "Google-Extended", "Googlebot",
          "PerplexityBot", "Perplexity-User",
          "ClaudeBot", "Claude-SearchBot", "anthropic-ai",
          "Bingbot", "Amazonbot", "Applebot", "Applebot-Extended",
          "DuckDuckBot", "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
