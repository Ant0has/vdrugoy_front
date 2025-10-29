/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['vdrugoygorod.ru'],
  },
  experimental: {
    optimizePackageImports: ['heavy-package'],
  },
};

module.exports = nextConfig; 