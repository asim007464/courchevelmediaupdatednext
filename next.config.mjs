/** @type {import('next').NextConfig} */
const nextConfig = {
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
