import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : "export",
  basePath: "/My_Portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
