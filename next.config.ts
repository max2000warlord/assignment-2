import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/assignment-2',
  assetPrefix: '/assignment-2/',
  turbopack: {
    root: __dirname,
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
