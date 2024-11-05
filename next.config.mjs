/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      process.env.VERCEL_URL ? `${process.env.VERCEL_URL}` : '',
    ].filter(Boolean),
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        // Development
        'localhost:3000',
        // Production - Vercel domains
        process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '',
      ].filter(Boolean),
    }
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
