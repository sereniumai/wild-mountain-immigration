// Auto-updating Express Entry draw data.
//
// We fetch IRCC's official open-data feed of "rounds of invitations" and cache it
// with time-based revalidation (ISR). Pages that render <LiveDraws /> should set
// `export const revalidate` so Next refreshes the cached HTML in the background.
//
// If the feed is unreachable at build/render time, we fall back to the last-known
// rounds below so the page always renders. The feed is the source of truth:
// https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html

export type Draw = {
  number: string;
  date: string;   // YYYY-MM-DD
  name: string;   // program / category
  size: string;   // invitations issued, e.g. "4,500"
  crs: string;    // CRS cut-off score
};

const FEED_URL = "https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json";

// Last-known rounds (used only if the live feed cannot be reached).
const FALLBACK: Draw[] = [
  { number: "418", date: "2026-05-28", name: "French-language proficiency", size: "4,500", crs: "409" },
  { number: "417", date: "2026-05-27", name: "Canadian Experience Class", size: "3,000", crs: "518" },
  { number: "416", date: "2026-05-25", name: "Provincial Nominee Program", size: "334", crs: "805" },
  { number: "415", date: "2026-05-11", name: "Provincial Nominee Program", size: "380", crs: "798" },
  { number: "414", date: "2026-04-29", name: "French-language proficiency", size: "4,000", crs: "400" },
  { number: "413", date: "2026-04-28", name: "Canadian Experience Class", size: "2,000", crs: "514" },
];

const stripHtml = (s: string) => (s ?? "").replace(/<[^>]+>/g, "").trim();

export type DrawsResult = { draws: Draw[]; live: boolean };

/** Fetch the latest Express Entry rounds. Revalidates every 6 hours; falls back on error. */
export async function getLatestDraws(limit = 6): Promise<DrawsResult> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 21600 } });
    if (!res.ok) throw new Error(`feed ${res.status}`);
    const json = (await res.json()) as { rounds?: Record<string, string>[] };
    const rounds = json.rounds ?? [];
    if (!rounds.length) throw new Error("empty feed");
    const draws: Draw[] = rounds.slice(0, limit).map((r) => ({
      number: stripHtml(r.drawNumber),
      date: stripHtml(r.drawDate),
      name: stripHtml(r.drawName),
      size: stripHtml(r.drawSize),
      crs: stripHtml(r.drawCRS),
    }));
    return { draws, live: true };
  } catch {
    return { draws: FALLBACK.slice(0, limit), live: false };
  }
}
