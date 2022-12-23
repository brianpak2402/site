/** @type {import('next').NextConfig} */
// next.config.js
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/brianpak2402.github.io/' : '',
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
