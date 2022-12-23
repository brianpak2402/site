/** @type {import('next').NextConfig} */
// next.config.js
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
