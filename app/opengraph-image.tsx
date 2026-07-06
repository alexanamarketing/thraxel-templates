import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Thraxel Templates: 71 designs, one page, side by side";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f3f5f7",
          color: "#23282f",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#6b7480",
          }}
        >
          The Thraxel template gallery
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.06 }}>
            71 designs. One page.
          </div>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.06 }}>
            Pick a direction.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 30,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            thraxel<span style={{ color: "#2b6b53" }}>·</span>templates
          </div>
          <div style={{ display: "flex", color: "#6b7480", fontSize: 24 }}>
            9 categories
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
