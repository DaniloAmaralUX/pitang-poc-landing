import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    qualities: [75, 100],
  },
  async rewrites() {
    return [
      {
        source: '/prototype-viewer',
        destination: '/prototype-viewer.html',
      },
    ]
  },
}

export default nextConfig
