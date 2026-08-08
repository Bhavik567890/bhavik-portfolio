import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#07070b",
          color: "#f4f4f5",
          fontFamily: "Geist, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.35), transparent 50%), radial-gradient(circle at 80% 80%, rgba(6,182,212,0.3), transparent 50%), radial-gradient(circle at 70% 10%, rgba(168,85,247,0.3), transparent 40%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #6366f1, #a855f7 55%, #06b6d4)",
            width: 96,
            height: 96,
            borderRadius: 24,
            fontSize: 44,
            fontWeight: 700,
            color: "white",
          }}
        >
          BM
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: -2,
            display: "flex",
          }}
        >
          Bhavik{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #818cf8, #a855f7, #22d3ee)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginLeft: 12,
            }}
          >
            Maheta
          </span>
        </div>
        <div style={{ marginTop: 20, fontSize: 28, color: "#9d9dab" }}>
          Full-Stack Software Engineer · React · Next.js · TypeScript
        </div>
      </div>
    ),
    size
  );
}
