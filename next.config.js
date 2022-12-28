/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/squares',
        destination: '/html/squares.html'
      }
    ]
  }
}

module.exports = nextConfig
