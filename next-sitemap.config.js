/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sagarlama.com',
  generateRobotsTxt: true, // (optional)
  priority: 1,
  generateIndexSitemap: false,
  exclude: ['/favicon.ico', '/api/*'],
};
