/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sagarlama.com',
  generateRobotsTxt: true, // (optional)
  priority: 0.9,
  generateIndexSitemap: false,
  exclude: ['/favicon.ico', '/api/*'],
};
