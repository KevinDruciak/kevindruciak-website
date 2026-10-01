import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./card.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kevindruciak.com"),
  title: "Para você 💌",
  description: "Abra com carinho",
  robots: { index: false, follow: false },
  icons: {
    icon: [{ url: "/card/icon.svg", type: "image/svg+xml" }],
    apple: "/card/apple-touch-icon.png",
  },
  manifest: "/card/manifest.webmanifest",
  appleWebApp: { capable: true, title: "Nós", statusBarStyle: "black-translucent" },
  openGraph: {
    title: "Para você 💌",
    description: "Abra com carinho",
    type: "website",
    locale: "pt_BR",
    url: "/card",
  },
};

export const viewport: Viewport = {
  themeColor: "#430d1a",
  // lets the burgundy run under the iPhone status bar when opened from the home screen
  viewportFit: "cover",
};

export default function CardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="pt-BR" className={`${greatVibes.variable} ${cormorant.variable}`}>
      {/* the page can overscroll past the card; keep the edges burgundy, not the site's navy */}
      <style>{`html,body{background-color:#22050c}`}</style>
      {children}
    </div>
  );
}
