import { ImageResponse } from "next/og";
import { CARD } from "@/data/card";
import { HORSE_HEAD_PATH, SEAL_OUTLINE } from "@/components/card/Art";

// The link preview (WhatsApp, iMessage): a sealed envelope, nothing that spoils the letter.
export const alt = "Uma carta fechada com um selo de cera";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ENVELOPE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 230">
  <defs>
    <linearGradient id="s" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ead8b8"/><stop offset="1" stop-color="#f2e3c7"/></linearGradient>
    <linearGradient id="b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbf1de"/><stop offset="1" stop-color="#f3e4c8"/></linearGradient>
    <linearGradient id="f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6e9d2"/><stop offset="1" stop-color="#fbf2e2"/></linearGradient>
    <radialGradient id="w" cx="38%" cy="32%" r="75%"><stop offset="0" stop-color="#a8304b"/><stop offset=".55" stop-color="#7a1a30"/><stop offset="1" stop-color="#4e0d1c"/></radialGradient>
  </defs>
  <rect width="340" height="230" rx="8" fill="#dcc6a2"/>
  <path d="M0,8 Q0,0 6,1 L168,126 L0,226 Z" fill="url(#s)"/>
  <path d="M340,8 Q340,0 334,1 L172,126 L340,226 Z" fill="url(#s)"/>
  <path d="M0,222 L158,124 Q170,117 182,124 L340,222 Q340,230 332,230 L8,230 Q0,230 0,222 Z" fill="url(#b)"/>
  <path d="M2,221 L158,124 Q170,117 182,124 L338,221" fill="none" stroke="#cdb38a" stroke-width="1"/>
  <path d="M0,6 Q0,0 6,0 L334,0 Q340,0 340,6 L180,128 Q170,135 160,128 Z" fill="url(#f)"/>
  <path d="M0.5,6 L160,128 Q170,135 180,128 L339.5,6" fill="none" stroke="#c9ad80" stroke-width="1"/>
  <g transform="translate(131 89) scale(0.78)">
    <path d="${SEAL_OUTLINE}" fill="url(#w)"/>
    <circle cx="50" cy="50" r="34" fill="none" stroke="#4e0d1c" stroke-opacity=".55" stroke-width="3"/>
    <circle cx="50" cy="50" r="32.5" fill="none" stroke="#e2bd6e" stroke-opacity=".55" stroke-width="1"/>
    <g transform="translate(19 17) scale(0.98)"><path d="${HORSE_HEAD_PATH}" fill="#e2bd6e" stroke="#b8893a" stroke-width="1.2"/></g>
  </g>
</svg>`;

async function googleFont(family: string, text: string): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`,
  ).then((r) => r.text());
  const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!src) throw new Error(`no font file for ${family}`);
  return fetch(src[1]).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const to = `Para ${CARD.recipient}`;
  const caption = "ABRA COM CARINHO";
  // Subsets only contain the glyphs asked for, so each text names its family explicitly.
  let fonts: { name: string; data: ArrayBuffer }[] = [];
  try {
    fonts = [
      { name: "Great Vibes", data: await googleFont("Great+Vibes", to) },
      { name: "Cormorant", data: await googleFont("Cormorant+Garamond:wght@600", caption) },
    ];
  } catch {
    // fall back to the default face rather than failing the build
    fonts = [];
  }
  const family = (name: string) => (fonts.length ? name : undefined);

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
          backgroundImage: "radial-gradient(ellipse at 50% 40%, #7a1a30 0%, #4a0f1d 50%, #22050c 100%)",
        }}
      >
        <div style={{ position: "relative", display: "flex", width: 600, height: 406 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            width={600}
            height={406}
            src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(ENVELOPE_SVG)}`}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 26,
              display: "flex",
              justifyContent: "center",
              fontFamily: family("Great Vibes"),
              fontSize: 64,
              color: "#5e1224",
            }}
          >
            {to}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontFamily: family("Cormorant"),
            fontSize: 28,
            letterSpacing: 10,
            color: "#e9cc86",
          }}
        >
          {caption}
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
