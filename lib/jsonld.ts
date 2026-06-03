/** Serialize data for a <script type="application/ld+json"> block, escaping "<"
 *  to its unicode form so a literal "</script>" in any string value cannot break
 *  out of the script element. Defense-in-depth against JSON-LD injection: today
 *  every data source is static, but this neutralizes the breakout regardless of
 *  future (CMS/feed/user) sources. */
export const jsonLd = (data: unknown): string =>
  JSON.stringify(data).replace(/</g, "\\u003c");
