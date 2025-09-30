import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname, // explicitly set your project root
  },
}

export default nextConfig
