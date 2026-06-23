// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c.files.bbci.co.uk',
      },
    ],
  },
};

module.exports = nextConfig;