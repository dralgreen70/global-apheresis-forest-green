import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy hash-based routes → new pages
      {
        source: "/#legacy",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/#affiliates",
        destination: "/affiliates",
        permanent: true,
      },
      {
        source: "/#contact",
        destination: "/contact",
        permanent: true,
      },
      // Old slug if anyone bookmarked the renamed page
      {
        source: "/treatments/neurological-disorders",
        destination: "/treatments/autoimmune-disorders",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
