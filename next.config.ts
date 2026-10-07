import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Hostinger shared hosting (PHP/Apache)
  output: "export",
  // Trailing slashes so Apache serves /about/ → /about/index.html correctly
  trailingSlash: true,
  images: {
    // next/image optimisation requires a Node server — disable for static export
    unoptimized: true,
  },
};

export default nextConfig;
