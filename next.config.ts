import type { NextConfig } from "next";

// The frog's pond lives in its own (private) Vercel project; these rewrites
// serve it under kevindruciak.com/mirela without a separate domain.
const MIRELA_ORIGIN = process.env.MIRELA_APP_ORIGIN ?? "https://mirela-jobs.vercel.app";

const nextConfig: NextConfig = {
  turbopack: {},
  transpilePackages: ["three"],
  async rewrites() {
    return [
      { source: "/mirela", destination: `${MIRELA_ORIGIN}/mirela` },
      { source: "/mirela/:path*", destination: `${MIRELA_ORIGIN}/mirela/:path*` },
    ];
  },
};

export default nextConfig;
