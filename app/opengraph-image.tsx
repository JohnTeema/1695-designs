import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "#0B0B0F",
          padding: "72px",
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: "#C8A24A",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            fontSize: 14,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#C8A24A",
            fontFamily: "sans-serif",
            marginBottom: 24,
          }}
        >
          Interior Design &amp; Furniture
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#F5F1E8",
              fontFamily: "serif",
              lineHeight: 1,
              letterSpacing: "-0.01em",
            }}
          >
            1695
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: "#D8D2C8",  /* stone — unchanged */
              fontFamily: "sans-serif",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              marginTop: 8,
            }}
          >
            Designs
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: 40,
            paddingTop: 32,
            borderTop: "1px solid rgba(216,210,200,0.2)",
            fontSize: 22,
            color: "#A6A6A6",
            fontFamily: "sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          Design. Craft. Deliver.
        </div>
      </div>
    ),
    { ...size }
  );
}
