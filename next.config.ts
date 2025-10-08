import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Enables static export for Next.js 13+
  turbopack: {
    root: __dirname, // explicitly set your project root
  },
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
