import type { NextConfig } from 'next'

const repo = 'assignment-2'
const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  //output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '',
  assetPrefix: undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : '',
  },
  turbopack: { root: __dirname },
  allowedDevOrigins: [
    'local-origin.dev',
    '*.local-origin.dev',
    'http://192.168.0.19:3000',
    'http://192.168.0.220:3000',
  ],
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: false },
}

export default nextConfig
