import type { MetadataRoute } from "next";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { site } from "@/lib/site";

// Routes that exist but should stay out of the sitemap (noindex pages).
const EXCLUDE = new Set(["/thank-you"]);

// Auto-generates the XML sitemap by scanning the app/ directory for every
// page.tsx, so new cluster pages are never missing a sitemap entry.
function collectRoutes(dir: string, base = ""): string[] {
  const routes: string[] = [];
  for (const entry of readdirSync(dir)) {
    if (entry.startsWith("_") || entry.startsWith(".") || entry.startsWith("(") || entry.startsWith("[")) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      routes.push(...collectRoutes(full, `${base}/${entry}`));
    } else if (entry === "page.tsx") {
      routes.push(base || "/");
    }
  }
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = collectRoutes(join(process.cwd(), "app")).filter((r) => !EXCLUDE.has(r)).sort();
  const lastModified = new Date();
  return routes.map((route) => {
    const depth = route === "/" ? 0 : route.split("/").length - 1;
    return {
      url: route === "/" ? site.url : `${site.url}${route}`,
      lastModified,
      changeFrequency: route === "/" ? "weekly" : depth <= 1 ? "weekly" : "monthly",
      priority: route === "/" ? 1 : depth === 1 ? 0.9 : depth === 2 ? 0.75 : 0.6,
    };
  });
}
