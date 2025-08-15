import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["randomuser.me"],
  },
  async redirects() {
    return [
      { source: "/Projects", destination: "/projects", permanent: false },
      { source: "/About", destination: "/about", permanent: false },
      { source: "/Contact", destination: "/contact", permanent: false },
      { source: "/Projects/:slug*", destination: "/projects/:slug*", permanent: false },
    ];
  },
};

export default nextConfig;
