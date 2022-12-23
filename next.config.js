/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/brianpak2402.github.io/' : '',
  images: {
    unoptimized: true,
  },
}

const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
