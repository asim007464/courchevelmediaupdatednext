import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "courchevelmedia.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/Privacy",
        permanent: true,
      },
      {
        source: "/service",
        destination: "/Service",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
