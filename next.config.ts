import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.manuelsolis.com',
      },
      {
        protocol: 'https',
        hostname: 'solispullzone.b-cdn.net',
      },
    ],
  },
  // Optimizaciones
  reactStrictMode: true,
  // swcMinify está habilitado por defecto en Next.js 15, no es necesario especificarlo
}

export default nextConfig