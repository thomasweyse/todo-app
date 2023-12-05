/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.BASE_PATH,
  //assetPrefix: process.env.BASE_PATH,
  env: {
    BASE: process.env.BASE_PATH, // pulls from .env file
  },
  rewrites: async () => {
    return [
      {
        source: '/health',
        destination: '/api/health',
      },
    ];
  }
}

module.exports = nextConfig
