import { ImageResponse } from "next/og";

// Imagen que se ve al compartir el enlace en WhatsApp, LinkedIn o Facebook
export const alt = "Elvix │ VBI · Alivio los dolores de cabeza de las pymes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between",
          padding: 72, color: "#fff",
          background: "linear-gradient(135deg, #1e0f4a 0%, #36208a 55%, #5b3cc4 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, fontWeight: 700 }}>
          <span style={{ color: "#c9b8ff" }}>{"{$}"}</span>
          <span>Elvix │ VBI</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            Alivio los dolores de cabeza de las pymes
          </div>
          <div style={{ width: 90, height: 6, background: "#8e6bff", borderRadius: 6, marginTop: 28 }} />
          <div style={{ fontSize: 34, color: "#e6ddff", marginTop: 26 }}>De días a minutos, con menos errores de digitación.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#e6ddff" }}>
          <span>Escríbeme PROCESO · @visualbi.co</span>
          <span>Visual BI · Apps a la medida</span>
        </div>
      </div>
    ),
    size
  );
}
