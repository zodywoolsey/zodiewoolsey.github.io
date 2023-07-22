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
      },
      {
        source: '/line3d',
        destination: '/html/godot_line_3d/tests.html'
      },
      {
        source: '/click',
        destination: '/html/click.html'
      },
    ]
  }
}

module.exports = nextConfig
