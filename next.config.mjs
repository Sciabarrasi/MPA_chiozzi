import dotenv from "dotenv";

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    DATABASE_URL: process.env.DATABASE_URL,
  },
  
  images: {
    domains: [
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "res.cloudinary.com",
      "echiozzi.com",
      "www.echiozzi.com",
      "localhost",
    ],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  
  output: 'standalone',
  swcMinify: true,
  compress: true,
  
  poweredByHeader: false,
  
  experimental: {
    serverComponentsExternalPackages: ["@aws-sdk"],
    esmExternals: true,
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  
  trailingSlash: false,
  
  async headers() {
    return [
      {
        source: "/api/auth/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on"
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [
        ...(config.externals || []),
        {
          "@aws-sdk/signature-v4-multi-region":
            "commonjs @aws-sdk/signature-v4-multi-region",
        },
      ];
    }
    
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': './src',
    };
    
    return config;
  },
  
  ...(process.env.NODE_ENV === 'development' && {
    reactStrictMode: true,
  }),
};

export default nextConfig;