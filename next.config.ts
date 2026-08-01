import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : "export",
  basePath: process.env.BUILD_STANDALONE === "true" ? "" : "/My_Portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
