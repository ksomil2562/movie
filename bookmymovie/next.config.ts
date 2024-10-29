/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets-in.bmscdn.com',
        pathname: '/**', // Allow all paths
      },
      {
        protocol: 'https',
        hostname: 'in.bmscdn.com',
        pathname: '/**', // Allow all paths
      },
    ],
  },
};

module.exports = nextConfig;
