import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // process.env.NEXT_PUBLIC_MEDIA_URL исппользуется когда проект запущен в докере
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_MEDIA_URL ? 'medusajs' : 'localhost',
        port: '9000',
        pathname: '/static/**',
      },
    ],
  },
};

export default nextConfig;
