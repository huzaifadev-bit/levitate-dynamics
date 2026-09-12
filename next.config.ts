import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/platforms/garuda",
        destination: "/haps",
        permanent: true,
      },
      {
        source: "/platforms/pushpak",
        destination: "/haps",
        permanent: true,
      },
      {
        source: "/platforms/vayu",
        destination: "/haps",
        permanent: true,
      },
      {
        source: "/platforms/varuna",
        destination: "/haps",
        permanent: true,
      },
      {
        source: "/platforms/marut",
        destination: "/haps",
        permanent: true,
      },
      {
        source: "/command-center",
        destination: "/haps",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
