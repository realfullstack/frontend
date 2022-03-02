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
  },
  publicRuntimeConfig: {
    API_BASEURL: process.env.API_BASEURL,
    APP_BASEURL: process.env.APP_BASEURL,
  },
}


module.exports = config
