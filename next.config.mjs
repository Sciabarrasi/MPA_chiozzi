import dotenv from 'dotenv';

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      'res.cloudinary.com',
      'master.d12fg2zw920c0m.amplifyapp.com',
      'echiozzi.com',
      'www.echiozzi.com',
      'localhost'
    ],
  },

  experimental: {
    serverComponentsExternalPackages: ["@aws-sdk"],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      }
    ]
  }
};

export default nextConfig;