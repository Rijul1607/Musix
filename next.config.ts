import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com", // Allow images from Unsplash
    ],
  },
  /* Add any other config options here */
};

// Convert to CommonJS module export format
module.exports = {
   eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
