import type { NextConfig } from "next";
import dotenv from "dotenv"

dotenv.config();

const nextConfig: NextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
};

export default nextConfig;