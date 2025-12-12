/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://vdrugoygorod.ru',
  generateRobotsTxt: false, // Используем app/robots.ts вместо этого
  exclude: ['/api/*', '/_next/*'],
  generateIndexSitemap: false,
  // Sitemap генерируется через app/sitemap.ts
} 