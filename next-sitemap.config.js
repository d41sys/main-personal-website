const { articlesConfig } = require('./config/index.js');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: articlesConfig.url,
  generateRobotsTxt: true,
};
