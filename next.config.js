/** @type {import('next').NextConfig} */

const config = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60*60*24,
    deviceSizes: [640, 1200, 1920, 2048, 3840],
    imageSizes: [16, 64, 256, 384],
    domains: [
      'realfullstack.com',
    ],

  },
  experimental: {
    scrollRestoration: true,
  },
  serverRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
  },
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
  },
}


module.exports = config
