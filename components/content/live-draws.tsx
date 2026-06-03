import { RefreshCw } from "lucide-react";
import { DataTable } from "@/components/content/blocks";
import { getLatestDraws } from "@/lib/draws";

function prettyDate(iso: string) {
  // Parse YYYY-MM-DD without relying on locale/timezone surprises.
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[m - 1]} ${d}, ${y}`;
}

/**
 * Server component: renders the latest Express Entry draws straight from IRCC's
 * open-data feed. Auto-refreshes via ISR (see `export const revalidate` on the page).
 */
export async function LiveDraws({ limit = 6 }: { limit?: number }) {
  const { draws, live } = await getLatestDraws(limit);
  const latest = draws[0];

  return (
    <div className="not-prose">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-soft/60 px-3 py-1 text-[12.5px] font-semibold text-brand">
          <RefreshCw className="size-3.5" />
          {live ? "Live from IRCC open data" : "Latest known rounds"}
        </span>
        {latest && (
          <span className="text-[12.5px] text-ink-faint">
            Most recent: round #{latest.number}, {prettyDate(latest.date)}
          </span>
        )}
      </div>
      <DataTable
        headers={["Date", "Round", "Program / category", "Invitations", "CRS cut-off"]}
        rows={draws.map((d) => [prettyDate(d.date), `#${d.number}`, d.name, d.size, d.crs])}
        caption="Most recent Express Entry rounds of invitations. Updated automatically from IRCC's official open-data feed."
      />
    </div>
  );
}
