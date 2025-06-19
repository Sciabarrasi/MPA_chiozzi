import dotenv from 'dotenv';

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      'res.cloudinary.com',
      'master.dnz9nmjhesehe.amplifyapp.com',
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
        source: '/api/auth/:path*',
        headers: [
          { 
            key: 'Access-Control-Allow-Origin', 
            value: 'https://master.dnz9nmjhesehe.amplifyapp.com' // Solo tu dominio
          },
          { 
            key: 'Access-Control-Allow-Methods', 
            value: 'GET, POST, OPTIONS' 
          },
          { 
            key: 'Access-Control-Allow-Headers', 
            value: 'Content-Type, Authorization' 
          },
          { 
            key: 'Access-Control-Allow-Credentials', 
            value: 'true' // Crucial para cookies
          }
        ]
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
        ]
      }
    ]
  },
  // Opcional: Si usas Prisma en Amplify
  webpack: (config) => {
    config.externals = [...(config.externals || []), {
      '@aws-sdk/signature-v4-multi-region': 'commonjs @aws-sdk/signature-v4-multi-region'
    }];
    return config;
  }
};

export default nextConfig;