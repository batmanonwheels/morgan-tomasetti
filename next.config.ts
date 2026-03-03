import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      new URL("https://res.cloudinary.com/dmmn0gqaf/image/upload/**"),
    ],
  },
};

export default nextConfig;
