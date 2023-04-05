/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  experimental: {
    images: {
      unoptimized: false,
    },
  },
}

module.exports = nextConfig


