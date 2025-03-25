import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "movienew.cybersoft.edu.vn",
        port: "",
        pathname: "**",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
