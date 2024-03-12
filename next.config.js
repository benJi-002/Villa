/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'test-5.realconvey.com',
      },
    ],
  }
}

module.exports = nextConfig
