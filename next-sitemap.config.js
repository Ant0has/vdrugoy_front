/** @type {import('next').NextConfig} */
const nextConfig = {
  siteUrl: 'https://vdrugoygorod.ru',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  images: {
    domains: ['vdrugoygorod.ru'],
  },
  experimental: {
    optimizePackageImports: ['heavy-package'],
  },
};

module.exports = nextConfig; 