/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['inspgr.id', 'dr.savee-cdn.com'],
  },
};

module.exports = nextConfig;
