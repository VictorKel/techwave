import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["flagcdn.com"], // 👈 Add this line
  },
};

export default nextConfig;
