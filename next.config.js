/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  basePath: process.env.BASE_PATH,
  env: {
    BASE_PATH: process.env.BASE_PATH,
  },
}
