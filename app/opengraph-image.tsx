import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Wild Mountain Immigration, a CICC-regulated RCIC in Canmore, Alberta";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Real site photo (the hero) as the share-image background, generated at build.
// The root app/opengraph-image is inherited by every route, so this is the
// social card for all pages.
const bgDataUrl = `data:image/jpeg;base64,${readFileSync(
  join(process.cwd(), "public/brand/og-bg.jpg"),
).toString("base64")}`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Photo background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgDataUrl}
          width={1200}
          height={630}
          style={{ position: "absolute", top: 0, left: 0, width: 1200, height: 630, objectFit: "cover" }}
        />
        {/* Dark wash for legibility */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: "flex",
            background:
              "linear-gradient(120deg, rgba(18,20,22,0.92) 0%, rgba(18,20,22,0.74) 48%, rgba(18,20,22,0.45) 100%)",
          }}
        />

        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: 18, height: 18, borderRadius: 9999, background: "#e00400" }} />
          <div style={{ fontSize: 26, letterSpacing: 4, color: "#eef0f1", fontWeight: 600 }}>
            CICC-REGULATED RCIC · CANMORE, ALBERTA
          </div>
        </div>

        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 20, fontSize: 80, fontWeight: 700, letterSpacing: -2 }}>
            <span>Your new life in</span>
            <span style={{ color: "#ff5450" }}>Canada</span>
          </div>
          <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: -2 }}>starts here.</div>
        </div>

        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 30 }}>
          <div style={{ fontWeight: 700 }}>Wild Mountain Immigration</div>
          <div style={{ color: "#dfe2e4" }}>wildmountainimmigration.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
