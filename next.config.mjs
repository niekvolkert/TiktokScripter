/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000']
    },
  },
  typescript: {
    // Don't fail builds on TS errors during development
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  eslint: {
    // Don't fail builds on ESLint errors during development
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig; 