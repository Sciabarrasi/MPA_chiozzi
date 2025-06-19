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
      "master.dnz9nmjhesehe.amplifyapp.com",
      "echiozzi.com",
      "www.echiozzi.com",
      "localhost",
    ],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  
  experimental: {
    serverComponentsExternalPackages: ["@aws-sdk"],
    esmExternals: true,
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
    
    return config;
  },
};

export default nextConfig;