/** @type {import('next').NextConfig} */
// next.config.js
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/brianpak2402.github.io/' : '',
  images: {
    unoptimized: true,
  },
  exportPathMap: function() {
    return {
      "/locales/de-DE/summer-dress-f": {
        page: "/locales/[locale]/[slug]",
        query: { locale: "de-DE", slug: "summer-dress-f" }
      }
    };
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
