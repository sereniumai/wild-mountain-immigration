import { ImageResponse } from "next/og";

export const alt = "Wild Mountain Immigration, a CICC-regulated RCIC in Canmore, Alberta";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social share image, generated at build time. Mirrors the hero:
// charcoal backdrop, red accent, the headline, and the wordmark.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #32373c 0%, #1f2326 100%)",
          padding: "80px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: 18, height: 18, borderRadius: 9999, background: "#e00400" }} />
          <div style={{ fontSize: 26, letterSpacing: 4, color: "#e7e9ea", fontWeight: 600 }}>
            CICC-REGULATED RCIC · CANMORE, ALBERTA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 20, fontSize: 78, fontWeight: 700, letterSpacing: -2 }}>
            <span>Your new life in</span>
            <span style={{ color: "#ff4b47" }}>Canada</span>
          </div>
          <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: -2 }}>starts here.</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 30 }}>
          <div style={{ fontWeight: 700 }}>Wild Mountain Immigration</div>
          <div style={{ color: "#b9bdc1" }}>wildmountainimmigration.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
