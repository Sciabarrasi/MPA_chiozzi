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
        source: '/api/:path*',
        headers: [
          { 
            key: 'Access-Control-Allow-Origin', 
            value: [
              'https://master.dnz9nmjhesehe.amplifyapp.com',
              'https://echiozzi.com',
              'https://www.echiozzi.com',
              'https://api.cloudinary.com',
              'https://res.cloudinary.com'
            ].join(', ') 
          },
          { 
            key: 'Access-Control-Allow-Methods', 
            value: 'GET, POST, PUT, DELETE, OPTIONS' 
          }
        ]
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' }
        ]
      }
    ]
  }
};

export default nextConfig;