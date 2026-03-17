import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      // new URL("https://sanity.io/images/0a7f8a0o/production/**"),
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/0a7f8a0o/production/**",
      },
    ],
  },
};

export default nextConfig;
