import { output } from "framer-motion/client";

const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.vestigoinsurance.com",
        pathname: "/storage/**",
      },
    ],
  },
};

export default nextConfig;
