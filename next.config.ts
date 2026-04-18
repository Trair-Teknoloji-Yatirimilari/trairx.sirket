import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ["customer-assets.emergentagent.com"],
  },
};

export default nextConfig;
