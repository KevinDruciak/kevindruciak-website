import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kevin Druciak | Data Engineer",
  description:
    "Personal website of Kevin Druciak — Data Engineer with a passion for computer graphics. Explore my projects, experience, and interactive 3D demos.",
  keywords: [
    "Kevin Druciak",
    "Data Engineer",
    "Computer Graphics",
    "Portfolio",
  ],
  openGraph: {
    title: "Kevin Druciak | Data Engineer",
    description:
      "Data Engineer with a passion for computer graphics. Explore my projects and interactive 3D demos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
