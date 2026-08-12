import type { NextConfig } from "next";

// The frog's pond lives in its own (private) Vercel project; these rewrites
// serve it under kevindruciak.com/mirela without a separate domain.
const MIRELA_ORIGIN = process.env.MIRELA_APP_ORIGIN ?? "https://mirela-jobs.vercel.app";

const nextConfig: NextConfig = {
  turbopack: {},
  transpilePackages: ["three"],
  async rewrites() {
    // beforeFiles: /mirela/_next/* asset requests must be proxied before
    // Vercel's static-asset layer swallows them with a 404.
    return {
      beforeFiles: [
        { source: "/mirela", destination: `${MIRELA_ORIGIN}/mirela` },
        { source: "/mirela/:path*", destination: `${MIRELA_ORIGIN}/mirela/:path*` },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
